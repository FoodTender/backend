const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');
const Recipe = require('../models/recipe');

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
router.get('/recipes', (req, res, next) => {
    const ingredients = req.query.ingredients;
    console.log('Ingredients: ' + ingredients);
    if (ingredients.length > 0) {
        Recipe.find().populate('ingredients.ingredient')
        .exec((err, recipe) => {
            if (err) {
                return next(err);
            }
            recipe.forEach(ingredients => {
                // console.log('Recipe ' + recipe.name + ': ' + ingredient.name);
                console.log(JSON.stringify(ingredients));
                for (var i in ingredients) {
                    console.log(i);
                }
            });
            // console.log('Recipe: ' + recipe);
        });
    }
    // let findQuery = {};
});

module.exports = router;
