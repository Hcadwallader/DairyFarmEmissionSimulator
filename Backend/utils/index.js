const Excel = require('exceljs');
const wb = new Excel.Workbook();
const filePath = '../resources/uploads/farmdata.xlsx';

let readFileInMemory = () => {
    
	wb.xlsx.readFile(filePath).then(function () {
		const farmsData = wb.getWorksheet('Farms');
		const purchaseData = wb.getWorksheet('Purchases');
		console.log(farmsData);
		console.log(purchaseData);

		// sh.getRow(1).getCell(2).value = 32;
		// wb.xlsx.writeFile('sample2.xlsx');
		// console.log('Row-3 | Cell-2 - ' + sh.getRow(3).getCell(2).value);

		// console.log(sh.rowCount);
		// //Get all the rows data [1st and 2nd column]
		// for (i = 1; i <= sh.rowCount; i++) {
		// 	console.log(sh.getRow(i).getCell(1).value);
		// 	console.log(sh.getRow(i).getCell(2).value);
		// }
	});
};

module.exports = readFileInMemory;
