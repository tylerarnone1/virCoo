import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Feed.css';
//import './feed.js';

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
        this.state = {recipes:[],
            isShowDescription : false
        };
        
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
            <div class="first">
            <p>welsh onion soko <br />
            <small>Mustard sierra leone bologi kale chard beet greens black-eyed pea sorrel amaranth garlic tigernut spring onion summer purslane asparagus lentil. </small></p>
          </div>
          
          <div class="second">
            <p>Prime Rib Au Juis <br />
            <small>Tri-tip capicola kielbasa salami brisket chicken rump strip steak drumstick. Meatloaf chuck boudin ribeye pork jowl. Andouille bacon jowl meatloaf pork loin prosciutto bresaola.</small></p>
          </div>
            
          <div class="dessert">
            <p>Triple CheeseCake <br />
            <small>Lollipop tart cotton candy jelly-o carrot cake apple pie cupcake. Jelly-o bear claw ice cream candy canes.</small></p>
          </div>
          <div class="ramen">
          <p>Shoyu Ramen<br />
          <small>Traditional Style Ramen with pork, soft boiled and marinated eggs, Geen onion in a Myso bone broth Broth</small></p>
          <iframe src="https://www.youtube.com/embed/aafmrrx7Bh4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
          </div>
          <div>
              <p>Creamy Garlic Chicken<br />
              <small>These Chicken and potatoes are deliciously baked in a creamy garlic butter  chicken and potatoes recipe that is sure to satisfy your family with comfort.</small></p>
              <iframe  src="https://www.youtube.com/embed/1t7VeJ00-hU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                  <p>Philly Cheese Steak<br />
                  <small>This Philly Cheese Steak Sandwich  when I was working as a cook at UCR. https://www.youtube.com/watch?v=mdvy6...</small></p>
                  <iframe  src="https://www.youtube.com/embed/fO8S7HHoXqY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                </div>
          
          </div>
                
        )
    }
}
