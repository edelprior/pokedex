// ------------------------------------------------- //
// Evan MacHale - N00150552
// 31.01.19
// Select Dropdown Component
// ------------------------------------------------- //

import React, { Component } from 'react';
// Material Design Components
import Select from '@material/react-select';
import { Cell } from '@material/react-layout-grid';

// ------------------------------------------------- //

class Dropdown extends Component {
  render() {
    return (
      <Cell>
        <Select
          label={this.props.label}
          onChange={this.props.handleChange}
          options={this.props.types}
          outlined={true}
          name={this.props.name}
          value={this.props.value}
        />
      </Cell>
    );
  }
}

// ------------------------------------------------- //

export default Dropdown;

// ------------------------------------------------- //
