const bcrypt = require('bcryptjs')
const Recipes = require('../model/Recipes')
const APP_ID = "a889f78e"
const APP_KEY = "3ffab496cec4b6ed3496b78b560d5950"
//import axios from "axios"
//const searchString = require('..../recipeDatabase-frontend/')

async function getRecipes(req, res){
    try {
        const foundRecipes = await axios.get(
            `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
        ).then(function(response){
            console.log(response)
        })
    } catch (error) {
        res.status(500).json({message: "Error", error: error}) 
    }
}

// async function getAllUsers(req, res){
//     try {
//         const foundUsers = await User.find({})
//         res.json({message: "Users Found", payload: foundUsers})
//     } catch (error) {
//        res.status(500).json({message: "Error", error: error}) 
//     }
// }
     
    
    
    
module.exports = {getRecipes}