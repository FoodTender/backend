const express = require('express');
const router = express.Router();
const User = require('../models/user').User;
const Recipe = require('../models/recipe');

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

router.put('/bookmarks/:recipeId/add', (req, res, next) => {
    console.log('route');
    let recipeId = req.params.recipeId;

    User.findOne({ username: req.user.username }, (err, user) => {
        if (err) {
            throw next(err);
        }
        if (user.bookmarks.indexOf(recipeId) < 0) { // If recipe not already bookmarked
            user.bookmarks.push(recipeId); // Push that recipe to its bookmarks
            user.save((err) => {
                if (err) {
                    throw next(err);
                }

                req.login(user, () => {
                    res.json({});
                });
            });
        }
    });
});

router.delete('/bookmarks/:recipeId/remove', (req, res, next) => {
    console.log('route');
    let recipeId = req.params.recipeId;

    User.findOne({ username: req.user.username }, (err, user) => {
        if (err) {
            throw next(err);
        }
        if (user.bookmarks.indexOf(recipeId) > -1) {
            user.bookmarks.splice(user.bookmarks.indexOf(recipeId), 1); // Push that recipe to its bookmarks
            user.save((err) => {
                if (err) {
                    throw next(err);
                }

                req.login(user, () => {
                    res.json({});
                });
            });
        }
    });
});
module.exports = router;
