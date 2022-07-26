import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar className='nav' fixed="top" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand href="#home">GlobeTech</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home" className='home'>Home</Nav.Link>
              <Nav.Link href="#link" className='service'>Service</Nav.Link>
              <Nav.Link href="#link" className='login'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;