// ------------------------------------------------- //
// Evan MacHale - N00150552
// 12.01.19
// React + Material
// ------------------------------------------------- //
// https://github.com/material-components/material-components-web-react#step-3a-use-compiled-css
// https://sass-lang.com/guide
// ------------------------------------------------- //

import React, { Component } from 'react';
// Material Design Components
import {Cell, Grid, Row} from '@material/react-layout-grid';

// ------------------------------------------------- //

// My Components


import './App.scss';

// ------------------------------------------------- //

// Most of our material components will be compiled here alongside our canvas... I hope
class App extends Component {
  render() {
    return (
      <main className="app">
        Hello
      </main>
    );
  }
}

// ------------------------------------------------- //

export default App;

// ------------------------------------------------- //
