// ------------------------------------------------- //
// Evan MacHale - N00150552
// 05.02.19
// Loading bar
// ------------------------------------------------- //

import React from 'react';
// Material Design Components
import { Cell } from '@material/react-layout-grid';
import LinearProgress from '@material/react-linear-progress';

// ------------------------------------------------- //

const Loading = (props) => {
  if (props.loading && props.bar) {
    return (
      <Cell columns={12}>
        <LinearProgress indeterminate={true}/>
      </Cell>
    );
  }
  if (props.loading && !props.bar) {
    return (
      <React.Fragment />
    );
  }
  return (
    <React.Fragment>{props.component}</React.Fragment>
  );
}

// ------------------------------------------------- //

export default Loading;
