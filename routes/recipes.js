const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');
const Recipe = require('../models/recipe');

// --- Get clicked recipe --- //
router.get('/recipes/:id', (req, res, next) => {
    let recipeId = req.params.id;

    Recipe.findById(recipeId)
        .populate('ingredients.ingredient')
        .exec(function (err, recipe) {
            if (err) {
                throw next(err);
            }
            res.json(recipe);
        });
});

// --- Get recipes by selected ingredients --- //
router.get('/recipes', (req, res, next) => {
    let ingredients = req.query.ingredients || '';
    ingredients = ingredients.replace(/_/g, ' ');

    Ingredient.getIdsFromNames(ingredients.split(','))
        .then((ingredientIds) => { // First exclude all the ingredients the user doesn't have
            Ingredient.find({ _id: { $nin: ingredientIds } }, (err, ingredientsExcluded) => {
                if (err) {
                    throw next(err);
                }
                // Find recipes with ingredients that aren't excluded
                Recipe.find({ 'ingredients.ingredient': { $nin: ingredientsExcluded } }, (err, recipes) => {
                    if (err) {
                        throw next(err);
                    }
                    res.json(recipes);
                });
            });
        });
});

module.exports = router;
