// ------------------------------------------------- //
// Evan MacHale - N00150552
// 02.02.19
// Move Displayed
// ------------------------------------------------- //

import React, { Component } from 'react';
// Material Design Components
import { Cell, Row } from '@material/react-layout-grid';
import { Body1, Headline3, Headline5 } from '@material/react-typography';
import Card, { CardPrimaryContent } from "@material/react-card";

// ------------------------------------------------- //

class MoveCard extends Component {
  render() {
    return (
      <Card outlined>
        <CardPrimaryContent className='my-card-content'>
          <Row>
            <Cell columns={1}/>

            <Cell columns={10}>
              <Row>
                <Cell columns={12}>
                  <Headline3>{this.props.name}</Headline3>
                  <Body1>{this.props.description}</Body1>
                </Cell>
              </Row>

              <Row>
                <Cell columns={3}>
                  <Body1>Type: {this.props.type}</Body1>
                </Cell>
                <Cell columns={6}>
                  <Body1>Category: {this.props.category}</Body1>
                </Cell>
              </Row>

              <Row>
                <Cell columns={12}>
                  <Body1>PP: {this.props.pp}</Body1>
                  <Body1>Power: {this.props.power}</Body1>
                  <Body1>Accuracy: {this.props.accuracy}</Body1>
                  <Body1>Priority: {this.props.priority}</Body1>
                </Cell>
              </Row>

              <Row>
                <Cell columns={12}>
                  <Headline5>Effect</Headline5>
                  <Body1>{this.props.effect}</Body1>
                </Cell>
              </Row>

            </Cell>

            <Cell columns={1}/>
          </Row>
        </CardPrimaryContent>
      </Card>
    );
  }
}

// ------------------------------------------------- //

export default MoveCard;

// ------------------------------------------------- //
