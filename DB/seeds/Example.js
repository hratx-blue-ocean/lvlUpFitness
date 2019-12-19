//import { model } from "mongoose";
const mongoose = require('mongoose');

const mealsSchema = new mongoose.Schema ({
    catergory: String,
    recipes: [{ name: String, body: String, calories: Number }],
    favorite: Boolean
});


const Meal = mongoose.model('Meal', mealsSchema);

const chickienuggs = new Meal({
    catergory: 'Fast Food',
    recipes: [{
        name: 'chickienuggs',
        body: "Chicken nuggets from mcd's",
        calories: 1500
        
    },
    {
        name: 'ramen moodles',
        body: 'super mark',
        calories: 2000
    },
    {
        name: 'beesburger',
        body: 'local bee man',
        calories: 1 
    }],
    favorite: false
});

module.exports = chickienuggs