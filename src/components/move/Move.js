// ------------------------------------------------- //
// Evan MacHale - N00150552
// 01.02.19
// Move Card
// ------------------------------------------------- //

import React, { Component } from 'react';
// Material Design Components
import { ListItem, ListItemText, ListDivider } from '@material/react-list';

// ------------------------------------------------- //

class Move extends Component {
  render() {
    return (
      <React.Fragment>
        <ListItem id={this.props.id} onClick={this.props.onClick}>
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

export default Move;

// ------------------------------------------------- //
