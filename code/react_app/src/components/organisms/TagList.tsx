import { Grid, makeStyles, Paper } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import React from "react";
import { tags } from "../data";
import { TagRow } from "../molecules/TagRow";


const useStyles = makeStyles({
  root: {
    backgroundColor: orange[500],
    height: 'calc(100vh - 65px)',
  },
  tagTitle: {
    height: '65px',
    backgroundColor: orange[500],
    color: '#ffffff',
  }
})

export function TagList() {
  const classes = useStyles();

  const tagRows = tags.map((tag, idx) => (
    <TagRow key={tag.uuid} idx={idx+1} uuid={tag.uuid} name={tag.name} />
  ));

  return (
    <>
      <Paper className={classes.tagTitle} elevation={3}>Trend Tag</Paper>
      <Grid
        container
        className={classes.root}
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {tagRows}
      </Grid>
    </>
  );
}