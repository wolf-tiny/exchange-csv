const csv = require('csv-parser');
const fs = require('fs');

const getData = new Promise(function (resolve, reject) {
	var csvData = [];

	fs.createReadStream('data.csv')
		.pipe(csv())
		.on('data', (row) => {
			csvData.push(row);
		})
		.on('end', function () {
			resolve(csvData);
		})
});

module.exports = {
	getData
}
