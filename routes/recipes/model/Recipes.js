const mongoose = require('mongoose')

const recipiesSchema = new mongoose.Schema({
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

module.exports = mongoose.model('recipies', recipiesSchema)
