import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import SignUpPage from './SignUpPage';
import UserPage from './UserPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/user" component={UserPage} />
      </Switch>
    </Router>
  );
}

export default App;
