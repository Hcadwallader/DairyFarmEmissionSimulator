const Excel = require('exceljs');
var path = require('path');
var filePath = path.resolve(__dirname, '../resources/uploads/farmdata.xlsx');
const wb = new Excel.Workbook();
const CalculateTotalEmissions = require('../services/calculateEmissions');

const readFarmData = (myCache) => {
	console.log('About to start reading file at ' + filePath);
	var details = {};
	wb.xlsx
		.readFile(filePath)
		.then(function () {
			console.log('Reading file at ' + filePath);
			const farmsData = wb.getWorksheet('Farms');
			const purchaseData = wb.getWorksheet('Purchases');
			// TODO: move all of this into a separate function?

			let rowNumber = 2; // row 1 is the headers, so start at two
			var farmName = '';

			// reading each row of the farms sheet until we reach an empty row
			do {
				farmName = farmsData.getRow(rowNumber).getCell('A').value;

				if (farmName != null) {
					if (!Object.keys(details).includes(farmName)) {
						details[farmName] = {};
					}

					details[farmName]['acres'] = farmsData
						.getRow(rowNumber)
						.getCell('B').value;
					details[farmName]['cows'] = farmsData
						.getRow(rowNumber)
						.getCell('C').value;
					details[farmName]['tractors'] = farmsData
						.getRow(rowNumber)
						.getCell('D').value;
					details[farmName]['tractorUsage'] = farmsData
						.getRow(rowNumber)
						.getCell('E').value;
					details[farmName]['machines'] = farmsData
						.getRow(rowNumber)
						.getCell('F').value;
					details[farmName]['machinesUsage'] = farmsData
						.getRow(rowNumber)
						.getCell('G').value;
					details[farmName]['milk'] = farmsData
						.getRow(rowNumber)
						.getCell('H').value;
				}

				rowNumber = rowNumber + 1;
			} while (farmName != null); // if the name is null assume we've reached the end of the table

			// reset these back for the second sheet
			rowNumber = 2;
			farmName = '';

			// reading each row of the purchases sheet until we reach an empty row
			do {
				farmName = purchaseData.getRow(rowNumber).getCell('A').value;
				const type = purchaseData.getRow(rowNumber).getCell('B').value;

				if (farmName != null) {
					if (!Object.keys(details).includes(farmName)) {
						details[farmName] = {};
					}
					if (!Object.keys(details[farmName]).includes('purchases')) {
						details[farmName]['purchases'] = {};
					}

					let amount = purchaseData.getRow(rowNumber).getCell('C')
						.value.result;
					const unit = purchaseData
						.getRow(rowNumber)
						.getCell('D').value;

					if (unit == 'gallon') {
						amount = convertGallonToLitre(amount);
					} else if (unit == 'ton') {
						amount = convertTonToKg(amount);
					}

					details[farmName]['purchases'][type] = amount;
				}

				rowNumber = rowNumber + 1;
			} while (farmName != null);
			return details; // if the name is null assume we've reached the end of the table
		})
		.then((details) => {
			myCache.set('farmData', details);
		});
	return details;
};

const convertGallonToLitre = (gallon) => {
	return gallon * 4.54609;
};

const convertTonToKg = (ton) => {
	return ton * 1000;
};

module.exports = readFarmData;
