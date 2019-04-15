const express = require('express');
const recipeRoutes = express.Router();

// Require Recipe model in our routes module
let Recipe = require('./models/recipes');

// Defined store route
recipeRoutes.route('/create').post(function (req, res) {
  let recipe = new Recipe(req.body);
  console.log(req.body);
  recipe.save()
    .then(recipe => {
      res.status(200).json({'recipe': 'recipe is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
recipeRoutes.route('/').get(function (req, res) {
    Recipe.find(function(err, recipes){
    if(err){
      console.log(err);
    }
    else {
      res.json(recipes);
    }
  });
});

// Defined edit route
recipeRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Recipe.findById(id, function (err, recipe){
      res.json(recipe);
  });
});

//  Defined update route
recipeRoutes.route('/update/:id').post(function (req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
    if (!recipe)
      res.status(404).send("data is not found");
    else {
        recipe.recipe_title = req.body.recipe_title;
        recipe.recipe_directions = req.body.recipe_directions;
        recipe.recipe_ingredients = req.body.recipe_ingredients;
        recipe.recipe_time = req.body.recipe_time;
        recipe.recipe_favorites = req.body.recipe_favorites;

        recipe.save().then(recipe => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
recipeRoutes.route('/delete/:id').get(function (req, res) {
    Recipe.findByIdAndRemove({_id: req.params.id}, function(err, recipe){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = recipeRoutes;