import { Box, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { UwootMsg } from "../molecules/Uwoot";
import { tmpUwootList } from "../data";
import { getVoices, Uwoot } from "../../ApiFunction";
import { useLocation, useParams } from "react-router";

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

export function TimeLine() {
  const classes = useStyles();
  const [uwootList, setUwootList] = useState([] as Uwoot[]);
  const [totalVoice, setTotalVoice] = useState('');

  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const tagId = query.get('tag');
  useEffect(() => {
    const init = async () => {
      // 一覧取得
      const uwootRes: Uwoot[] = await getVoices(tagId, false);
      setUwootList(uwootRes);
      
      if (tagId !== null) {
        // まとめて聞くやつを取ってくる
        const res: Uwoot[] = await getVoices(tagId, true);
        setTotalVoice(res[0].voice);
      }
    };
    init();
    setUwootList(tmpUwootList);  // 後で消す
  }, []);

  const uwoots = uwootList.map(item => (
    <UwootMsg
      key={item.user.name}
      user={item.user}
      tags={item.tags}
      voice={item.voice}
      fires={item.fires}
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