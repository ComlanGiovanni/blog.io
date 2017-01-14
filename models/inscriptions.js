var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/chocolat');

var db = mongoose.connection;

var UserSchema = mongoose.Schema({
    name: String,
    password: String,
    email: String
});

var User = module.exports = mongoose.model('Student', UserSchema);

module.exports.createUser = function (newUser, callback){
    bcrypt.hash(newUser.password,10, function (err, hash) {
        if(err)throw err;
        newUser.password = hash;
        newUser.save(callback)
    });
};