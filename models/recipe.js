const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: String,
  ingredients: [{
    ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' },
    quantity: Number,
    unit: String
  }],
  picture: String,
  time: String,
  servings: Number,
  directions: String,
  ratings: Number,
  difficulty: String,
  calories: Number
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  });

module.exports = mongoose.model('Recipe', recipeSchema);
