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
    uuid: string,
    user: User,
    tags: Tag[],
    voice: string,
    like: number,
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

    const res = await axios.get(head_url +'/api/v1/voice/get_voices',{ params : uwoot_list });
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
    let b64: any;
    let reader = new FileReader;
    reader.readAsDataURL(voice);
    reader.onload = function(e){
        b64 = reader.result;
        console.log(b64);
        const uwoot = {
            user_uuid: user_uuid,
            tags: tags,
            voice: b64,
        }
        console.log(uwoot)

        axios.post(head_url + '/api/v1/voice/put_voice', uwoot)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        }
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
export async function like001(user_uuid: string, voice_uuid: string){

    const like = {
        user_uuid: user_uuid,
        voice_uuid: voice_uuid
    }

    const res = await axios.put(head_url + '/api/v1/like/increment',  like);
    console.log(res.data);
        // .then(res => {
        //     console.log(res.data)
        // })
}

// user-001
export async function user001(username: string, profile: string, password: string){
    const register = {
        username: username,
        profile: profile,
        password: password
    }

    const res = await axios.post(head_url + '/register', register );
    console.log(res.data);
        // .then(res => {
        //     console.log(res.data)
        // })
}

// user-002
export async function user002(username: string, password: string){
    const login = {
        username: username,
        password: password
    }

    const res = await axios.post(head_url + '/login', login);
    console.log(res.data)
    return res.data;
        // .then(res => {
        //     console.log(res.data)
        //     return res.data
        // })
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
