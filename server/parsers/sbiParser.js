// server/parsers/sbiParser.js
function parseSBIStatement(text) {
  if (!text || typeof text !== 'string') return [];

  // --- Step 1: Skip account details before transaction table ---
  const headerMarker = "Date Credit BalanceDetails Ref No./Cheque";
  const headerIndex = text.indexOf(headerMarker);
  if (headerIndex !== -1) {
    text = text.slice(headerIndex + headerMarker.length).trim();
  }

  // Split into non-empty lines
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);

  // Find indices that look like transaction *starts* (amount + date)
  const amountDateRegex = /(-?\d{1,3}(?:,\d{3})*(?:\.\d+)?)(?:-|\s)*(\d{1,2} [A-Za-z]{3} \d{4})/;
  const startIndices = [];
  for (let i = 0; i < lines.length; i++) {
    if (amountDateRegex.test(lines[i])) startIndices.push(i);
  }

  const transactions = [];
  for (let si = 0; si < startIndices.length; si++) {
    const start = startIndices[si];
    const end = (si + 1 < startIndices.length) ? startIndices[si + 1] - 1 : lines.length - 1;
    const blockLines = lines.slice(start, end + 1);
    const block = blockLines.join(' ');

    const match = block.match(amountDateRegex);
    if (!match) continue;

    const rawAmountStr = match[1];
    const dateStr = match[2];

    // Parse amount (absolute value). Negative amounts = CREDIT
    let amountVal = parseFloat(rawAmountStr.replace(/,/g, ''));
    if (isNaN(amountVal)) amountVal = 0;
    const type = amountVal < 0 ? 'CREDIT' : 'DEBIT';
    const amount = Math.abs(amountVal);

    // Extract balance
    const numRegex = /-?\d{1,3}(?:,\d{3})*(?:\.\d+)/g;
    const allNums = block.match(numRegex) || [];
    let balance = null;
    if (allNums.length > 0) {
      const lastNum = allNums[allNums.length - 1];
      balance = parseFloat(lastNum.replace(/,/g, '')) || null;
    }

    // Remove amount+date prefix and trailing balance from details
    let details = block.replace(match[0], '').trim();
    if (balance !== null) {
      const balanceStr = String(allNums[allNums.length - 1]);
      const lastIndex = details.lastIndexOf(balanceStr);
      if (lastIndex !== -1) {
        details = (details.slice(0, lastIndex) + details.slice(lastIndex + balanceStr.length)).trim();
      }
    }
    details = details.replace(/\s+/g, ' ').replace(/\s*-\s*$/, '').trim();

    // --- Step 2: Only keep date part (YYYY-MM-DD) ---
    const dateObj = new Date(dateStr);
    const onlyDate = isNaN(dateObj) ? null : dateObj.toISOString().split('T')[0];

    transactions.push({
      Date: onlyDate,           // YYYY-MM-DD only
      Type: type,               // 'DEBIT' or 'CREDIT'
      Amount: amount,           // positive number
      Details: details || null, // string
      Balance: balance,         // number or null
      Raw: block                // raw block text (for debugging)
    });
  }

  return transactions;
}

module.exports = { parseSBIStatement };
