let mongoose = require('mongoose');
let connection;

module.exports = function () {
	if (!connection){
		return connection = mongoose.createConnection('mongodb://apponte:senha@ds239968.mlab.com:39968/apponte');
	}
	
  return connection;
}

