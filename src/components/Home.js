// ------------------------------------------------- //
// Evan MacHale - N00150552
// 1.02.19
// Landing page of app
// ------------------------------------------------- //

import React, { Component } from 'react';
// Material Design Components
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Headline1 } from '@material/react-typography';

// ------------------------------------------------- //

class Home extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Cell columns={12}>
            <Headline1>Assessment 01 Pokédex</Headline1>
          </Cell>
        </Row>
        <Row>
          WIP
        </Row>
      </Grid>
    );
  }
}

// ------------------------------------------------- //

export default Home;

// ------------------------------------------------- //
