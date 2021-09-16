import React from 'react';
import axios from 'axios';

// HEAD_URL
let head_url = 'http://localhost:8000' // develop

export type User = {
    uuid: string,
    name: string,
}
export type Tag = {
    uuid: string,
    name: string,
}
export type Uwoot = {
    user: User,
    tags: Tag[],
    voice: string,
    fires: number,
}
// voice-001_tag-002_tag-003
export async function getVoices(tag_uuid: string | null, synthetic: boolean): Promise<Uwoot[]> {

    const jst = new Date().toLocaleString('ja');
    let uwoot_list 

    if(tag_uuid === null && synthetic === false){  // voice-001
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

    const res = await axios.get(head_url + '/api/v1/voices/get_voices',{ params : uwoot_list });
    console.log(res.data);
    return res.data.result;
        // .then(res => {
        //     console.log(res.data)
        //     return res.data.result
        // })
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
export async function tag001(){

    const res = await axios.get(head_url + '/api/v1/tag/tags');
    console.log(res.data);
    return res.data.result;
    // .then(res => {
    //     console.log(res.data)
    //     return res.data.result
    // })
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

// test_function
export function ApiGet_Simple(URL: any){
    axios // axiosモジュールを使う
        .get(URL) // getメソッドを呼び出す
        .then((results) => { // レスポンスが来たらthenを実行
            console.log(results.data); // コンソールログにresultsに含まれるdataを表示
        })
        .catch((error) => { // 通信エラーが発生したら
            console.log('通信失敗'); // ログに失敗と表示
            console.log(error.status); // エラーコードを表示
        });
};