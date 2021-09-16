import { Grid, makeStyles, Paper } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import React from "react";
import { useHistory } from "react-router";
import { Tag, User } from "../../ApiFunction";


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

type Props = {
  idx: number,
  tag: Tag,
  loginUser: User,
}
export function TagRow(props: Props) {
  const classes = useStyles();
  const history = useHistory();

  function handleClick() {
    history.push(`/home?userid=${props.loginUser.uuid}&username=${props.loginUser.name}&tagid=${props.tag.uuid}&tagname=${props.tag.name}`);
  }

  return (
    <Grid item className={classes.gridItem}>
      <Paper className={classes.tagRow} elevation={0} onClick={handleClick} >
        {`${props.idx}: #${props.tag.name}`}
      </Paper>
    </Grid>
  );
}