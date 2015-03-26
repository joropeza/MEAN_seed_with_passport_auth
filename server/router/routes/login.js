var express = require('express');
var passport = require('passport');
var router = express.Router();

router.post('/', function(req, res, next) {
  passport.authenticate('local-login', { failureFlash: true }, function(err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (! user) {
      return res.send({ success : false, message : 'authentication failed' });
    }
    return res.send({ success : true, message : 'authentication succeeded', user: user });
  })(req, res, next);
});

router.get('/', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.send({ message: req.flash('loginMessage') });
	});

module.exports = router;