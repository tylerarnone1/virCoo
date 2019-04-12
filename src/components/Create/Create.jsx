import React, {Component} from 'react';

export default class CreateFeed extends Component {

    constructor(props) {
        super(props);
            this.onChangeRecipeTitle = this.onChangeRecipeTitle.bind(this);
            this.onChangeRecipeDirection = this.onChangeRecipeDirection.bind(this);
            this.onChangeRecipeIngrediance = this.onChangeRecipeIngrediance.bind(this);
            this.onChangeRecipeTime = this.onChangeRecipeTime.bind(this);
            this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            recipe_directions: '',
            recipe_ingrediance: '',
            recipe_time: '',
            recipe_favorites: false
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
    onChangeRecipeIngrediance(e) {
        this.setState({
            recipe_ingrediance: e.target.value
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
        console.log(`title: ${this.sate.recipe_title}`);
        console.log(`directions: ${this.sate.recipe_direction}`);
        console.log(`ingrediance: ${this.sate.recipe_ingrediance}`);
        console.log(`time: ${this.sate.recipe_time}`);
        console.log(`favorites: ${this.sate.recipe_favorites}`);
        console.log(`directions: ${this.sate.recipe_direction}`);

        this.setState({
            recipe_title: '',
            recipe_directions: '',
            recipe_ingrediance: '',
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
                </form>
            </div>
        )
    }
}