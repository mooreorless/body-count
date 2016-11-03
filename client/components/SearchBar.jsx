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
  FormGroup,
} from 'react-bootstrap';



class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    // this.getCameras = this.getCameras.bind(this); // <--- bind methods in constructor (this gives it a this context of SearchBar)

    this.state = {
      dataSource: [],
      components: [],
      emptyState: [],
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
      .catch((error) => {
        return this.setState({
          emptyState: error,
        })
      });
  }

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Search"
          dataSource={this.state.dataSource}
          onNewRequest={this.getCameras.bind(this)}
          fullWidth={true} name="search"
          />
        <CardContainer data={this.state.components} onError={this.state.emptyState} />
      </div>
    )
  }
};

export default SearchBar;