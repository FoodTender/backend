const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ title: 'Welcome to the darkside of FoodTender' });
});

module.exports = router;
