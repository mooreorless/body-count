import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import { FormGroup, FormControl } from 'react-bootstrap';

class SearchButton extends React.Component {
	render() {
		const styles = {
			display: 'inline-block',
			verticalAlign: 'middle',
			float: 'right'
		};
		const uploadIcon = <FontIcon className="material-icons">file_upload</FontIcon>;

		return (
			<FlatButton label="Upload" labelPosition="before" secondary={true} icon={uploadIcon} className="" style={styles} />
		);
	}
};

export default SearchButton;