import React from 'react';
import axios from 'axios';

// HEAD_URL
let head_url = 'http://localhost:8000' // develop

// voice-001_tag-002_tag-003
export function getVoices(tag_uuid: string | null, synthetic: boolean){

    const jst = new Date().toLocaleString('ja');
    let uwoot_list 

    if(tag_uuid !== null && synthetic === false){  // voice-001
        uwoot_list = {
            now: jst
        }
    }else if(synthetic === false){ // tag-002
        uwoot_list = {
            now: jst,
            tag_uuid: tag_uuid,
            synthetic: false
        }
    }else{  // tag-003
        uwoot_list = {
            now: jst,
            tag_uuid: tag_uuid,
            synthetic: true
        }
    }

    axios.get(head_url + '/api/v1/voices/get_voices',{ params : uwoot_list })
        .then(res => {
            console.log(res.data)
            return res.data.result
        })
}

// voice-002
export function voice002(user_uuid: string, tags: string, voice: Blob) {
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
        user_uuid: user_uuid,
        tags: tags,
        voice: b64
    }

    axios.post(head_url + '/api/v1/voices/put_voice',{ uwoot })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
}

// tag-001
export function tag001(){

    axios.get(head_url + '/api/v1/tag/tags')
        .then(res => {
            console.log(res.data)
            return res.data.result
        })
}

// like-001
export function like001(user_uuid: string, voice_uuid: string){

    const like = {
        user_uuid: user_uuid,
        voice_uuid: voice_uuid
    }

    axios.put(head_url + '/api/v1/like/increment/', { like })
        .then(res => {
            console.log(res.data)
        })
}

// user-001
export function user001(username: string, profile: string, password: string){
    const register = {
        username: username,
        profile: profile,
        password: password
    }

    axios.post(head_url + '/register/',{ register })
        .then(res => {
            console.log(res.data)
        })
}

// user-002
export function user002(username: string, password: string){
    const login = {
        username: username,
        password: password
    }

    axios.post(head_url + '/login/',{ login })
        .then(res => {
            console.log(res.data)
            return res.data
        })
}