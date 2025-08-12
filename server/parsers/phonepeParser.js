// server/parsers/phonepeParser.js
// Parser for PhonePe multi-line statements (Date line, time line, DEBIT/CREDIT line, then ID/UTR/etc.)
function parsePhonePeFormat1(text) {
  if (!text || typeof text !== 'string') return [];

  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
  const transactions = [];
  let i = 0;

  while (i < lines.length) {
    // Date lines like "May 19, 2025"
    if (/^[A-Za-z]{3,9} \d{1,2}, \d{4}$/.test(lines[i])) {
      const date = lines[i];
      const next = lines[i + 1] || '';
      // next line is often time like "06:20 pm"
      let time = '';
      let typeAmountLine = '';
      if (/^\d{1,2}:\d{2}\s?(am|pm|AM|PM)?$/.test(next)) {
        time = next;
        typeAmountLine = lines[i + 2] || '';
      } else {
        typeAmountLine = next;
      }

      const typeMatch = (typeAmountLine || '').match(/(DEBIT|CREDIT)/i);
      const amountMatch = (typeAmountLine || '').match(/₹\s*([\d,\.]+)/);
      const type = typeMatch ? typeMatch[1].toUpperCase() : '';
      const amount = amountMatch ? parseFloat(amountMatch[1].replace(/,/g, '')) : 0;

      // details: text after type+amount in the same line
      let details = (typeAmountLine || '').replace(/(DEBIT|CREDIT)\s*₹\s*[\d,\.]+/i, '').trim();

      let transactionId = '';
      let utr = '';
      let account = '';

      // scan following lines for Transaction ID / UTR / Paid by / Credited to
      for (let j = (time ? i + 3 : i + 2); j < lines.length; j++) {
        const ln = lines[j];
        if (ln.startsWith('Transaction ID')) {
          transactionId = ln.replace('Transaction ID', '').trim();
          continue;
        }
        if (ln.startsWith('UTR No.')) {
          utr = ln.replace('UTR No.', '').trim();
          continue;
        }
        if (ln.startsWith('Paid by')) {
          account = lines[j + 1] || ln.replace(/^Paid by/, '').trim();
          i = j + 2;
          break;
        }
        if (ln.startsWith('Credited to')) {
          account = lines[j + 1] || ln.replace(/^Credited to/, '').trim();
          i = j + 2;
          break;
        }
        // If we hit a new date line, stop scanning
        if (/^[A-Za-z]{3,9} \d{1,2}, \d{4}$/.test(ln)) {
          i = j - 1;
          break;
        }
      }

      // build ISO date if possible
      let dateISO = null;
      try {
        dateISO = time ? new Date(`${date} ${time}`).toISOString() : new Date(date).toISOString();
      } catch (e) {
        dateISO = null;
      }

      transactions.push({
        Date: dateISO,
        Type: type,
        Amount: amount,
        Details: details || null,
        TransactionID: transactionId || null,
        UTR: utr || null,
        Account: account || null,
        Raw: `${date} ${time} ${typeAmountLine}`
      });
    }
    i++;
  }

  return transactions;
}

module.exports = { parsePhonePeFormat1 };
