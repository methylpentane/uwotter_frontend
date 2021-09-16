import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import { getVoices, Tag, Uwoot } from "../../ApiFunction";

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: '65px',
    width: '16vw',
    height: '100px',
    zIndex: 1,
  },
  tagbar: {
    height: '100px',
    backgroundColor: orange[500],
  },
  tagTitle: {
    color: 'white',
  },
  btn: {
    paddingLeft: '30px',
    paddingRight: '30px',
    color: '#fff',
    backgroundColor: '#ff2599',
    borderRadius: '20px',
    transition: 'background-color 200ms 0s ease',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#ff5894',
    }
  }
})

export function TagBar(props: { tag: Tag }) {
  const classes = useStyles();
  const [totalVoice, setTotalVoice] = useState('');

  function handleClick() {
    if (totalVoice === '') {
      alert(`have not loaded sound yet...`);
      return;
    }
    const audioPlayer = new Audio(totalVoice);
    audioPlayer.play();
  }

  useEffect(() => {
    const load = async () => {
      if (props.tag.uuid !== null) {
        // まとめて聞くやつを取ってくる
        const res: Uwoot[] = await getVoices(props.tag.uuid, true);
        setTotalVoice(res[0].voice);
      }
    };
    load();
  });
  

  return (
    <Paper className={classes.root}>
      <Grid
        container
        className={classes.tagbar}
        direction="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.tagTitle}>#{props.tag.name}</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.btn}
            onClick={handleClick}
          >
            Play All!
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}