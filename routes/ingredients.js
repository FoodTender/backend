const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');

// --- Get ingredients on searcher, autocomplete input --- //
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

// --- Get recipes by selected ingredients --- //
// router.get('/recipes', (req, res, next) => {
//     const ingredients = req.query.ingredients;

//     console.log('ingredients: ' + JSON.stringify(ingredient));
//     // let findQuery = {};

//     // findQuery = { name: search };
//     // Ingredient.find(findQuery, (err, ingredient) => {
//     //     if (err) {
//     //         return next(err);
//     //     }
//     //     res.json(ingredient);
//     // });
// });

module.exports = router;
