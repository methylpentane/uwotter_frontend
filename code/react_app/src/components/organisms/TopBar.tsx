import { AppBar, Button, Divider, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import React, { useState } from "react";
import { SendMsgDialog } from "./SendMsg";

const useStyles = makeStyles({
  appBar: {
    width: '100%',
    height: '65px',
    left: 0,
    backgroundColor: orange[500],
    paddingRight: '0px',
  },
  title: {
    color: '#ffffff',
    flexGrow: 1,
  },
  uwootBtn: {
    marginRight: '100px',
    paddingLeft: '30px',
    paddingRight: '30px',
    color: '#fff',
    backgroundColor: '#ff2599',
    borderRadius: '20px',
    transition: 'background-color 200ms 0s ease',
    '&:hover': {
      backgroundColor: '#ff5894',
      cursor: 'pointer',
    }
  },
  divider: {
    height: '65px',
    left: '75vw',
  },
  tagTitle: {
    backgroundColor: orange[500],
    width: 'calc(25vw - 48px)',
    textAlign: 'center',
    // transform: 'translate(24px, 0px)',
  }
})

export function TopBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function handleBtnClick() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
    >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Uwotter
        </Typography>
        <Button variant="contained" className={classes.uwootBtn} onClick={handleBtnClick}>
          Uwoot!
        </Button>
        <Divider absolute={true} orientation="vertical" className={classes.divider} />
        <div className={classes.tagTitle}>
          Trend Tags
        </div>
      </Toolbar>
      <SendMsgDialog open={open} onClose={handleClose} userId="1" />
    </AppBar>
  );
}