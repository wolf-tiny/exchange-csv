const CoinAPI = require('coinapi-io');
const express = require('express')
const bodyParser = require('body-parser')
const { getData } = require('./reader');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', async function (req, res) {
  let coinapi = new CoinAPI('8509BFF6-4801-41F4-BFD9-F16B8E0A7C87');

  var date = req.query.date;
  var token = req.query.token;

  const data = await getData;
  const csvData = data.sort(function (a, b) {
    return new Date(b.TimeStamp) - new Date(a.TimeStamp);
  });

  let temp;

  if (date && token) {
    temp = csvData.find(item => (new Date(item.TimeStamp) - new Date(date)) === 0 && item.Token === token)
  } else if (date) {
    temp = csvData.find(item => (new Date(item.TimeStamp) - new Date(date)) === 0)
  } else if (token) {
    temp = csvData.find(item => item.Token === token)
  } else {
    temp = csvData[0];
  }

  let amount = 0;
  let apiResult;

  if (temp) {
    apiResult = await coinapi.exchange_rates_get_specific_rate(temp.Token, 'USD');
    amount = apiResult.rate * temp.Amount;
  }

  res.end(JSON.stringify(
    temp ?
      { USD: amount, [temp.Token]: temp.Amount, rate: apiResult.rate, date: temp.TimeStamp, result_code: 0 } :
      { result_code: -1 }));
})

app.listen(3000)