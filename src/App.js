import React, { Component } from 'react';
import "react-router";
import {
  BrowserRouter,
  Route,
  Switch, 
  Redirect
} from 'react-router-dom'

import LoginPage from './components/LoginPage/LoginPage';
import UserPage from './components/UserPage/UserPage';
import UserEventPage from './components/UserEventPage/UserEventPage';
import GlobalPage from './components/GlobalPage/GlobalPage';
import HostedEvents from './components/HostedEvents/HostedEvents';
import LogOut from './components/LogOut/LogOut';
import NoMatch from './components/NoMatch/NoMatch';
import Settings from './components/Settings/Settings';

import './App.css';

class App extends Component {
  
  render() {
    return (
        <BrowserRouter>
            <div>
              <Route exact path="/" component={LoginPage}/>
              <Route path="/LoginPage" component={LoginPage} />
              <Route path="/UserPage" component={UserPage} />
              <Route path="/GlobalFeed" component={GlobalPage} />
              <Route path="/HostedEvents" component={HostedEvents} />
              <Route path="/UserEventPage/:event_id" component={UserEventPage} />
              <Route path="/Settings" component={Settings} />
              <Route path="/LogOut" component={LogOut} />
            </div>
        </BrowserRouter>
    );
  }
}
export default App;