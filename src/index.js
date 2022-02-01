import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BaseProvider, LightTheme} from 'baseui';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
const engine = new Styletron();

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  rootElement
);