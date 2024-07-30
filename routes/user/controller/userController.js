const bcrypt = require('bcryptjs')
const User = require('../model/Favorite')

const searchRecipes = async (searchTerm, page)=> {
    if(!apiKey) {
        return error("API key note found")
    }
    const url = new URL("https://api.edamam.com/recipies/comlpexSearch") 
    
    const queryParams = {
        apiKey,
        query: searchTime,
        number: "10",
        offset: (page * 10).toString()
    }
    url.search = new URLSearchParams(queryParams).toString()
    
    try {
        const searchResponse = await fetch(url)
        const resultsJson = await searchResponse.json()
        return resultsJson
    } catch (error) {
        console.log(error)    
    }
}