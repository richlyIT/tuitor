import React from 'react';
import {Nav, Navbar, Container, Button} from 'react-bootstrap';

function Navigation1() {
  return (
    <Navbar bg="link" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tuitor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Login</Nav.Link>
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