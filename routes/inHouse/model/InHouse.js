const mongoose = require('mongoose')

const inHouseSchema = new mongoose.Schema({
    ingredient:{
        type: String
    },
    quantity:{
        type: Number
    }
})

module.exports = mongoose.model('inHouse', inHouseSchema)
