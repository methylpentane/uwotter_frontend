import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TagPage } from './components/pages/TagPage';
import { HomePage } from './components/pages/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products" component={TagPage} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
}

export default App;