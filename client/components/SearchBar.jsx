import React, { PropTypes, PureComponent } from 'react';

import axios from 'axios';

import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ActionSearch from 'material-ui/svg-icons/action/search';

import SearchButton from './Button';
import Panel from './Panel';
import Card from './Card';
import CardContainer from './CardContainer';

import {
  FormControl,
  InputGroup,
  FormGroup, // <--- use comma dangles in objects & arrays. makes it easier when you add or remove items.
} from 'react-bootstrap';



class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.getCameras = this.getCameras.bind(this); // <--- bind methods in constructor (this gives it a this context of SearchBar)

    this.state = {
      dataSource: [],
      components: [],
    }
  }

  handleInputChange = (value) => {
    this.setState({
      dataSource: [
        value,
      ],
    });
  };

  getCameras(value) {
    return axios.get(`/cameras?search=${value}`)
      .then(response => {
        console.log(response);

        return this.setState({
          components: response.data,
        });
      })
      .catch(console.log);
  }
  //AutoComplete - on change
  //discard old reqs with new res
  render() {
    return (
      <div>
        <Panel>
          <AutoComplete
            hintText="Search"
            dataSource={this.state.dataSource}
            onNewRequest={this.getCameras}
            fullWidth={true} name="search"
            />
        </Panel>
        <CardContainer data={this.state.components} />
      </div>
    )
  }
};

export default SearchBar;