var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//mongoose.connect('mongodb://Student:projetblog66projetblog@ds111559.mlab.com:11559/student_user');

//var db = mongoose.connection;
/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  //var db = req.db;
  //var posts = db.get('posts');
  posts.find({},{},function(err, posts){
    res.render('home',{
      "posts": posts
    });
  });
});*/

router.get('/', function(req, res, next) {
    res.render('home', { title: 'Blog' });
});


module.exports = router;