import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
    <tr>
        <td>{props.recipe.recipe_title}</td>
        <td>{props.recipe.recipe_time}</td>
        <td>{props.recipe.recipe_ingredients}</td>
        <td>{props.recipe.recipe_directions}</td>
            <tb>
            <Link to={"/edit/"+ props.recipe._id}>Edit</Link>
        </tb>
     </tr>       
)

export default class RecipeFeed extends Component {
   
   constructor(props) {
       super(props);
       this.state = {recipes:[]};
   }
   componentDidMount() {
       axios.get('http://localhost:3001/recipes/')
       .then(response => {
           this.setState({recipes: response.data});
       })
       .catch(function(err) {
           console.log(err);
       })
   }
   recipeFeed() {
       return this.state.recipes.map(function(currentRecipe, i){
           return <Recipe recipe={currentRecipe} key={i}/>

       });
   }
   
    render() {
        return (
            <div>
                <h2>Recipes</h2>
                <table className="table table-striped" style={{ marginTop: 20}}>
                </table>
                <thread>
                    <tr>
                        <th>Title</th>
                        <th>Time</th>
                        <th>Ingredients</th>
                        <th>Directions</th>


                    </tr>

                </thread>
                <tbody>
                   { this.recipeFeed() } 
                </tbody>
            </div>
        )
    }
}