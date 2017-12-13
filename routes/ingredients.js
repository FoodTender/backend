const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');

// --- GET ingredients on autocomplete input --- //
router.get('/ingredients', (req, res, next) => {
    const terms = req.query.terms;
    let findQuery = {};

    if (terms !== undefined && terms.length > 0) {
        const search = new RegExp('^' + terms, 'i');
        findQuery = { name: search };
        Ingredient.find(findQuery, (err, ingredient) => {
            if (err) {
                return next(err);
            }
            res.json(ingredient);
        });
    } else {
        res.json(null);
    }
});

// --- GET all ingredients --- //
router.get('/ingredients/all', (req, res, next) => {
    Ingredient.find({}, (err, ingredient) => {
        if (err) {
            return next(err);
        }
        res.json(ingredient);
    });
});

module.exports = router;
