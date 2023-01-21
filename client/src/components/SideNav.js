import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';

const SideNav = () => {
  const location = useLocation();
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  return (
    <div
      className={
        sidebarIsOpen ? 'active-cont d-flex flex-column' : 'd-flex flex-column'
      }
    >
      <Navbar
        expand="lg"
        className={`navbar navbar-dark ${
          location.pathname === '/' ? 'navbar-custom' : 'navbar-custom-light'
        }`}
      >
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                className="ms-4"
                src={
                  location.pathname === '/'
                    ? 'assets/img/DJ-logo-black.png'
                    : 'assets/img/DJ-logo-white.png'
                }
                alt="Denver Judo"
                style={{ width: '80px' }}
              />{' '}
            </Navbar.Brand>
          </LinkContainer>
          <h1
            className={
              location.pathname === '/'
                ? 'navTitle-dark text-center'
                : 'navTitle text-center'
            }
          >
            Denver Judo
          </h1>

          <Button
            style={{
              backgroundColor:
                location.pathname === '/' ? '#d9d9d9' : '#262626',
            }}
            onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
            className="me-4"
          >
            <i
              className="fa fa-bars fa-lg"
              style={{
                color: location.pathname === '/' ? '#262626' : '#d9d9d9',
              }}
            ></i>
          </Button>
        </Container>
      </Navbar>
      <div
        className={
          sidebarIsOpen
            ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
            : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
        }
      >
        <Nav className="flex-column text-white w-100 p-2">
          <Nav.Item>
            <strong>Denver Judo</strong>
          </Nav.Item>
          <LinkContainer to="/" onClick={() => (this.expand = '')}>
            <Nav.Link
              className={
                location.pathname === '/'
                  ? 'nav-text nav-text-bold'
                  : 'nav-text'
              }
            >
              Home
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/schedule" onClick={() => (this.expand = '')}>
            <Nav.Link
              className={
                location.pathname === '/schedule'
                  ? 'nav-text nav-text-bold'
                  : 'nav-text'
              }
            >
              Schedule
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </div>
    </div>
  );
};

export default SideNav;
