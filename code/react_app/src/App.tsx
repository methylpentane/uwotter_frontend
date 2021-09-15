import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApiGet_Simple } from './ApiGet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <button onClick={()=>base64('./back/test.aac')}>テスト</button> */}
      </header>
      {
        //ApiGet_Simple("http://localhost:8000/test/")
      }
    </div>
  );
}

export default App;
