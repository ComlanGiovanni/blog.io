var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

//mongoose.connect('mongodb://localhost/chocolat');

var db = mongoose.connection;

var UserSchema = mongoose.Schema({
    name: String,
    password: String,
    email: String
});

//var User = module.exports = mongoose.model('Student', UserSchema);

module.exports.comparePassword = function (candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function (err, isMatch){
        if(err) return callback(err);
        callback(null, isMatch);
    })
};

module.exports.getUserById = function (username, callback){
    User.findById(query, callback);
};

module.exports.getUserByUsername = function (username, callback){
    var query = {username: username};
    User.findOne(query, callback);
};
