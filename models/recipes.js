var mongoose = require('mongoose');
 // optional shortcut to the mongoose.Schema class
 var Schema = mongoose.Schema;
 

const Recipe = new Schema({
    recipe_title: {
        type: String,
    },
    recipe_ingrediance:{
        type: Array,
        required: true
    },
    recipe_time: {
        type: Number,

    },
    recipe_directions: {
        type:  String,
            
        
    },
    recipe_favorites:{
        type: Boolean,
    }

});
module.exports = mongoose.model('Recipe', Recipe );