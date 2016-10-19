import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import { FormGroup, FormControl } from 'react-bootstrap';

class UploadButton extends React.Component {
	render() {
		const uploadIcon = <FontIcon className="material-icons">file_upload</FontIcon>;

		return (
			<div>
				<FlatButton label="Upload" labelPosition="before" secondary={true} icon={uploadIcon}>
					<input type="file" className="form-control"/>
				</FlatButton>
			</div>
		);
	}
};

export default UploadButton;