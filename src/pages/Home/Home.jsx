import React from 'react';
import { Link } from 'react-router-dom';
import RecipeFeed from "../components/Feed/Feed";
import NavBar from '../../components/NavBar/NavBar';
import './Home.css';

const Home = (props) => {
    return (
      <div className="Home">
        <NavBar
          user={props.user}
          handleLogout={props.handleLogout}
        />
        <div className="flex-h align-flex-end">
        <RecipeFeed
            recipe_title       = {props.title}
            recipe_directions  = {props.recipe_directions}
            recipe_ingredients = {props.recipe_ingredients}
            recipe_time        = {props.recipe_time}
            recipe_favorites   = {props.recipe_favorites}
        />
        
          </div>
          
        </div>
       
    );
  
  };
  
  export default Home;