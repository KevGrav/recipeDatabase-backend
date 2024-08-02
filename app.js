const express = require('express')
//other packages
const logger = require('morgan')
const cors = require('cors')
const recipesRouter = require('./routes/recipes/recipesRouter')
const pantryRouter = require('./routes/pantry/pantryRouter')



//start express app
const app = express()

//use middleware
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use('/api/recipes', recipesRouter)
app.use('/api/pantry', pantryRouter)

module.exports = app