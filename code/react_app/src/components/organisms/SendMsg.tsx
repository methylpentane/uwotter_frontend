import { Button, Dialog, DialogTitle, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { User, voice002 } from "../../ApiFunction";

const dialog = {width: '320px', height: '230px'};

const useStyles = makeStyles({
  root: {
    padding: '20px',
    width: dialog.width,
    minHeight: dialog.height,
  },
  title: {
    textAlign: 'center',
  },
  fileInput: {
    display: 'flex',
    '& > label > div': {
      width: '80px',
      fontSize: '14px',
      fontFamily: 'Roboto, Helvetica, Arial, Sans-serif',
      padding: '6px 16px',
      borderRadius: '20px',
    },
    '& > label > input': {
      position: 'absolute',
      width: '1px',
      height: '1px',
      overflow: 'hidden',
      clip: 'rect(1px, 1px, 1px, 1px)',
    },
  },
  recBtn: {
    borderRadius: '20px',
    cursor: 'pointer',
  },
  tags: {
    borderColor: "orange",
  },
  finalBtns: {
    width: `calc(${dialog.width} - 40px)`,
  },
  sendBtn: {
    color: '#fff',
    backgroundColor: '#ff2599',
    borderRadius: '20px',
    transition: 'background-color 200ms 0s ease',
    '&:hover': {
      backgroundColor: '#ff5894',
      cursor: 'pointer',
    },
  },
  cancelBtn: {
    borderRadius: '20px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
})

type Props = {
  open: boolean,
  onClose: () => void,
  loginUser: User,
};
export function SendMsgDialog(props: Props) {
  const classes = useStyles();
  const [file, setFile] = useState(null as File | null);
  const [tags, setTags] = useState('');
  const [recording, setRecording] = useState(false);
  let history = useHistory();

  function handleFile(e: React.ChangeEvent<HTMLInputElement>): void {
    const files: FileList | null = e.target.files;
    if (files === null) {
      console.log('no file.');
      return;
    }
    setFile(files[0]);
    console.log(file);
  }

  function handleRecordClick() {
    setRecording(!recording);
    if (recording) { // 録音開始
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        console.log('getUserMedia supported.');
        navigator.mediaDevices.getUserMedia ({ audio: true })
          .then(function(stream) {
            const mediaRecorder = new MediaRecorder(stream);
            
          })
          .catch(function(err) {
            console.log('The following getUserMedia error occured: ' + err);
          }
        );
        
      } else {
        console.log('お使いのブラウザでは録音できません');
      }
    }
  }

  function handleTagsChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setTags(e.target.value);
  }

  function handleClose() {
    props.onClose();
  }

  function sendUwoot() {
    if (file === null) {
      alert('Please choose or record sound.');
      return;
    }
    console.log(file.name, tags);
    voice002(props.loginUser.uuid, tags, file);
    console.log('sent uwoot!');
    props.onClose();
    history.push(`/home?userid=${props.loginUser.uuid}&username=${props.loginUser.name}`);
  }
  
  return (
    <Dialog onClose={handleClose} aria-labelledby="send-uwoot" open={props.open}>
      <DialogTitle id="send-uwoot" className={classes.title}>
        UWOOT!
      </DialogTitle>
      <Grid
        container
        className={classes.root}
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <div className={classes.fileInput}>
            <label htmlFor="inputFile">
              <div className="MuiButton-contained">
                Choose file
              </div>
              <input id="inputFile" type="file" onChange={(e) => handleFile(e)} />
            </label>
            <Typography component="span">or</Typography>
            <Button variant="contained" className={classes.recBtn} onClick={handleRecordClick}>Record</Button>
          </div>
        </Grid>
        <Grid item>
          <Typography>
            {(file === null) ? 'Choose or record sound.' : file.name}
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            id="tags"
            label="Tags"
            value={tags}
            placeholder="#Olympic #rakuten, …"
            multiline
            variant="outlined"
            color="secondary"
            onChange={handleTagsChange}
          />
        </Grid>
        <Grid item>
          <Grid
            container
            className={classes.finalBtns}
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item>
              <Button variant="outlined" className={classes.cancelBtn} onClick={handleClose}>Cancel</Button>
            </Grid>
            <Grid>
              <Button variant="contained" className={classes.sendBtn} onClick={sendUwoot}>Uwoot!</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
}
