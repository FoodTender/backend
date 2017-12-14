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
    let recipeId = req.params.recipeId;
    console.log('route');
    Recipe.findById(recipeId, (err, recipe) => {
        if (err) {
            throw next(err);
        }
        console.log(recipe);

        // Add User.bookmarks.push(recipe)
        User.findOne({ username: req.user.username }, (err, user) => {
            if (err) {
                throw next(err);
            }
            user.bookmarks.push(recipe._id);
            user.save((err) => {
                if (err) {
                    throw next(err);
                }
            });
            console.log(user);
        });
    });
});

module.exports = router;
