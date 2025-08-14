const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { Parser } = require('json2csv');

const { parsePhonePeFormat1 } = require('./parsers/phonepeParser');

const app = express();
app.use(cors());

// Ensure uploads folder exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
  console.log(`Created uploads directory at ${uploadsDir}`);
}

const upload = multer({ dest: uploadsDir });

function detectFormat(text) {
  if (!text || typeof text !== 'string') {
    console.warn('detectFormat: Invalid or empty text');
    return 'unknown';
  }
  const lower = text.toLowerCase();
  if (lower.includes('transaction id') || lower.includes('paid to') || lower.includes('received from') || lower.includes('payment to')) {
    console.log('detectFormat: Detected PhonePe format');
    return 'phonepe';
  }
  console.log('detectFormat: Format unknown, defaulting to PhonePe parser');
  return 'phonepe';
}

app.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) {
      console.error('No file uploaded in the request');
      return res.status(400).json({ error: 'No file uploaded' });
    }
    console.log(`Received file: ${req.file.originalname}, stored at: ${req.file.path}`);

    const dataBuffer = fs.readFileSync(req.file.path);
    const data = await pdfParse(dataBuffer);
    console.log('PDF parsed successfully');

    // Save raw text for debugging
    const txtPath = path.join(__dirname, 'output.txt');
    fs.writeFileSync(txtPath, data.text);
    console.log(`Raw extracted text saved to ${txtPath}`);

    // Parse using PhonePe parser
    const transactions = parsePhonePeFormat1(data.text);
    if (!transactions || transactions.length === 0) {
      console.warn('No transactions extracted from PDF');
      return res.status(400).json({ error: 'No transactions found in PDF' });
    }

    // Normalize transactions
    const normalized = transactions.map(t => ({
      Date: t.Date || null,
      Type: t.Type || null,
      Amount: typeof t.Amount === 'number' ? t.Amount : (t.Amount ? Number(t.Amount) : 0),
      Details: t.Details || '',
      TransactionID: t.TransactionID || '',
      UTR: t.UTR || '',
      Account: t.Account || '',
      Balance: t.Balance || null,
      Raw: t.Raw || ''
    }));
    console.log(`Extracted ${normalized.length} transactions`);

    // Convert to CSV
    const parser = new Parser();
    const csv = parser.parse(normalized);
    const csvPath = path.join(__dirname, 'transactions.csv');
    fs.writeFileSync(csvPath, csv);
    console.log(`CSV file saved at ${csvPath}`);

    // Cleanup uploaded pdf
    try {
      fs.unlinkSync(req.file.path);
      console.log(`Deleted uploaded PDF file: ${req.file.path}`);
    } catch (cleanupErr) {
      console.error('Error deleting uploaded file:', cleanupErr);
    }

    res.json({
      message: 'PDF processed & transactions extracted',
      format: 'phonepe',
      transactions: normalized
    });
  } catch (err) {
    console.error('Error processing PDF:', err);
    res.status(500).json({ error: 'Error processing PDF' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
