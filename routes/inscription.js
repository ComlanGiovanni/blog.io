var express = require('express');
var router = express.Router();
var User = require('../models/inscriptions')
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('inscription', { title: 'Blog' });
});

router.post('/', function(req, res, next){
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.mdp;

    req.checkBody('name', 'Nom vide').notEmpty();
    req.checkBody('email', 'Pas email').isEmail();
    req.checkBody('mdp', 'mdp vide').notEmpty();

    var errors = req.validationErrors();

    if(errors){
        res.render('inscription',{
            errors: errors,
            name: name,
            email: email,
            password: password
        });
    } else {
        var newUser =  new User({
            errors: errors,
            name: name,
            email: email,
            password: password
        });

        User.createUser(newUser, function (err, user) {
            if(err) throw err;
            console.log(user);
        });

        //req.flash('sucess','Bine inscris');

        //req.location('/');
        res.redirect('/');
    }
});

module.exports = router;
