
const CalculateEmissionsForInputtedFarm = require('../services/calculateEmissionsForIndividualFarm.js');

const farm = async (req, res) => {
	try {
		let data = await CalculateEmissionsForInputtedFarm(req, res)
			if (data) {
				res.status(200).send(JSON.stringify(data));
			}
	} catch (err) {
		res.status(500).send({
			message: `Could not calculate emissions: ${err}`,
		});
	}
};

module.exports = {
	farm,
};
