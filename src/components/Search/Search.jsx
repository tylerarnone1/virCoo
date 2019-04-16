
import axios from 'axios';
import React, { Component } from 'react';

import recipe from '../Create/Create';



export default class SearchRecipe extends Component {

    constructor(props) {
      super(props);
      this.state = {
        searchRecipe: "",
        recipes: []
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    componentDidMount() {
      this.setState({
        recipe: recipe
      });
      this.refs.search.focus();
    }
  
    handleChange() {
      this.setState({
        searchString: this.refs.search.value
      });
    }
  
    render() {
      let _recipes = this.state.recipes;
      let search = this.state.searchString.trim().toLowerCase();
  
      if (search.length > 0) {
        _recipes = _recipes.filter(function(user) {
          return recipe.title.toLowerCase().match(search);
        });
      }
  
      return (
        <div>
          <h3>search</h3>
          <div>
            <input
              type="text"
              value={this.state.searchString}
              ref="search"
              onChange={this.handleChange}
              placeholder="Search"
            />
            <ul>
              {_recipes.map(l => {
                return (
                  <li>
                    {l.title} <a href="#">{l.ingredients}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    }
  }
  
 