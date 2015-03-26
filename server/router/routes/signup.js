var express = require('express');
var passport = require('passport');
var router = express.Router();

router.post('/', passport.authenticate('local-signup', {
        successRedirect : '#/profile', // redirect to the secure profile section
        failureRedirect : '#/user', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

router.get('/', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.send({ message: req.flash('signupMessage') });
	});

module.exports = router;