import React from 'react';
import {render} from 'react-dom';

import App from './App';

const div = document.createElement('div');
const style = document.createElement('style');

style.textContent = `
    * {
      box-sizing: border-box;
    }

    body {
      background-color: azure;
      margin: 0;
      font-family: 'Helvetica Neue', sans-serif;
    }

    .app {
      height: 100vh;
      width: 100%;
    }

    .title {
      font-size: 36px;
      font-weight: 900;
      padding: 15px;
    }

    .navigation {
      width: 100%;
    }

    .navigation a {
      background-color: midnightblue;
      color: white;
      text-align: center;
      text-decoration: none;
      padding: 15px;
      white-space: none;
    }

    .navigation a:hover {
      background-color: azure;
      color: black;
    }

    .contents {
      overflow-x: hidden;
      overflow-y: auto;
      padding: 0 15px;
      width: 100%;
    }

    .container {
      background-color: white;
      border: 1px solid black;
    }

    .container-inline + .container-inline {
      margin-left: 15px;
    }

    .container.align-content {
      height: 300px;
    }

    .section-container:not(:last-child) {
      border-bottom: 1px solid black;
      padding-bottom: 15px;
    }

    .column-container {
      min-height: 200px;
    }

    .child, .grandchild {
      padding: 15px;
    }

    .child:nth-of-type(1) {
      background-color: lightgreen;
    }

    .child:nth-of-type(2) {
      background-color: lightyellow;
    }

    .child:nth-of-type(3) {
      background-color: pink;
    }

    .grandchild:nth-of-type(1) {
      background-color: white;
    }

    .grandchild:nth-of-type(2) {
      background-color: lavender;
      margin-left: 15px;
    }
`;

const renderApp = (container, length = 1000) => {
  render(<App length={length} />, container);
};

renderApp(div);

document.body.appendChild(style);
document.body.appendChild(div);
