import React from 'react';
import './Home.scss';
import NavBar from 'components/NavBar/NavBar'
import Profile from 'components/Profile/Profile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="layout">
        <NavBar/>
        <br/>
        <Router>
          <Switch>
            <Route path="/">
              <Profile/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
