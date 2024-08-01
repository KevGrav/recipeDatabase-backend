const mongoose = require('mongoose')

const pantrySchema = new mongoose.Schema({
    ingredient:{
        type: String
    },
    quantity:{
        type: Number
    }
})

module.exports = mongoose.model('pantry', pantrySchema)
