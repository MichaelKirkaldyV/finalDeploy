var mongoose = require('mongoose');

//Sets database
var UserSchema = new mongoose.Schema({
  username: {type: String, required: [true, "Name is needed"], minlength: [3, "Name must be at least 3 characters"], maxlength: 50},
  password: {type: String, required: [true, "Name is needed"], minlength: [3, "Name must be at least 3 characters"], maxlength: 50},

})

//Get database
mongoose.model('User', UserSchema); // We are setting these Schema in our Models.
