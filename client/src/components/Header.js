import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';
import { Player } from 'video-react';
import video from '../assets/Denver-Judo-Splash-1080.mp4';

const Header = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={1}>
            <LinkContainer to="/">
              <img
                src="assets/img/DJ-logo-black.png"
                alt="Denver Judo"
                className="img-fluid align-items-top"
              />
            </LinkContainer>
          </Col>
          <Col>
            <div className="video-wrapper">
              <Player
                src={video}
                className="react-player"
                playing
                width="100%"
                height="100%"
                fluid={false}
                controls={false}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
