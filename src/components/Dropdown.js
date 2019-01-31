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
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Cell>
        <Select
          name={this.props.name}
          onChange={this.props.handleChange}
        >
          {this.props.types.map(t => {
            return (
              <option key={t} value={t}>{t}</option>
            )
          })}
        </Select>
      </Cell>
    );
  }
}

// ------------------------------------------------- //

export default Dropdown;

// ------------------------------------------------- //
