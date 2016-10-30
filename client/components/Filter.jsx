import React from 'react';

import Chip from 'material-ui/Chip';


class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // initial state
    this.state = { filters: [
      { key: 0, label: 'Forest' }, 
      { key: 1, label: 'Traffic' },
      { key: 2, label: 'Beach' },
      { key: 3, label: 'City' },
      { key: 4, label: 'Camping' }
    ]};

    this.styles = {
      chip: {
        margin: 4
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
      },
    };
  }
  handleRequestDelete = (key) => {
    if (key === 0) {
      alert('You choose poorly');
      return;
    }
    // sets the filters to be used to create each Chip
    this.filters = this.state.filters;
    // removes filter - on unmount of Component attach api event to stop that filter being used in the query
    const filterToRemove = this.filters.map((filter) => filter.key).indexOf(key);
    this.filters.splice(filterToRemove, 1);
    console.log('gdgfdg');
    // Updates the state force re-render
    this.setState({ filters: this.filters });
  };



  renderFilter(data) {
    return (
      <Chip 
        key={data.key} 
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={ this.styles.chip }>
        
        { data.label }
      </Chip>
    );
  }

  render() {
    return (
      <div style={ this.styles.wrapper }>
        { this.state.filters.map(this.renderFilter, this) }
      </div>
    );
  }
}

export default Filter;