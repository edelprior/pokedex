// ------------------------------------------------- //
// Evan MacHale - N00150552
// 24.01.19
// Search Component
// ------------------------------------------------- //

import React from 'react';
// Material Design Components
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from from '@material/react-material-icon';

// ------------------------------------------------- //

class Search {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Woof'
    }
  }

  render() {
    return (
      <div>
        <TextField
          label='Dog'
          helperText={<HelperText>Help Me!</HelperText>}
          onTrailingIconSelect={() => this.setState({value: ''})}
          trailingIcon={<MaterialIcon role="button" icon="delete"/>}
        ><Input
           value={this.state.value}
           onChange={(e) => this.setState({value: e.target.value})} />
        </TextField>
      </div>
    );
  }
}

// ------------------------------------------------- //

export default Search;

// ------------------------------------------------- //
