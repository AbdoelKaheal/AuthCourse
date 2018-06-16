const mongoose = require('mongoose');
const { databasePassword, databaseUsername } = require('../config');
mongoose.Promise = global.Promise;

mongoose
	.connect(
		`mongodb://${databaseUsername}:${databasePassword}@ds151970.mlab.com:51970/authrn`
	)
	.then(() => console.log('DB connected'))
	.catch(err => console.log(err));

module.exports = mongoose;
