import { Box, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { UwootMsg } from "../molecules/Uwoot";
import { tmpUwootList } from "../data";
import { getVoices, Tag, User, Uwoot } from "../../ApiFunction";
import { useLocation } from "react-router";

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

type Props = {
  loginUser: User,
  tag: Tag,
}
export function TimeLine(props: Props) {
  const classes = useStyles();
  const [uwootList, setUwootList] = useState([] as Uwoot[]);

  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const tagId = query.get('tagid');
  useEffect(() => {
    const init = async () => {
      // 一覧取得
      const uwootRes: Uwoot[] = await getVoices(tagId, false);
      setUwootList(uwootRes);
      
      
    };
    init();
    // setUwootList(tmpUwootList);  // 後で消す
  }, [tagId]);

  const uwoots = uwootList.map(item => (
    <UwootMsg
      key={item.user.name}
      uwoot={item}
      loginUser={props.loginUser}
    />
  ));

  let showItem = <div>データ読み込み中…</div>;
  if (uwootList.length > 0) {
    showItem = (
      <Box className={classes.timeline}>
        {uwoots}
      </Box>
    );
  }

  return (
    <>
      <div className={classes.toolbar}></div>
      {showItem}
    </>
  );
}