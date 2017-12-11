const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');
// const Recipe = require('../models/recipe');

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

// router.get('/ingredients/basics', (req, res, next) => { // For autocompleting chips
//     Ingredient.find({basic: true}, (err, ingredient) => {
//         if (err) {
//             return next(err);
//         }
//         console.log(ingredient.name);
//         res.json(ingredient);
//     });
// });

// --- Get recipes by selected ingredients --- //
// router.get('/recipes', (req, res, next) => {
//     const ingredients = req.query.ingredients || '';
//     console.log('Ingredients: ' + ingredients);

//     Ingredient.getIdsFromNames(ingredients.split(','))
//         .then((ingredientIds) => {
//             console.log(ingredientIds);
//             Recipe.find({ 'ingredients.ingredient': { $all: ingredientIds } }, (err, ingredient) => {
//                 if (err) {
//                     throw next(err);
//                 }
//                 console.log(ingredient);
//                 res.json(ingredient);
//             });
//             // const filter = {};
//             // Recipe.find(filter).populate('ingredients.ingredient')
//             //     .exec((err, recipes) => {
//             //         if (err) {
//             //             return next(err);
//             //         }
//             //         res.json(recipes);
//             //     });
//         });
// });

module.exports = router;
