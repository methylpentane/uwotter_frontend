import { Grid, makeStyles, Paper } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import React from "react";
import { useHistory } from "react-router";


const useStyles = makeStyles({
  gridItem: {
    width: '80%',
  },
  tagRow: {
    backgroundColor: orange[300],
    padding: '15px 25px',
    borderRadius: '22px',
    transition: 'background-color 300ms 0s ease',
    '&:hover': {
      backgroundColor: orange[200],
      cursor: 'pointer',
    },
  },
})

export type IndexedTag = {
  idx: number,
  uuid: string,
  name: string,
}

export function TagRow(props: IndexedTag) {
  const classes = useStyles();
  const history = useHistory();

  function handleClick() {
    history.push(`/home?tag=${props.uuid}`);
  }

  return (
    <Grid item className={classes.gridItem}>
      <Paper className={classes.tagRow} elevation={0} onClick={handleClick} >
        {`${props.idx}: #${props.name}`}
      </Paper>
    </Grid>
  );
}