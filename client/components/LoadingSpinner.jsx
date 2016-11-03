import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <CircularProgress size={50} />
  </div>
);

export default LoadingSpinner;