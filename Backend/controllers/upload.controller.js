const uploadFile = require('../services/uploadFile');
const readFarmData = require('../services/readFarmData');
const CalculateTotalEmissions = require('../services/calculateEmissions');
const NodeCache = require('node-cache');

const upload = async (req, res) => {
	try {
		await uploadFile(req, res);

		if (req.file == undefined) {
			return res.status(400).send({ message: 'Please upload a file!' });
		}

		res.status(200).send({
			message: 'Uploaded the file successfully: ' + req.file.originalname,
		});
	} catch (err) {
		if (err.code == 'LIMIT_FILE_SIZE') {
			return res.status(500).send({
				message: 'File size cannot be larger than 2MB!',
			});
		}

		res.status(500).send({
			message: `Could not upload the file: ${req.file.originalname}. ${err}`,
		});
	}
	const myCache = new NodeCache();
	readFarmData(myCache);
	let value = myCache.get('farmData');
	console.log(value);
};

module.exports = {
	upload,
};
