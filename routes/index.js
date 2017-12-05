const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // throw new Error('asdfasdfasdadsf');
  // res.send('no-error');
  res.json({ title: 'Welcome to the darkside of FoodTender' });
});

module.exports = router;
