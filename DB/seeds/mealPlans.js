//import { model } from "mongoose";
const mongoose = require('mongoose');

const mealsSchema = new mongoose.Schema ({
    catergory: String,
    recipes: [{ name: String, body: String, calories: Number }],
    ingredients: [String],
    favorite: Boolean
});


const mealPlans = mongoose.model('Meal', mealsSchema);

const carbMeals = new mealPlans({
    catergory: 'Carbs',
    recipes: [{
        name: 'Broccoli, chedder, and chicken twice bake potatoes',
        body: "Twice baked potatoes stuffed with broccoli, chicken, and cheese is a great combination of flavor and carbs.",
        calories: 436,
        ingredients: ['2 large potatoes', '1 cooked chicken breast, shredded', '1/2 cup broccoli chopped', '1/2 cup cheddar cheese, shredded', '4-5 tablespoons low sodium chicken broth', '1/2 teaspoon kosher salt', '1/4 teaspoon black pepper', '1/8 teaspoon garlic powder (optional)'],
        favorite: false
    },
    {
        name: 'Strawberry Quinoa Pancakes', 
        body: 'These tasty strawberry pancakes get a nutritious dose of texture and nutrients! The strawberry sauce is the perfect topping for these healthy pancakes', 
        calories: 364,
        ingredients: ['1 cup red quinoa, rinsed', '1/2 cup whole wheat pastry flour', '1/2 cup all purpose flour', '1 1/2 tablespoons granulated sugar or raw sugar', 'Pinch of salt', '3/4 teaspoon ground cinnamon', '1 cup skim milk', '2 egg whites','1/2 teaspoon vanilla extract', '1/2 teaspoon almond extract', '1/2 cup strawberries, diced'],
        favorite: false
    },
    {
        name: 'Provolone Ziti Bake', 
        body: 'This tasty dish is not only healthy but is popping with flavor.  The mix of seasoning and pasta is a great combination for your post-workout needs.', 
        calories: 381,
        ingredients: ['1 tablespoon olive oil', '1 medium onion, chopped', '3 garlic cloves, minced', '2 cans (28 ounces each) Italian crushed tomatoes', '1-1/2 cups water', '1/2 cup dry red wine or reduced-sodium chicken broth', '1 tablespoon sugar', '1 teaspoon dried basil', '1 package (16 ounces) ziti or small tube pasta', '8 slices of provolone cheese'],
        favorite: false
    },
    {
        name: 'Summer Carbonara', 
        body: 'Basil and bacon make best summer buds in this smoky-sweet pasta.  The mixture of spaghetti, sauce, and seasoning makes for a tasty post-workout meal.', 
        calories: 508,
        ingredients: ['1 package (16 ounces) spaghetti', '2 tablespoons olive oil', '1 large sweet onion, finely chopped', '1 medium yellow summer squash, diced', '1 medium zucchini, diced', '2 garlic cloves, minced', '4 plum tomatoes, seeded and chopped', '2 large eggs, lightly beaten', '1 cup grated Parmesan cheese', '12 bacon strips, cooked and crumbled', '1/4 cup fresh basil leaves, thinly sliced', '1 teaspoon minced fresh oregano', '1/2 teaspoon salt', '1/4 teaspoon pepper'],
        favorite: false

    },
    {
        name:'Broocoli and Pasta',
        body:'With garlic and cheese, this broccoli pasta is a tasty way to get the proper nutrients.',
        calorires: 313,
        ingredients:['2-1/2 pounds fresh broccoli', '2 garlic cloves, minced, 1/3 cup olive oil', '1 tablespoon butter', '1 teaspoon salt', '1/4 teaspoon pepper', 'Pinch cayenne pepper', '8 ounces linguine or thin spaghetti', 'cooked and drained', 'Grated Romano or Parmesan cheese'],
        favorite: false

    }],
    
});

const proteinPlans = new Meal({
    catergory: Protein,
    recipes: [{ 
        name: 'Carne Asada Bowl', 
        body: 'This taco salad uses steak, lettuce, and queso fresco to create a great mix of protein and flavor for this wonderful dish.',
        calories: 369,
        ingredients: ['1 (12-oz.) flank steak', '3/4 teaspoon kosher salt', '1/2 teaspoon black pepper', '2 teaspoons olive oil', '3/4 cup chopped white onion', '1/2 cup unsalted chicken stock', '1 (15-oz.) can unsalted pinto beans', '3 cups chopped romaine lettuce', '1 1/2 cups chopped tomato', '1 ounce tortilla chips', '1 ripe avocado, thinly sliced', '1 1/2 ounces queso fresco, crumbled (about 1/3 cup)', '4 lime wedges'],
        favorite: false
    },
    { 
            name: 'Veggie Pasta with Sausage', 
            body: 'This pasta takes spagetti to the next level by letting the Italian turkey sausage be an addition to the flavor while adding vegetables.', 
            calories: 391,
        ingredients: ['8 ounces uncooked whole-wheat spaghetti', '1 tablespoon olive oil', '6 ounces hot turkey Italian sausage, casings removed', '2 cups chopped yellow onion', '6 garlic cloves, minced', '1 1/2 cups chopped cremini mushrooms (about 4 oz.)', '2 small yellow squash, halved lengthwise and cut into 1/4-in. slices (about 7 oz. each)', '1 tablespoon unsalted tomato paste', '1 tablespoon chopped fresh oregano', '2 cups small broccoli florets', '1/2 teaspoon kosher salt', '1/4 teaspoon crushed red pepper', '1 (14-oz.) can unsalted whole peeled tomatoes, undrained', '1/4 cup torn fresh basil leaves'],
        favorite: false

    },
    {
        name: 'Crusted Flank Steak with Black Beans', 
        body: 'Combined with the perfect taste of steak and black beans your in for a treat.  Not only is it delicious but it adds for a great source of protein for your post-work out needs.', 
        calories: 330,
        ingredients: ['2 teaspoons cracked coriander seeds', '2 teaspoons cracked black pepper', '1 teaspoon kosher salt, divided', '1 (1-lb.) flank steak', '2 tablespoons olive oil, divided', 'Cooking spray', '1/2 cup chopped yellow onion', '1/2 cup chopped red bell pepper', '2 tablespoons unsalted tomato paste', '1/2 teaspoon ground cumin', '1/2 cup unsalted chicken stock', '1 teaspoon apple cider vinegar', '1 (15-oz.) can unsalted black beans, drained and rinsed', '3 tablespoons chopped fresh cilantro'],
        favorite: false

    },
    {
        name: 'Fresh Herbed Halibut', 
        body: 'This recipe is awesome for fresh halibut - fresh herbs, lemon and dill spice the fish without overpowering the taste while remaining healthy and satisfying!', 
        calories: 270,
        ingredients: ['1 (2 pound) halibut fillet', '1 large lemon, quarteredo', 'olive oil', '1 teaspoon sea salt', '1 teaspoon garlic powder', '1 tablespoon dill weed'],
        favorite: false

    }, 
    {
        name: '', 
        body: '', 
        calories: Number,
        ingredients: [''],
        favorite: false

    }
],
});

module.exports = Meal