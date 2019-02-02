// ------------------------------------------------- //
// Evan MacHale - N00150552
// 01.02.19
// Move Card
// ------------------------------------------------- //

import React, { Component } from 'react';
// Material Design Components
import { Cell, Row } from '@material/react-layout-grid';
import { Body1, Subtitle1 } from '@material/react-typography';
import List, { ListItem, ListItemText, ListDivider, ListItemMeta } from '@material/react-list';

// ------------------------------------------------- //

class MoveCard extends Component {
  render() {
    return (
      <React.Fragment>
        <ListItem>
          <ListItemText
            primaryText={this.props.name}
            secondaryText={`${this.props.type}, ${this.props.category}`}
          />
        </ListItem>
        <ListDivider/>
      </React.Fragment>
    );
  }
}

// ------------------------------------------------- //

export default MoveCard;

// ------------------------------------------------- //
