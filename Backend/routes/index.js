const express = require('express');
const router = express.Router();
const controller = require('../controllers/upload.controller');

let routes = (app) => {
	router.post('/upload', controller.upload);

    router.get('/', function (req, res) {
        res.send('Hello world');
    });

	app.use(router);
};

module.exports = routes;
