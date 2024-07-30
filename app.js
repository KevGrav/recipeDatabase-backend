const express = require('express')
//other packages
const logger = require('morgan')
const cors = require('cors')
const userRouter = require('./routes/user/userRouter')


//start express app
const app = express()

//use middleware
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use('/api/user', userRouter)

// app.get('/api/recipes/search', async (req, res)=>{
//     res.json({message: "Success!"})
// })



module.exports = app