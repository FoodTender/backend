const express = require('express');
const router = express.Router();
const User = require('../models/user').User;

router.get('/bookmarks', (req, res, next) => {
    User.findOne({ username: req.user.username }, 'bookmarks')
        .populate('bookmarks')
        .exec(function (err, bookmarks) {
            if (err) {
                throw next(err);
            }
            res.json(bookmarks);
        });
});

module.exports = router;
