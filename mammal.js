var mongoose = require('mongoose');

//define mongoose schema (js object template)
var mammalSchema = new mongoose.Schema({
	name: String,
	type: String,
	year_extinct: Number
});

//define mongoose model (js object constructor, using defined template)
var ExtinctMammal = mongoose.model('ExtinctMammal', mammalSchema);

//export data to api.js
module.exports = ExtinctMammal;