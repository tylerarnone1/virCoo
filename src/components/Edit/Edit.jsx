import React, {Component} from 'react';
import axios from 'axios';

export default class EditRecipe extends Component {
    
    constructor(props) {
        super(props);

        this.onChangeRecipeTitle = this.onChangeRecipeTitle.bind(this);
            this.onChangeRecipeDirection = this.onChangeRecipeDirection.bind(this);
            this.onChangeRecipeIngredients = this.onChangeRecipeIngredients.bind(this);
            this.onChangeRecipeTime = this.onChangeRecipeTime.bind(this);
            this.onChangeRecipeFavorite = this.onChangeRecipeFavorite.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
            recipe_title: '',
            recipe_directions: '',
            recipe_ingredients: '',
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
        onChangeRecipeTitle(e) {
            this.setState({
                recipe_title: e.target.value
            });
        }
        onChangeRecipeDirection(e) {
            this.setState({
                recipe_directions: e.target.value
            });
        }
        onChangeRecipeIngredients(e) {
            this.setState({
                recipe_ingredients: e.target.value
            });
        }
        onChangeRecipeTime(e) {
            this.setState({
                recipe_time: e.target.value
            });
        }
        onChangeRecipeFavorite(e) {
            this.setState({
                recipe_favorites: !this.state.recipe_favorites
            });
        }

        onSubmit(e) {
            e.preventDefault();
            const obj = {
            recipe_title       : this.state.recipe_title,
            recipe_directions  : this.state.recipe_directions,
            recipe_time        : this.state.recipe_time,
            recipe_ingredients : this.state.recipe_ingredients,
            recipe_favorites   : this.state.recipe_favorites,
            }

            axios.post('http://localhost:3001/recipes/update/'+ this.props.match.params.id,  obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
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
                                onChange={this.onChangeRecipeFavorites} />

                            <label className="form-check-label">no</label>
                    </div>
                   
                    <div className="form-check form-check-inline"></div>
                        <input className="form-check-input"
                                type="radio"
                                name="FavOptions"
                                value="yes"
                                checked={this.state.recipe_favorites==='yes'}
                                onChange={this.onChangeRecipeFavorites} />

                            <label className="form-check-label">yes</label>
                   </div>
                    
                    <br/>
                    <div className='form-group'>
                        <imput type="submit" value="Update Recipe" className="btn btn-primaary"/>
                    </div>
                </form>
            </div>
        )
    }
}