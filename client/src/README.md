Sure! Here's the full README.md content in one file for your project:

```markdown
# Bank Statement Analyzer

A web application to upload, parse, and analyze bank statement PDFs. It extracts transaction details, shows tables, summary insights, and interactive charts to visualize spending and income patterns.

---

## Features

- **PDF Upload:** Upload bank statements in PDF format for analysis.
- **Transaction Table:** View all parsed transactions in a clean, sortable table.
- **Summary Tab:** Displays key insights such as most spent day/hour, top payees and senders.
- **Data Insights Tab:** Interactive charts (pie and bar) for debit and credit summaries.
- **Spending Trends:** Line chart showing spending patterns over time with selectable daily, weekly, and monthly views.
- **Mobile-Friendly UI:** Responsive design for smooth viewing on desktop and mobile devices.
- **Modern UI:** Sleek and minimalistic design with intuitive navigation tabs.

---

## File Structure

```

bank-analyzer/
├── client/ # React frontend source
│ ├── public/
│ │ ├── index.html
│ │ └── ...
│ ├── src/
│ │ ├── components/
│ │ │ ├── PdfUpload.jsx
│ │ │ ├── TransactionsTable.jsx
│ │ │ ├── SummaryTab.jsx
│ │ │ └── InsightsTab.jsx
│ │ ├── App.js
│ │ ├── App.css
│ │ └── index.js
│ └── package.json
│
├── server/ # Backend Node.js server for PDF processing
│ ├── upload/ # Folder for uploaded PDFs
│ ├── output.txt # Temporary or output file
│ ├── transactions.csv # Exported transactions file
│ ├── server.js # Main server file
│ └── package.json
│
├── .gitignore # Git ignore rules
├── README.md # This readme file
└── package.json # Root package file (if any)


````

---

## Installation & Setup

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Git

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/bank-analyzer.git
   cd bank-analyzer
````

2. **Install backend dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../client
   npm install
   ```

4. **Run the backend server**

   ```bash
   cd ../server
   node index.js
   ```

5. **Run the frontend React app**

   Open a new terminal tab/window:

   ```bash
   cd client
   npm start
   ```

6. **Open your browser**

   Visit [http://localhost:3000](http://localhost:3000) to use the app.

---

## Usage

* Upload your bank statement PDF file.
* Switch between **Transactions**, **Summary**, and **Data Insights** tabs.
* Explore charts and spending trends.
* Use mobile or desktop devices for a smooth experience.

---

## Technologies Used

* React.js (with Hooks)
* Node.js & Express (backend)
* Chart.js (data visualization)
* CSS Flexbox & Grid for responsive UI
* PDF parsing libraries (backend)

---

## Contributing

Feel free to open issues or submit pull requests for improvements or bug fixes.

---

## License

This project is open-source and available under the MIT License.

---

## Contact

Created by [Arsh Sisodiya](https://github.com/arshsisodiya). Feel free to reach out!

```

Let me know if you want me to help with creating the actual file or any adjustments!
```
