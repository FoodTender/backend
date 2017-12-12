const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');
const Recipe = require('../models/recipe');

// --- Get clicked recipe --- //
router.get('/recipes/:id', (req, res, next) => {
    console.log('recipes-');
    // let recipeId = req.params.id;
    // console.log('recipeId: ' + recipeId);

    // Recipe.findById(recipeId, (err, recipe) => {
    //     if (err) {
    //         throw next(err);
    //     }
    //     console.log(recipe);
    // });
});

// --- Get recipes by selected ingredients --- //
router.get('/recipes', (req, res, next) => {
    let ingredients = req.query.ingredients || '';
    let resultantRecipes = [];

    ingredients = ingredients.replace(/_/g, ' ');

    Ingredient.getIdsFromNames(ingredients.split(','))
        .then((ingredientIds) => {
            // db.recipes.find({ingredients: {$all: ['Potato', 'Egg', 'Cheese', 'Bacon', 'Breadcrumbs']}, ingredients: {$size: 5}})
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
