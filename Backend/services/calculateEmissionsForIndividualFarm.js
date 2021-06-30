const myCache = require('../utils/cache');

let CalculateEmissionsForInputtedFarm = (req, res) => {
	let averageEmissions = myCache.get('averageEmissions');

	// Validate the input
	if (averageEmissions === undefined || averageEmissions === {}) {
		console.error(
			'Failed to read averages out of cache - has a source file been uploaded yet?'
		);
		throw 'Failed to read averages out of cache - has a source file been uploaded yet?';
	} else if (invalidInput(req.body)) {
		console.error('Invalid input submitted - please populate all fields');
		throw 'Invalid input submitted - please populate all fields';
	}

	let farmEmissions = {};

	// already have averages for each, so multiply them out to work out specifics for this farm
	farmEmissions.scope1 = (
		averageEmissions.scope1AveragePerAcre * req.body.size
	).toFixed(2);
	farmEmissions.scope2 = (
		averageEmissions.scope2AveragePerUnit * req.body.milkMachines
	).toFixed(0);
	farmEmissions.scope3 = (
		averageEmissions.scope3AveragePerCow * req.body.numberOfCows
	).toFixed(0);

	farmEmissions.totalEmissions =
		farmEmissions.scope1 + farmEmissions.scope2 + farmEmissions.scope3;

	farmEmissions.perLitreOfMilk = (
		farmEmissions.totalEmissions / req.body.quantityOfMilk
	).toFixed(2);
	farmEmissions.name = req.body.name;

	return farmEmissions;
};

const invalidInput = (input) => {
	if (input === undefined || input === {}) {
		return true;
	} else if (
		input.size === undefined ||
		input.milkMachines === undefined ||
		input.numberOfCows === undefined ||
		input.quantityOfMilk === undefined
	) {
		return true;
	} else {
		return false;
	}
};

module.exports = CalculateEmissionsForInputtedFarm;
