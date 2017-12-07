const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');

// --- Get ingredients on searcher, autocomplete input --- //
router.get('/', (req, res, next) => {
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

module.exports = router;
