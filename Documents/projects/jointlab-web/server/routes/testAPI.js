var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index', { title: 'API is working' });
});

module.exports = router;
