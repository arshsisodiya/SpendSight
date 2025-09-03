const rawTransactions = [
  {
    "Date": "2024-05-25T04:59:11Z",
    "Type": "DEBIT",
    "Amount": 348.3,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202405250001",
    "Account": "XX3011"
  },
  {
    "Date": "2025-04-21T08:55:32Z",
    "Type": "CREDIT",
    "Amount": 490.44,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202504210002",
    "Account": "XX5729"
  },
  {
    "Date": "2025-11-20T23:28:08Z",
    "Type": "CREDIT",
    "Amount": 107.01,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202511200003",
    "Account": "XX2842"
  },
  {
    "Date": "2023-11-21T02:57:30Z",
    "Type": "CREDIT",
    "Amount": 107.84,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202311210004",
    "Account": "XX2842"
  },
  {
    "Date": "2023-03-07T10:51:13Z",
    "Type": "CREDIT",
    "Amount": 146.41,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202303070005",
    "Account": "XX2842"
  },
  {
    "Date": "2025-09-13T17:25:40Z",
    "Type": "DEBIT",
    "Amount": 318.47,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202509130006",
    "Account": "XX2842"
  },
  {
    "Date": "2024-09-25T20:44:54Z",
    "Type": "CREDIT",
    "Amount": 188.54,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202409250007",
    "Account": "XX3011"
  },
  {
    "Date": "2023-10-07T01:08:54Z",
    "Type": "DEBIT",
    "Amount": 180.3,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202310070008",
    "Account": "XX1656"
  },
  {
    "Date": "2024-05-08T22:46:16Z",
    "Type": "CREDIT",
    "Amount": 129.56,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202405080009",
    "Account": "XX1656"
  },
  {
    "Date": "2024-01-31T21:12:59Z",
    "Type": "CREDIT",
    "Amount": 29.67,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202401310010",
    "Account": "XX1656"
  },
  {
    "Date": "2025-07-24T16:11:05Z",
    "Type": "CREDIT",
    "Amount": 149.21,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202507240011",
    "Account": "XX3011"
  },
  {
    "Date": "2023-09-23T22:15:54Z",
    "Type": "DEBIT",
    "Amount": 14.82,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202309230012",
    "Account": "XX5729"
  },
  {
    "Date": "2025-04-06T12:20:04Z",
    "Type": "DEBIT",
    "Amount": 66.99,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202504060013",
    "Account": "XX1656"
  },
  {
    "Date": "2024-06-24T07:12:48Z",
    "Type": "CREDIT",
    "Amount": 410.03,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202406240014",
    "Account": "XX3011"
  },
  {
    "Date": "2024-05-27T19:16:02Z",
    "Type": "DEBIT",
    "Amount": 304.77,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202405270015",
    "Account": "XX3011"
  },
  {
    "Date": "2024-02-02T10:53:02Z",
    "Type": "CREDIT",
    "Amount": 48.61,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202402020016",
    "Account": "XX4920"
  },
  {
    "Date": "2024-07-27T10:52:06Z",
    "Type": "DEBIT",
    "Amount": 270.23,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202407270017",
    "Account": "XX2842"
  },
  {
    "Date": "2023-04-17T08:01:18Z",
    "Type": "DEBIT",
    "Amount": 318.52,
    "Details": "Received from Friend",
    "TransactionID": "TXN202304170018",
    "Account": "XX3011"
  },
  {
    "Date": "2024-06-19T11:36:35Z",
    "Type": "DEBIT",
    "Amount": 182.81,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202406190019",
    "Account": "XX3011"
  },
  {
    "Date": "2024-10-28T06:38:52Z",
    "Type": "DEBIT",
    "Amount": 10.4,
    "Details": "Received from Friend",
    "TransactionID": "TXN202410280020",
    "Account": "XX2842"
  },
  {
    "Date": "2025-07-15T05:26:22Z",
    "Type": "CREDIT",
    "Amount": 427.3,
    "Details": "Received from Friend",
    "TransactionID": "TXN202507150021",
    "Account": "XX4920"
  },
  {
    "Date": "2023-09-03T09:48:15Z",
    "Type": "DEBIT",
    "Amount": 423.5,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202309030022",
    "Account": "XX5729"
  },
  {
    "Date": "2025-09-23T00:43:36Z",
    "Type": "CREDIT",
    "Amount": 19.39,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202509230023",
    "Account": "XX1656"
  },
  {
    "Date": "2024-06-16T09:48:03Z",
    "Type": "DEBIT",
    "Amount": 163.02,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202406160024",
    "Account": "XX3011"
  },
  {
    "Date": "2024-01-16T21:21:05Z",
    "Type": "DEBIT",
    "Amount": 165.7,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202401160025",
    "Account": "XX4920"
  },
  {
    "Date": "2024-05-04T15:21:27Z",
    "Type": "CREDIT",
    "Amount": 290.82,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202405040026",
    "Account": "XX5729"
  },
  {
    "Date": "2023-12-12T01:20:02Z",
    "Type": "CREDIT",
    "Amount": 42.51,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202312120027",
    "Account": "XX4920"
  },
  {
    "Date": "2023-02-10T18:13:23Z",
    "Type": "DEBIT",
    "Amount": 188.46,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202302100028",
    "Account": "XX1656"
  },
  {
    "Date": "2025-11-13T07:20:42Z",
    "Type": "DEBIT",
    "Amount": 232.04,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202511130029",
    "Account": "XX1656"
  },
  {
    "Date": "2024-02-07T02:12:20Z",
    "Type": "DEBIT",
    "Amount": 348.83,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202402070030",
    "Account": "XX1656"
  },
  {
    "Date": "2025-09-25T10:27:20Z",
    "Type": "CREDIT",
    "Amount": 368.99,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202509250031",
    "Account": "XX4920"
  },
  {
    "Date": "2025-07-25T22:25:52Z",
    "Type": "CREDIT",
    "Amount": 462.31,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202507250032",
    "Account": "XX1656"
  },
  {
    "Date": "2023-04-27T13:34:30Z",
    "Type": "CREDIT",
    "Amount": 488.4,
    "Details": "Received from Friend",
    "TransactionID": "TXN202304270033",
    "Account": "XX5729"
  },
  {
    "Date": "2024-12-05T03:19:25Z",
    "Type": "CREDIT",
    "Amount": 46.3,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202412050034",
    "Account": "XX2842"
  },
  {
    "Date": "2024-12-31T20:12:11Z",
    "Type": "DEBIT",
    "Amount": 12.64,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202412310035",
    "Account": "XX1656"
  },
  {
    "Date": "2023-10-09T17:34:22Z",
    "Type": "DEBIT",
    "Amount": 96.41,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202310090036",
    "Account": "XX1656"
  },
  {
    "Date": "2024-05-21T00:48:05Z",
    "Type": "CREDIT",
    "Amount": 227.01,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202405210037",
    "Account": "XX4920"
  },
  {
    "Date": "2024-10-01T04:09:48Z",
    "Type": "CREDIT",
    "Amount": 485.98,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202410010038",
    "Account": "XX2842"
  },
  {
    "Date": "2023-11-05T07:00:01Z",
    "Type": "CREDIT",
    "Amount": 385.14,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202311050039",
    "Account": "XX1656"
  },
  {
    "Date": "2025-01-04T07:20:35Z",
    "Type": "CREDIT",
    "Amount": 434.92,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202501040040",
    "Account": "XX3011"
  },
  {
    "Date": "2023-09-12T09:58:23Z",
    "Type": "DEBIT",
    "Amount": 203.88,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202309120041",
    "Account": "XX4920"
  },
  {
    "Date": "2025-06-27T03:58:55Z",
    "Type": "DEBIT",
    "Amount": 340.04,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202506270042",
    "Account": "XX1656"
  },
  {
    "Date": "2023-03-23T22:50:20Z",
    "Type": "CREDIT",
    "Amount": 220.67,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202303230043",
    "Account": "XX4920"
  },
  {
    "Date": "2025-08-13T02:48:51Z",
    "Type": "CREDIT",
    "Amount": 297.17,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202508130044",
    "Account": "XX2842"
  },
  {
    "Date": "2024-05-13T20:48:07Z",
    "Type": "CREDIT",
    "Amount": 247.36,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202405130045",
    "Account": "XX1656"
  },
  {
    "Date": "2024-05-14T19:47:28Z",
    "Type": "CREDIT",
    "Amount": 343.96,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202405140046",
    "Account": "XX1656"
  },
  {
    "Date": "2024-03-12T04:50:14Z",
    "Type": "CREDIT",
    "Amount": 128.72,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202403120047",
    "Account": "XX5729"
  },
  {
    "Date": "2023-01-21T18:51:55Z",
    "Type": "CREDIT",
    "Amount": 368.55,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202301210048",
    "Account": "XX2842"
  },
  {
    "Date": "2024-10-30T07:53:41Z",
    "Type": "CREDIT",
    "Amount": 448.07,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202410300049",
    "Account": "XX1656"
  },
  {
    "Date": "2023-06-04T07:12:22Z",
    "Type": "CREDIT",
    "Amount": 37.72,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202306040050",
    "Account": "XX3011"
  },
  {
    "Date": "2023-08-12T22:29:04Z",
    "Type": "CREDIT",
    "Amount": 481.16,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202308120051",
    "Account": "XX2842"
  },
  {
    "Date": "2024-05-04T02:27:52Z",
    "Type": "CREDIT",
    "Amount": 265.14,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202405040052",
    "Account": "XX1656"
  },
  {
    "Date": "2025-01-04T13:17:20Z",
    "Type": "DEBIT",
    "Amount": 222.32,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202501040053",
    "Account": "XX1656"
  },
  {
    "Date": "2023-07-05T16:24:17Z",
    "Type": "DEBIT",
    "Amount": 351.92,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202307050054",
    "Account": "XX2842"
  },
  {
    "Date": "2024-02-15T11:23:06Z",
    "Type": "DEBIT",
    "Amount": 70.39,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202402150055",
    "Account": "XX2842"
  },
  {
    "Date": "2025-12-11T17:58:17Z",
    "Type": "CREDIT",
    "Amount": 69.44,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202512110056",
    "Account": "XX2842"
  },
  {
    "Date": "2024-01-28T18:18:23Z",
    "Type": "DEBIT",
    "Amount": 292.96,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202401280057",
    "Account": "XX2842"
  },
  {
    "Date": "2023-08-05T18:22:06Z",
    "Type": "DEBIT",
    "Amount": 456.57,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202308050058",
    "Account": "XX2842"
  },
  {
    "Date": "2025-05-21T22:30:58Z",
    "Type": "DEBIT",
    "Amount": 388.34,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202505210059",
    "Account": "XX4920"
  },
  {
    "Date": "2025-07-06T05:26:06Z",
    "Type": "DEBIT",
    "Amount": 290.82,
    "Details": "Received from Friend",
    "TransactionID": "TXN202507060060",
    "Account": "XX3011"
  },
  {
    "Date": "2025-12-14T13:56:07Z",
    "Type": "CREDIT",
    "Amount": 354.39,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202512140061",
    "Account": "XX4920"
  },
  {
    "Date": "2024-08-13T00:50:50Z",
    "Type": "CREDIT",
    "Amount": 202.52,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202408130062",
    "Account": "XX1656"
  },
  {
    "Date": "2025-07-15T12:34:19Z",
    "Type": "CREDIT",
    "Amount": 280.75,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202507150063",
    "Account": "XX1656"
  },
  {
    "Date": "2025-02-01T09:35:54Z",
    "Type": "DEBIT",
    "Amount": 499.75,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202502010064",
    "Account": "XX4920"
  },
  {
    "Date": "2025-05-26T21:09:00Z",
    "Type": "CREDIT",
    "Amount": 76.5,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202505260065",
    "Account": "XX1656"
  },
  {
    "Date": "2023-02-10T11:59:53Z",
    "Type": "CREDIT",
    "Amount": 487.1,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202302100066",
    "Account": "XX5729"
  },
  {
    "Date": "2023-08-14T16:47:21Z",
    "Type": "CREDIT",
    "Amount": 435.49,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202308140067",
    "Account": "XX3011"
  },
  {
    "Date": "2024-10-17T01:48:09Z",
    "Type": "CREDIT",
    "Amount": 85.29,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202410170068",
    "Account": "XX3011"
  },
  {
    "Date": "2023-12-28T10:21:59Z",
    "Type": "CREDIT",
    "Amount": 465.64,
    "Details": "Received from Friend",
    "TransactionID": "TXN202312280069",
    "Account": "XX2842"
  },
  {
    "Date": "2024-08-17T07:28:20Z",
    "Type": "DEBIT",
    "Amount": 269.12,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202408170070",
    "Account": "XX5729"
  },
  {
    "Date": "2025-09-29T04:59:40Z",
    "Type": "CREDIT",
    "Amount": 40.08,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202509290071",
    "Account": "XX3011"
  },
  {
    "Date": "2025-06-03T08:41:25Z",
    "Type": "CREDIT",
    "Amount": 157.68,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202506030072",
    "Account": "XX4920"
  },
  {
    "Date": "2025-12-18T08:03:11Z",
    "Type": "CREDIT",
    "Amount": 159.13,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202512180073",
    "Account": "XX1656"
  },
  {
    "Date": "2023-01-27T10:58:35Z",
    "Type": "DEBIT",
    "Amount": 128.64,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202301270074",
    "Account": "XX4920"
  },
  {
    "Date": "2025-03-20T01:59:26Z",
    "Type": "DEBIT",
    "Amount": 126.36,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202503200075",
    "Account": "XX4920"
  },
  {
    "Date": "2023-01-22T17:02:11Z",
    "Type": "DEBIT",
    "Amount": 148.25,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202301220076",
    "Account": "XX4920"
  },
  {
    "Date": "2024-04-01T07:33:56Z",
    "Type": "CREDIT",
    "Amount": 188.33,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202404010077",
    "Account": "XX5729"
  },
  {
    "Date": "2024-12-07T00:12:35Z",
    "Type": "CREDIT",
    "Amount": 24.97,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202412070078",
    "Account": "XX5729"
  },
  {
    "Date": "2025-01-26T03:25:47Z",
    "Type": "DEBIT",
    "Amount": 249.87,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202501260079",
    "Account": "XX4920"
  },
  {
    "Date": "2024-10-25T01:16:45Z",
    "Type": "CREDIT",
    "Amount": 251.38,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202410250080",
    "Account": "XX5729"
  },
  {
    "Date": "2024-01-19T12:42:24Z",
    "Type": "DEBIT",
    "Amount": 442.42,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202401190081",
    "Account": "XX2842"
  },
  {
    "Date": "2025-07-25T01:36:27Z",
    "Type": "DEBIT",
    "Amount": 401.28,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202507250082",
    "Account": "XX5729"
  },
  {
    "Date": "2023-01-23T06:20:52Z",
    "Type": "DEBIT",
    "Amount": 226.07,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202301230083",
    "Account": "XX5729"
  },
  {
    "Date": "2023-06-16T22:39:37Z",
    "Type": "CREDIT",
    "Amount": 492.7,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202306160084",
    "Account": "XX1656"
  },
  {
    "Date": "2025-12-17T18:34:49Z",
    "Type": "CREDIT",
    "Amount": 257.88,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202512170085",
    "Account": "XX4920"
  },
  {
    "Date": "2023-11-22T21:44:05Z",
    "Type": "DEBIT",
    "Amount": 81.36,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202311220086",
    "Account": "XX3011"
  },
  {
    "Date": "2024-01-27T23:37:10Z",
    "Type": "DEBIT",
    "Amount": 464.01,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202401270087",
    "Account": "XX5729"
  },
  {
    "Date": "2024-09-15T18:27:24Z",
    "Type": "CREDIT",
    "Amount": 73.52,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202409150088",
    "Account": "XX4920"
  },
  {
    "Date": "2024-08-20T18:24:42Z",
    "Type": "DEBIT",
    "Amount": 130.1,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202408200089",
    "Account": "XX2842"
  },
  {
    "Date": "2025-10-16T08:01:54Z",
    "Type": "CREDIT",
    "Amount": 463.41,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202510160090",
    "Account": "XX3011"
  },
  {
    "Date": "2025-03-13T18:29:18Z",
    "Type": "DEBIT",
    "Amount": 446.85,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202503130091",
    "Account": "XX1656"
  },
  {
    "Date": "2025-10-24T02:41:48Z",
    "Type": "DEBIT",
    "Amount": 262.47,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202510240092",
    "Account": "XX4920"
  },
  {
    "Date": "2023-07-11T09:48:13Z",
    "Type": "CREDIT",
    "Amount": 52.13,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202307110093",
    "Account": "XX1656"
  },
  {
    "Date": "2024-06-17T04:52:00Z",
    "Type": "DEBIT",
    "Amount": 186.69,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202406170094",
    "Account": "XX3011"
  },
  {
    "Date": "2023-08-31T17:06:55Z",
    "Type": "CREDIT",
    "Amount": 271.2,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202308310095",
    "Account": "XX2842"
  },
  {
    "Date": "2025-08-12T00:16:18Z",
    "Type": "DEBIT",
    "Amount": 454.86,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202508120096",
    "Account": "XX1656"
  },
  {
    "Date": "2024-06-05T14:52:15Z",
    "Type": "CREDIT",
    "Amount": 281.05,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202406050097",
    "Account": "XX1656"
  },
  {
    "Date": "2023-03-20T14:45:48Z",
    "Type": "CREDIT",
    "Amount": 440.7,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202303200098",
    "Account": "XX4920"
  },
  {
    "Date": "2024-04-20T06:24:00Z",
    "Type": "DEBIT",
    "Amount": 161.28,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202404200099",
    "Account": "XX1656"
  },
  {
    "Date": "2023-09-08T23:16:17Z",
    "Type": "DEBIT",
    "Amount": 377.17,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202309080100",
    "Account": "XX3011"
  },
  {
    "Date": "2024-06-14T11:11:47Z",
    "Type": "DEBIT",
    "Amount": 493.43,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202406140101",
    "Account": "XX1656"
  },
  {
    "Date": "2025-09-22T14:56:09Z",
    "Type": "DEBIT",
    "Amount": 294.6,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202509220102",
    "Account": "XX4920"
  },
  {
    "Date": "2025-10-11T12:36:34Z",
    "Type": "DEBIT",
    "Amount": 98.7,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202510110103",
    "Account": "XX1656"
  },
  {
    "Date": "2025-05-29T15:19:07Z",
    "Type": "CREDIT",
    "Amount": 457.87,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202505290104",
    "Account": "XX4920"
  },
  {
    "Date": "2024-06-29T19:42:51Z",
    "Type": "DEBIT",
    "Amount": 331.44,
    "Details": "Received from Friend",
    "TransactionID": "TXN202406290105",
    "Account": "XX1656"
  },
  {
    "Date": "2025-01-09T10:31:10Z",
    "Type": "DEBIT",
    "Amount": 228.82,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202501090106",
    "Account": "XX4920"
  },
  {
    "Date": "2025-12-30T11:28:09Z",
    "Type": "CREDIT",
    "Amount": 319.95,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202512300107",
    "Account": "XX4920"
  },
  {
    "Date": "2025-11-10T10:06:35Z",
    "Type": "CREDIT",
    "Amount": 390.8,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202511100108",
    "Account": "XX2842"
  },
  {
    "Date": "2025-10-08T14:11:46Z",
    "Type": "DEBIT",
    "Amount": 345.92,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202510080109",
    "Account": "XX1656"
  },
  {
    "Date": "2024-05-30T03:14:58Z",
    "Type": "CREDIT",
    "Amount": 283.73,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202405300110",
    "Account": "XX4920"
  },
  {
    "Date": "2024-04-07T11:26:57Z",
    "Type": "CREDIT",
    "Amount": 298.05,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202404070111",
    "Account": "XX2842"
  },
  {
    "Date": "2023-03-13T16:32:19Z",
    "Type": "CREDIT",
    "Amount": 324.33,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202303130112",
    "Account": "XX3011"
  },
  {
    "Date": "2023-03-03T19:52:17Z",
    "Type": "CREDIT",
    "Amount": 28.47,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202303030113",
    "Account": "XX4920"
  },
  {
    "Date": "2025-04-05T03:55:49Z",
    "Type": "CREDIT",
    "Amount": 111.96,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202504050114",
    "Account": "XX5729"
  },
  {
    "Date": "2023-06-19T05:50:23Z",
    "Type": "CREDIT",
    "Amount": 253.46,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202306190115",
    "Account": "XX4920"
  },
  {
    "Date": "2023-04-04T11:23:58Z",
    "Type": "CREDIT",
    "Amount": 92.19,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202304040116",
    "Account": "XX4920"
  },
  {
    "Date": "2023-02-09T18:46:21Z",
    "Type": "CREDIT",
    "Amount": 226.35,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202302090117",
    "Account": "XX1656"
  },
  {
    "Date": "2024-07-19T00:51:09Z",
    "Type": "DEBIT",
    "Amount": 463.12,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202407190118",
    "Account": "XX2842"
  },
  {
    "Date": "2024-06-08T03:26:24Z",
    "Type": "CREDIT",
    "Amount": 90.8,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202406080119",
    "Account": "XX4920"
  },
  {
    "Date": "2025-01-07T23:49:22Z",
    "Type": "DEBIT",
    "Amount": 402.76,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202501070120",
    "Account": "XX5729"
  },
  {
    "Date": "2023-12-28T06:49:21Z",
    "Type": "DEBIT",
    "Amount": 447.42,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202312280121",
    "Account": "XX1656"
  },
  {
    "Date": "2023-03-28T15:47:20Z",
    "Type": "CREDIT",
    "Amount": 462.45,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202303280122",
    "Account": "XX4920"
  },
  {
    "Date": "2024-11-15T06:26:52Z",
    "Type": "CREDIT",
    "Amount": 123.07,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202411150123",
    "Account": "XX1656"
  },
  {
    "Date": "2023-10-26T05:03:55Z",
    "Type": "DEBIT",
    "Amount": 35.27,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202310260124",
    "Account": "XX2842"
  },
  {
    "Date": "2023-02-16T15:41:16Z",
    "Type": "CREDIT",
    "Amount": 111.63,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202302160125",
    "Account": "XX3011"
  },
  {
    "Date": "2024-03-21T21:51:01Z",
    "Type": "CREDIT",
    "Amount": 358.35,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202403210126",
    "Account": "XX2842"
  },
  {
    "Date": "2025-01-12T12:39:12Z",
    "Type": "DEBIT",
    "Amount": 225.24,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202501120127",
    "Account": "XX5729"
  },
  {
    "Date": "2025-01-21T20:27:16Z",
    "Type": "CREDIT",
    "Amount": 74.6,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202501210128",
    "Account": "XX1656"
  },
  {
    "Date": "2024-02-26T20:15:56Z",
    "Type": "DEBIT",
    "Amount": 93.95,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202402260129",
    "Account": "XX5729"
  },
  {
    "Date": "2024-01-17T22:26:51Z",
    "Type": "CREDIT",
    "Amount": 476.09,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202401170130",
    "Account": "XX1656"
  },
  {
    "Date": "2025-07-25T03:07:04Z",
    "Type": "CREDIT",
    "Amount": 395.62,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202507250131",
    "Account": "XX2842"
  },
  {
    "Date": "2023-05-22T22:42:52Z",
    "Type": "DEBIT",
    "Amount": 309.49,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202305220132",
    "Account": "XX2842"
  },
  {
    "Date": "2025-06-26T16:42:15Z",
    "Type": "DEBIT",
    "Amount": 475.22,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202506260133",
    "Account": "XX4920"
  },
  {
    "Date": "2023-08-22T01:16:31Z",
    "Type": "CREDIT",
    "Amount": 55.39,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202308220134",
    "Account": "XX1656"
  },
  {
    "Date": "2025-11-25T12:11:38Z",
    "Type": "CREDIT",
    "Amount": 351.61,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202511250135",
    "Account": "XX3011"
  },
  {
    "Date": "2023-05-26T23:40:15Z",
    "Type": "DEBIT",
    "Amount": 436.15,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202305260136",
    "Account": "XX3011"
  },
  {
    "Date": "2024-11-07T15:06:06Z",
    "Type": "DEBIT",
    "Amount": 200.07,
    "Details": "Received from Friend",
    "TransactionID": "TXN202411070137",
    "Account": "XX1656"
  },
  {
    "Date": "2023-02-28T02:01:45Z",
    "Type": "DEBIT",
    "Amount": 475.7,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202302280138",
    "Account": "XX5729"
  },
  {
    "Date": "2023-05-23T18:52:36Z",
    "Type": "DEBIT",
    "Amount": 16.68,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202305230139",
    "Account": "XX1656"
  },
  {
    "Date": "2024-01-31T10:52:54Z",
    "Type": "CREDIT",
    "Amount": 326.39,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202401310140",
    "Account": "XX2842"
  },
  {
    "Date": "2024-01-22T08:30:58Z",
    "Type": "DEBIT",
    "Amount": 354.19,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202401220141",
    "Account": "XX2842"
  },
  {
    "Date": "2025-09-25T13:19:09Z",
    "Type": "DEBIT",
    "Amount": 427.47,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202509250142",
    "Account": "XX3011"
  },
  {
    "Date": "2024-05-29T23:58:29Z",
    "Type": "CREDIT",
    "Amount": 325.5,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202405290143",
    "Account": "XX1656"
  },
  {
    "Date": "2024-02-12T03:22:01Z",
    "Type": "DEBIT",
    "Amount": 462.11,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202402120144",
    "Account": "XX2842"
  },
  {
    "Date": "2023-08-31T16:49:17Z",
    "Type": "DEBIT",
    "Amount": 253.02,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202308310145",
    "Account": "XX2842"
  },
  {
    "Date": "2025-09-17T05:31:54Z",
    "Type": "DEBIT",
    "Amount": 236.92,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202509170146",
    "Account": "XX2842"
  },
  {
    "Date": "2024-02-04T20:18:48Z",
    "Type": "DEBIT",
    "Amount": 482.01,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202402040147",
    "Account": "XX5729"
  },
  {
    "Date": "2024-10-13T22:26:40Z",
    "Type": "DEBIT",
    "Amount": 40.08,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202410130148",
    "Account": "XX1656"
  },
  {
    "Date": "2023-12-31T18:10:24Z",
    "Type": "CREDIT",
    "Amount": 45.55,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202312310149",
    "Account": "XX3011"
  },
  {
    "Date": "2024-02-28T15:53:32Z",
    "Type": "DEBIT",
    "Amount": 322.04,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202402280150",
    "Account": "XX2842"
  },
  {
    "Date": "2023-08-10T03:18:08Z",
    "Type": "DEBIT",
    "Amount": 457.44,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202308100151",
    "Account": "XX1656"
  },
  {
    "Date": "2025-10-31T07:12:42Z",
    "Type": "CREDIT",
    "Amount": 289.65,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202510310152",
    "Account": "XX1656"
  },
  {
    "Date": "2025-04-20T00:24:47Z",
    "Type": "CREDIT",
    "Amount": 175.06,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202504200153",
    "Account": "XX4920"
  },
  {
    "Date": "2023-08-02T23:16:06Z",
    "Type": "CREDIT",
    "Amount": 158.23,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202308020154",
    "Account": "XX1656"
  },
  {
    "Date": "2024-06-12T05:57:43Z",
    "Type": "CREDIT",
    "Amount": 496.7,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202406120155",
    "Account": "XX1656"
  },
  {
    "Date": "2023-07-20T11:44:29Z",
    "Type": "DEBIT",
    "Amount": 433.14,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202307200156",
    "Account": "XX5729"
  },
  {
    "Date": "2025-12-24T23:38:21Z",
    "Type": "CREDIT",
    "Amount": 322.87,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202512240157",
    "Account": "XX2842"
  },
  {
    "Date": "2023-02-05T03:55:50Z",
    "Type": "DEBIT",
    "Amount": 54.95,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202302050158",
    "Account": "XX5729"
  },
  {
    "Date": "2024-12-09T13:58:36Z",
    "Type": "DEBIT",
    "Amount": 175.06,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202412090159",
    "Account": "XX3011"
  },
  {
    "Date": "2024-12-15T11:41:04Z",
    "Type": "DEBIT",
    "Amount": 392.89,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202412150160",
    "Account": "XX4920"
  },
  {
    "Date": "2025-08-08T10:42:00Z",
    "Type": "DEBIT",
    "Amount": 74.14,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202508080161",
    "Account": "XX5729"
  },
  {
    "Date": "2024-11-10T03:52:44Z",
    "Type": "CREDIT",
    "Amount": 142.84,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202411100162",
    "Account": "XX4920"
  },
  {
    "Date": "2025-09-03T13:02:45Z",
    "Type": "CREDIT",
    "Amount": 396.82,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202509030163",
    "Account": "XX2842"
  },
  {
    "Date": "2024-09-14T12:37:32Z",
    "Type": "DEBIT",
    "Amount": 468.88,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202409140164",
    "Account": "XX2842"
  },
  {
    "Date": "2023-03-09T00:03:56Z",
    "Type": "DEBIT",
    "Amount": 84.77,
    "Details": "Received from Friend",
    "TransactionID": "TXN202303090165",
    "Account": "XX1656"
  },
  {
    "Date": "2023-01-11T01:02:30Z",
    "Type": "DEBIT",
    "Amount": 221.65,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202301110166",
    "Account": "XX1656"
  },
  {
    "Date": "2023-03-05T15:24:50Z",
    "Type": "CREDIT",
    "Amount": 49.18,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202303050167",
    "Account": "XX2842"
  },
  {
    "Date": "2025-01-27T01:05:10Z",
    "Type": "CREDIT",
    "Amount": 237.58,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202501270168",
    "Account": "XX2842"
  },
  {
    "Date": "2023-07-01T02:26:03Z",
    "Type": "DEBIT",
    "Amount": 288.85,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202307010169",
    "Account": "XX2842"
  },
  {
    "Date": "2023-07-28T01:31:34Z",
    "Type": "CREDIT",
    "Amount": 137.58,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202307280170",
    "Account": "XX2842"
  },
  {
    "Date": "2025-11-09T03:42:41Z",
    "Type": "CREDIT",
    "Amount": 23.52,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202511090171",
    "Account": "XX1656"
  },
  {
    "Date": "2025-07-19T12:02:17Z",
    "Type": "CREDIT",
    "Amount": 338.61,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202507190172",
    "Account": "XX5729"
  },
  {
    "Date": "2025-04-30T07:16:25Z",
    "Type": "CREDIT",
    "Amount": 384.61,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202504300173",
    "Account": "XX4920"
  },
  {
    "Date": "2023-04-04T14:22:22Z",
    "Type": "DEBIT",
    "Amount": 60.22,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202304040174",
    "Account": "XX2842"
  },
  {
    "Date": "2023-08-26T03:39:00Z",
    "Type": "CREDIT",
    "Amount": 496.99,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202308260175",
    "Account": "XX2842"
  },
  {
    "Date": "2023-07-11T10:48:59Z",
    "Type": "DEBIT",
    "Amount": 19.29,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202307110176",
    "Account": "XX5729"
  },
  {
    "Date": "2025-03-16T06:10:17Z",
    "Type": "CREDIT",
    "Amount": 35.09,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202503160177",
    "Account": "XX1656"
  },
  {
    "Date": "2025-11-28T08:09:13Z",
    "Type": "CREDIT",
    "Amount": 276.72,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202511280178",
    "Account": "XX2842"
  },
  {
    "Date": "2023-06-26T09:44:17Z",
    "Type": "CREDIT",
    "Amount": 288.4,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202306260179",
    "Account": "XX1656"
  },
  {
    "Date": "2024-06-25T23:36:51Z",
    "Type": "CREDIT",
    "Amount": 260.44,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202406250180",
    "Account": "XX5729"
  },
  {
    "Date": "2024-04-22T01:37:16Z",
    "Type": "DEBIT",
    "Amount": 271.66,
    "Details": "Received from Friend",
    "TransactionID": "TXN202404220181",
    "Account": "XX5729"
  },
  {
    "Date": "2023-08-28T01:23:07Z",
    "Type": "CREDIT",
    "Amount": 39.08,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202308280182",
    "Account": "XX3011"
  },
  {
    "Date": "2025-04-11T04:12:43Z",
    "Type": "CREDIT",
    "Amount": 196.45,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202504110183",
    "Account": "XX1656"
  },
  {
    "Date": "2023-09-14T04:12:32Z",
    "Type": "CREDIT",
    "Amount": 315.48,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202309140184",
    "Account": "XX2842"
  },
  {
    "Date": "2023-07-08T15:07:22Z",
    "Type": "CREDIT",
    "Amount": 164.84,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202307080185",
    "Account": "XX1656"
  },
  {
    "Date": "2024-10-15T01:46:41Z",
    "Type": "CREDIT",
    "Amount": 150.19,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202410150186",
    "Account": "XX5729"
  },
  {
    "Date": "2023-03-15T18:47:12Z",
    "Type": "DEBIT",
    "Amount": 92.67,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202303150187",
    "Account": "XX3011"
  },
  {
    "Date": "2025-01-25T05:20:26Z",
    "Type": "DEBIT",
    "Amount": 48.47,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202501250188",
    "Account": "XX3011"
  },
  {
    "Date": "2025-06-21T19:57:19Z",
    "Type": "DEBIT",
    "Amount": 401.74,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202506210189",
    "Account": "XX3011"
  },
  {
    "Date": "2024-04-21T17:17:41Z",
    "Type": "CREDIT",
    "Amount": 311.71,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202404210190",
    "Account": "XX2842"
  },
  {
    "Date": "2024-06-23T15:09:31Z",
    "Type": "DEBIT",
    "Amount": 28.66,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202406230191",
    "Account": "XX2842"
  },
  {
    "Date": "2023-10-01T06:24:35Z",
    "Type": "DEBIT",
    "Amount": 454.34,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202310010192",
    "Account": "XX2842"
  },
  {
    "Date": "2025-12-11T02:52:33Z",
    "Type": "CREDIT",
    "Amount": 183.79,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202512110193",
    "Account": "XX5729"
  },
  {
    "Date": "2025-06-19T04:49:52Z",
    "Type": "DEBIT",
    "Amount": 15.75,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202506190194",
    "Account": "XX4920"
  },
  {
    "Date": "2023-07-26T17:08:47Z",
    "Type": "CREDIT",
    "Amount": 167.39,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202307260195",
    "Account": "XX3011"
  },
  {
    "Date": "2023-05-11T16:25:54Z",
    "Type": "DEBIT",
    "Amount": 68.49,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202305110196",
    "Account": "XX3011"
  },
  {
    "Date": "2025-09-03T16:03:49Z",
    "Type": "DEBIT",
    "Amount": 260.8,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202509030197",
    "Account": "XX4920"
  },
  {
    "Date": "2024-12-18T18:38:30Z",
    "Type": "CREDIT",
    "Amount": 119.76,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202412180198",
    "Account": "XX3011"
  },
  {
    "Date": "2024-02-06T09:20:25Z",
    "Type": "CREDIT",
    "Amount": 287.24,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202402060199",
    "Account": "XX5729"
  },
  {
    "Date": "2023-04-03T03:08:08Z",
    "Type": "DEBIT",
    "Amount": 338.18,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202304030200",
    "Account": "XX2842"
  },
  {
    "Date": "2025-10-20T15:30:04Z",
    "Type": "DEBIT",
    "Amount": 179.16,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202510200201",
    "Account": "XX4920"
  },
  {
    "Date": "2023-04-24T07:59:22Z",
    "Type": "CREDIT",
    "Amount": 186.03,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202304240202",
    "Account": "XX5729"
  },
  {
    "Date": "2023-08-31T02:16:01Z",
    "Type": "CREDIT",
    "Amount": 136.24,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202308310203",
    "Account": "XX2842"
  },
  {
    "Date": "2025-10-11T18:24:07Z",
    "Type": "CREDIT",
    "Amount": 81.69,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202510110204",
    "Account": "XX3011"
  },
  {
    "Date": "2025-12-07T20:41:28Z",
    "Type": "CREDIT",
    "Amount": 148.26,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202512070205",
    "Account": "XX3011"
  },
  {
    "Date": "2025-03-25T23:54:26Z",
    "Type": "CREDIT",
    "Amount": 466.7,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202503250206",
    "Account": "XX2842"
  },
  {
    "Date": "2025-06-09T13:06:02Z",
    "Type": "CREDIT",
    "Amount": 328.08,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202506090207",
    "Account": "XX1656"
  },
  {
    "Date": "2025-02-10T08:09:19Z",
    "Type": "CREDIT",
    "Amount": 189.14,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202502100208",
    "Account": "XX1656"
  },
  {
    "Date": "2025-02-17T19:33:27Z",
    "Type": "DEBIT",
    "Amount": 415.62,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202502170209",
    "Account": "XX5729"
  },
  {
    "Date": "2023-03-01T01:01:45Z",
    "Type": "DEBIT",
    "Amount": 402.78,
    "Details": "Received from Friend",
    "TransactionID": "TXN202303010210",
    "Account": "XX5729"
  },
  {
    "Date": "2025-06-06T19:39:16Z",
    "Type": "CREDIT",
    "Amount": 323.64,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202506060211",
    "Account": "XX1656"
  },
  {
    "Date": "2024-08-26T10:57:54Z",
    "Type": "CREDIT",
    "Amount": 181.35,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202408260212",
    "Account": "XX3011"
  },
  {
    "Date": "2024-10-26T06:22:22Z",
    "Type": "DEBIT",
    "Amount": 177.35,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202410260213",
    "Account": "XX5729"
  },
  {
    "Date": "2023-01-25T02:42:23Z",
    "Type": "CREDIT",
    "Amount": 494.64,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202301250214",
    "Account": "XX4920"
  },
  {
    "Date": "2024-04-06T05:31:43Z",
    "Type": "DEBIT",
    "Amount": 360.01,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202404060215",
    "Account": "XX4920"
  },
  {
    "Date": "2023-01-22T20:51:29Z",
    "Type": "DEBIT",
    "Amount": 183.35,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202301220216",
    "Account": "XX5729"
  },
  {
    "Date": "2023-06-14T23:28:35Z",
    "Type": "CREDIT",
    "Amount": 469.54,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202306140217",
    "Account": "XX1656"
  },
  {
    "Date": "2023-12-06T02:51:03Z",
    "Type": "DEBIT",
    "Amount": 162.87,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202312060218",
    "Account": "XX5729"
  },
  {
    "Date": "2023-12-08T10:20:31Z",
    "Type": "DEBIT",
    "Amount": 263.22,
    "Details": "Received from Friend",
    "TransactionID": "TXN202312080219",
    "Account": "XX2842"
  },
  {
    "Date": "2024-03-12T00:51:21Z",
    "Type": "DEBIT",
    "Amount": 403.32,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202403120220",
    "Account": "XX1656"
  },
  {
    "Date": "2025-06-22T14:55:19Z",
    "Type": "DEBIT",
    "Amount": 402.72,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202506220221",
    "Account": "XX5729"
  },
  {
    "Date": "2023-04-21T11:03:04Z",
    "Type": "DEBIT",
    "Amount": 251.07,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202304210222",
    "Account": "XX2842"
  },
  {
    "Date": "2024-06-07T14:07:09Z",
    "Type": "CREDIT",
    "Amount": 391.06,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202406070223",
    "Account": "XX4920"
  },
  {
    "Date": "2023-10-25T17:52:01Z",
    "Type": "CREDIT",
    "Amount": 333.95,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202310250224",
    "Account": "XX5729"
  },
  {
    "Date": "2024-10-04T22:16:22Z",
    "Type": "DEBIT",
    "Amount": 29.55,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202410040225",
    "Account": "XX5729"
  },
  {
    "Date": "2023-12-23T18:43:14Z",
    "Type": "DEBIT",
    "Amount": 102.4,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202312230226",
    "Account": "XX1656"
  },
  {
    "Date": "2023-05-02T04:14:04Z",
    "Type": "DEBIT",
    "Amount": 331.86,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202305020227",
    "Account": "XX3011"
  },
  {
    "Date": "2024-07-30T11:41:20Z",
    "Type": "DEBIT",
    "Amount": 368.99,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202407300228",
    "Account": "XX4920"
  },
  {
    "Date": "2024-10-14T21:19:15Z",
    "Type": "DEBIT",
    "Amount": 356.5,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202410140229",
    "Account": "XX3011"
  },
  {
    "Date": "2023-03-07T15:11:36Z",
    "Type": "DEBIT",
    "Amount": 219.08,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202303070230",
    "Account": "XX5729"
  },
  {
    "Date": "2023-04-13T21:25:38Z",
    "Type": "CREDIT",
    "Amount": 335.2,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202304130231",
    "Account": "XX1656"
  },
  {
    "Date": "2025-07-22T06:41:36Z",
    "Type": "DEBIT",
    "Amount": 392.23,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202507220232",
    "Account": "XX1656"
  },
  {
    "Date": "2024-07-20T04:14:04Z",
    "Type": "CREDIT",
    "Amount": 230.03,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202407200233",
    "Account": "XX5729"
  },
  {
    "Date": "2024-10-20T06:22:16Z",
    "Type": "DEBIT",
    "Amount": 274.96,
    "Details": "Received from Friend",
    "TransactionID": "TXN202410200234",
    "Account": "XX1656"
  },
  {
    "Date": "2023-08-01T11:07:42Z",
    "Type": "CREDIT",
    "Amount": 493.38,
    "Details": "Received from Friend",
    "TransactionID": "TXN202308010235",
    "Account": "XX5729"
  },
  {
    "Date": "2023-04-10T07:15:06Z",
    "Type": "DEBIT",
    "Amount": 76.02,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202304100236",
    "Account": "XX2842"
  },
  {
    "Date": "2024-10-07T08:19:03Z",
    "Type": "CREDIT",
    "Amount": 51.09,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202410070237",
    "Account": "XX3011"
  },
  {
    "Date": "2025-08-25T17:34:27Z",
    "Type": "DEBIT",
    "Amount": 376.4,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202508250238",
    "Account": "XX2842"
  },
  {
    "Date": "2024-09-01T20:59:59Z",
    "Type": "CREDIT",
    "Amount": 419.94,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202409010239",
    "Account": "XX1656"
  },
  {
    "Date": "2023-06-02T00:15:56Z",
    "Type": "DEBIT",
    "Amount": 34.67,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202306020240",
    "Account": "XX4920"
  },
  {
    "Date": "2024-11-11T12:56:08Z",
    "Type": "DEBIT",
    "Amount": 495.77,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202411110241",
    "Account": "XX4920"
  },
  {
    "Date": "2023-05-23T11:15:48Z",
    "Type": "DEBIT",
    "Amount": 43.35,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202305230242",
    "Account": "XX2842"
  },
  {
    "Date": "2025-03-22T08:43:09Z",
    "Type": "DEBIT",
    "Amount": 454.76,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202503220243",
    "Account": "XX1656"
  },
  {
    "Date": "2024-12-12T04:29:33Z",
    "Type": "CREDIT",
    "Amount": 41.05,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202412120244",
    "Account": "XX2842"
  },
  {
    "Date": "2025-04-04T22:19:55Z",
    "Type": "DEBIT",
    "Amount": 421.58,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202504040245",
    "Account": "XX2842"
  },
  {
    "Date": "2024-01-23T21:56:53Z",
    "Type": "DEBIT",
    "Amount": 379.51,
    "Details": "Received from Friend",
    "TransactionID": "TXN202401230246",
    "Account": "XX5729"
  },
  {
    "Date": "2023-08-11T01:17:31Z",
    "Type": "DEBIT",
    "Amount": 312.38,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202308110247",
    "Account": "XX1656"
  },
  {
    "Date": "2023-07-27T19:43:29Z",
    "Type": "CREDIT",
    "Amount": 465.31,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202307270248",
    "Account": "XX4920"
  },
  {
    "Date": "2024-04-15T02:26:21Z",
    "Type": "DEBIT",
    "Amount": 278.97,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202404150249",
    "Account": "XX1656"
  },
  {
    "Date": "2024-08-21T00:26:35Z",
    "Type": "DEBIT",
    "Amount": 346.07,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202408210250",
    "Account": "XX5729"
  },
  {
    "Date": "2023-02-15T12:45:32Z",
    "Type": "DEBIT",
    "Amount": 451.26,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202302150251",
    "Account": "XX4920"
  },
  {
    "Date": "2024-01-31T07:45:52Z",
    "Type": "DEBIT",
    "Amount": 394.39,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202401310252",
    "Account": "XX4920"
  },
  {
    "Date": "2025-01-08T22:51:18Z",
    "Type": "CREDIT",
    "Amount": 262.22,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202501080253",
    "Account": "XX3011"
  },
  {
    "Date": "2023-03-19T11:55:06Z",
    "Type": "DEBIT",
    "Amount": 125.49,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202303190254",
    "Account": "XX2842"
  },
  {
    "Date": "2023-04-02T18:22:28Z",
    "Type": "DEBIT",
    "Amount": 117.61,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202304020255",
    "Account": "XX5729"
  },
  {
    "Date": "2024-06-03T21:21:15Z",
    "Type": "CREDIT",
    "Amount": 260.1,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202406030256",
    "Account": "XX5729"
  },
  {
    "Date": "2025-10-19T06:06:17Z",
    "Type": "DEBIT",
    "Amount": 204.16,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202510190257",
    "Account": "XX5729"
  },
  {
    "Date": "2024-06-02T06:17:05Z",
    "Type": "DEBIT",
    "Amount": 104.06,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202406020258",
    "Account": "XX1656"
  },
  {
    "Date": "2023-11-24T16:42:41Z",
    "Type": "CREDIT",
    "Amount": 325.36,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202311240259",
    "Account": "XX1656"
  },
  {
    "Date": "2025-03-11T19:38:26Z",
    "Type": "CREDIT",
    "Amount": 467.67,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202503110260",
    "Account": "XX3011"
  },
  {
    "Date": "2023-10-11T13:47:23Z",
    "Type": "CREDIT",
    "Amount": 292.31,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202310110261",
    "Account": "XX4920"
  },
  {
    "Date": "2024-02-28T02:49:33Z",
    "Type": "CREDIT",
    "Amount": 116.56,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202402280262",
    "Account": "XX1656"
  },
  {
    "Date": "2023-09-22T11:10:10Z",
    "Type": "CREDIT",
    "Amount": 170.31,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202309220263",
    "Account": "XX1656"
  },
  {
    "Date": "2025-12-06T07:20:26Z",
    "Type": "DEBIT",
    "Amount": 94.02,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202512060264",
    "Account": "XX2842"
  },
  {
    "Date": "2025-05-26T18:25:00Z",
    "Type": "DEBIT",
    "Amount": 38.66,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202505260265",
    "Account": "XX1656"
  },
  {
    "Date": "2023-09-19T07:33:09Z",
    "Type": "DEBIT",
    "Amount": 116.75,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202309190266",
    "Account": "XX1656"
  },
  {
    "Date": "2023-09-26T12:16:08Z",
    "Type": "CREDIT",
    "Amount": 399.29,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202309260267",
    "Account": "XX5729"
  },
  {
    "Date": "2025-07-25T19:23:28Z",
    "Type": "DEBIT",
    "Amount": 345.4,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202507250268",
    "Account": "XX5729"
  },
  {
    "Date": "2024-05-31T20:22:57Z",
    "Type": "CREDIT",
    "Amount": 431.29,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202405310269",
    "Account": "XX5729"
  },
  {
    "Date": "2024-12-30T00:44:09Z",
    "Type": "CREDIT",
    "Amount": 237.33,
    "Details": "Received from Friend",
    "TransactionID": "TXN202412300270",
    "Account": "XX5729"
  },
  {
    "Date": "2025-02-09T05:02:57Z",
    "Type": "CREDIT",
    "Amount": 298.14,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202502090271",
    "Account": "XX3011"
  },
  {
    "Date": "2025-05-15T05:41:18Z",
    "Type": "DEBIT",
    "Amount": 98.45,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202505150272",
    "Account": "XX4920"
  },
  {
    "Date": "2023-02-26T20:39:50Z",
    "Type": "DEBIT",
    "Amount": 40.79,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202302260273",
    "Account": "XX1656"
  },
  {
    "Date": "2025-11-06T06:21:46Z",
    "Type": "CREDIT",
    "Amount": 469.92,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202511060274",
    "Account": "XX5729"
  },
  {
    "Date": "2024-01-06T04:27:32Z",
    "Type": "CREDIT",
    "Amount": 472.97,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202401060275",
    "Account": "XX1656"
  },
  {
    "Date": "2023-08-29T15:12:07Z",
    "Type": "CREDIT",
    "Amount": 28.42,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202308290276",
    "Account": "XX5729"
  },
  {
    "Date": "2024-04-10T21:54:38Z",
    "Type": "CREDIT",
    "Amount": 14.17,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202404100277",
    "Account": "XX3011"
  },
  {
    "Date": "2025-04-27T15:17:07Z",
    "Type": "CREDIT",
    "Amount": 68.64,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202504270278",
    "Account": "XX5729"
  },
  {
    "Date": "2024-05-11T13:15:01Z",
    "Type": "DEBIT",
    "Amount": 77.93,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202405110279",
    "Account": "XX5729"
  },
  {
    "Date": "2023-02-28T05:30:02Z",
    "Type": "DEBIT",
    "Amount": 473.12,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202302280280",
    "Account": "XX3011"
  },
  {
    "Date": "2024-09-15T06:56:39Z",
    "Type": "CREDIT",
    "Amount": 453.32,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202409150281",
    "Account": "XX2842"
  },
  {
    "Date": "2024-04-14T06:36:03Z",
    "Type": "DEBIT",
    "Amount": 139.19,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202404140282",
    "Account": "XX3011"
  },
  {
    "Date": "2024-01-04T03:26:41Z",
    "Type": "CREDIT",
    "Amount": 348.15,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202401040283",
    "Account": "XX4920"
  },
  {
    "Date": "2024-03-21T22:06:00Z",
    "Type": "DEBIT",
    "Amount": 140.86,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202403210284",
    "Account": "XX3011"
  },
  {
    "Date": "2023-05-20T19:39:31Z",
    "Type": "DEBIT",
    "Amount": 453.55,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202305200285",
    "Account": "XX4920"
  },
  {
    "Date": "2025-05-27T16:24:53Z",
    "Type": "DEBIT",
    "Amount": 337.43,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202505270286",
    "Account": "XX5729"
  },
  {
    "Date": "2023-09-22T21:02:41Z",
    "Type": "CREDIT",
    "Amount": 212.31,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202309220287",
    "Account": "XX3011"
  },
  {
    "Date": "2025-12-14T10:42:05Z",
    "Type": "CREDIT",
    "Amount": 354.68,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202512140288",
    "Account": "XX5729"
  },
  {
    "Date": "2024-01-20T07:39:01Z",
    "Type": "DEBIT",
    "Amount": 287.84,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202401200289",
    "Account": "XX2842"
  },
  {
    "Date": "2025-03-22T01:13:01Z",
    "Type": "CREDIT",
    "Amount": 123.7,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202503220290",
    "Account": "XX5729"
  },
  {
    "Date": "2024-01-31T13:06:52Z",
    "Type": "CREDIT",
    "Amount": 496.83,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202401310291",
    "Account": "XX3011"
  },
  {
    "Date": "2025-07-28T03:05:57Z",
    "Type": "DEBIT",
    "Amount": 341.57,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202507280292",
    "Account": "XX4920"
  },
  {
    "Date": "2024-02-07T22:22:24Z",
    "Type": "DEBIT",
    "Amount": 131.79,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202402070293",
    "Account": "XX3011"
  },
  {
    "Date": "2024-02-02T10:11:21Z",
    "Type": "CREDIT",
    "Amount": 9.18,
    "Details": "Received from Friend",
    "TransactionID": "TXN202402020294",
    "Account": "XX4920"
  },
  {
    "Date": "2024-09-09T05:12:54Z",
    "Type": "CREDIT",
    "Amount": 136.25,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202409090295",
    "Account": "XX5729"
  },
  {
    "Date": "2024-08-24T05:32:12Z",
    "Type": "CREDIT",
    "Amount": 257.62,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202408240296",
    "Account": "XX3011"
  },
  {
    "Date": "2025-04-28T10:03:32Z",
    "Type": "DEBIT",
    "Amount": 163.68,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202504280297",
    "Account": "XX1656"
  },
  {
    "Date": "2025-11-12T00:36:35Z",
    "Type": "DEBIT",
    "Amount": 283.98,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202511120298",
    "Account": "XX3011"
  },
  {
    "Date": "2025-03-28T08:34:30Z",
    "Type": "CREDIT",
    "Amount": 31.75,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202503280299",
    "Account": "XX4920"
  },
  {
    "Date": "2025-08-23T08:11:33Z",
    "Type": "DEBIT",
    "Amount": 416.18,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202508230300",
    "Account": "XX2842"
  },
  {
    "Date": "2023-01-25T09:10:28Z",
    "Type": "CREDIT",
    "Amount": 198.97,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202301250301",
    "Account": "XX5729"
  },
  {
    "Date": "2024-03-14T00:58:13Z",
    "Type": "CREDIT",
    "Amount": 381.99,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202403140302",
    "Account": "XX5729"
  },
  {
    "Date": "2025-02-05T11:06:23Z",
    "Type": "CREDIT",
    "Amount": 109.56,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202502050303",
    "Account": "XX4920"
  },
  {
    "Date": "2023-06-20T00:46:14Z",
    "Type": "CREDIT",
    "Amount": 103.55,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202306200304",
    "Account": "XX4920"
  },
  {
    "Date": "2025-11-28T11:40:07Z",
    "Type": "CREDIT",
    "Amount": 47.23,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202511280305",
    "Account": "XX1656"
  },
  {
    "Date": "2024-01-19T12:09:44Z",
    "Type": "CREDIT",
    "Amount": 490.7,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202401190306",
    "Account": "XX3011"
  },
  {
    "Date": "2023-11-02T01:59:09Z",
    "Type": "DEBIT",
    "Amount": 6.72,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202311020307",
    "Account": "XX5729"
  },
  {
    "Date": "2023-08-06T19:59:45Z",
    "Type": "DEBIT",
    "Amount": 371.64,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202308060308",
    "Account": "XX5729"
  },
  {
    "Date": "2025-08-13T05:17:01Z",
    "Type": "DEBIT",
    "Amount": 287.76,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202508130309",
    "Account": "XX2842"
  },
  {
    "Date": "2023-02-18T17:58:14Z",
    "Type": "CREDIT",
    "Amount": 12.7,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202302180310",
    "Account": "XX4920"
  },
  {
    "Date": "2025-11-01T21:59:14Z",
    "Type": "DEBIT",
    "Amount": 183.59,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202511010311",
    "Account": "XX1656"
  },
  {
    "Date": "2023-01-01T22:21:39Z",
    "Type": "CREDIT",
    "Amount": 77.33,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202301010312",
    "Account": "XX2842"
  },
  {
    "Date": "2024-10-17T17:58:39Z",
    "Type": "DEBIT",
    "Amount": 439.75,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202410170313",
    "Account": "XX5729"
  },
  {
    "Date": "2023-01-16T15:03:33Z",
    "Type": "DEBIT",
    "Amount": 404.01,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202301160314",
    "Account": "XX5729"
  },
  {
    "Date": "2025-05-07T05:06:11Z",
    "Type": "CREDIT",
    "Amount": 261.48,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202505070315",
    "Account": "XX1656"
  },
  {
    "Date": "2025-01-04T06:58:31Z",
    "Type": "CREDIT",
    "Amount": 31.62,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202501040316",
    "Account": "XX4920"
  },
  {
    "Date": "2024-05-30T23:39:06Z",
    "Type": "DEBIT",
    "Amount": 84.15,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202405300317",
    "Account": "XX5729"
  },
  {
    "Date": "2023-08-16T03:35:50Z",
    "Type": "CREDIT",
    "Amount": 286.59,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202308160318",
    "Account": "XX3011"
  },
  {
    "Date": "2025-09-01T13:40:48Z",
    "Type": "CREDIT",
    "Amount": 173.46,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202509010319",
    "Account": "XX2842"
  },
  {
    "Date": "2023-04-03T17:05:50Z",
    "Type": "CREDIT",
    "Amount": 456.92,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202304030320",
    "Account": "XX5729"
  },
  {
    "Date": "2024-11-27T09:15:00Z",
    "Type": "CREDIT",
    "Amount": 216.48,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202411270321",
    "Account": "XX3011"
  },
  {
    "Date": "2025-05-27T05:13:14Z",
    "Type": "DEBIT",
    "Amount": 350.61,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202505270322",
    "Account": "XX2842"
  },
  {
    "Date": "2025-04-14T12:58:59Z",
    "Type": "CREDIT",
    "Amount": 432.07,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202504140323",
    "Account": "XX2842"
  },
  {
    "Date": "2024-09-17T15:48:41Z",
    "Type": "DEBIT",
    "Amount": 119.89,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202409170324",
    "Account": "XX3011"
  },
  {
    "Date": "2023-09-17T00:41:53Z",
    "Type": "DEBIT",
    "Amount": 220.11,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202309170325",
    "Account": "XX3011"
  },
  {
    "Date": "2023-02-14T23:56:42Z",
    "Type": "CREDIT",
    "Amount": 246.18,
    "Details": "Received from Friend",
    "TransactionID": "TXN202302140326",
    "Account": "XX5729"
  },
  {
    "Date": "2025-12-29T22:32:35Z",
    "Type": "DEBIT",
    "Amount": 132.99,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202512290327",
    "Account": "XX2842"
  },
  {
    "Date": "2024-09-10T14:43:56Z",
    "Type": "CREDIT",
    "Amount": 204.27,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202409100328",
    "Account": "XX5729"
  },
  {
    "Date": "2024-11-24T05:27:51Z",
    "Type": "CREDIT",
    "Amount": 10.53,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202411240329",
    "Account": "XX3011"
  },
  {
    "Date": "2025-09-23T21:31:08Z",
    "Type": "CREDIT",
    "Amount": 153.8,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202509230330",
    "Account": "XX3011"
  },
  {
    "Date": "2025-10-13T02:06:09Z",
    "Type": "CREDIT",
    "Amount": 349.73,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202510130331",
    "Account": "XX1656"
  },
  {
    "Date": "2024-12-23T07:20:21Z",
    "Type": "CREDIT",
    "Amount": 113.93,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202412230332",
    "Account": "XX1656"
  },
  {
    "Date": "2023-07-27T03:55:15Z",
    "Type": "CREDIT",
    "Amount": 147.82,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202307270333",
    "Account": "XX2842"
  },
  {
    "Date": "2024-10-14T14:41:00Z",
    "Type": "DEBIT",
    "Amount": 217.81,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202410140334",
    "Account": "XX3011"
  },
  {
    "Date": "2025-02-23T07:11:00Z",
    "Type": "CREDIT",
    "Amount": 70.94,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202502230335",
    "Account": "XX4920"
  },
  {
    "Date": "2025-03-24T15:40:30Z",
    "Type": "DEBIT",
    "Amount": 40.46,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202503240336",
    "Account": "XX4920"
  },
  {
    "Date": "2023-12-24T19:03:53Z",
    "Type": "CREDIT",
    "Amount": 330.72,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202312240337",
    "Account": "XX2842"
  },
  {
    "Date": "2023-08-23T05:21:53Z",
    "Type": "CREDIT",
    "Amount": 378.16,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202308230338",
    "Account": "XX3011"
  },
  {
    "Date": "2023-11-28T22:27:34Z",
    "Type": "CREDIT",
    "Amount": 413.82,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202311280339",
    "Account": "XX5729"
  },
  {
    "Date": "2024-05-28T12:57:00Z",
    "Type": "CREDIT",
    "Amount": 409.58,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202405280340",
    "Account": "XX1656"
  },
  {
    "Date": "2025-08-31T06:40:52Z",
    "Type": "DEBIT",
    "Amount": 160.19,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202508310341",
    "Account": "XX2842"
  },
  {
    "Date": "2025-03-31T21:47:36Z",
    "Type": "CREDIT",
    "Amount": 385.09,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202503310342",
    "Account": "XX3011"
  },
  {
    "Date": "2025-04-23T01:59:37Z",
    "Type": "DEBIT",
    "Amount": 75.81,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202504230343",
    "Account": "XX2842"
  },
  {
    "Date": "2024-05-12T12:31:09Z",
    "Type": "CREDIT",
    "Amount": 324.52,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202405120344",
    "Account": "XX2842"
  },
  {
    "Date": "2023-08-28T06:41:08Z",
    "Type": "DEBIT",
    "Amount": 209.77,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202308280345",
    "Account": "XX4920"
  },
  {
    "Date": "2024-04-15T19:15:49Z",
    "Type": "DEBIT",
    "Amount": 52.34,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202404150346",
    "Account": "XX2842"
  },
  {
    "Date": "2023-05-29T09:34:34Z",
    "Type": "DEBIT",
    "Amount": 274.31,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202305290347",
    "Account": "XX2842"
  },
  {
    "Date": "2024-11-05T18:47:39Z",
    "Type": "CREDIT",
    "Amount": 355.82,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202411050348",
    "Account": "XX4920"
  },
  {
    "Date": "2023-11-18T15:35:31Z",
    "Type": "CREDIT",
    "Amount": 344.03,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202311180349",
    "Account": "XX2842"
  },
  {
    "Date": "2024-02-04T07:33:51Z",
    "Type": "DEBIT",
    "Amount": 66.07,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202402040350",
    "Account": "XX1656"
  },
  {
    "Date": "2023-11-26T14:08:19Z",
    "Type": "DEBIT",
    "Amount": 341.94,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202311260351",
    "Account": "XX5729"
  },
  {
    "Date": "2024-11-28T16:54:03Z",
    "Type": "CREDIT",
    "Amount": 285.37,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202411280352",
    "Account": "XX2842"
  },
  {
    "Date": "2024-04-04T01:45:48Z",
    "Type": "DEBIT",
    "Amount": 388.44,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202404040353",
    "Account": "XX4920"
  },
  {
    "Date": "2024-06-11T11:49:14Z",
    "Type": "CREDIT",
    "Amount": 313.07,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202406110354",
    "Account": "XX4920"
  },
  {
    "Date": "2023-06-27T14:53:51Z",
    "Type": "CREDIT",
    "Amount": 298.24,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202306270355",
    "Account": "XX1656"
  },
  {
    "Date": "2023-02-08T19:38:59Z",
    "Type": "CREDIT",
    "Amount": 260.59,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202302080356",
    "Account": "XX2842"
  },
  {
    "Date": "2024-04-19T23:59:06Z",
    "Type": "DEBIT",
    "Amount": 202.88,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202404190357",
    "Account": "XX2842"
  },
  {
    "Date": "2025-05-29T18:28:29Z",
    "Type": "DEBIT",
    "Amount": 397.59,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202505290358",
    "Account": "XX2842"
  },
  {
    "Date": "2024-01-13T22:48:12Z",
    "Type": "DEBIT",
    "Amount": 352.6,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202401130359",
    "Account": "XX3011"
  },
  {
    "Date": "2024-11-01T20:30:54Z",
    "Type": "CREDIT",
    "Amount": 345.55,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202411010360",
    "Account": "XX4920"
  },
  {
    "Date": "2024-09-14T17:36:50Z",
    "Type": "DEBIT",
    "Amount": 415.22,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202409140361",
    "Account": "XX3011"
  },
  {
    "Date": "2025-08-17T12:42:52Z",
    "Type": "DEBIT",
    "Amount": 127.54,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202508170362",
    "Account": "XX1656"
  },
  {
    "Date": "2024-08-12T12:57:46Z",
    "Type": "CREDIT",
    "Amount": 100.24,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202408120363",
    "Account": "XX1656"
  },
  {
    "Date": "2025-10-02T01:35:13Z",
    "Type": "CREDIT",
    "Amount": 101.37,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202510020364",
    "Account": "XX3011"
  },
  {
    "Date": "2024-09-13T15:22:42Z",
    "Type": "CREDIT",
    "Amount": 482.78,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202409130365",
    "Account": "XX5729"
  },
  {
    "Date": "2025-12-04T23:49:11Z",
    "Type": "CREDIT",
    "Amount": 367.27,
    "Details": "Received from Friend",
    "TransactionID": "TXN202512040366",
    "Account": "XX5729"
  },
  {
    "Date": "2025-05-17T23:36:26Z",
    "Type": "DEBIT",
    "Amount": 461.55,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202505170367",
    "Account": "XX3011"
  },
  {
    "Date": "2024-11-30T19:24:26Z",
    "Type": "DEBIT",
    "Amount": 158.94,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202411300368",
    "Account": "XX5729"
  },
  {
    "Date": "2023-05-19T12:26:52Z",
    "Type": "CREDIT",
    "Amount": 290.09,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202305190369",
    "Account": "XX3011"
  },
  {
    "Date": "2024-02-25T12:16:21Z",
    "Type": "DEBIT",
    "Amount": 359.3,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202402250370",
    "Account": "XX4920"
  },
  {
    "Date": "2024-02-07T17:57:48Z",
    "Type": "CREDIT",
    "Amount": 435.14,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202402070371",
    "Account": "XX4920"
  },
  {
    "Date": "2023-04-24T04:57:38Z",
    "Type": "CREDIT",
    "Amount": 240.62,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202304240372",
    "Account": "XX4920"
  },
  {
    "Date": "2023-06-29T11:07:08Z",
    "Type": "DEBIT",
    "Amount": 348.44,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202306290373",
    "Account": "XX3011"
  },
  {
    "Date": "2023-07-26T15:43:07Z",
    "Type": "CREDIT",
    "Amount": 455.06,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202307260374",
    "Account": "XX5729"
  },
  {
    "Date": "2023-11-15T10:29:51Z",
    "Type": "CREDIT",
    "Amount": 471.02,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202311150375",
    "Account": "XX3011"
  },
  {
    "Date": "2023-03-17T01:50:44Z",
    "Type": "DEBIT",
    "Amount": 462.89,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202303170376",
    "Account": "XX4920"
  },
  {
    "Date": "2023-04-19T08:14:18Z",
    "Type": "CREDIT",
    "Amount": 336.24,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202304190377",
    "Account": "XX3011"
  },
  {
    "Date": "2024-02-21T10:17:52Z",
    "Type": "DEBIT",
    "Amount": 237.45,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202402210378",
    "Account": "XX3011"
  },
  {
    "Date": "2025-06-06T02:28:35Z",
    "Type": "CREDIT",
    "Amount": 434.77,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202506060379",
    "Account": "XX5729"
  },
  {
    "Date": "2023-03-20T00:32:38Z",
    "Type": "DEBIT",
    "Amount": 179.14,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202303200380",
    "Account": "XX2842"
  },
  {
    "Date": "2024-05-07T21:17:57Z",
    "Type": "CREDIT",
    "Amount": 79.51,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202405070381",
    "Account": "XX4920"
  },
  {
    "Date": "2023-06-29T20:35:22Z",
    "Type": "DEBIT",
    "Amount": 313.65,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202306290382",
    "Account": "XX2842"
  },
  {
    "Date": "2023-10-04T21:37:23Z",
    "Type": "CREDIT",
    "Amount": 135.12,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202310040383",
    "Account": "XX2842"
  },
  {
    "Date": "2024-12-23T21:01:18Z",
    "Type": "CREDIT",
    "Amount": 173.5,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202412230384",
    "Account": "XX2842"
  },
  {
    "Date": "2024-06-13T01:27:54Z",
    "Type": "CREDIT",
    "Amount": 161.41,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202406130385",
    "Account": "XX5729"
  },
  {
    "Date": "2023-03-19T16:40:42Z",
    "Type": "DEBIT",
    "Amount": 166.57,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202303190386",
    "Account": "XX3011"
  },
  {
    "Date": "2024-10-02T18:40:31Z",
    "Type": "CREDIT",
    "Amount": 399.26,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202410020387",
    "Account": "XX3011"
  },
  {
    "Date": "2023-07-27T15:45:20Z",
    "Type": "DEBIT",
    "Amount": 26.73,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202307270388",
    "Account": "XX5729"
  },
  {
    "Date": "2024-05-12T23:07:00Z",
    "Type": "DEBIT",
    "Amount": 103.32,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202405120389",
    "Account": "XX1656"
  },
  {
    "Date": "2024-06-08T18:36:41Z",
    "Type": "CREDIT",
    "Amount": 484.16,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202406080390",
    "Account": "XX1656"
  },
  {
    "Date": "2024-02-07T02:33:53Z",
    "Type": "DEBIT",
    "Amount": 82.7,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202402070391",
    "Account": "XX4920"
  },
  {
    "Date": "2024-02-22T19:18:31Z",
    "Type": "CREDIT",
    "Amount": 6.15,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202402220392",
    "Account": "XX4920"
  },
  {
    "Date": "2025-09-12T21:18:43Z",
    "Type": "DEBIT",
    "Amount": 421.9,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202509120393",
    "Account": "XX3011"
  },
  {
    "Date": "2025-06-08T04:38:32Z",
    "Type": "DEBIT",
    "Amount": 259.97,
    "Details": "Received from Google Pay",
    "TransactionID": "TXN202506080394",
    "Account": "XX1656"
  },
  {
    "Date": "2023-07-03T12:56:19Z",
    "Type": "DEBIT",
    "Amount": 254.73,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202307030395",
    "Account": "XX5729"
  },
  {
    "Date": "2025-11-25T15:36:29Z",
    "Type": "DEBIT",
    "Amount": 288.44,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202511250396",
    "Account": "XX1656"
  },
  {
    "Date": "2023-11-09T02:03:05Z",
    "Type": "DEBIT",
    "Amount": 86.53,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202311090397",
    "Account": "XX5729"
  },
  {
    "Date": "2023-08-06T20:07:35Z",
    "Type": "CREDIT",
    "Amount": 460.0,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202308060398",
    "Account": "XX2842"
  },
  {
    "Date": "2023-06-29T21:28:32Z",
    "Type": "CREDIT",
    "Amount": 57.93,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202306290399",
    "Account": "XX2842"
  },
  {
    "Date": "2025-04-17T22:51:38Z",
    "Type": "DEBIT",
    "Amount": 266.71,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202504170400",
    "Account": "XX3011"
  },
  {
    "Date": "2025-12-23T03:09:39Z",
    "Type": "DEBIT",
    "Amount": 297.39,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202512230401",
    "Account": "XX2842"
  },
  {
    "Date": "2024-06-04T13:50:01Z",
    "Type": "DEBIT",
    "Amount": 198.89,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202406040402",
    "Account": "XX2842"
  },
  {
    "Date": "2023-12-02T16:29:20Z",
    "Type": "DEBIT",
    "Amount": 338.16,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202312020403",
    "Account": "XX5729"
  },
  {
    "Date": "2024-02-27T20:49:52Z",
    "Type": "CREDIT",
    "Amount": 447.31,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202402270404",
    "Account": "XX1656"
  },
  {
    "Date": "2025-11-29T13:47:27Z",
    "Type": "CREDIT",
    "Amount": 49.05,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202511290405",
    "Account": "XX1656"
  },
  {
    "Date": "2023-10-15T13:31:03Z",
    "Type": "CREDIT",
    "Amount": 342.14,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202310150406",
    "Account": "XX1656"
  },
  {
    "Date": "2024-03-19T09:33:19Z",
    "Type": "DEBIT",
    "Amount": 189.58,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202403190407",
    "Account": "XX5729"
  },
  {
    "Date": "2025-05-10T18:15:20Z",
    "Type": "DEBIT",
    "Amount": 338.18,
    "Details": "Received from Friend",
    "TransactionID": "TXN202505100408",
    "Account": "XX2842"
  },
  {
    "Date": "2024-10-25T09:16:18Z",
    "Type": "DEBIT",
    "Amount": 278.42,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202410250409",
    "Account": "XX1656"
  },
  {
    "Date": "2024-12-10T11:16:44Z",
    "Type": "CREDIT",
    "Amount": 453.45,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202412100410",
    "Account": "XX2842"
  },
  {
    "Date": "2024-04-20T02:43:25Z",
    "Type": "CREDIT",
    "Amount": 162.82,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202404200411",
    "Account": "XX3011"
  },
  {
    "Date": "2025-10-25T03:20:18Z",
    "Type": "DEBIT",
    "Amount": 446.87,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202510250412",
    "Account": "XX5729"
  },
  {
    "Date": "2024-12-10T21:55:12Z",
    "Type": "CREDIT",
    "Amount": 373.66,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202412100413",
    "Account": "XX3011"
  },
  {
    "Date": "2023-03-10T04:56:23Z",
    "Type": "DEBIT",
    "Amount": 314.55,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202303100414",
    "Account": "XX2842"
  },
  {
    "Date": "2024-03-10T03:14:30Z",
    "Type": "CREDIT",
    "Amount": 75.83,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202403100415",
    "Account": "XX5729"
  },
  {
    "Date": "2024-01-02T02:21:35Z",
    "Type": "CREDIT",
    "Amount": 247.52,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202401020416",
    "Account": "XX4920"
  },
  {
    "Date": "2023-05-22T23:46:07Z",
    "Type": "DEBIT",
    "Amount": 35.53,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202305220417",
    "Account": "XX2842"
  },
  {
    "Date": "2024-12-08T23:21:58Z",
    "Type": "CREDIT",
    "Amount": 119.49,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202412080418",
    "Account": "XX5729"
  },
  {
    "Date": "2024-10-23T22:21:03Z",
    "Type": "CREDIT",
    "Amount": 303.04,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202410230419",
    "Account": "XX4920"
  },
  {
    "Date": "2024-11-25T09:32:39Z",
    "Type": "DEBIT",
    "Amount": 20.91,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202411250420",
    "Account": "XX1656"
  },
  {
    "Date": "2023-10-29T05:56:38Z",
    "Type": "DEBIT",
    "Amount": 414.58,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202310290421",
    "Account": "XX2842"
  },
  {
    "Date": "2023-03-10T21:24:35Z",
    "Type": "DEBIT",
    "Amount": 408.7,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202303100422",
    "Account": "XX3011"
  },
  {
    "Date": "2025-12-13T15:35:11Z",
    "Type": "DEBIT",
    "Amount": 60.9,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202512130423",
    "Account": "XX4920"
  },
  {
    "Date": "2024-10-29T20:09:01Z",
    "Type": "DEBIT",
    "Amount": 242.36,
    "Details": "Received from NISHANT KUMAR KUSHWAHA",
    "TransactionID": "TXN202410290424",
    "Account": "XX1656"
  },
  {
    "Date": "2023-07-01T06:14:42Z",
    "Type": "CREDIT",
    "Amount": 147.83,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202307010425",
    "Account": "XX5729"
  },
  {
    "Date": "2023-04-02T12:35:20Z",
    "Type": "DEBIT",
    "Amount": 198.54,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202304020426",
    "Account": "XX3011"
  },
  {
    "Date": "2025-07-17T00:21:18Z",
    "Type": "DEBIT",
    "Amount": 259.33,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202507170427",
    "Account": "XX2842"
  },
  {
    "Date": "2023-12-23T04:38:08Z",
    "Type": "CREDIT",
    "Amount": 57.79,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202312230428",
    "Account": "XX3011"
  },
  {
    "Date": "2023-05-17T08:38:10Z",
    "Type": "CREDIT",
    "Amount": 425.36,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202305170429",
    "Account": "XX4920"
  },
  {
    "Date": "2025-10-05T16:11:44Z",
    "Type": "DEBIT",
    "Amount": 263.11,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202510050430",
    "Account": "XX5729"
  },
  {
    "Date": "2024-01-04T01:58:22Z",
    "Type": "CREDIT",
    "Amount": 111.1,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202401040431",
    "Account": "XX3011"
  },
  {
    "Date": "2024-05-20T23:35:35Z",
    "Type": "CREDIT",
    "Amount": 392.35,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202405200432",
    "Account": "XX2842"
  },
  {
    "Date": "2024-08-11T01:00:48Z",
    "Type": "CREDIT",
    "Amount": 182.15,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202408110433",
    "Account": "XX2842"
  },
  {
    "Date": "2023-11-03T23:51:22Z",
    "Type": "DEBIT",
    "Amount": 260.03,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202311030434",
    "Account": "XX5729"
  },
  {
    "Date": "2023-07-06T15:28:10Z",
    "Type": "CREDIT",
    "Amount": 307.38,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202307060435",
    "Account": "XX5729"
  },
  {
    "Date": "2023-11-14T13:37:31Z",
    "Type": "CREDIT",
    "Amount": 23.25,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202311140436",
    "Account": "XX5729"
  },
  {
    "Date": "2023-07-02T08:23:50Z",
    "Type": "DEBIT",
    "Amount": 389.78,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202307020437",
    "Account": "XX5729"
  },
  {
    "Date": "2023-12-15T07:59:43Z",
    "Type": "DEBIT",
    "Amount": 304.22,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202312150438",
    "Account": "XX5729"
  },
  {
    "Date": "2025-11-14T16:09:34Z",
    "Type": "DEBIT",
    "Amount": 201.74,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202511140439",
    "Account": "XX2842"
  },
  {
    "Date": "2023-02-05T00:28:44Z",
    "Type": "DEBIT",
    "Amount": 140.72,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202302050440",
    "Account": "XX4920"
  },
  {
    "Date": "2023-07-20T17:49:43Z",
    "Type": "DEBIT",
    "Amount": 474.41,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202307200441",
    "Account": "XX2842"
  },
  {
    "Date": "2024-04-13T14:11:44Z",
    "Type": "DEBIT",
    "Amount": 21.15,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202404130442",
    "Account": "XX1656"
  },
  {
    "Date": "2023-09-05T06:14:24Z",
    "Type": "DEBIT",
    "Amount": 172.41,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202309050443",
    "Account": "XX5729"
  },
  {
    "Date": "2025-11-21T12:50:01Z",
    "Type": "CREDIT",
    "Amount": 361.11,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202511210444",
    "Account": "XX3011"
  },
  {
    "Date": "2025-04-10T10:00:26Z",
    "Type": "CREDIT",
    "Amount": 283.39,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202504100445",
    "Account": "XX1656"
  },
  {
    "Date": "2024-02-10T01:01:20Z",
    "Type": "DEBIT",
    "Amount": 330.11,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202402100446",
    "Account": "XX2842"
  },
  {
    "Date": "2024-03-22T20:02:07Z",
    "Type": "DEBIT",
    "Amount": 67.87,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202403220447",
    "Account": "XX2842"
  },
  {
    "Date": "2024-03-10T20:00:12Z",
    "Type": "CREDIT",
    "Amount": 62.25,
    "Details": "Paid to Grocery Store",
    "TransactionID": "TXN202403100448",
    "Account": "XX2842"
  },
  {
    "Date": "2023-03-05T11:07:28Z",
    "Type": "DEBIT",
    "Amount": 482.86,
    "Details": "Received from Friend",
    "TransactionID": "TXN202303050449",
    "Account": "XX5729"
  },
  {
    "Date": "2023-03-30T02:06:16Z",
    "Type": "CREDIT",
    "Amount": 422.24,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202303300450",
    "Account": "XX4920"
  },
  {
    "Date": "2024-01-22T12:37:47Z",
    "Type": "CREDIT",
    "Amount": 409.77,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202401220451",
    "Account": "XX3011"
  },
  {
    "Date": "2023-02-12T23:24:34Z",
    "Type": "DEBIT",
    "Amount": 127.31,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202302120452",
    "Account": "XX5729"
  },
  {
    "Date": "2024-07-08T16:41:41Z",
    "Type": "CREDIT",
    "Amount": 158.73,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202407080453",
    "Account": "XX5729"
  },
  {
    "Date": "2025-04-01T22:34:23Z",
    "Type": "CREDIT",
    "Amount": 263.68,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202504010454",
    "Account": "XX1656"
  },
  {
    "Date": "2025-09-17T14:08:14Z",
    "Type": "DEBIT",
    "Amount": 455.03,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202509170455",
    "Account": "XX3011"
  },
  {
    "Date": "2025-07-05T11:16:48Z",
    "Type": "DEBIT",
    "Amount": 358.53,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202507050456",
    "Account": "XX2842"
  },
  {
    "Date": "2025-12-30T13:49:37Z",
    "Type": "DEBIT",
    "Amount": 166.59,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202512300457",
    "Account": "XX3011"
  },
  {
    "Date": "2024-09-19T14:51:30Z",
    "Type": "CREDIT",
    "Amount": 336.81,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202409190458",
    "Account": "XX5729"
  },
  {
    "Date": "2024-08-28T11:55:41Z",
    "Type": "DEBIT",
    "Amount": 91.41,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202408280459",
    "Account": "XX1656"
  },
  {
    "Date": "2023-11-29T12:32:19Z",
    "Type": "DEBIT",
    "Amount": 296.83,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202311290460",
    "Account": "XX2842"
  },
  {
    "Date": "2025-08-02T09:56:44Z",
    "Type": "CREDIT",
    "Amount": 205.96,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202508020461",
    "Account": "XX1656"
  },
  {
    "Date": "2023-07-17T16:48:27Z",
    "Type": "CREDIT",
    "Amount": 260.83,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202307170462",
    "Account": "XX2842"
  },
  {
    "Date": "2023-09-01T07:24:58Z",
    "Type": "DEBIT",
    "Amount": 141.75,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202309010463",
    "Account": "XX1656"
  },
  {
    "Date": "2023-07-25T07:19:42Z",
    "Type": "DEBIT",
    "Amount": 231.88,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202307250464",
    "Account": "XX4920"
  },
  {
    "Date": "2025-02-14T18:43:46Z",
    "Type": "DEBIT",
    "Amount": 396.73,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202502140465",
    "Account": "XX3011"
  },
  {
    "Date": "2024-10-02T23:19:01Z",
    "Type": "CREDIT",
    "Amount": 168.53,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202410020466",
    "Account": "XX5729"
  },
  {
    "Date": "2025-10-26T04:48:58Z",
    "Type": "DEBIT",
    "Amount": 248.54,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202510260467",
    "Account": "XX1656"
  },
  {
    "Date": "2025-03-07T16:01:40Z",
    "Type": "CREDIT",
    "Amount": 95.39,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202503070468",
    "Account": "XX3011"
  },
  {
    "Date": "2024-03-12T19:36:06Z",
    "Type": "CREDIT",
    "Amount": 54.51,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202403120469",
    "Account": "XX4920"
  },
  {
    "Date": "2023-07-16T02:43:59Z",
    "Type": "CREDIT",
    "Amount": 35.77,
    "Details": "Received from UPI Transfer",
    "TransactionID": "TXN202307160470",
    "Account": "XX1656"
  },
  {
    "Date": "2024-07-11T04:02:15Z",
    "Type": "CREDIT",
    "Amount": 79.34,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202407110471",
    "Account": "XX3011"
  },
  {
    "Date": "2025-04-17T11:57:02Z",
    "Type": "DEBIT",
    "Amount": 283.66,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202504170472",
    "Account": "XX4920"
  },
  {
    "Date": "2025-12-19T02:44:53Z",
    "Type": "DEBIT",
    "Amount": 388.15,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202512190473",
    "Account": "XX1656"
  },
  {
    "Date": "2023-07-12T06:17:27Z",
    "Type": "DEBIT",
    "Amount": 421.76,
    "Details": "Refund from Flipkart",
    "TransactionID": "TXN202307120474",
    "Account": "XX2842"
  },
  {
    "Date": "2024-10-15T17:56:26Z",
    "Type": "DEBIT",
    "Amount": 362.75,
    "Details": "Received from Friend",
    "TransactionID": "TXN202410150475",
    "Account": "XX1656"
  },
  {
    "Date": "2023-12-03T04:28:40Z",
    "Type": "CREDIT",
    "Amount": 18.48,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202312030476",
    "Account": "XX2842"
  },
  {
    "Date": "2024-09-04T07:22:26Z",
    "Type": "DEBIT",
    "Amount": 392.12,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202409040477",
    "Account": "XX2842"
  },
  {
    "Date": "2024-09-12T13:56:41Z",
    "Type": "DEBIT",
    "Amount": 75.61,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202409120478",
    "Account": "XX3011"
  },
  {
    "Date": "2025-10-20T22:59:54Z",
    "Type": "CREDIT",
    "Amount": 299.66,
    "Details": "Paid to Tea Stall",
    "TransactionID": "TXN202510200479",
    "Account": "XX2842"
  },
  {
    "Date": "2024-06-01T12:28:30Z",
    "Type": "DEBIT",
    "Amount": 178.28,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202406010480",
    "Account": "XX4920"
  },
  {
    "Date": "2023-02-23T17:09:38Z",
    "Type": "DEBIT",
    "Amount": 364.73,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202302230481",
    "Account": "XX1656"
  },
  {
    "Date": "2023-02-10T01:31:01Z",
    "Type": "DEBIT",
    "Amount": 354.15,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202302100482",
    "Account": "XX1656"
  },
  {
    "Date": "2024-08-19T06:37:40Z",
    "Type": "DEBIT",
    "Amount": 125.85,
    "Details": "Received from Paytm Wallet",
    "TransactionID": "TXN202408190483",
    "Account": "XX2842"
  },
  {
    "Date": "2024-02-01T15:41:49Z",
    "Type": "CREDIT",
    "Amount": 264.76,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202402010484",
    "Account": "XX3011"
  },
  {
    "Date": "2025-09-29T01:07:48Z",
    "Type": "DEBIT",
    "Amount": 485.01,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202509290485",
    "Account": "XX1656"
  },
  {
    "Date": "2025-07-02T18:45:05Z",
    "Type": "DEBIT",
    "Amount": 208.1,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202507020486",
    "Account": "XX2842"
  },
  {
    "Date": "2024-07-30T17:46:48Z",
    "Type": "CREDIT",
    "Amount": 465.15,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202407300487",
    "Account": "XX4920"
  },
  {
    "Date": "2023-08-22T18:28:55Z",
    "Type": "CREDIT",
    "Amount": 150.36,
    "Details": "Paid to ABC Enterprises",
    "TransactionID": "TXN202308220488",
    "Account": "XX3011"
  },
  {
    "Date": "2024-07-28T08:25:48Z",
    "Type": "DEBIT",
    "Amount": 113.36,
    "Details": "Paid to Netflix Subscription",
    "TransactionID": "TXN202407280489",
    "Account": "XX5729"
  },
  {
    "Date": "2024-10-15T23:37:27Z",
    "Type": "CREDIT",
    "Amount": 157.83,
    "Details": "Mobile recharged 9587017370",
    "TransactionID": "TXN202410150490",
    "Account": "XX3011"
  },
  {
    "Date": "2025-04-30T07:50:17Z",
    "Type": "DEBIT",
    "Amount": 73.79,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202504300491",
    "Account": "XX3011"
  },
  {
    "Date": "2023-04-24T20:55:24Z",
    "Type": "DEBIT",
    "Amount": 72.25,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202304240492",
    "Account": "XX1656"
  },
  {
    "Date": "2025-10-27T20:36:14Z",
    "Type": "CREDIT",
    "Amount": 113.88,
    "Details": "Paid to BLINKIT COMMERCE PRIVATE LIMITED",
    "TransactionID": "TXN202510270493",
    "Account": "XX1656"
  },
  {
    "Date": "2023-08-29T05:41:43Z",
    "Type": "CREDIT",
    "Amount": 431.25,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202308290494",
    "Account": "XX4920"
  },
  {
    "Date": "2023-05-29T05:56:19Z",
    "Type": "CREDIT",
    "Amount": 343.19,
    "Details": "Paid to Amazon",
    "TransactionID": "TXN202305290495",
    "Account": "XX2842"
  },
  {
    "Date": "2024-06-07T23:18:13Z",
    "Type": "DEBIT",
    "Amount": 458.16,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202406070496",
    "Account": "XX2842"
  },
  {
    "Date": "2025-11-23T13:16:04Z",
    "Type": "DEBIT",
    "Amount": 199.82,
    "Details": "Paid to Zepto Marketplace Private Limited",
    "TransactionID": "TXN202511230497",
    "Account": "XX3011"
  },
  {
    "Date": "2025-03-17T06:49:43Z",
    "Type": "CREDIT",
    "Amount": 26.04,
    "Details": "Refund from Google Play",
    "TransactionID": "TXN202503170498",
    "Account": "XX4920"
  },
  {
    "Date": "2025-05-05T07:47:10Z",
    "Type": "CREDIT",
    "Amount": 462.65,
    "Details": "Received from Friend",
    "TransactionID": "TXN202505050499",
    "Account": "XX4920"
  },
  {
    "Date": "2023-01-28T19:16:00Z",
    "Type": "DEBIT",
    "Amount": 356.97,
    "Details": "Paid to Vaishnavi snacks center",
    "TransactionID": "TXN202301280500",
    "Account": "XX4920"
  },
  {
    "Date": "2025-06-28T16:49:08Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202506280501",
    "Account": "XX1656"
  },
  {
    "Date": "2025-01-28T20:54:25Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202501280502",
    "Account": "XX1656"
  },
  {
    "Date": "2024-03-11T18:25:26Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202403110503",
    "Account": "XX1656"
  },
  {
    "Date": "2025-11-26T02:24:29Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202511260504",
    "Account": "XX1656"
  },
  {
    "Date": "2024-03-04T07:10:51Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202403040505",
    "Account": "XX1656"
  },
  {
    "Date": "2025-01-22T19:22:01Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202501220506",
    "Account": "XX1656"
  },
  {
    "Date": "2024-07-01T01:30:19Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202407010507",
    "Account": "XX1656"
  },
  {
    "Date": "2024-12-12T11:48:16Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202412120508",
    "Account": "XX1656"
  },
  {
    "Date": "2024-05-24T02:41:11Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202405240509",
    "Account": "XX1656"
  },
  {
    "Date": "2025-06-02T19:30:27Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202506020510",
    "Account": "XX1656"
  },
  {
    "Date": "2025-03-05T03:00:22Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202503050511",
    "Account": "XX1656"
  },
  {
    "Date": "2024-01-20T05:01:21Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202401200512",
    "Account": "XX1656"
  },
  {
    "Date": "2025-04-02T21:18:42Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202504020513",
    "Account": "XX1656"
  },
  {
    "Date": "2024-04-10T06:53:16Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202404100514",
    "Account": "XX1656"
  },
  {
    "Date": "2024-06-08T08:22:11Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202406080515",
    "Account": "XX1656"
  },
  {
    "Date": "2024-10-10T13:35:54Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202410100516",
    "Account": "XX1656"
  },
  {
    "Date": "2024-09-17T03:56:47Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202409170517",
    "Account": "XX1656"
  },
  {
    "Date": "2025-12-08T11:01:19Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202512080518",
    "Account": "XX1656"
  },
  {
    "Date": "2025-04-18T20:53:58Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202504180519",
    "Account": "XX1656"
  },
  {
    "Date": "2024-02-23T02:50:10Z",
    "Type": "DEBIT",
    "Amount": 199.0,
    "Details": "Paid to SWIGGY",
    "TransactionID": "TXN202402230520",
    "Account": "XX1656"
  },
  {
    "Date": "2024-01-31T21:07:46Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202401310521",
    "Account": "XX2842"
  },
  {
    "Date": "2025-07-31T20:41:31Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202507310522",
    "Account": "XX2842"
  },
  {
    "Date": "2025-04-20T02:05:26Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202504200523",
    "Account": "XX2842"
  },
  {
    "Date": "2025-01-19T17:22:46Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202501190524",
    "Account": "XX2842"
  },
  {
    "Date": "2025-05-31T05:20:00Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202505310525",
    "Account": "XX2842"
  },
  {
    "Date": "2025-09-15T14:19:35Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202509150526",
    "Account": "XX2842"
  },
  {
    "Date": "2025-05-08T13:11:50Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202505080527",
    "Account": "XX2842"
  },
  {
    "Date": "2025-11-08T20:45:23Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202511080528",
    "Account": "XX2842"
  },
  {
    "Date": "2025-01-15T02:09:39Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202501150529",
    "Account": "XX2842"
  },
  {
    "Date": "2025-12-05T06:25:12Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202512050530",
    "Account": "XX2842"
  },
  {
    "Date": "2024-06-11T22:37:34Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202406110531",
    "Account": "XX2842"
  },
  {
    "Date": "2025-02-21T13:59:37Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202502210532",
    "Account": "XX2842"
  },
  {
    "Date": "2024-02-13T09:16:11Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202402130533",
    "Account": "XX2842"
  },
  {
    "Date": "2025-09-15T06:25:24Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202509150534",
    "Account": "XX2842"
  },
  {
    "Date": "2025-07-31T23:01:15Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202507310535",
    "Account": "XX2842"
  },
  {
    "Date": "2024-01-30T12:35:08Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202401300536",
    "Account": "XX2842"
  },
  {
    "Date": "2025-07-31T20:34:33Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202507310537",
    "Account": "XX2842"
  },
  {
    "Date": "2024-10-05T16:22:42Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202410050538",
    "Account": "XX2842"
  },
  {
    "Date": "2025-11-27T17:57:05Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202511270539",
    "Account": "XX2842"
  },
  {
    "Date": "2024-12-08T02:19:55Z",
    "Type": "DEBIT",
    "Amount": 149.0,
    "Details": "Payment to Google Play",
    "TransactionID": "TXN202412080540",
    "Account": "XX2842"
  },
  {
    "Date": "2025-03-12T17:06:45Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202503120541",
    "Account": "XX4920"
  },
  {
    "Date": "2024-12-23T07:10:48Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202412230542",
    "Account": "XX4920"
  },
  {
    "Date": "2025-04-07T13:30:11Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202504070543",
    "Account": "XX4920"
  },
  {
    "Date": "2024-12-10T12:35:22Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202412100544",
    "Account": "XX4920"
  },
  {
    "Date": "2024-12-20T04:47:52Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202412200545",
    "Account": "XX4920"
  },
  {
    "Date": "2024-07-19T17:36:43Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202407190546",
    "Account": "XX4920"
  },
  {
    "Date": "2024-05-21T17:05:33Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202405210547",
    "Account": "XX4920"
  },
  {
    "Date": "2025-06-28T12:24:33Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202506280548",
    "Account": "XX4920"
  },
  {
    "Date": "2025-12-06T07:25:05Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202512060549",
    "Account": "XX4920"
  },
  {
    "Date": "2024-09-20T17:09:57Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202409200550",
    "Account": "XX4920"
  },
  {
    "Date": "2024-05-13T17:25:41Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202405130551",
    "Account": "XX4920"
  },
  {
    "Date": "2025-01-31T12:14:41Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202501310552",
    "Account": "XX4920"
  },
  {
    "Date": "2025-12-09T21:51:28Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202512090553",
    "Account": "XX4920"
  },
  {
    "Date": "2025-09-06T04:45:53Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202509060554",
    "Account": "XX4920"
  },
  {
    "Date": "2025-05-01T03:17:21Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202505010555",
    "Account": "XX4920"
  },
  {
    "Date": "2024-07-14T08:38:24Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202407140556",
    "Account": "XX4920"
  },
  {
    "Date": "2024-12-12T05:59:33Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202412120557",
    "Account": "XX4920"
  },
  {
    "Date": "2025-10-12T16:48:38Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202510120558",
    "Account": "XX4920"
  },
  {
    "Date": "2025-03-27T18:02:16Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202503270559",
    "Account": "XX4920"
  },
  {
    "Date": "2024-07-10T09:15:52Z",
    "Type": "CREDIT",
    "Amount": 500.0,
    "Details": "Received from Salary Advance",
    "TransactionID": "TXN202407100560",
    "Account": "XX4920"
  },
  {
    "Date": "2024-02-08T23:17:58Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202402080561",
    "Account": "XX3011"
  },
  {
    "Date": "2024-06-07T00:15:26Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202406070562",
    "Account": "XX3011"
  },
  {
    "Date": "2025-07-10T15:09:56Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202507100563",
    "Account": "XX3011"
  },
  {
    "Date": "2025-03-03T21:25:42Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202503030564",
    "Account": "XX3011"
  },
  {
    "Date": "2024-01-28T04:03:25Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202401280565",
    "Account": "XX3011"
  },
  {
    "Date": "2024-03-20T18:21:53Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202403200566",
    "Account": "XX3011"
  },
  {
    "Date": "2024-12-26T07:46:03Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202412260567",
    "Account": "XX3011"
  },
  {
    "Date": "2024-08-03T08:17:05Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202408030568",
    "Account": "XX3011"
  },
  {
    "Date": "2024-10-29T14:25:04Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202410290569",
    "Account": "XX3011"
  },
  {
    "Date": "2025-06-02T08:27:09Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202506020570",
    "Account": "XX3011"
  },
  {
    "Date": "2025-10-29T02:35:37Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202510290571",
    "Account": "XX3011"
  },
  {
    "Date": "2024-12-02T17:17:12Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202412020572",
    "Account": "XX3011"
  },
  {
    "Date": "2024-12-03T22:31:53Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202412030573",
    "Account": "XX3011"
  },
  {
    "Date": "2025-01-13T11:01:23Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202501130574",
    "Account": "XX3011"
  },
  {
    "Date": "2024-03-26T01:36:27Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202403260575",
    "Account": "XX3011"
  },
  {
    "Date": "2024-12-07T04:25:12Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202412070576",
    "Account": "XX3011"
  },
  {
    "Date": "2025-01-29T07:42:30Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202501290577",
    "Account": "XX3011"
  },
  {
    "Date": "2024-03-26T08:48:58Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202403260578",
    "Account": "XX3011"
  },
  {
    "Date": "2025-10-01T02:59:58Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202510010579",
    "Account": "XX3011"
  },
  {
    "Date": "2024-04-22T19:25:14Z",
    "Type": "CREDIT",
    "Amount": 75.0,
    "Details": "Refund from Amazon",
    "TransactionID": "TXN202404220580",
    "Account": "XX3011"
  },
  {
    "Date": "2025-06-04T14:50:03Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202506040581",
    "Account": "XX5729"
  },
  {
    "Date": "2024-09-23T00:05:54Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202409230582",
    "Account": "XX5729"
  },
  {
    "Date": "2025-03-30T09:20:34Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202503300583",
    "Account": "XX5729"
  },
  {
    "Date": "2025-09-24T17:53:59Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202509240584",
    "Account": "XX5729"
  },
  {
    "Date": "2024-08-06T19:15:36Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202408060585",
    "Account": "XX5729"
  },
  {
    "Date": "2024-01-02T15:54:29Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202401020586",
    "Account": "XX5729"
  },
  {
    "Date": "2024-03-05T19:59:11Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202403050587",
    "Account": "XX5729"
  },
  {
    "Date": "2025-09-17T17:17:04Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202509170588",
    "Account": "XX5729"
  },
  {
    "Date": "2024-07-06T08:50:08Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202407060589",
    "Account": "XX5729"
  },
  {
    "Date": "2025-12-25T17:45:31Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202512250590",
    "Account": "XX5729"
  },
  {
    "Date": "2025-03-09T21:35:11Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202503090591",
    "Account": "XX5729"
  },
  {
    "Date": "2025-01-14T03:44:28Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202501140592",
    "Account": "XX5729"
  },
  {
    "Date": "2024-07-11T23:54:22Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202407110593",
    "Account": "XX5729"
  },
  {
    "Date": "2024-03-20T11:20:52Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202403200594",
    "Account": "XX5729"
  },
  {
    "Date": "2024-01-28T22:32:19Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202401280595",
    "Account": "XX5729"
  },
  {
    "Date": "2024-12-19T12:56:06Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202412190596",
    "Account": "XX5729"
  },
  {
    "Date": "2025-08-19T03:00:43Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202508190597",
    "Account": "XX5729"
  },
  {
    "Date": "2024-07-24T17:38:53Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202407240598",
    "Account": "XX5729"
  },
  {
    "Date": "2025-02-12T09:04:16Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202502120599",
    "Account": "XX5729"
  },
  {
    "Date": "2024-12-31T23:37:43Z",
    "Type": "DEBIT",
    "Amount": 250.0,
    "Details": "Paid to Blinkit",
    "TransactionID": "TXN202412310600",
    "Account": "XX5729"
  }
];

export const sampleTransactions = rawTransactions.map(tx => ({ 
  ...tx, 
  Date: new Date(tx.Date), 
}));