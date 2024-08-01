const bcrypt = require('bcryptjs')
const Recipes = require('../model/Recipes')
const APP_ID = "a889f78e"
const APP_KEY = "3ffab496cec4b6ed3496b78b560d5950"
import Axios from "axios"
const searchString = require('..../recipeDatabase-frontend/')

async function getRecipes(req, res){
    try {
        const foundRecipes = await Axios.get(
            `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            res.json({message: "Recipes Found", payload: foundRecipes})
        } catch (error) {
           res.status(500).json({message: "Error", error: error}) 
    }
}
    
     
    
    
    
module.exports = {getRecipes}