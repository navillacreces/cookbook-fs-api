const recipesService = {


    getAllRecipes(knex){

        return knex.select('*').from('recipes');

    },

    insertRecipe(knex, newRecipe){

        return knex
        .insert(newRecipe)
        .into('recipes')
        .returning('*')
        .then(rows =>{
                return rows[0]
        })
        
    },
    deleteRecipe(knex, id ){
        return knex('recipes').where({id}).delete()
    }
}


module.exports = recipesService