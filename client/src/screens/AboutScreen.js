import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutScreen = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <h1 className="my-3">About us</h1>
    </div>
  );
};

export default AboutScreen;
