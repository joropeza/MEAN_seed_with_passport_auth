/**
 * The Index of Routes
 */

module.exports = function (app) {

	app.use('/auth', require('./routes/auth'));
	app.use('/login', require('./routes/login'));
	app.use('/signup', require('./routes/signup'));
    app.use('/profile', require('./routes/profile'));
    
}
