import React from 'react';
import {Nav, Navbar, Container, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


function Navigation1() {
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tuitor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#link"></Nav.Link>
            <Button variant="success">Join as a Professional</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <hr/>
    </Navbar>
  )
}

export default Navigation1