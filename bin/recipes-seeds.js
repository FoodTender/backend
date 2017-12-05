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
    directions: `1. Season the beaten eggs well with salt and pepper. 
        2. Heat the oil and butter in a non-stick frying pan over a medium-low heat until the 
        butter has melted and is foaming. Pour the eggs into the pan, tilt the pan ever so slightly 
        from one side to another to allow theeggs to swirl and cover the surface of the pan completely. 

        3. Let the mixture cook for about 20 seconds then scrape a line through the middle with a spatula.

        4. Tilt the pan again to allow it to fill back up with the runny egg. 
        
        5. Repeat once or twice more until the egg has just set.
        
        6. At this point you can fill the omelette with whatever you like – some grated cheese, sliced ham,
        fresh herbs, sautéed mushrooms or smoked salmon all work well. 
        
        7. Scatter the filling over the top of the omelette and fold gently in half with the spatula. 
        Slide onto a plate to serve.`,
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
    directions: `1. Heat 1 1/2 tbsp oil in a large pan or flameproof casserole dish over a low-medium heat. 
    
    2. Add the onion, celery and carrots with a pinch of salt. 

    3. Cook for 10 mins, stirring occasionally, until softened but not coloured. 
    
    4. Transfer to a plate using a slotted spoon.

    5. Pour the remaining oil into the pan, increase the heat and tip in the pancetta. 
     
    6. Cook for 3-4 mins until golden. 
    
    7. Add the mince and chicken livers, and cook for a further 5 mins until browned, breaking down the 
    mince with the back of a wooden spoon.

    8. Return the vegetables to the pan and add the bay leaf and tomato sauce. 
    
    9. Cook for a 1 min more and mix well. 
    
    10. Add the stock with some seasoning and bring to the boil. 

    11. Reduce the heat to medium and let the sauce bubble away for 35-40 mins, stirring occasionally, 
    until reduced by half and you are left with a thick ragu.

    12. Bring a large saucepan of salted water to the boil 15 mins before the sauce is ready. 
    
    13. Drop in the pasta, cook following pack instructions until al dente, then drain.

    14. To finish the sauce, stir in the milk and season to taste. 
    
    15. Tip the pasta onto a plate and top with the Bolognese. 

    16. Serve with the Parmesan.`,
    ratings: 0,
    difficulty: 'Not so easy',
    calories: 640
  },
  {
    name: '3 minutes mug cacke',

    ingredients: [{
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // FLOUR
        quantity: 4,
        unit: 'tbps'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // SUGAR
        quantity: 4,
        unit: 'tbsp'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // COCOA
        quantity: 2,
        unit: 'tbsp'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // EGG
        quantity: 1,
        unit: 'big'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // MILK
        quantity: 3,
        unit: 'tbsp'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // OLIVE OIL
        quantity: 3,
        unit: 'tbsp'
    }
],

    picture: '/recipes/omelette.jpg',
    time: '3 minutes',
    servings: 1,
    directions: `1. Pour all the ingredients in the mug and mix until it's homogeneous.
    2. Add the egg and keep on mixing.
    3. Pour the milk and the oil and keep shaking!
    4. In case you have some chocolate or vanilla extract, use it now and mix a little bit more.
    5. Put your mug in the microwave and cook for 3 minutes at 1000v (high). 
    6. Add toppings of your choice (In case you have them).
    6. Let it cool unless you want to burn your tongue!`,
    ratings: 0,
    difficulty: 'Easy Peasy',
    calories: 347
  },
  {
    name: 'Cuban Rice',
    ingredients: [
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // TOMATO SAUCE
        quantity: 1,
        unit: 'cup'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // OLIVE OIL
        quantity: 3,
        unit: 'tbsp'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // WATER
        quantity: 3.5,
        unit: 'cups'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // SALT
        quantity: 1,
        unit: 'pinch'
    },
    {
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }, // EGGS
        quantity: 4,
        unit: 'Large ones'
    }
],

    picture: '/recipes/cuban-rice.jpg',
    time: '40 minutes',
    servings: 4,
    directions: `1. Make the sofrito. 
    
    2. While the sofrito is simmering, make the rice. 

    3. Pour approximately 2 to 3 tablespoons of olive oil into a medium-size saucepan and place over 
    medium-high heat. 
    
    4. Add the rice into the pan and coat the rice with the oil. 
    
    5. Pour enough water to cover the rice into the pan and bring to a boil. 
    
    6. Add salt to taste. Then, reduce the heat, loosely cover and allow to simmer until rice is cooked, 
    about 20 minutes.

    7. Pour 1/4-inch olive oil into a small frying pan and place over medium heat. 
    
    8. Fry the eggs one at a time in the olive oil, sprinkling with a dash of salt.
    
    9. Place a scoop of rice on each plate and make a depression in the center. 
    
    10. Ladle some of the sofrito into the depression. 
    
    11. Carefully top with a fried egg. 
    
    12. Serve immediately with a baguette.`,
    ratings: 0,
    difficulty: 'Not so easy',
    calories: 264
  }
];

Recipe.create(recipes, (err, recipes) => {
    if (err) { throw (err); }
    console.log('Success', recipes);
    mongoose.connection.close();
  })
;
