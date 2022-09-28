const express = require('express');

const routes = express.Router();

const passport = require('passport');

const AdminController = require('../controllers/AdminController');

routes.post('/AddAdmin',AdminController.AddAdmin);

routes.post('/AdminLogin',AdminController.AdminLogin);

routes.use('/student',require('./student'));
routes.use('/faculty',require('./Faculty'));

module.exports = routes;