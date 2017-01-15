"use strict";

module.exports = function(sequelize, DataTypes) {

    var Article = sequelize.define('Article', {
        dataArticle: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models){

            }
        }
    });
    return Article;
};