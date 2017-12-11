const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');
const Recipe = require('../models/recipe');

// --- Get recipes by selected ingredients --- //
router.get('/', (req, res, next) => {
    const ingredients = req.query.ingredients || '';
    console.log('Ingredients: ' + ingredients);

    Ingredient.getIdsFromNames(ingredients.split(','))
        .then((ingredientIds) => {
            console.log(ingredientIds);
            Recipe.find({ 'ingredients.ingredient': { $all: ingredientIds } }, (err, ingredient) => {
                if (err) {
                    throw next(err);
                }
                console.log(ingredient);
                res.json(ingredient);
            });
            // const filter = {};
            // Recipe.find(filter).populate('ingredients.ingredient')
            //     .exec((err, recipes) => {
            //         if (err) {
            //             return next(err);
            //         }
            //         res.json(recipes);
            //     });
        });
});

module.exports = router;
