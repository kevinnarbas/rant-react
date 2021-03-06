import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {Link} from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import userService from '../../utils/userService'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'
import MainPage from '../MainPage/MainPage'
import BusinessDetailPage from '../BusinessDetailPage/BusinessDetailPage'
import AboutPage from '../AboutPage/AboutPage'

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
          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        <div>
          <Switch>
            <Route exact path='/' render={() => 
              <MainPage user={this.state.user} />
            } />
            <Route path='/signup' render={({history}) => 
              <SignupPage 
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
                />
              } />
            <Route path='/login' render={({history}) => 
              <LoginPage 
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />
            <Route path='/business/:id' render={(props) => 
              <BusinessDetailPage {...props} />
            } />
            <Route path='/about' render={() =>
              <AboutPage />
            } />
            <Route exact path='/yelp' component={() => window.location = 'https://yelp.com'}/>
          </Switch>
        </div>
        <footer className="App-footer">
          <p>Rant made by Kevinn Arbas with ♥︎ Remember to ♻︎ always</p>
          <p>ALL BUSINESS INFORMATION IS FROM <Link to='/yelp' target='_blank'>YELP!</Link></p>
        </footer>
      </div>
    );
  }
}

export default App;
