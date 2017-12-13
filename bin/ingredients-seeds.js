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
    name: 'Sugar',
    basic: true
  },
  {
    name: 'Milk',
    basic: true
  },
  {
    name: 'Swiss Cheese',
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
    name: 'Onion (Vegetable)',
    basic: false
  },
  {
    name: 'Garlic',
    basic: false
  },
  {
    name: 'Minced Beef',
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
    name: 'Chopped Tomato',
    basic: false
  },
  {
    name: 'Beef Stock',
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
    name: 'Spaghetti (Pasta)',
    basic: false
  },
  {
    name: 'Parmesan Cheese',
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
    name: 'Apple (Fruit)',
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
    name: 'Brown Sugar',
    basic: false
  },
  {
    name: 'Cauliflower (Vegetable)',
    basic: false
  },
  {
    name: 'Cheese',
    basic: false
  },
  {
    name: 'Chicken Stock',
    basic: false
  },
  {
    name: 'Veggies Cream',
    basic: false
  },
  {
    name: 'Fruit',
    basic: false
  },
  {
    name: 'Green Onion (Vegetable)',
    basic: false
  },
  {
    name: 'Honey',
    basic: false
  },
  {
    name: 'Mayonnaise (Sauce)',
    basic: false
  },
  {
    name: 'Mustard (Sauce)',
    basic: false
  },
  {
    name: 'Oreo',
    basic: false
  },
  {
    name: 'Peanut Butter',
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
    name: 'Avocado (Fruit)',
    basic: false
  },
  {
    name: 'Barbecue (Sauce)',
    basic: false
  },
  {
    name: 'Broccoli (Vegetable)',
    basic: false
  },
  {
    name: 'Hot Sauce',
    basic: false
  },
  {
    name: 'Cayenne Pepper',
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
    name: 'Pepper Green (Vegetable)',
    basic: false
  },
  {
    name: 'Ketchup (Sauce)',
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
    name: 'Cheddar Cheese',
    basic: false
  },
  {
    name: 'Chiken Breast',
    basic: false
  },
  {
    name: 'Cream Cheese',
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
    name: 'Ground Beef',
    basic: false
  },
  {
    name: 'Lemon',
    basic: false
  },
  {
    name: 'Noodles (Pasta)',
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
    name: 'Peas (Vegetable)',
    basic: false
  },
  {
    name: 'Lettuce',
    basic: false
  },
  {
    name: 'Cod (Fish)',
    basic: false
  },
  {
    name: 'Anchovy (Fish)',
    basic: false
  },
  {
    name: 'Seabass (Fish)',
    basic: false
  },
  {
    name: 'Haddock (Fish)',
    basic: false
  },
  {
    name: 'Salmon (Fish)',
    basic: false
  },
  {
    name: 'Sardine (Fish)',
    basic: false
  },
  {
    name: 'Tuna (Fish)',
    basic: false
  },
  {
    name: 'Tuna (Fish in a can)',
    basic: false
  },
  {
    name: 'Trout (Fish)',
    basic: false
  },
  {
    name: 'Swordfish (Fish)',
    basic: false
  },
  {
    name: 'Asparagus (Vegetable)',
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
    name: 'Artichoke (Vegetable)',
    basic: false
  },
  {
    name: 'Applesauce (Sauce)',
    basic: false
  },
  {
    name: 'Bean (Vegetable)',
    basic: false
  },
  {
    name: 'Black Bean',
    basic: false
  },
  {
    name: 'Carrot (Vegetable)',
    basic: false
  },
  {
    name: 'Celery (Vegetable)',
    basic: false
  },
  {
    name: 'Oyster (Seefood)',
    basic: false
  },
  {
    name: 'Clams (Seefod)',
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
    name: 'Grapes (Fruit)',
    basic: false
  },
  {
    name: 'Pear (Fruit)',
    basic: false
  },
  {
    name: 'Cherries (Fruit)',
    basic: false
  },
  {
    name: 'Watermelon (Fruit)',
    basic: false
  },
  {
    name: 'Lobster (Seafood)',
    basic: false
  },
  {
    name: 'Jam',
    basic: false
  },
  {
    name: 'Strawberry (Jam)',
    basic: false
  },
  {
    name: 'Strawberries (Fruit)',
    basic: false
  },
  {
    name: 'Peach (Jam)',
    basic: false
  },
  {
    name: 'Peach (Fruit)',
    basic: false
  },
  {
    name: 'Banana (Fruit)',
    basic: false
  },
  {
    name: 'White Sugar',
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
