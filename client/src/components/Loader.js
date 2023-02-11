import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner animation="border" rle="status" className="spinner">
      <span className="sr-only spinner-text">Loading...</span>
    </Spinner>
  );
};

export default Loader;
