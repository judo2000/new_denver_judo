import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const HomeScreen = () => {
  return (
    <>
      <Row>
        <Container>
          <div className="relative video-box pt-0 mt-0 d-flex justify-content-center">
            <h2>Video goes here</h2>
            <div className="absolute text-center">
              <h1 className="home-heading my-4 pt-4">
                Train for competition or self defence at Denver Judo
              </h1>
            </div>
          </div>
        </Container>
      </Row>
    </>
  );
};

export default HomeScreen;
