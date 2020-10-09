import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"

export const loginForm = () => {
return(
 
  <Container>
      <Row>
          <Col>
          <h1>Client login</h1>
          <hr/>
          <Form>
              <Form.group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control 
                  type="email" 
                  name="email"
                  placeholder="enter your email"
                  required
                   />

              </Form.group>
              <Form.group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                  type="Password" 
                  name="Password"
                  placeholder="enter your Password"
                  required
                   />

              </Form.group>

              <Button type ="Submit">Login</Button>
          </Form>

          </Col>
      </Row>
  </Container>
);

};