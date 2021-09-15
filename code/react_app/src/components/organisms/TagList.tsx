import { Grid, makeStyles } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import React from "react";
import { tags } from "../data";
import { TagRow } from "../molecules/TagRow";


const useStyles = makeStyles({
  root: {
    backgroundColor: orange[500],
    height: '100%',
  }
})

export function TagList() {
  const classes = useStyles();

  const tagRows = tags.map((tag, idx) => (
    <TagRow key={tag.uuid} idx={idx+1} uuid={tag.uuid} name={tag.name} />
  ));

  return (
    <Grid
      container
      className={classes.root}
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {tagRows}
    </Grid>
  );
}