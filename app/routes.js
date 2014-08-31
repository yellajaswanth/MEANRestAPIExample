// app/routes.js
var userDB = require('../app/models/userModel');

module.exports = function (app) {
	
	//server routes ==============
	//handle things like api calls
	//authentication routes

	//sample api route

	app.get('/app/users', function(req,res){

		//use mongoose to get all users in the database
		Users.find(function(err, users){

			if(err)
				res.send(err);

			res.json(users); //return all users in JSON Format
		});

	});

	app.get('/api/users', function(req,res){
		userDB.find(function(err, users){
			if(err)
				res.send(err);
			res.json(users);
		});	

	});

	app.get('/api/users/:user_id', function(req,res){
		userDB.findById(req.params.user_id,function(err,user){
			if(err)
				res.json({error:'No user present with that id :('});
			res.json(user);
		});
	});

	app.delete('/api/users/:user_id',function(req, res){
		userDB.remove({
			_id:req.params.user_id
		}, function(err, bear){
			if(err)
				res.send(err);
			res.json({message:'User deleted'});
		});
	});

	app.post('/api/users/:user_id', function(req, res){
		userDB.findById(req.params.user_id,function(err,user){
			if(err)
				res.send(err);
			user.FirstName = req.body.FirstName;
			user.MiddleName = req.body.MiddleName;
			user.LastName = req.body.LastName;
			user.Mobile = req.body.Mobile;
			user.Location = req.body.Location;

			user.save(function(err){
				if(err)
					res.send(err);
				console.log('Updating...');
				res.json({message:'User updated!'});
			});

		});
	});

	
	app.post('/api/users',function(req, res){
		
		var user = new userDB();
		user.FirstName = req.body.FirstName;
		user.MiddleName = req.body.MiddleName;
		user.LastName = req.body.LastName;
		user.Mobile = req.body.Mobile;
		user.Location = req.body.Location;

		console.log(typeof(user.FirstName) + ' : ' +user.FirstName);
		user.save(function(err){
			if(err)
				res.send(err);
			console.log('Inserting...');
			res.json({message:'User created!'});
		});
	});	

	app.get('*', function(req, res){
		res.sendfile('./public/index.html'); //load our public/index.html file
	});



};


