const express = require('express');
const router = express.Router();
const uploadcontroller = require('../controllers/upload.controller');
const farmcontroller = require('../controllers/farm.controller');

let routes = (app) => {
	router.post('/upload', uploadcontroller.upload);

	router.post('/farm', farmcontroller.farm);

	app.use(express.json());
	app.use(express.urlencoded({
		extended: true
	}));

	app.use(router);
};

module.exports = routes;
