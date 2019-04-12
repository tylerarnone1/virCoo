var mongoose = require('mongoose');
 // optional shortcut to the mongoose.Schema class
 var Schema = mongoose.Schema;
 

const RecipeSchema = new Schema({
    Title: {
        type: String,
    },
    Ingrediance:{
        type: Array,
        required: true
    },
    CookTime: {
        type: Number,

    },
    Instructions: {
        type:  String,
            
        
    }

});
module.exports = mongoose.model('Recipe', RecipeSchema );