const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');
const User = require('../models/user');

router.get('/bookmarks', (req, res, next) => {
    User.find('bookmarks')
        .populate('bookmarks')
        .exec(function (err, bookmark) {
            if (err) {
                throw next(err);
            }
            console.log(bookmark);
            res.json(bookmark);
        });
});

module.exports = router;
