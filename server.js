const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const recipeRoutes = express.Router();
const app = express();

let RecipeSchema = require('./models/recipes');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json);


recipeRoutes.route('/').get(function(req, res){
  RecipeSchema.find(function(err, recipes){
    if (err) {
      console.log(err);
    }else{
      res.json(recipes)
    }
  });
});

recipeRoutes.route('/:id').get(function(req, res){
  let id = req.params.id;
  RecipeSchema.findById(id, function(err, recipe){
    res.json(recipe)
  });
});
recipeRoutes.route('/add').post(function(req, res){
  let recipe = new Recipe (req.body);
  recipe.save()
  .then(recipe => {
    res.status(200).json({
      'recipe': "recipe added"
    })
    .catch(err => {
      res.status(400).send('failed');
    })
  })

  recipeRoutes.route('/update/:id').post(function(req, res){
    RecipeSchema.findById(req.params.id, function(err, recipe){
      if (!recipe)
      res.status(404).send('Not found!');
      else
        recipe.recipe_title = req.body.recipe_title;
        recipe.recipe_discription= req.body.recipe_discription;
        recipe.recipe_time = req.body.recipe_time;
        recipe.recipe_ingrediance = req.body.recipe_ingrediance;
        recipe.recipe_favorites = req.body.recipe_favorites;

        recipe.save().then(recipe => {
          res.json('  REcipe update');
        })
        .catch(err => {
          res.status(400).send('update not possible');
        })
    });
  })
})

app.use('/recipes', recipeRoutes);
mongoose.connect('mongodb://127.0.0.1:27017/Vircoo', {useNewUrlParser: true})
const connection = mongoose.connection;

connection.once('open', function() {
  console.log("mongodb connected");
})
// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  // Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});