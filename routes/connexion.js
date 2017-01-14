var express = require('express');
var router = express.Router();
var User = require('../models/connexions');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('connexion', { title: 'Blog' });
});

passport.serializeUser(function (user, done) {
   done (null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.getUserById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy(
    function (username, password, done){
        User.getUserByUsername(username, function (err, user) {
            if(err) throw err;
            if(!user){
                console.log('Non');
                return done(null, false,{message: "Non"});
            }
            User.comparePassword(password, user.password, function (err, isMatch){
                if(err) throw err;
                if(isMatch) {
                    return done(null, user);
                }else {
                    console.log('Invalid mdp');
                    return done(null, false, {message:'invalide mdp'});
                }
            })
        });
    }
));

router.post('/', passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    });

module.exports = router;