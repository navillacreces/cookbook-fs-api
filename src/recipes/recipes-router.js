const express = require('express')
const recipeService = require('./recipesService')
const recipeRouter = express.Router()
const bodyParser = express.json()


recipeRouter
    .route('/')

    .get((req,res,next) =>{

        const knexInstance = req.app.get('db')

        recipeService.getAllRecipes(knexInstance)
            .then(recipes =>{
                res.json(recipes)
            })
            .catch(next)
        
    })

    .post(bodyParser,(req,res) =>{

        const {name,cooktime,servings,ingredients,instructions} = req.body;

        if (!name || !cooktime || !servings || !ingredients || !ingredients){
            return res.status(400).send('invalid data')
        }

        const newRecipe = {
            name: name,
            cooktime: cooktime,
            servings: servings,
            ingredients: ingredients,
            instructions: instructions
        }

        const knexInstance = req.app.get('db')

        recipeService.insertRecipe(knexInstance,newRecipe)
            .then(recipe =>{
                res.location(`https://localhost:8000/recipes/{recipe.id}`).status(201).json(recipe)
            })
            .catch(err => {
                res.send("not posted" + JSON.stringify(err))
            });
        

    })

recipeRouter
    .route('/:id')

    .delete((req,res,next) =>{
        const {id} = req.params;

        const knexInstance = req.app.get('db')

        recipeService.deleteRecipe(knexInstance,id)
            .then(recipe =>{
                res.send(204).end()
            })
            .catch(next)

    })



    module.exports = recipeRouter