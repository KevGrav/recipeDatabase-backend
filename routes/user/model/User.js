const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    meat:{
        type: String
    },
    lastName:{
        type: String
    },
    email:{
        type: String,
        unique: true
    },
    username:{
        type: String,
        unique: true
    },
    password:{
        type: String
    }
})

module.exports = mongoose.model('user', userSchema)
