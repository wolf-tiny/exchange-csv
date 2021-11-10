const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'data.csv',
  header: [
    {id: 'timestamp', title: 'TimeStamp'},
    {id: 'transaction_type', title: 'Transaction_Type'},
    {id: 'token', title: 'Token'},
    {id: 'amount', title: 'Amount'},
  ]
});

const data = [
  {
    timestamp: '2021-11-10',
    transaction_type: 'DEPOSIT',
    token: 'BTC',
    amount: '200'
  }, {
    timestamp: '2021-11-11',
    transaction_type: 'WITHDRAWAL',
    token: 'ETH',
    amount: '1000'
  }, {
    timestamp: '2021-11-12',
    transaction_type: 'DEPOSIT',
    token: 'SOL',
    amount: '500'
  }, {
    timestamp: '2021-11-13',
    transaction_type: 'WITHDRAWAL',
    token: 'BTC',
    amount: '100'
  }, {
    timestamp: '2021-11-14',
    transaction_type: 'WITHDRAWAL',
    token: 'SOL',
    amount: '300'
  }, {
    timestamp: '2021-11-15',
    transaction_type: 'DEPOSIT',
    token: 'SOL',
    amount: '600'
  }
];

csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));