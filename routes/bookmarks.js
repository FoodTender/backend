const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');
const User = require('../models/user');

router.get('/bookmarks', (req, res, next) => {
    Recipe.find({});
});

module.exports = router;
