import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import userService from './utils/userService';
import './App.css';
import CreateRecipe from "./components/Create/Create";
import EditRecipe from "./components/Edit/Edit";
import RecipeFeed from "./components/Feed/Feed";

import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';


class App extends Component{
  constructor(){
    super();
   
    this.state = {
    recipe_title: '',
    recipe_directions: '',
    recipe_ingredients: '',
    recipe_time: '',
    recipe_favorites: false,
}
    
  }
handleLogout = () => {
  userService.logout();
  this.setState({ user: null });
}

handleSignupOrLogin = () => {
  this.setState({user: userService.getUser()});
}
handleSignupOrLogin = () => {
  this.setState({user: userService.getUser()});
}

async componentDidMount() {
  const user = userService.getUser();
  this.setState({ user });
}



  render() {
    return (
      <Router>
        <div className= "container">
        <nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#">Roulette</a></li>
        <li><a href="/create">Contribute</a></li>
        <li><a href="#">Favorites</a></li>
        <li><a href="/login">log in</a></li>
         <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
        
      </ul>
    </nav>
        <h1>VirCoo</h1>
        <h2>A living cookbook, Powered by you!</h2>

        </div>
        <Route path="/" exact component={RecipeFeed} />
        <Route path="/edit/:id" component={EditRecipe} />
        <Route path="/create" component={CreateRecipe} />
        <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
      </Router>
    );
  }
}

export default App;
