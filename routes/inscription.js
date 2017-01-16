var express = require('express');
var router = express.Router();
var User = require('../models/inscriptions');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('inscription', { title: 'Blog' });
});

router.post('/', function(req, res, next){
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.mdp;

    req.checkBody('name', 'Pseudo Vide').notEmpty();
    req.checkBody('email', 'Email Invalide').isEmail();
    req.checkBody('mdp', 'Mot de passe vide').notEmpty();

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
        res.redirect('/connexion');
    }
});

module.exports = router;
