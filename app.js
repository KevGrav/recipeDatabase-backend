const express = require('express')
//other packages
const logger = require('morgan')
const cors = require('cors')
const favoriteRouter = require('./routes/favorite/favoriteRouter.js')
const InHouseRouter = require('./routes/inHouse/inHouseRouter.js')



//start express app
const app = express()

//use middleware
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use('/api/favorite', favoriteRouter)
app.use('/api/inHouse', InHouseRouter)

// app.get('/api/recipes/search', async (req, res)=>{
//     res.json({message: "Success!"})
// })



module.exports = app