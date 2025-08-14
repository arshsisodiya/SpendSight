// server/parsers/phonepeParser.js
// Unified parser for PhonePe statements (handles both "DEBIT₹...details" and "details + DebitINR [amount]" formats)

function parsePhonePeFormat1(text) {
  if (!text || typeof text !== 'string') return [];

  // Lines to skip (headers, footers, page breaks)
  const skipPatterns = [
    /^Transaction Statement/i,
    // Date range line like "Nov 12, 2017 - Aug 11, 2025"
    /^[A-Za-z]{3,9} \d{1,2}, \d{4}\s*-\s*[A-Za-z]{3,9} \d{1,2}, \d{4}$/i,
    /^DateTransaction\s+DetailsTypeAmount/i,
    /^Page \d+ of \d+/i,
    /^This is a system generated statement/i,
    /^For any queries/i,
  ];

  const rawLines = text.split(/\r?\n/).map(l => l.trim());
  const lines = rawLines
    .map(l => l.replace(/\u00A0/g, ' ')) // replace non-breaking spaces, just in case
    .map(l => l.trim())
    .filter(l => l.length > 0 && !skipPatterns.some(p => p.test(l)));

  const transactions = [];

  // Regexes
  const dateRegex = /^[A-Za-z]{3,9} \d{1,2}, \d{4}$/; // e.g., May 19, 2025
  const timeRegex = /^\d{1,2}:\d{2}\s?(AM|PM|am|pm)$/;
  const oneLineTypeAmt = /^(DEBIT|CREDIT)\s*(?:₹|INR|Rs\.?)?\s*([\d,]+(?:\.\d+)?)(.*)$/i; // DEBIT₹202Mobile recharged...
  const inrTypeLine = /^(?:Debit\s*INR|Credit\s*INR|DebitINR|CreditINR)\s*([\d,]+(?:\.\d+)?)?$/i; // DebitINR [amount?]
  const detailsLead = /^(Paid to|Payment to|Paid\b|Received from|Payment Received|Received\b|Refund from|Refund Received)\b/i;
  const txnIdLabel = /^Transaction ID\b/i;
  const utrLabel = /^UTR(?:\s*No\.?)?\b/i;
  const accountLabel = /^(Debited from|Credited to|Paid by)\b/i;

  let i = 0;
  let currentDate = null;

  // Helpers
  const parseAmountNum = (s) => {
    if (!s) return 0;
    const m = String(s).match(/([\d,]+(?:\.\d+)?)/);
    return m ? parseFloat(m[1].replace(/,/g, '')) : 0;
  };

  const isNumericLine = (s) => /^[\d,]+(?:\.\d+)?$/.test(s || '');

  while (i < lines.length) {
    // Capture/advance date
    if (dateRegex.test(lines[i])) {
      currentDate = lines[i];
      i++;
      continue;
    }

    // Each transaction starts with a time line (under the current date)
    if (!currentDate || !timeRegex.test(lines[i])) {
      i++;
      continue;
    }

    const time = lines[i];
    i++;

    // Define the transaction block: from here until the next time or next date
    const start = i;
    let j = start;
    while (
      j < lines.length &&
      !dateRegex.test(lines[j]) &&
      !timeRegex.test(lines[j])
    ) j++;

    const block = lines.slice(start, j);

    // Fields to fill
    let Type = '';
    let Amount = 0;
    let Details = '';
    let TransactionID = '';
    let UTR = '';
    let Account = '';
    let typeAmountLineCaptured = '';

    // Scan the block lines
    for (let k = 0; k < block.length; k++) {
      const ln = block[k];

      // 1) One-line "DEBIT/CREDIT + currency + amount + details"
      if (!Type && (oneLineTypeAmt.test(ln))) {
        const m = ln.match(oneLineTypeAmt);
        if (m) {
          Type = m[1].toUpperCase();
          Amount = parseAmountNum(m[2]);
          const tail = (m[3] || '').trim();
          if (tail) Details = Details || tail;
          typeAmountLineCaptured = ln;
          continue;
        }
      }

      // 2) "DebitINR / CreditINR" with optional amount (may be on next line)
      if (!Type && inrTypeLine.test(ln)) {
        const m = ln.match(inrTypeLine);
        Type = /debit/i.test(ln) ? 'DEBIT' : 'CREDIT';
        if (m && m[1]) {
          Amount = parseAmountNum(m[1]);
        } else if (isNumericLine(block[k + 1])) {
          Amount = parseAmountNum(block[k + 1]);
          k++; // consume the numeric-only next line as amount
        }
        typeAmountLineCaptured = ln;
        continue;
      }

      // 3) Details-first line (Paid/Received/Refund...)
      if (!Details && detailsLead.test(ln)) {
        Details = ln;
        continue;
      }

      // 4) Transaction ID (same line or next line)
      if (txnIdLabel.test(ln)) {
        let val = ln.replace(/^Transaction ID\s*:?\s*/i, '').trim();
        if (!val && (k + 1) < block.length) {
          // two-line Transaction ID
          val = block[k + 1].trim();
          // avoid consuming if next line is actually another label
          if (!timeRegex.test(val) && !dateRegex.test(val) && !txnIdLabel.test(val) && !utrLabel.test(val) && !accountLabel.test(val)) {
            k++;
          } else {
            val = ''; // it's not a value; leave empty
          }
        }
        if (val) TransactionID = val;
        continue;
      }

      // 5) UTR (same line or next line)
      if (utrLabel.test(ln)) {
        let val = ln.replace(/^UTR(?:\s*No\.?)?\s*:?\s*/i, '').trim();
        if (!val && (k + 1) < block.length) {
          let nxt = block[k + 1].trim();
          if (!timeRegex.test(nxt) && !dateRegex.test(nxt) && !txnIdLabel.test(nxt) && !accountLabel.test(nxt) && !utrLabel.test(nxt)) {
            val = nxt;
            k++;
          } else {
            val = '';
          }
        }
        if (val) UTR = val;
        continue;
      }

      // 6) Account info (same line or next line)
      if (accountLabel.test(ln)) {
        // Try same line first
        let val = ln.replace(/^(Debited from|Credited to|Paid by)\s*/i, '').trim();
        if (!val && (k + 1) < block.length) {
          const nxt = block[k + 1].trim();
          if (!dateRegex.test(nxt) && !timeRegex.test(nxt)) {
            val = nxt;
            k++;
          }
        }
        if (val) Account = val;
        continue;
      }

      // ignore other lines like "Vi Prepaid Reference ID ..." etc.
    }

    // If we still don't have Type but we have details, infer it
    if (!Type && Details) {
      if (/^(Received|Payment Received|Credited)/i.test(Details)) Type = 'CREDIT';
      else if (/^(Paid|Payment to|Paid to|Debited)/i.test(Details)) Type = 'DEBIT';
    }

    // Build ISO date
    let dateISO = null;
    try {
      dateISO = new Date(`${currentDate} ${time}`).toISOString();
    } catch (e) {
      try {
        dateISO = new Date(currentDate).toISOString();
      } catch (_) {
        dateISO = null;
      }
    }

    transactions.push({
      Date: dateISO,
      Type: Type || null,
      Amount: Amount || 0,
      Details: Details || null,
      TransactionID: TransactionID || null,
      UTR: UTR || null,
      Account: Account || null,
      Raw: [currentDate, time, ...block].join(' | ')
    });

    // jump to end of this block
    i = j;
  }

  return transactions;
}

module.exports = { parsePhonePeFormat1 };
