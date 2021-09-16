import React from 'react';
import { TagList } from '../organisms/TagList';
import { Grid, makeStyles } from '@material-ui/core';
import { TimeLine } from '../organisms/Timeline';
import { orange } from '@material-ui/core/colors';
import { TopBar } from '../organisms/TopBar';
import { useLocation } from 'react-router-dom';
import { Tag, User } from '../../ApiFunction';
import { TagBar } from '../organisms/TagBar';

const useStyles = makeStyles({
  root: {
    backgroundColor: orange[400],
  },
});

export function HomePage() {
  const classes = useStyles();
  
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const userId = (query.get('userid') === null) ? '' : query.get('userid') as string;
  const username = (query.get('username') === null) ? '' : query.get('username') as string;
  const tagId = (query.get('tagid') === null) ? '' : query.get('tagid') as string;
  const tagName = (query.get('tagname') === null) ? '' : query.get('tagname') as string;
  const loginUser: User = {uuid: userId, name: username};
  const tag: Tag = {uuid: tagId, name: tagName};

  return (
    <>
      <TopBar loginUser={loginUser} />

      {tagId && <TagBar tag={tag} />}

      <Grid
        container
        direction='row'
        alignItems='stretch'
      >
        <Grid item xs={9}>
          <TimeLine loginUser={loginUser} tag={tag} />
        </Grid>
        
        <Grid item xs={3} className={classes.root}>
          <TagList loginUser={loginUser} />
        </Grid>
      </Grid>
    </>
  );
}
