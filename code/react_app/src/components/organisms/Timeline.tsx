import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { UwootMsg } from "../molecules/Uwoot";
import { uwootList } from "../data";

const useStyles = makeStyles({
  timeline: {
    backgroundColor: '#f6a556',
    // height: '95vh',
    // overflowY: 'scroll',
  },
  gridItem: {
    width: '50%',
  },
})

export function Timeline() {
  const classes = useStyles();

  const uwoots = uwootList.map(item => (
    <Grid item className={classes.gridItem}>
      <UwootMsg
        key={item.voice}
        user={item.user}
        tags={item.tags}
        voice={item.voice}
        fires={item.fires}
      />
    </Grid>
  ));

  return (
    <Grid
      container
      className={classes.timeline}
      spacing={3}
      direction="column"
      alignItems="center"
    >
      {uwoots}
    </Grid>
  );
}