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
![image](https://user-images.githubusercontent.com/92730542/141163470-4c8bc36f-95d8-41bc-8655-29b610fb005f.png)
![image](https://user-images.githubusercontent.com/92730542/141163240-894940ef-1ddd-4437-8ca7-af492690f96f.png)

