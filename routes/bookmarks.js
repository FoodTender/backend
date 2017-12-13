const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');
const User = require('../models/user');

router.get('/bookmarks', (req, res, next) => {
    console.log('route');
    User.find({}, 'bookmarks', (err, bookmark) => {
        if (err) {
            return next(err);
        }
        res.json(bookmark);
    });
    // User.find()
    //     .populate('bookmarks')
    //     .exec(function (err, bookmark) {
    //         if (err) {
    //             throw next(err);
    //         }
    //         console.log(bookmark);
    //         res.json(bookmark);
    //     });
});

module.exports = router;
