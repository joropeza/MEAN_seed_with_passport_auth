var express = require('express');
var passport = require('passport');
var router = express.Router();

var Users = require('../../models/user');


router.get('/', isLoggedIn, function(req, res) {
		Users.findOne({'_id':req.headers.authorization},function(err, doc) {

          res.send(doc)
          
        });
	});

// route middleware to make sure
function isLoggedIn(req, res, next) {

	console.log(req.headers)
	// if user is authenticated in the session, carry on
	if (req.headers.authorization) {
		return next();
	}

	// if they aren't redirect them to the home page
	//res.redirect('/');
}

module.exports = router;