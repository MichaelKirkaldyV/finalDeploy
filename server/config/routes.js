var mongoose = require('mongoose');
var apiController = require('./../controllers/fulls.js')

module.exports = function(app){

	console.log("Im in the server routes")
	app.post('/api/register', apiController.register),

	//retrieves all new tasks
	app.post('/api/login', apiController.login)

	//Adds name to database
	

};