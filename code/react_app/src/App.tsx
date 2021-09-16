import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginWindow } from './components/pages/Login';
import { HomePage } from './components/pages/HomePage';
import { SignUpWindow } from './components/pages/SignUp';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginWindow />
        </Route>
        <Route path="/signup">
          <SignUpWindow />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;