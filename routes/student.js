const express = require('express');

const passport = require('passport');

const routes = express.Router();

const StudentController = require('../controllers/StudentController');

routes.post('/StudentAdmision',passport.authenticate('jwt',{failureMessage : false}),StudentController.StudentAdmision);

routes.get('/GetAllStudentDetails',passport.authenticate('jwt',{failureMessage : false}),StudentController.GetAllStudentDetails);

routes.delete('/RemoveStudentDetails/:id',passport.authenticate('jwt',{failureMessage : false}),StudentController.RemoveStudentDetails);

routes.patch('/UpdateStudentDetails/:id',passport.authenticate('jwt',{failureMessage : false}),StudentController.UpdateStudentDetails);

routes.get('/GetsingalStudentDetails',passport.authenticate('jwt',{failureMessage : false}),StudentController.GetsingalStudentDetails);

routes.get('/Fetchstudent',StudentController.Fetchstudent);

module.exports = routes;