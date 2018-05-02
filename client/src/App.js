import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomePage from './components/HomePage.jsx';
import { 
  PrivateRoute, 
  PropsRoute, 
  LoggedOutRoute 
} from './components/Routes';

import LoginPage from './pages/LoginPage.jsx';
import LogoutFunction from './pages/LogoutFunction.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';

import Auth from './utils/Auth';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

class App extends Component {

  state = {
    authenticated: false
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus = () => {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
          <div>
            <div className="top-bar">
              <div className="top-bar-left">
                <Link to="/">React App</Link>
              </div>
              {this.state.authenticated ? (
                <div className="top-bar-right">
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/logout">Log out</Link>
                </div>
              ) : (
                <div className="top-bar-right">
                  <Link to="/login">Log in</Link>
                  <Link to="/signup">Sign up</Link>
                </div>
              )}

            </div>

            <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <PrivateRoute path="/dashboard" component={DashboardPage}/>
            <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <LoggedOutRoute path="/signup" component={SignUpPage}/>
            <Route path="/logout" component={LogoutFunction}/>
          </div>

        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
