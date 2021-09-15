import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TagPage } from './components/pages/TagPage';
import { HomePage } from './components/pages/HomePage';
import { TagList } from './components/organisms/TagList';
import { Grid, makeStyles } from '@material-ui/core';
import { TimeLine } from './components/organisms/Timeline';
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    backgroundColor: orange[400],
  },
})

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Grid
        container
        direction='row'
        alignItems='stretch'
      >
        <Grid item xs={9}>
          <Switch>
            <Route path="/tags" exact>
              <TagPage />
            </Route>
            <Route path="/" exact>
              <TimeLine />
            </Route>
          </Switch>
        </Grid>

        <Grid item xs={3} className={classes.root}>
          <TagList />
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;