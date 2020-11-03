import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from 'prop-types';

export const Loginform = ({ handleOnchange, handleOnSubmit, formSwitcher, email, pass }) => {  //destructure the props
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}   //passs as a vlaue to populate
                                onChange={handleOnchange}   //calling the function on change
                                placeholder="Enter Email"
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password" // makes the dotted in the login page
                                name="password"
                                value={pass}
                                onChange={handleOnchange}
                                placeholder="Enter Password"
                                required
                            />
                        </Form.Group>
                        <Button type="submit">Login</Button>


                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={() => formSwitcher('reset')}>Forgot Password??</a>
                </Col>
            </Row>

        </Container>


    );

};

Loginform.prototype = {
    handleOnchange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired


};