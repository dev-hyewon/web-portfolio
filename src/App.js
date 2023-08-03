import React from 'react';
import logo from '@/logo.svg';
import '@/App.css';
import UnsuppotedBrowser from '@pages/default/unsupported_browser';
import { checkBrowser } from '@utils/browserUtils';

function App() {
  return checkBrowser() ? (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ) : (
    <UnsuppotedBrowser />
  );
}

export default App;
