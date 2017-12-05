var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  //throw new Error('asdfasdfasdadsf');
  res.json({ title: 'Welcome to the darkside of FoodTender' });
});

module.exports = router;
