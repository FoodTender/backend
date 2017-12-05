const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');

// --- GET ingredients --- //
router.get('/ingredients', (req, res, next) => {
    Ingredient.find({}, (err, ingredient) => {
        if (err) { return next(err); }
        res.json(ingredient);
    });
});

module.exports = router;
