import React from 'react';

import Paper from 'material-ui/Paper';


const styles = {
  padding: 10
};

class Panel extends React.Component {

  render() {
    return (
      <Paper style={styles} zDepth={1}>
        {this.props.children}
      </Paper>
    )
  };
};

export default Panel;