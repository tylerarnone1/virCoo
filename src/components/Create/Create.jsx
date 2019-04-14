import React, {Component} from 'react';
import axios from 'axios';

export default class CreateRecipe extends Component {

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
            recipe_favorites: false,
        }
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
            recipe_favorites: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        console.log(`Form submitted`)
        console.log(`title: ${this.state.recipe_title}`);
        console.log(`directions: ${this.state.recipe_directions}`);
        console.log(`Ingredients: ${this.state.recipe_ingredients}`);
        console.log(`time: ${this.state.recipe_time}`);
        console.log(`favorites: ${this.state.recipe_favorites}`);
        
        const newRecipe = {
            recipe_title       : this.state.recipe_title,
            recipe_directions  : this.state.recipe_directions,
            recipe_time        : this.state.recipe_time,
            recipe_ingredients : this.state.recipe_ingredients,
            recipe_favorites   : this.state.recipe_favorites,
        }
        axios.post('http://localhost:3001/create', newRecipe)
        .then(res => console.log(res.data));
        
    
        

        this.setState({
            recipe_title: '',
            recipe_directions: '',
            recipe_ingredients: '',
            recipe_time: '',
            recipe_favorites: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10 }}>
                <h3>Submit New Recipe</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Title: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.recipe_title}
                            onChange={this.onChangeRecipeTitle}>
                    </input>
                </div>
            
                    <label>Prep Time: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.recipe_time}
                            onChange={this.onChangeRecipeTime}>
                    </input>
                    <label>Ingredients: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.recipe_Ingredients}
                            onChange={this.onChangeRecipeIngredients}>
                    </input>
                    <label>directions: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.recipe_directions}
                            onChange={this.onChangeRecipeDirection}>
                    </input>
               
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
                <div className="form-group">
                    <input type="submit" vlaue="Submit" className="btn btn-primary">
                    </input>
                </div>
                </form>
         
        </div>
        )
    };
}