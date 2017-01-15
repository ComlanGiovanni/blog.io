const models  = require('../models/article');

var Articles = {
    index: function (req, res) {
        models
            .Article
            .findAll()
            .then(function(articles) {
                res.render('index', {
                    articles: articles
                });
            });

        console.log('test');

    },
    create : function(req, res) {
        models.Article.create({ dataArticle: 'Ceci est un test magle'}).then(function() {
            res.send({error : null});
        }, function () {
            res.send({error : '1'});
        });
    }
};

module.exports = Articles;