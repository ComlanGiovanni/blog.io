var express = require('express');
var router = express.Router();

var articles = require('../controllers/Articles');

router.get('/', articles.index);
router.post('/', articles.create);


module.exports = router;