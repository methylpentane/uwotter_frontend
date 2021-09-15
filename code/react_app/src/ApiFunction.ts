import React from 'react';
import axios from 'axios';

// voice-001
export function voice001(tag_uuid: string = 'null' , synthetic: boolean = false){

    const jst = new Date().toLocaleString('ja');
    let uwoot_list 

    if(tag_uuid != 'null' && synthetic == false){
        uwoot_list = {
            now: jst
        }
    }else if(tag_uuid != 'null'){
        uwoot_list = {
            now: jst,
            synthetic: synthetic
        }
    }else if(synthetic == false){
        uwoot_list = {
            now: jst,
            tag_uuid: tag_uuid
        }
    }else{
        uwoot_list = {
            now: jst,
            tag_uuid: tag_uuid,
            synthetic: synthetic
        }
    }

    axios.get('http://localhost:8000/api/v1/voices/get_voices',{ params : uwoot_list })
        .then(res =>{
            return res.data
        })
}

// voice-002
export function voice002(user_uuid: String, tags: String, voice: Blob) {
    // let sound_blob = new Blob([file] , {type: 'audio/aac'})
    // console.log("blob実行結果：",sound_blob)

    const reader = new FileReader();
    let b64: any; // base64変数

    reader.onload = function(){
        b64 = reader.result;
        console.log(b64);
    }
    reader.readAsDataURL(voice);

    const uwoot = {
        user_uuid: user_uuid, //number???
        tags: tags,
        voice: b64
    }

    axios.post('http://localhost:8000/api/v1/voices/put_voice',{ uwoot })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
}
