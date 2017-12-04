const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: String,
    ingredients: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }
    ],
    picture: String,
    time: String,
    servings: number,
    directions: String,
    ratings: number,
    difficulty: String
}, {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;