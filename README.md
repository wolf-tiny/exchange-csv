1. run

node api.js

2. test

http://localhost:3000/?token=BTC&date=2021-11-10

{"USD":13672007.812169284,"BTC":"200","rate":68360.03906084642,"date":"2021-11-10","result_code":0}

http://localhost:3000/?token=BTC

{"USD":6843826.80863425,"BTC":"100","rate":68438.2680863425,"date":"2021-11-13","result_code":0}

http://localhost:3000/

{"USD":148757.31263915886,"SOL":"600","rate":247.92885439859808,"date":"2021-11-15","result_code":0}

3. 429 error

429	Too many requests -- You have exceeded your API key rate limits
