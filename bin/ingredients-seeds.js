const Ingredient = require('../models/ingredient');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/foodtender');
// mongoose.connect('process.env.MLAB_DB');

const ingredients = [

  {
    name: 'Sunflower Oil',
    basic: true
  },
  {
    name: 'Water',
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
    name: 'Pepper Black',
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
    name: 'Sugar',
    basic: true
  },
  {
    name: 'Milk',
    basic: true
  },
  {
    name: 'Cheese Swiss',
    basic: false
  },
  {
    name: 'Vanilla Extract',
    basic: false
  },
  {
    name: 'Ham',
    basic: false
  },
  {
    name: 'Sweetened Condensed Milk',
    basic: false
  },
  {
    name: 'Breadcrumbs',
    basic: false
  },
  {
    name: 'Heavy Cream',
    basic: false
  },
  {
    name: 'Chicken Breast',
    basic: false
  },
  {
    name: 'Egg',
    basic: false
  },
  {
    name: 'Vegetable Onion',
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
    name: 'Sauce Tomato',
    basic: false
  },
  {
    name: 'Pasta Spaghetti',
    basic: false
  },
  {
    name: 'Cheese Parmesan',
    basic: false
  },
  {
    name: 'Milk',
    basic: false
  },
  {
    name: 'Cocoa',
    basic: false
  },
  {
    name: 'Flour',
    basic: false
  },
  {
    name: 'Fruit Apple',
    basic: false
  },
  {
    name: 'Baking Powder',
    basic: false
  },
  {
    name: 'Bread',
    basic: false
  },
  {
    name: 'Sugar Brown',
    basic: false
  },
  {
    name: 'Vegetable Cauliflower',
    basic: false
  },
  {
    name: 'Cheese',
    basic: false
  },
  {
    name: 'Stock Chicken',
    basic: false
  },
  {
    name: 'Cream of Veggies',
    basic: false
  },
  {
    name: 'Fruit',
    basic: false
  },
  {
    name: 'Onion green',
    basic: false
  },
  {
    name: 'Honey',
    basic: false
  },
  {
    name: 'Mayonnaise',
    basic: false
  },
  {
    name: 'Mustard',
    basic: false
  },
  {
    name: 'Oreo',
    basic: false
  },
  {
    name: 'Butter Peanut',
    basic: false
  },
  {
    name: 'Potato',
    basic: false
  },
  {
    name: 'Mexican Tortillas',
    basic: false
  },
  {
    name: 'Fruit Avocado',
    basic: false
  },
  {
    name: 'Sauce Barbecue',
    basic: false
  },
  {
    name: 'Vegetable Broccoli',
    basic: false
  },
  {
    name: 'Sauce Hot',
    basic: false
  },
  {
    name: 'Pepper Cayenne',
    basic: false
  },
  {
    name: 'Chicken',
    basic: false
  },
  {
    name: 'Turkey',
    basic: false
  },
  {
    name: 'Cinnamon',
    basic: false
  },
  {
    name: 'Fish',
    basic: false
  },
  {
    name: 'Vegetable Pepper Green',
    basic: false
  },
  {
    name: 'Ketchup',
    basic: false
  },
  {
    name: 'Ramen',
    basic: false
  },
  {
    name: 'Bacon',
    basic: false
  },
  {
    name: 'Beer',
    basic: false
  },
  {
    name: 'Margarine',
    basic: false
  },
  {
    name: 'Cheese Cheddar',
    basic: false
  },
  {
    name: 'Chiken Breast',
    basic: false
  },
  {
    name: 'Cheese Cream',
    basic: false
  },
  {
    name: 'Doritos',
    basic: false
  },
  {
    name: 'Garlic Powder',
    basic: false
  },
  {
    name: 'Beef Ground',
    basic: false
  },
  {
    name: 'Lemon',
    basic: false
  },
  {
    name: 'Pasta Noodles',
    basic: false
  },
  {
    name: 'Pasta',
    basic: false
  },
  {
    name: 'Pork Chops',
    basic: false
  },
  {
    name: 'Rice',
    basic: false
  },
  {
    name: 'Sausage',
    basic: false
  },
  {
    name: 'Frankfurt',
    basic: false
  },
  {
    name: 'Brats',
    basic: false
  },
  {
    name: 'Vegetable',
    basic: false
  },
  {
    name: 'Lentils',
    basic: false
  },
  {
    name: 'Vegetable Peas',
    basic: false
  },
  {
    name: 'Lettuce',
    basic: false
  },
  {
    name: 'Fish Cod',
    basic: false
  },
  {
    name: 'Fish Anchovy',
    basic: false
  },
  {
    name: 'Fish Seabass',
    basic: false
  },
  {
    name: 'Fish Haddock',
    basic: false
  },
  {
    name: 'Fish Salmon',
    basic: false
  },
  {
    name: 'Fish Sardine',
    basic: false
  },
  {
    name: 'Fish Tuna',
    basic: false
  },
  {
    name: 'Fish Tuna (Can)',
    basic: false
  },
  {
    name: 'Fish Trout',
    basic: false
  },
  {
    name: 'Fish Swordfish',
    basic: false
  },
  {
    name: 'Vegetable Asparagus',
    basic: false
  },
  {
    name: 'Almond',
    basic: false
  },
  {
    name: 'Nut',
    basic: false
  },
  {
    name: 'Peanut',
    basic: false
  },
  {
    name: 'Vegetable Artichoke',
    basic: false
  },
  {
    name: 'Applesauce',
    basic: false
  },
  {
    name: 'Vegetable Bean',
    basic: false
  },
  {
    name: 'Bean Black',
    basic: false
  },
  {
    name: 'Vegetable Carrot',
    basic: false
  },
  {
    name: 'Vegetable Celery',
    basic: false
  },
  {
    name: 'Seafood Oyster',
    basic: false
  },
  {
    name: 'Seafood Clams',
    basic: false
  },
  {
    name: 'Coffee',
    basic: false
  },
  {
    name: 'Corn',
    basic: false
  },
  {
    name: 'Curry',
    basic: false
  },
  {
    name: 'Fruit Grapes',
    basic: false
  },
  {
    name: 'Fruit Pear',
    basic: false
  },
  {
    name: 'Fruit Cherry',
    basic: false
  },
  {
    name: 'Fruit Watermelon',
    basic: false
  },
  {
    name: 'Seafood Lobster',
    basic: false
  },
  {
    name: 'Jam',
    basic: false
  },
  {
    name: 'Jam Strawberry',
    basic: false
  },
  {
    name: 'Fruit Strawberry',
    basic: false
  },
  {
    name: 'Jam Peach',
    basic: false
  },
  {
    name: 'Fruit Peach',
    basic: false
  },
  {
    name: 'Fruit Banana',
    basic: false
  },
  {
    name: 'Sugar White',
    basic: false
  }
];

function deleteAllIngredients () {
  return Ingredient.remove({})
    .then(() => {
      console.log('Deleted all ingredients');
    })
    .catch((err) => {
      console.log('Failed to delete all ingredients');
      return Promise.reject(err);
    });
}

deleteAllIngredients();

Ingredient.create(ingredients, (err, ingredients) => {
  if (err) { throw (err); }
  console.log('Success', ingredients);
  mongoose.connection.close();
});
