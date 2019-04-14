import React, {Component} from 'react';
import axios from 'axios';

export default class EditRecipe extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            recipe_title: '',
            recipe_directions: '',
            recipe_ingrediants: '',
            recipe_time: '',
            recipe_favorites: false
        

        }
    }
        componentDidMount(){
            axios.get('http://localhost:3001/recipe/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    recipe_title      : response.data.recipe_title,
                    recipe_directions : response.data.recipe_directions,
                    recipe_ingredients: response.data.recipe_ingredients,
                    recipe_time       : response.data.recipe_time,
                    recipe_favorites  : response.data.recipe_favorites
                })
                })
                .catch(function(err) {
                    console.log(err)
                })
            
        }
  
  
    render() {
        return (
            <div>
                <h3>update recipe</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" 
                        value={this.state.recipe_title} onChange={this.onChangeRecipeTitle}/>

                    </div>
                    <div className="form-group">
                        <label>Time</label>
                        <input type="text" className="form-control" 
                        value={this.state.recipe_time} onChange={this.onChangeRecipeTime}/>
                        
                    </div>
                    <div className="form-group">
                        <label>Ingredients</label>
                        <input type="text" className="form-control" 
                        value={this.state.recipe_ingredients} onChange={this.onChangeRecipeIngreients}/>
                        
                    </div>
                    <div className="form-group">
                        <label>Directions</label>
                        <input type="text" className="form-control" 
                        value={this.state.recipe_directions} onChange={this.onChangeRecipeDirections}/>
                        
                    </div>
                    <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                                type="radio"
                                name="FavOptions"
                                value="no"
                                checked={this.state.recipe_favorites==='no'}
                                onChange={this.onChangeRecipeFavorite} />

                            <label className="form-check-label">no</label>
                    </div>
                   
                    <div className="form-check form-check-inline"></div>
                        <input className="form-check-input"
                                type="radio"
                                name="FavOptions"
                                value="yes"
                                checked={this.state.recipe_favorites==='yes'}
                                onChange={this.onChangeRecipeFavorite} />

                            <label className="form-check-label">yes</label>
                   </div>
                  
                </form>
            </div>
        )
    }
}