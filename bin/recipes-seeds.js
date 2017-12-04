const Recipe = require('../models/recipe').Recipe;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/foodtender');

const recipes = [
  {
    name: 'Basic Omelette',

    ingredients: [{
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // EGGS
        quantity: 3,
        unit: 'Beaten'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // SUNFLOWER OIL
        quantity: 1,
        unit: 'tbsp'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // BUTTER
        quantity: 1,
        unit: 'tbsp'
    }
],

    picture: '/recipes/omelette.jpg',
    time: '5 minutes',
    servings: 1,
    directions: `Season the beaten eggs well with salt and pepper. Heat the oil and butter in a non-stick
        frying pan over a medium-low heat until the butter has melted and is foaming.
        Pour the eggs into the pan, tilt the pan ever so slightly from one side to another to allow the
        eggs to swirl and cover the surface of the pan completely. Let the mixture cook for about 20 seconds
        then scrape a line through the middle with a spatula.
        Tilt the pan again to allow it to fill back up with the runny egg. Repeat once or twice more until
        the egg has just set.
        At this point you can fill the omelette with whatever you like – some grated cheese, sliced ham,
        fresh herbs, sautéed mushrooms or smoked salmon all work well. Scatter the filling over the top of
        the omelette and fold gently in half with the spatula. Slide onto a plate to serve.`,
    ratings: 0,
    difficulty: 'Easy Peasy',
    calories: 277
  },

  {
    name: 'Classic spaghetti Bolognese',
    ingredients: [{
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // ONLIONS
        quantity: 2,
        unit: 'Medium Size peeled and chopped'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // OLIVE OIL
        quantity: 1,
        unit: 'tbsp'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // GARLIC
        quantity: 1,
        unit: 'Clove, peeled and crushed'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // MINCED BEEF
        quantity: 500,
        unit: 'g'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // MUSHROOMS
        quantity: 90,
        unit: 'g sliced'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // HERBS
        quantity: 1,
        unit: 'tbsp'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // TOMATOE
        quantity: 400,
        unit: 'g chopped'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // BEEF STOCK
        quantity: 300,
        unit: 'ml hot'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // TOMATO SAUCE
        quantity: 1,
        unit: 'tbsp'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // SALT
        quantity: 1,
        unit: 'pinch'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // BLACK PEPPER
        quantity: 1,
        unit: 'pinch'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // SPAGHETTI
        quantity: 350,
        unit: 'g'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // PARMESAN CHEESE
        quantity: null,
        unit: null
    }
],
    picture: '/recipes/classic-spaghetti-blognese.jpg',
    time: '30 minutes',
    servings: 4,
    directions: `Heat 1 1/2 tbsp oil in a large pan or flameproof casserole dish over a low-medium heat. 
    Add the onion, celery and carrots with a pinch of salt. Cook for 10 mins, stirring occasionally, 
    until softened but not coloured. Transfer to a plate using a slotted spoon.
    Pour the remaining oil into the pan, increase the heat and tip in the pancetta. Cook for 3-4 mins until 
    golden. Add the mince and chicken livers, and cook for a further 5 mins until browned, breaking down the 
    mince with the back of a wooden spoon.
    Return the vegetables to the pan and add the bay leaf and tomato purée. Cook for a 1 min more and mix well. 
    Pour in the wine and reduce by half. Add the stock and passata with some seasoning and bring to the boil. 
    Reduce the heat to medium and let the sauce bubble away for 35-40 mins, stirring occasionally, until reduced 
    by half and you are left with a thick ragu.
    Bring a large saucepan of salted water to the boil 15 mins before the sauce is ready. Drop in the pasta, cook 
    following pack instructions until al dente, then drain.
    To finish the sauce, stir in the milk and season to taste. Tip the pasta onto a plate and top with the Bolognese. 
    Serve with the Parmesan.`,
    ratings: 0,
    difficulty: 'Easy Peasy',
    calories: 640
  }
];

Recipe.create(recipes, (err, recipes) => {
    if (err) { throw (err); }
    console.log('Success', recipes);
    mongoose.connection.close();
  })
;
