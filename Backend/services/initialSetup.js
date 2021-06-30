const Excel = require('exceljs');
var path = require('path');
var filePath = path.resolve(__dirname, '../resources/uploads/farmdata.xlsx');
const wb = new Excel.Workbook();
const calculateTotalEmissionsForFarmData = require('./calculateEmissionsAverages');
const uploadInitialFarmData = require('./extractInitialFarmData');

const readFarmData = (myCache) => {
	console.log('About to start reading file at ' + filePath);
	wb.xlsx
		.readFile(filePath)
		.then((wb) => {
			let farmData = uploadInitialFarmData(wb);
			myCache.set('farmData', farmData);
			return farmData;
		})
		.then((farmData) => {
			let emissions = calculateTotalEmissionsForFarmData(farmData);
			myCache.set('averageEmissions', emissions);
			return emissions;
		});
};

module.exports = readFarmData;
