import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

main();

function main() {
  let wrap = document.createElement('div');
  document.body.appendChild(wrap);
  ReactDOM.render(<App />, wrap);
}
