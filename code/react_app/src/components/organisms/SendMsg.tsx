import React from "react";

export function SendMsgDialog() {
  function handleFile(e: React.ChangeEvent<HTMLInputElement>): void {
    const files: FileList | null = e.target.files;
    if (files === null) {
      console.log('no file.');
      return;
    }
    const file: File = files[0];
    console.log(file);
  }
  
  return (
    <input type="file" onChange={(e) => handleFile(e)} />
  );
}