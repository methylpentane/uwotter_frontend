import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, Paper, TextField, Typography } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { user001, user002 } from "../../ApiFunction";

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    backgroundColor: orange[400],
  },
  login: {
    width: '400px',
    height: '400px',
    margin: 'auto',
    backgroundColor: '#f1f1f1',
    borderRadius: '15px',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
  text: {
    width: '200px',
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
  },
});

export function SignUpWindow() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  let history = useHistory();
  
  function handleChange(type: string, e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    if (type === 'text') {
      setUsername(e.target.value);
    } else if (type === 'password') {
      setPassword(e.target.value);
    }
  }

  function handleClickShowPwd() {
    setShowPwd(!showPwd);
  }

  async function handleClick() {
    await user001(username, '', password);

    history.push(`/login`);
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.login} >
        <Grid
          container
          className={classes.login}
          direction="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item>
            <Typography variant="h4" component="h2" className={classes.title}>
              Welcome to Uwotter!
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" component="h2" className={classes.title}>
              Sign Up
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              className={classes.text}
              label="username"
              variant="outlined"
              color="secondary"
              value={username}
              onChange={(e) => handleChange('text', e)}
            />
          </Grid>
          <Grid item>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPwd ? 'text' : 'password'}
                className={classes.text}
                color="secondary"
                value={password}
                onChange={(e) => handleChange('password', e)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPwd}
                      edge="end"
                    >
                      {showPwd ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              className={classes.btn}
              color="secondary"
              onClick={handleClick}
            >Register!</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
