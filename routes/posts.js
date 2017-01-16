var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//mongoose.connect('mongodb://Student:projetblog66projetblog@ds111559.mlab.com:11559/student_user');
//var db = mongoose.connection;

router.get('/', function(req, res, next) {
    /*
    var categories = db.get('categories');
    categories.find({},{}, function(err, categories) {
        res.render('addpost', { title: 'ADD' ,
        "categories" : categories
        });
    });
    */
    res.render('addpost', { title: 'Blog' });
});
/*
router.post('/', function(req, res, next) {
    var title = req.body.title;
    var category = req.body.category;
    var body = req.body.body;
    var author = req.body.author;
    var date = new Date();

    if(req.files.mainimage){
        var  mainImageOriginalName = req.files.mainimage.originalname;
        var  mainImageName = req.files.mainimage.name;
        var  mainImageMine = req.files.mainimage.minetype;
        var  mainImagePath = req.files.mainimage.path;
        var  mainImageExt = req.files.mainimage.extension;
        var  mainImageSize = req.files.mainimage.size;

    }else {
        var mainImageName = 'noimage.png';
    }

    req.checkBody('title', 'Il faut un Titre').notEmpty();
    req.checkBody('body', 'Il faut un body');

    var errors = req.validationErrors();

    if(errors){
        res.render('addpost',{
            "errors": errors,
            "title": title,
            "body": body
        });
    }else {
        var posts = db.get('posts');
        posts.insert({
            "title": title,
            "body": body,
            "category": category,
            "date": date,
            "author": author,
            "main image": mainImageName
        },function (err, post){
            if(err){
                res.send('Impossible')
            }else {
                req.location('/');
                res.redirect();
            }
        })
    }

});
*/
module.exports = router;