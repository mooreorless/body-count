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
import EmptyState from './EmptyState';

import {
  FormControl,
  InputGroup,
  FormGroup,
} from 'react-bootstrap';



class SearchBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      components: [],
      childVisible: true,
    }
  }

  handleInputChange = (value) => {
    this.setState({
      components: [
        value,
      ],
    });
  };

  getCameras(value) {
    return axios.get(`/cameras?search=${value}`)
      .then(response => {
        console.log(response.data);
        return this.setState({
          components: response.data,
          childVisible: false,
        });
      })
      .catch((error) => {
        return this.setState({
          dataSource: error,
        })
      });
  }

  render() {
    return (
      <div>
        <AutoComplete
          dataSource={this.state.components}
          onNewRequest={this.getCameras.bind(this)}
          fullWidth={true} name="search"
          floatingLabelText="Search by country name"
          />
        <CardContainer data={this.state.components} showEmptyState={this.state.childVisible} />
      </div>
    )
  }
};

export default SearchBar;