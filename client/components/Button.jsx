import React from 'react';

import FlatButton from 'material-ui/FlatButton';


class UploadButton extends React.Component {
	render() {
		return (
			<FlatButton label="Upload" primary={true}/>
		);
	}
};

export default UploadButton;