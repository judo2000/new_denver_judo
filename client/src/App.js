import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useState } from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Outlet,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import AboutScreen from './screens/AboutScreen';
import AdminScreen from './screens/AdminScreen';

// Construct main GraphQL API endpoint
let uri = 'http://localhost:5000/graphql';
if (process.env.NODE_ENV === 'production') {
  uri = `https://denver-judo.herokuapp.com/${process.env.PORT}graphql`;
}
const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
});
function App() {
  const location = window.location.pathname;
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div
          className={
            sidebarIsOpen
              ? 'site-container active-cont d-flex flex-column'
              : 'site-container d-flex flex-column'
          }
        >
          <ToastContainer position="top-center" limit={1} />
          <header>
            <Navbar
              expand="lg"
              className={`navbar navbar-dark ${
                location === '/' ? 'navbar-custom' : 'navbar-custom-light'
              }`}
            >
              <Container>
                <LinkContainer to="/">
                  <Navbar.Brand>
                    <img
                      className="ms-4"
                      src={
                        location === '/'
                          ? 'assets/img/DJ-logo-black.png'
                          : 'assets/img/DJ-logo-white.png'
                      }
                      alt="Denver Judo"
                      style={{ width: '60px' }}
                    />{' '}
                  </Navbar.Brand>
                </LinkContainer>
                <h1
                  className={
                    location === '/'
                      ? 'navTitle-dark text-center'
                      : 'navTitle text-center'
                  }
                >
                  Denver Judo
                </h1>

                <Button
                  style={{
                    backgroundColor: location === '/' ? '#d9d9d9' : '#262626',
                  }}
                  onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
                  className="me-4"
                >
                  <i
                    className="fa fa-bars fa-lg"
                    style={{
                      color: location === '/' ? '#262626' : '#d9d9d9',
                    }}
                  ></i>
                </Button>
              </Container>
            </Navbar>
          </header>
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
                    location === '/' ? 'nav-text nav-text-bold' : 'nav-text'
                  }
                >
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/schedule" onClick={() => (this.expand = '')}>
                <Nav.Link
                  className={
                    location === '/schedule'
                      ? 'nav-text nav-text-bold'
                      : 'nav-text'
                  }
                >
                  Schedule
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about" onClick={() => (this.expand = '')}>
                <Nav.Link
                  className={
                    location === '/about'
                      ? 'nav-text nav-text-bold'
                      : 'nav-text'
                  }
                >
                  About
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Outlet />
          </div>
          <main>
            <Routes>
              <Route index element={<HomeScreen />} />
              <Route path="/about" element={<AboutScreen />} />
              <Route path="_admin/*" element={<AdminScreen />} />
            </Routes>
          </main>
          <footer>
            <div className="text-center">
              Denver Judo
              <br />
              All rights reserved
            </div>
          </footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
