const mongoose = require('mongoose')

const favoriteSchema = new mongoose.Schema({
    id:{
        type: Number
    },
    name:{
        type: String
    },
    ingredients:{
        type: Array
    }
})

module.exports = mongoose.model('favorite', favoriteSchema)
