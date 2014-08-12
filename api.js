var ExtinctMammal = require ('./mammal');

//retrieve data from database
var listMammals = (function(req, res){
	//reference the mongo database with Mongo command: 'collection.find()'
	mammal.ExtinctMammal.find(function (err, data) {
  		if (err) return console.error(err);
  		res.send(data);
	});

	console.log("get ok");
});

//add data to the database
var addMammals = (function(req, res){
	console.log("Yeah Post!");
	//Construcing a new mongo document (constructing a js object)
	var newMammal = new ExtinctMammal({
		name: req.body.name,
		type: req.body.type,
		year_extinct: req.body.year_extinct
	});

	console.log(req.body);
	res.status(201).json(newMammal);
	newMammal.save(function(err,newMammal) {
		if(err)return console.error(err);
	});
});

module.exports = {
	get: listMammals,
	post: addMammals
};