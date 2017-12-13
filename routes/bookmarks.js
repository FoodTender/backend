const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');
const User = require('../models/user').User;

router.get('/bookmarks', (req, res, next) => {
    console.log('route');
    // User.findOne({ username: req.user.username }, (err, user) => {
    //     if (err) {
    //         throw next(err);
    //     }
    //     console.log(user);
    // });

    User.findOne({ username: req.user.username }, 'bookmarks')
        .populate('bookmarks')
        .exec(function (err, bookmarks) {
            if (err) {
                throw next(err);
            }
            console.log(bookmarks);
            res.json(bookmarks);
        });
});

module.exports = router;
