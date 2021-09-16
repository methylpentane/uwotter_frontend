import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  btn: {
    borderRadius: '20px',
    cursor: 'pointer',
  }
});

export function RecordBtn() {
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.btn}>Record</Button>
  );
}