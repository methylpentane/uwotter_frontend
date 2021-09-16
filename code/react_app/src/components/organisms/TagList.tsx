import { Grid, makeStyles, Paper } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import { Tag, tag001, User } from "../../ApiFunction";
import { tmpTags } from "../data";
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

export function TagList(props: {loginUser: User}) {
  const classes = useStyles();
  const [tags, setTags] = useState([] as Tag[]);

  useEffect(() => {
    const init = async () => {
      const tagRes: Tag[] = await tag001();
      setTags(tagRes);
    };
    init();
    // setTags(tmpTags);  // 後で消す
  }, []);

  const tagRows = tags.map((tag, idx) => (
    <TagRow key={tag.uuid} idx={idx+1} tag={tag} loginUser={props.loginUser} />
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