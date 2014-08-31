var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
	FirstName : String,
	MiddleName : String,
	LastName : String,
	Location : String,
	Mobile : Number
	
});

module.exports = mongoose.model('User',UserSchema);