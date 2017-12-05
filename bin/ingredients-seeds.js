const Ingredients = require('../models/ingredient').Recipe;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/foodtender');

const ingredients = [

  {
    name: 'Sunflower Oil',
    basic: true
  },
  {
    name: 'Butter',
    basic: true
  },
  {
    name: 'Salt',
    basic: true
  },
  {
    name: 'Black Pepper',
    basic: true
  },
  {
    name: 'Olive Oil',
    basic: true
  },
  {
    name: 'Vinegar',
    basic: true
  },
  {
    name: 'Herbs',
    basic: true
  },
  {
    name: 'White sugar',
    basic: true
  },
  {
    name: 'Vanilla Extract',
    basic: true
  },
  {
    name: 'Milk',
    basic: true
  },
  {
    name: 'Sweetened Condensed Milk',
    basic: false
  },
  {
    name: 'Heavy Cream',
    basic: false
  },
  {
    name: 'Egg',
    basic: false
  },
  {
    name: 'Onion',
    basic: false
  },
  {
    name: 'Garlic',
    basic: false
  },
  {
    name: 'Beef Minced',
    basic: false
  },
  {
    name: 'Beef',
    basic: false
  },
  {
    name: 'Mushroom',
    basic: false
  },
  {
    name: 'Tomato',
    basic: false
  },
  {
    name: 'Tomato Chopped',
    basic: false
  },
  {
    name: 'Stock Beef',
    basic: false
  },
  {
    name: 'Ketchup',
    basic: false
  },
  {
    name: 'Tomato Sauce',
    basic: false
  },
  {
    name: 'Spaghetti',
    basic: false
  },
  {
    name: 'Cheese Parmesan',
    basic: false
  }

];