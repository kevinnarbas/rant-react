import React, {Component} from 'react';
import {Route, Switch, redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import userService from '../../utils/userService'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'
import MainPage from '../MainPage/MainPage'

class App extends Component {
  state = {
    user: userService.getUser()
  }
  
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
        </header>
        <div>
          <Switch>
            <Route exact path='/' render={() => 
              <MainPage />
            } />
            <Route path='/signup' render={() => 
              <SignupPage />
            } />
            <Route path='/login' render={() => 
              <LoginPage />
            } />

          </Switch>
        </div>
        <footer>Rant made by Kevinn Arbas with ♥︎ Remember to ♺ always</footer>
      </div>
    );
  }
}

export default App;
