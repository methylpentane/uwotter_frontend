import React, { useState } from 'react';
import {
  CardContent,
  makeStyles,
  Typography,
  Card,
  CardHeader,
  Avatar,
  Link,
  Grid,
  createTheme,
  ThemeProvider,
} from '@material-ui/core';
import { orange, red } from '@material-ui/core/colors';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AudioPlayer from 'material-ui-audio-player';
import clsx from 'clsx';
import { Uwoot } from '../../ApiFunction';

const muiTheme = createTheme({});

const useStyles = makeStyles({
  root: {
    width: '50%',
    margin: '10px auto',
    backgroundColor: red[300],
    transition: 'all 200ms 0s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    }
  },
  header: {
    backgroundColor: red[500],
    padding: '8px',
  },
  avatar: {
    backgroundColor: red[900],
  },
  audio: {
    height: '30px',
  },
  tag: {
    margin: '0 5px',
    color: 'white',
  },
  user: {
    flexGrow: 1,
  },
  userName: {
    color: 'white',
    fontSize: '200%',
  },
  userId: {
    marginLeft: '20px',
    fontSize: '60%',
  },
  fireBtn: {
    color: '#6a3534',
    cursor: 'pointer',
    transition: 'all 800ms 0s ease',
    '&:active': {
      color: orange[200],
      transform: 'scale(1.5)',
      transition: 'all 0s 0s linear',
    },
  },
});


export function UwootMsg(props: Uwoot) {
  const classes = useStyles();
  const [fireNum, setFireNum] = useState(props.fires);

  function handleFireClick() {
    setFireNum(fireNum + 1);
  }

  const tags = props.tags.map(tag => (
    <Link key={tag.uuid} className={classes.tag} href={`/home?tag=${tag.uuid}`}>
      {`#${tag.name}`}
    </Link>));

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.user.name[0]}
          </Avatar>
        }
        title={
          <Grid
            container
            alignItems="center"
          >
            <Grid item className={classes.user}>
              <Typography className={classes.userName}>
                {props.user.name}
              </Typography>
            </Grid>
            <Grid item>
              <WhatshotIcon className={classes.fireBtn} onClick={handleFireClick} />
            </Grid>
            <Grid item>
              <Typography>{fireNum}</Typography>
            </Grid>
          </Grid>
        }
      />
      <CardContent>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          spacing={0}
        >
          <Grid item className={classes.audio}>
            <Grid
              container 
              spacing={2}
              alignItems="center"
            >
              <Grid item xs={12}>
                <ThemeProvider theme={muiTheme}>
                  <AudioPlayer
                    src={props.voice}
                    volume={false}
                    elevation={0}
                    time="single"
                    timePosition="end"
                  />
                </ThemeProvider>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography color="textSecondary">
              <br/>{tags}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
