require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const app = express()

const recipeRouter = require('./recipes/recipes-router')


const morganOption = process.env.NODE_ENV === 'production' ? 'tiny' : 'common'

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use('/recipes', recipeRouter)

app.use(function errorHandler(error, req, res, next) {
  console.error(error)
   let response
   if (NODE_ENV === 'production') {
     response = { error: { message: 'server error' } }
   } else {
     console.error(error)
    response = { message: error.message, error }
   }
   res.status(500).json(response)
 })
    


module.exports = app