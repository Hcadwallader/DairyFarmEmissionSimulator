const calculateEmissionsForFarm = require('../services/calculateEmissions');

const farm = async (req, res) => {
	try {
		await calculateEmissionsForFarm(req, res);
		if (req.farm == undefined) {
			return res
				.status(400)
				.send({ message: 'Please include farm data' });
		}

		res.status(200).send({
			message: 'FarmDataUploadedCorrectly: ' + req.file.originalname,
		});
	} catch (err) {
		res.status(500).send({
			message: `Could not upload the data: ${err}`,
		});
	}
};

module.exports = {
	farm,
};
