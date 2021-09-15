import React, { useState } from 'react';
import {
  CardContent,
  makeStyles,
  Typography,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Link,
  Slider,
  Grid,
} from '@material-ui/core';
import { orange, red } from '@material-ui/core/colors';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    // maxWidth: 600,
    backgroundColor: red[300],
  },
  header: {
    backgroundColor: red[500],
    padding: '8px',
  },
  avatar: {
    backgroundColor: red[900],
  },
  tag: {
    margin: '0 5px',
  },
  user: {
    display: 'flex',
    alignItems: 'center',
  },
  userName: {
    color: 'white',
    fontSize: '200%',
  },
  userId: {
    marginLeft: '20px',
    fontSize: '60%',
  },
  fired: {
    color: orange[300],
  },
  timeGrid: {
    flexGrow: 1,
  },
  time: {
    fontSize: '70%',
  },
});

export type User = {
  uuid: string,
  name: string,
}
export type Uwoot = {
  user: User,
  tags: string[],
  voice: string,
  fires: number,
}
export function UwootMsg(props: Uwoot) {
  const classes = useStyles();
  const [playing, setPlaying] = useState(false);
  const [fired, setFired] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = new Audio(props.voice);
  function handlePlayClick() {
    if (!playing) {
      console.log('RendoB', audioPlayer.duration);
      audioPlayer.play();
    }
    setPlaying(!playing);
  }
  function handleSeekbar(e: any, newValue: number | number[]) {
    setCurrentTime(newValue as number);
  }

  function handleFireClick() {
    setFired(!fired);
  }

  const audioButton = playing ? <PauseIcon /> : <PlayArrowIcon />;

  const tags = props.tags.map(tag => (
    <Link key={tag} className={classes.tag} href="/">
      {`#${tag}`}
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
          <div className={classes.user}>
            <Typography className={classes.userName}>
              {props.user.name}
            </Typography>
          </div>
        }
      />
      <CardContent>
        <Grid
          container 
          spacing={2}
          alignItems="center"
        >
          <Grid item>
            <IconButton aria-label="play or pause" onClick={handlePlayClick}>
              {audioButton}
            </IconButton>
          </Grid>
          <Grid item xs={5}>
            <Slider
              value={currentTime}
              onChange={handleSeekbar}
              min={0}
              max={0.19325}
              step={0.01}
              aria-labelledby="seek-bar"
            />
          </Grid>
          <Grid item className={classes.timeGrid}>
            <Typography className={classes.time} color="textSecondary">
              {currentTime}
            </Typography>
          </Grid>
          <Grid>
            <IconButton aria-label="like" onClick={handleFireClick}>
              <WhatshotIcon className={clsx(fired && classes.fired)} />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" component="p">
          {tags}
        </Typography>
      </CardContent>
    </Card>
  );
}
