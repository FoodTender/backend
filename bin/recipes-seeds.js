const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/foodtender');

const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');


const recipes = [
    // --- Basic Omelette --- //
    {
        name: 'Basic Omelette',

        ingredients: [{
            ingredient: "Egg", // Egg
            quantity: 3,
            unit: 'Beaten'
        },
        {
            ingredient: 'Sunflower Oil', // SUNFLOWER OIL
            quantity: 1,
            unit: 'tsp'
        },
        {
            ingredient: "Butter",
            quantity: 1,
            unit: 'tsp'
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

    // --- Classic spaghetti Bolognese --- //

    {
        name: 'Classic spaghetti Bolognese',

        ingredients: [{
            ingredient: "Onion",
            quantity: 2,
            unit: 'Medium Size peeled and chopped'
        },
        {
            ingredient: "Olive Oil",
            quantity: 1,
            unit: 'tbsp'
        },
        {
            ingredient: "Garlic",
            quantity: 1,
            unit: 'Clove, peeled and crushed'
        },
        {
            ingredient: "Beef Minced",
            quantity: 500,
            unit: 'g'
        },
        {
            ingredient: "Mushroom",
            quantity: 90,
            unit: 'g sliced'
        },
        {
            ingredient: "Herbs",
            quantity: 1,
            unit: 'tbsp'
        },
        {
            ingredient: "Tomato",
            quantity: 400,
            unit: 'g chopped'
        },
        {
            ingredient: "Stock Beef",
            quantity: 300,
            unit: 'ml hot'
        },
        {
            ingredient: "Tomato Sauce",
            quantity: 1,
            unit: 'tbsp'
        },
        {
            ingredient: "Salt",
            quantity: 1,
            unit: 'pinch'
        },
        {
            ingredient: "Black Pepper",
            quantity: 1,
            unit: 'pinch'
        },
        {
            ingredient: "Spaghetti",
            quantity: 350,
            unit: 'g'
        },
        {
            ingredient: "Cheese Parmesan",
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
    ,

    // --- 3 minutes mug cacke --- //
    {
        name: '3 minutes mug cake',

        ingredients: [{
            ingredient: "Flour",
            quantity: 4,
            unit: 'tbps'
        },
        {
            ingredient: "Sugar",
            quantity: 4,
            unit: 'tbsp'
        },
        {
            ingredient: "Cocoa",
            quantity: 2,
            unit: 'tbsp'
        },
        {
            ingredient: "Egg",
            quantity: 1,
            unit: 'big'
        },
        {
            ingredient: "Milk",
            quantity: 3,
            unit: 'tbsp'
        },
        {
            ingredient: "Olive Oil",
            quantity: 3,
            unit: 'tbsp'
        }
        ],

        picture: '/recipes/3-minutes-mug-cake.jpg',
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
                ingredient: "Tomato Sauce",
                quantity: 1,
                unit: 'cup'
            },
            {
                ingredient: "Olive Oil",
                quantity: 3,
                unit: 'tbsp'
            },
            {
                ingredient: "Water",
                quantity: 3.5,
                unit: 'cups'
            },
            {
                ingredient: "Salt",
                quantity: 1,
                unit: 'pinch'
            },
            {
                ingredient: "Egg",
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
    },

    // --- Spanish Flan --- //

    {
        name: 'Spanish Flan',

        ingredients: [{
            ingredient: "Sugar",
            quantity: 2 / 3,
            unit: 'cup'
        },
        {
            ingredient: "Egg",
            quantity: 5,
            unit: 'room-temperature'
        },
        {
            ingredient: "Sweetened Condensed Milk",
            quantity: 1,
            unit: 'can'
        },
        {
            ingredient: "Heavy Cream",
            quantity: 2,
            unit: 'cups'
        },
        {
            ingredient: "Milk",
            quantity: 1,
            unit: 'cup'
        },
        {
            ingredient: "Vanilla Extract",
            quantity: 2,
            unit: 'tsp'
        }
        ],

        picture: '/recipes/spanish-flan.jpg',
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
            ingredient: "Breadcrumbs",
            quantity: 1 / 2,
            unit: 'cup'
        },
        {
            ingredient: "Chicken Breast",
            quantity: 2,
            unit: 'small'
        },
        {
            ingredient: "Cheese Swiss",
            quantity: 4,
            unit: 'slices'
        },
        {
            ingredient: "Ham",
            quantity: 4,
            unit: 'slices'
        },
        {
            ingredient: "Egg",
            quantity: 1,
            unit: null
        },
        {
            ingredient: "Flour",
            quantity: 1,
            unit: 'tsp'
        },
        {
            ingredient: "Olive Oil",
            quantity: null,
            unit: null
        },
        {
            ingredient: "Salt",
            quantity: 1,
            unit: 'pinch'
        },
        {
            ingredient: "Black Pepper",
            quantity: 1,
            unit: 'pinch'
        }
        ],

        picture: '/recipes/cordon-bleu.jpg',
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
    }
];

function populateRecipeIngredient(recipe, index) {
    const name = recipe.ingredients[index].ingredient;
    return Ingredient.findOne({ name: name })
        .then(ingredient => {
            if (!ingredient) {
                return Promise.reject("Ingredient " + name + " does not exist in recipe " + recipe.name);
            }
            recipe.ingredients[index].ingredient = ingredient._id;
        });
}

function populateRecipeIngredients(recipe) {
    const promises = recipe.ingredients.map((ingredient, index) => {
        return populateRecipeIngredient(recipe, index);
    });
    return Promise.all(promises);
}

function deleteAllRecipes() {
    return Recipe.remove({})
        .then(() => {
            console.log('Deleted all recipes');
        })
        .catch((err) => {
            console.log('Failed to delete all recipes');
            return Promise.reject(err);
        });
}

function createRecipes() {
    const promises = recipes.map(recipe => {
        return populateRecipeIngredients(recipe)
            .then(() => {
                console.log("Going to create " + recipe.name);
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


