import React from 'react';
import logo from '@/logo.svg';
import '@/App.css';
import UnsuppotedBrowser from '@pages/default/unsupported_browser';
import Layout from '@pages/layout/layout';
import { checkBrowser } from '@utils/browserUtils';

function App() {
  return checkBrowser() ? (
    <Layout>
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
    </Layout>
  ) : (
    <UnsuppotedBrowser />
  );
}

export default App;
