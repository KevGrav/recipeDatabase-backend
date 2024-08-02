const express = require('express')
const router = express.Router()
const getRecipes = require('./controller/recipesController')


router.get('/get-recipes', getRecipes)



module.exports = router