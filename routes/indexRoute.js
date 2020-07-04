const express = require('express');
const route = express.Router();
const ValidationController = require('../controllers/ValidationController');

route.get('/', ValidationController.formOpen);
route.post('/form', ValidationController.formSubmit);

module.exports = route;