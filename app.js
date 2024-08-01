const express = require('express')
//other packages
const logger = require('morgan')
const cors = require('cors')
const recipesRouter = require('./routes/recipes/recipesRouter.js')
const pantryRouter = require('./routes/pantry/pantryRouter.js')



//start express app
const app = express()

//use middleware
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use('/api/recipes', recipesRouter)
app.use('/api/pantry', pantryRouter)

// app.get('/api/recipes/search', async (req, res)=>{
//     res.json({message: "Success!"})
// })



module.exports = app