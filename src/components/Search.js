// ------------------------------------------------- //
// Evan MacHale - N00150552
// 24.01.19
// Search Component
// ------------------------------------------------- //

import React, { Component } from 'react';
// Material Design Components
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Cell } from '@material/react-layout-grid';

// ------------------------------------------------- //

class Search extends Component {
  render() {
    return (
      <Cell>
        <TextField
          trailingIcon={<MaterialIcon icon="search"/>}
          outlined={true}
          label='Search Pokémon'
        >
        <Input
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.handleChange}
        />
        </TextField>
      </Cell>
    );
  }
}

// ------------------------------------------------- //

export default Search;

// ------------------------------------------------- //
