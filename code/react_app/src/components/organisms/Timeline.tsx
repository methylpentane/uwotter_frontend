import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { UwootMsg } from "../molecules/Uwoot";
import { uwootList } from "../data";

const useStyles = makeStyles((theme) => {
  return {
    timeline: {
      backgroundColor: '#f6a556',
      height: 'calc(100vh - 65px)',
      overflowY: 'scroll',
    },
    toolbar: theme.mixins.toolbar
  };
});

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
    <>
      <div className={classes.toolbar}></div>
      <Box className={classes.timeline}>
        {uwoots}
      </Box>
    </>
  );
}