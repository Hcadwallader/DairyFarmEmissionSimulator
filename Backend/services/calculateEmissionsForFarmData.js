
let calculateTotalEmissionsForFarmData = (farmData) => {
	let scope1AveragePerAcre = CalculateFossilFuelsEmissions(farmData);
	console.log(scope1AveragePerAcre);
	let scope2AveragePerUnit = CalculateElectricityEmissions(farmData);
	console.log(scope2AveragePerUnit);
	let scope3AveragePerCow = CalculateFoodPurchasesEmissions(farmData);
	console.log(scope3AveragePerCow);

	return {
		scope1AveragePerAcre: scope1AveragePerAcre,
		scope2AveragePerUnit: scope2AveragePerUnit,
		scope3AveragePerCow: scope3AveragePerCow,
	};
};

const CalculateFossilFuelsEmissions = (farmData) => {
	console.log('fossil fuels');
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
	console.log('Electricity');
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
	console.log('food purchase');
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

module.exports = calculateTotalEmissionsForFarmData;
