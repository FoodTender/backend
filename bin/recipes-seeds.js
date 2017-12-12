const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/foodtender');
// mongoose.connect('process.env.MLAB_DB');

const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');

const recipes = [
    // --- Basic Omelette --- //
    {
        name: 'Basic Omelette',
        ingredients: [{
            ingredient: 'Egg',
            quantity: 3,
            unit: 'Beaten'
        },
        {
            ingredient: 'Sunflower Oil',
            quantity: 1,
            unit: 'tsp'
        },
        {
            ingredient: 'Butter',
            quantity: 1,
            unit: 'tsp'
        }
        ],
        picture: '../../../assets/images/recipes/omelette.jpg',
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

    // --- Classic spaghetti Bolognese --- //

    {
        name: 'Classic spaghetti Bolognese',

        ingredients: [{
            ingredient: 'Vegetable Onion',
            quantity: 2,
            unit: 'Medium Size peeled and chopped'
        },
        {
            ingredient: 'Olive Oil',
            quantity: 1,
            unit: 'tbsp'
        },
        {
            ingredient: 'Garlic',
            quantity: 1,
            unit: 'Clove, peeled and crushed'
        },
        {
            ingredient: 'Beef Minced',
            quantity: 500,
            unit: 'g'
        },
        {
            ingredient: 'Mushroom',
            quantity: 90,
            unit: 'g sliced'
        },
        {
            ingredient: 'Herbs',
            quantity: 1,
            unit: 'tbsp'
        },
        {
            ingredient: 'Tomato',
            quantity: 400,
            unit: 'g chopped'
        },
        {
            ingredient: 'Stock Beef',
            quantity: 300,
            unit: 'ml hot'
        },
        {
            ingredient: 'Sauce Tomato',
            quantity: 1,
            unit: 'tbsp'
        },
        {
            ingredient: 'Salt',
            quantity: 1,
            unit: 'pinch'
        },
        {
            ingredient: 'Pepper Black',
            quantity: 1,
            unit: 'pinch'
        },
        {
            ingredient: 'Pasta Spaghetti',
            quantity: 350,
            unit: 'g'
        },
        {
            ingredient: 'Cheese Parmesan',
            quantity: null,
            unit: null
        }
        ],

        picture: '../../../assets/images/recipes/classic-spaghetti-bolognese.jpg',
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

    // --- 3 minutes mug cake --- //
    {
        name: '3 minutes mug cake',

        ingredients: [{
            ingredient: 'Flour',
            quantity: 4,
            unit: 'tbps'
        },
        {
            ingredient: 'Sugar',
            quantity: 4,
            unit: 'tbsp'
        },
        {
            ingredient: 'Cocoa',
            quantity: 2,
            unit: 'tbsp'
        },
        {
            ingredient: 'Egg',
            quantity: 1,
            unit: 'big'
        },
        {
            ingredient: 'Milk',
            quantity: 3,
            unit: 'tbsp'
        },
        {
            ingredient: 'Olive Oil',
            quantity: 3,
            unit: 'tbsp'
        }
        ],

        picture: '../../../assets/images/recipes/3-minutes-mug-cake.jpg',
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

    // --- Cuban Rice --- //

    {
        name: 'Cuban Rice',
        ingredients: [
            {
                ingredient: 'Sauce Tomato',
                quantity: 1,
                unit: 'cup'
            },
            {
                ingredient: 'Olive Oil',
                quantity: 3,
                unit: 'tbsp'
            },
            {
                ingredient: 'Water',
                quantity: 3.5,
                unit: 'cups'
            },
            {
                ingredient: 'Salt',
                quantity: 1,
                unit: 'pinch'
            },
            {
                ingredient: 'Egg',
                quantity: 4,
                unit: 'Large ones'
            }
        ],

        picture: '../../../assets/images/recipes/cuban-rice.jpg',
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
    },

    // --- Spanish Flan --- //

    {
        name: 'Spanish Flan',

        ingredients: [{
            ingredient: 'Sugar',
            quantity: 2 / 3,
            unit: 'cup'
        },
        {
            ingredient: 'Egg',
            quantity: 5,
            unit: 'room-temperature'
        },
        {
            ingredient: 'Sweetened Condensed Milk',
            quantity: 1,
            unit: 'can'
        },
        {
            ingredient: 'Heavy Cream',
            quantity: 2,
            unit: 'cups'
        },
        {
            ingredient: 'Milk',
            quantity: 1,
            unit: 'cup'
        },
        {
            ingredient: 'Vanilla Extract',
            quantity: 2,
            unit: 'tsp'
        }
        ],

        picture: '../../../assets/images/recipes/spanish-flan.jpg',
        time: '1h 20m',
        servings: 8,
        directions: `1. Preheat oven to 350 degrees F (175 degrees C).
    
            2. In a small nonstick saucepan, heat the sugar over medium heat. 
            Shake and swirl occasionally to distribute sugar until it is 
            dissolved and begins to brown. Lift the pan over the heat source 
            (4 to 6 inches) and continue to brown the sugar until it becomes 
            a dark golden brown. You may slightly stir while cooking, but 
            continually stirring causes the sugar to crystallize. Pour 
            caramelized sugar into a 1 1/2 quart casserole dish or a large 
            loaf pan, and swirl to coat the bottom of the pan evenly.
            
            3. In a blender, combine sweetened condensed milk, cream, milk, 
            eggs and vanilla. Blend on high for one minute. Pour over the 
            caramelized sugar. Place the filled casserole dish into a larger 
            pan and add 1 inch of HOT water to the outer pan. 
            
            4. Bake in preheated oven for 50 to 60 minutes, or until set.`,
        ratings: 0,
        difficulty: 'Easy Peasy',
        calories: 490
    },
// --- Chicken Cordon Bleu --- //
    {
        name: 'Chicken Cordon Bleu',

        ingredients: [{
            ingredient: 'Breadcrumbs',
            quantity: 1 / 2,
            unit: 'cup'
        },
        {
            ingredient: 'Chicken Breast',
            quantity: 2,
            unit: 'small'
        },
        {
            ingredient: 'Cheese Swiss',
            quantity: 4,
            unit: 'slices'
        },
        {
            ingredient: 'Ham',
            quantity: 4,
            unit: 'slices'
        },
        {
            ingredient: 'Egg',
            quantity: 1,
            unit: null
        },
        {
            ingredient: 'Flour',
            quantity: 1,
            unit: 'tsp'
        },
        {
            ingredient: 'Olive Oil',
            quantity: null,
            unit: null
        },
        {
            ingredient: 'Salt',
            quantity: 1,
            unit: 'pinch'
        },
        {
            ingredient: 'Pepper Black',
            quantity: 1,
            unit: 'pinch'
        }
        ],

        picture: '../../../assets/images/recipes/cordon-bleu.jpg',
        time: '45min',
        servings: 2,
        directions: `1. Preheat oven to 180C/350F.
        
            2. Spread breadcrumbs on a baking tray and spray with oil. 
            Bake for 3 minutes or until light golden. Remove and scrape 
            into bowl straight away.
        
            3. Cut a pocket into each chicken breast.
            Fold the cheese in half and place 2 pieces inside each pocket. 
            Do the same with the ham. Close the pocket, seal with toothpicks.
            Sprinkle with salt and pepper.
        
            4. Whisk egg and flour. Dip chicken into egg mixture, then into the 
            breadcrumbs. Transfer to tray, spray with oil.
            Bake for 25 to 30 minutes, or until golden brown and just cooked 
            through. Rest for 5 minutes before serving with the Dijon Cream Sauce.`,
        ratings: 0,
        difficulty: 'Not so easy',
        calories: 590
    },
        // --- Bacon Wrapped Eggs --- //
    {
        name: 'Bacon Wrapped Eggs',
        ingredients: [{
            ingredient: 'Bacon',
            quantity: 12,
            unit: 'Slices'
        },
        {
            ingredient: 'Egg',
            quantity: 12,
            unit: 'Fresh'
        },
        {
            ingredient: 'Salt',
            quantity: 0.5,
            unit: 'Teaspoon'
        },
        {
            ingredient: 'Pepper Black',
            quantity: 0.5,
            unit: 'Teaspoon'
        }
    ],

        picture: '../../../assets/images/recipes/wrapped-eggs.jpg',
        time: '20 min',
        servings: 6,
        directions: `1 Preheat oven 375 degrees. 
        2 In medium frying pan fry bacon to soft transparent stage. 
        3 Drain on paper towels. 
        4 Line each slice around the side of each muffin cup. Ends may overlap. 
        5 Break egg directly in the center of each muffin cup. 12 cup muffin pan. 
        6 Slightly salt and pepper. 
        7 Cook 15 to 20 minutes. 
        8 Watch for whites and yolks to begin to set. 
        9 Take out with small spatula on a serving plate. 
        10 Serve with fork and knife. 
        11 If you want the tops to be basted,after ten minutes of cooking, baste each egg once with 1/2 teaspoon of water. 
        12 You can fry bacon the night before and drain and refrigerate for morning.`,
        ratings: 0,
        difficulty: 'Easy Peasy',
        calories: 216
    },
    // --- Bacon Sheets --- //
    {
        name: 'Bacon Sheets',
        ingredients: [{
            ingredient: 'Bacon',
            quantity: 6,
            unit: 'Slices'
        }],

        picture: '../../../assets/images/recipes/bacon-sheets.jpg',
        time: '10 mins',
        servings: 1,
        directions: `1. Line a baking sheet with Foil or Parchment Paper
        2. Cut Bacon slices in half
        3. Weave the bacon like a basket, cut the bacon lengthwise if you want a tighter weave.
        4. Place a cooling rack on top to make sure the bacon stays FLAT
        5. Do not pan fry your sheet of bacon. Bake it in the oven for 15-20 minutes at about 350 - 400 degrees 
        (depending on how crispy you like it). This will keep it from curling and becoming a waste of your time.
        6. The cool thing about weaves is that you cook it and cut it to the shape you would like. 
        7. Squares, triangles, trucker mud flap ladies or just cut it to fit your sandwich/burger.`,
        ratings: 0,
        difficulty: 'Easy Peasy',
        calories: 153
    },
      // --- Loaded Potato Bites --- //
    {
        name: 'Loaded Potato Bites',
        ingredients: [{
            ingredient: 'Potato',
            quantity: 24,
            unit: 'Oz refrigerated and mashed'
        },
        {
            ingredient: 'Cheese',
            quantity: 2,
            unit: 'Cup Shredded'
        },
        {
            ingredient: 'Bacon',
            quantity: 3,
            unit: 'Slices cooked and crumbled'
        },
        {
            ingredient: 'Egg',
            quantity: 6,
            unit: 'Units'
        },
        {
            ingredient: 'Breadcrumbs',
            quantity: 1.75,
            unit: 'Cups'
        },
        {
            ingredient: 'Sunflower Oil',
            quantity: 1,
            unit: 'Frying pan'
        }],

        picture: '../../../assets/images/recipes/loaded-potato-bites.jpg',
        time: '15 mins',
        servings: 4,
        directions: `1. In large bowl, mix mashed potatoes, cheese, 2 tablespoons of the chives, 
        the bacon and 1 of the eggs with spoon until blended. 
        2. Shape mixture into 1-inch balls 
        3. In shallow bowl, place bread crumbs. 
        4. In another shallow bowl, beat remaining 5 eggs.
        5. Coat potato balls with bread crumbs, then dip into eggs and coat again with bread crumbs.
        6. In deep fryer or 3-quart heavy saucepan, heat 2 inches oil to 375°F. 
        7. Fry potato balls, in batches, in hot oil 1 minute to 1 minute 30 seconds or until golden brown. 
        8. Drain on paper towels.
        9. In small bowl, mix sour cream, remaining 2 tablespoons chives and the dressing mix. 
        10. Serve warm potato bites with sauce.`,
        ratings: 0,
        difficulty: 'Not so easy',
        calories: 264
    },
    // --- Bacon wrapped mini omalettes --- //
    {
        name: 'Bacon Wrapped Mini Omalettes',
        ingredients: [{
            ingredient: 'Bacon',
            quantity: 12,
            unit: 'Slices'
        },
        {
            ingredient: 'Egg',
            quantity: 8,
            unit: 'Large'
        },
        {
            ingredient: 'Milk',
            quantity: 0.25,
            unit: 'Cup'
        },
        {
            ingredient: 'Cheese',
            quantity: 3,
            unit: 'Tbsp shredded'
        }],

        picture: '../../../assets/images/recipes/bacon-wrapped-mini-omalettes.jpg',
        time: '40 mins',
        servings: 1,
        directions: `1. Put bacon strips in muffin tin and then add whipped eggs with a little cheese about 3/4 full.
        2. Bake at 350 degrees for 30-35 min.`,
        ratings: 0,
        difficulty: 'Easy Peasy',
        calories: 216
    },
    // --- Roasted Bacon Cheesy Potatoes --- //
    {
        name: 'Roasted Bacon Cheesy Potatoes',
        ingredients: [{
            ingredient: 'Bacon',
            quantity: 0.5,
            unit: 'Pound'
        },
        {
            ingredient: 'Potato',
            quantity: 6,
            unit: 'white ones'
        },
        {
            ingredient: 'Salt',
            quantity: 1,
            unit: 'According to taste'
        },
        {
            ingredient: 'Pepper Black',
            quantity: 1,
            unit: 'According to taste'
        }],

        picture: '../../../assets/images/recipes/roasted-bacon-cheesy-potatoes.jpg',
        time: '70 mins',
        servings: 6,
        directions: `1. Preheat your oven to 425ºF with a rack in the middle position.
        2. Cut the bacon into half inch pieces and fry until crisp. Set the pieces aside on paper towels to drain, 
        do not discard the fat.
        3. Pour 1 to 2 tablespoons of the bacon fat onto a rimmed baking sheet. You want enough to coat the bottom 
        of the sheet, but not so much that it pools.
        4. Cut the potatoes up into roughly 1/2" cubes. Put on the baking sheet and toss with a spatula to coat with 
        the bacon fat.
        5. Roast the potatoes for 20 minutes, then toss with a spatula, roast for an additional 20 minutes. At this point 
        check them. I usually toss them one more time, then let them go for another 15 minutes, but it all depends on 
        how big the pieces are. They are done when all the sides are browned and crisp looking, but none should look 
        burnt.
        6. Remove the pan from the oven, season with salt and pepper, and top with your shredded cheese and bacon. Set the 
        oven to broil, and place the pan back in just long enough for the cheese to melt and bubble.`,
        ratings: 0,
        difficulty: 'Not so easy',
        calories: 465
    },
    // --- Bacon Potato --- //
    {
        name: 'Bacon Potato',
        ingredients: [{
            ingredient: 'Potato',
            quantity: 1,
            unit: 'White'
        },
        {
            ingredient: 'Bacon',
            quantity: 20,
            unit: 'Slices'
        }],

        picture: '../../../assets/images/recipes/bacon-potatoes.jpg',
        time: '45 mins',
        servings: 1,
        directions: `
        1. Peel and slice the Potato ALMOST all the way through.
        2. Then insert Bacon slices
        3. Bake in the oven with a little oil for 45 minutes at 400 degrees
        (depending on the size of the potato)
        
        You can cook the Potato halfway before adding the bacon if you like.
        The "Better but takes a lot longer" Procedure:
        
        1. Freeze your Bacon on a Baking sheet for about 30 minutes
        2. Cut the Potatoes stopping about 1/4 inch from the bottom
        3. Boil them for about 4 minutes
        4. Remove and pat dry
        5. Insert frozen Bacon pieces into the cuts on the potato
        6. Melt some butter over the top and season (salt and pepper)
        7. Then you can bake them at 350 for 2 hours if you have the time (425 for an hour if you have less time)
        8. Baste with melted butter halfway through.
        9. You can throw some Cheese on top when there's 6 minutes left (optional)
        10. Top with Onions, Parsley, etc...`,
        ratings: 0,
        difficulty: 'Easy Peasy',
        calories: 284
    }
// {
//         name: 'EXAMPLE',
//         ingredients: [{
//             ingredient: 'NAME',
//             quantity: 0,
//             unit: 'KIND'
//         }],

//         picture: '/recipes/recipe.jpg',
//         time: 'timestring',
//         servings: 0,
//         directions: `multilinestring`,
//         ratings: 0,
//         difficulty: 'level',
//         calories: 0
//     }
];

function populateRecipeIngredient (recipe, index) {
    const name = recipe.ingredients[index].ingredient;
    return Ingredient.findOne({ name: name })
        .then(ingredient => {
            if (!ingredient) {
                return Promise.reject('Ingredient ' + name + ' does not exist in recipe ' + recipe.name);
            }
            recipe.ingredients[index].ingredient = ingredient._id;
        });
}

function populateRecipeIngredients (recipe) {
    const promises = recipe.ingredients.map((ingredient, index) => {
        return populateRecipeIngredient(recipe, index);
    });
    return Promise.all(promises);
}

function deleteAllRecipes () {
    return Recipe.remove({})
        .then(() => {
            console.log('Deleted all recipes');
        })
        .catch((err) => {
            console.log('Failed to delete all recipes');
            return Promise.reject(err);
        });
}

function createRecipes () {
    const promises = recipes.map(recipe => {
        return populateRecipeIngredients(recipe)
            .then(() => {
                console.log('Going to create ' + recipe.name);
                return Recipe.create(recipe);
            }).then(() => {
                console.log('Success: ' + recipe.name);
            });
    });

    return Promise.all(promises);
}

deleteAllRecipes()
    .then(() => createRecipes())
    .then(() => {
        mongoose.connection.close();
        process.exit();
    })
    .catch((err) => {
        console.log('the whole thing failed, the error was', err);
        mongoose.connection.close();
        process.exit();
    });
