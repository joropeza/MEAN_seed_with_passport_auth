
//require node modules (see package.json)
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;



function getSomething(cb) {

	var stuff = [];

  cb(null, stuff);

}

module.exports = {
  getSomething: getSomething
}