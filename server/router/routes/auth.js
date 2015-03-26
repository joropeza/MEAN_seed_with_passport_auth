var express = require('express');
var passport = require('passport');
var router = express.Router();


// =====================================
    // TWITTER ROUTES ======================
    // =====================================
    // route for twitter authentication and login
    router.get('/twitter', passport.authenticate('twitter'));

    // handle the callback after twitter has authenticated the user
    router.get('/twitter/callbackOLD',
        passport.authenticate('twitter', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));

    router.get('/twitter/callback', function(req, res, next) {

    passport.authenticate('twitter', {
        failureFlash: true
    }, function(err, user, info) {
        if (err) {
            return next(err); // will generate a 500 error
        }
        // Generate a JSON response reflecting authentication status
        if (!user) {
            return res.send({
                success: false,
                message: 'authentication failed'
            });
        }
        //return res.redirect('#/profile');
        //return res.redirect('#/');
        //res.redirect('#/');

        return res.render('profile.ejs', {
            user: user // get the user out of session and pass to template
        });
        return res.send({
            success: true,
            message: 'authentication succeeded',
            user: user
        });
    })(req, res, next);
});


// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login
router.get('/facebook', passport.authenticate('facebook', {
    scope: ['email', 'user_photos']
}));


// handle the callback after facebook has authenticated the user
router.get('/facebook/callback', function(req, res, next) {

    passport.authenticate('facebook', {
        failureFlash: true
    }, function(err, user, info) {
        if (err) {
            return next(err); // will generate a 500 error
        }
        // Generate a JSON response reflecting authentication status
        if (!user) {
            return res.send({
                success: false,
                message: 'authentication failed'
            });
        }
        //return res.redirect('#/profile');
        //return res.redirect('#/');
        //res.redirect('#/');

        return res.render('profile.ejs', {
            user: user // get the user out of session and pass to template
        });
        return res.send({
            success: true,
            message: 'authentication succeeded',
            user: user
        });
    })(req, res, next);
});



module.exports = router;