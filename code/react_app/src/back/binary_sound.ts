import React from 'react';

//関数
function base64(file: BlobPart) {
    let sound_blob = new Blob([file] , {type: 'audio/aac'})
    console.log("blob実行結果",sound_blob)

    const reader = new FileReader();

    reader.onload = function(){
        const b64 = reader.result;
        console.log(b64);
    }
    let sound_base64 = reader.readAsDataURL(sound_blob);
    console.log("base64変換結果：",sound_base64)
}

