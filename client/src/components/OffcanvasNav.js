import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';

const OffcanvasNav = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`navbar navbar-dark ${
            location.pathname === '/' ? 'navbar-custom' : 'navbar-custom-light'
          }`}
        >
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                src="assets/img/DJ-logo-white.png"
                alt="Denver Judo"
                style={{ width: '50px' }}
              />{' '}
            </Navbar.Brand>
            <h1 className="navTitle">Denver Judo</h1>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              style={{ color: 'black' }}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="offcanvas">
                <Offcanvas.Title
                  className="headerTitle"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  Denver Judo
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to="/" onClick={() => (this.expand = '')}>
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <Nav.Link href="/schedule" onClick={() => (this.expand = '')}>
                    Schedule
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default OffcanvasNav;
