import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { UwootMsg } from "../molecules/Uwoot";
import { uwootList } from "../data";

const useStyles = makeStyles({
  timeline: {
    backgroundColor: '#f6a556',
    height: '100vh',
    overflowY: 'scroll',
  },
})

export function TimeLine() {
  const classes = useStyles();

  const uwoots = uwootList.map(item => (
    <UwootMsg
      key={item.voice}
      user={item.user}
      tags={item.tags}
      voice={item.voice}
      fires={item.fires}
    />
  ));

  return (
    <Box className={classes.timeline}>
      {uwoots}
    </Box>
  );
}