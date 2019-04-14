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


//connect database
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