import axios from 'axios';
 
export const ApiGet_Simple = (URL) => {
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