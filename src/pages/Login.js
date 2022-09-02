import React from 'react';
import './Login.css';
import Navigation1 from '../components/Navigation1';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

function Login() {
  return (
    <div>
      <Navigation1 />
      <Container fluid>
        <Row>
          <Col md={6} className="login_bg">
            <p>Find your solution with Tuitor</p>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center flex-direction-column">
            <Container className="login_container" style={{width: 400}}>
              <h2 className="mb-4">Login</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="example@gmail.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="success" type="submit">
                  Log in
                </Button>
              </Form>
              <h4 className="text-center h4-text mt-4">Offering a service? <a style={{color: 'green'}} href="../pages/Signup.js"> Join as a professional</a></h4>
              <h4 className="text-center h4-text">Looking for a service? <a style={{color: 'green'}} href="../pages/Signup.js"> Get started</a></h4>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login