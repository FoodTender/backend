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
    let resultantRecipes = [];
    ingredients = ingredients.replace(/_/g, ' ');

    Ingredient.getIdsFromNames(ingredients.split(','))
        .then((ingredientIds) => {
            Recipe.find({ 'ingredients.ingredient': ingredientIds }, (err, recipe) => {
                if (err) {
                    throw next(err);
                }
                recipe.forEach(doc => {
                    if (doc.ingredients.length <= ingredientIds.length) {
                        resultantRecipes.push(doc);
                    }
                });
                res.json(resultantRecipes);
            });
        });
});

module.exports = router;
