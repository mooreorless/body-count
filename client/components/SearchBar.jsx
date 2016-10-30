import React from 'react';

import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ActionSearch from 'material-ui/svg-icons/action/search';

import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';

import SearchButton from './Button';
import Panel from './Panel';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: []
    }
  }

  handleInputChange = (value) => {
    this.setState({
      dataSource: [
        value,
      ],
    });
  };

  render() {
    return (
      <div>
        <Panel>
          <form action="/search" method="get">
            <AutoComplete hintText="Search"
              dataSource={this.state.dataSource}
              onUpdateInput={this.handleInputChange}
              fullWidth={true}>
            </AutoComplete>      
          </form> 
        </Panel>
      </div>
    )
  }
};

export default SearchBar;