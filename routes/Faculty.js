const express = require('express');

const passport = require('passport');

const routes = express.Router();

const FacultyController = require('../controllers/FacultyConroller');

routes.post('/AddFaculty',FacultyController.AddFaculty);

routes.get('/FacultyPersonalDetails',FacultyController.FacultyPersonalDetails);

routes.get('/GetFacultuDetails',passport.authenticate('jwt',{failureMessage : false}),FacultyController.GetFacultuDetails);

routes.delete('/RemoveFacultyDeatils/:id',passport.authenticate('jwt',{failureMessage : false}),FacultyController.RemoveFacultyDeatils);

routes.patch('/UpdateFacultyDetails/:id',passport.authenticate('jwt',{failureMessage : false}),FacultyController.UpdateFacultyDetails);
module.exports = routes;