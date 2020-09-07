const routes = require('express').Router();
const routeController = require('../controllers/routeController');

routes.get('/', routeController.getIndex);
routes.get('/items', routeController.getItems);


module.exports = routes;