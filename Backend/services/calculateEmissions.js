const NodeCache = require('node-cache');

let CalculateTotalAverageEmissions = (farmData) => {
	return {
		scope1AveragePerAcre: CalculateFossilFuelsEmissions(farmData),
		scope2AveragePerUnit: CalculateElectricityEmissions(farmData),
		scope3AveragePerCow: CalculateFoodPurchasesEmissions(farmData),
	};
};

const CalculateFossilFuelsEmissions = (farmData) => {
	let totalDieselAmount = 0;
	let totalAcreage = 0;
	Object.values(farmData).map((farm, index) => {
		totalDieselAmount += farm.purchases.Diesel;
		totalAcreage += farm.acres;
	});

	let totalCo2FromDiesel = totalDieselAmount * 2.68787;
	let averageEmissionsForOneAcre = totalCo2FromDiesel / totalAcreage;
	return averageEmissionsForOneAcre;
};

const CalculateElectricityEmissions = (farmData) => {
	let totalAmountOfElectricity = 0;
	Object.values(farmData).map((farm, index) => {
		totalAmountOfElectricity += farm.purchases.Electricity;
	});

	let totalCo2FromElectricity = totalAmountOfElectricity * 0.23314;
	let averageEmissionsForOneKiloWattHour =
		totalCo2FromElectricity / totalAmountOfElectricity;
	return averageEmissionsForOneKiloWattHour;
};

const CalculateFoodPurchasesEmissions = (farmData) => {
	let totalAmountOfFeed = 0;
	let totalNumberOfCows = 0;
	Object.values(farmData).map((farm, index) => {
		totalAmountOfFeed += farm.purchases['Soy for cows'];
		totalAmountOfFeed += farm.purchases['Gras for cows'];
		totalNumberOfCows += farm.cows;
	});

	let totalCo2FromFeed = totalAmountOfFeed * 1.3289;
	let averageEmissionsForOneCow = totalCo2FromFeed / totalNumberOfCows;
	return averageEmissionsForOneCow;
};

module.exports = {
	CalculateTotalAverageEmissions,
};
