//import { model } from "mongoose";
const mongoose = require('mongoose');

const mealsSchema = new mongoose.Schema ({
    catergory: String,
    recipes: [{ name: String, body: String, calories: Number }],
    ingredients: [String],
    favorite: Boolean
});


const Meal = mongoose.model('Meal', mealsSchema);

const mealPlans = new Meal({
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
        ingredients: ['1 cup red quinoa, rinsed', '1/2 cup whole wheat pastry flour', '1/2 cup all purpose flour', '1 1/2 tablespoons granulated sugar or raw sugar', 'Pinch of salt', '3/4 teaspoon ground cinnamon', '', '',''],
        favorite: false
    },
    {
        name: 'beesburger',
        body: 'local bee man',
        calories: 1 
    }],
    favorite: false
});

module.exports = mealPlans