const express = require('express')

const recipeRoute = express.Router()
const bodyParser = express.json()


recipeRoute
    .route('/recipes')


    .get((req,res,next) =>{

    })


    .post(bodyParser,(req,res) =>{

    })