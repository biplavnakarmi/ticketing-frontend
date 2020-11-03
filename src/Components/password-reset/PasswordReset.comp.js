import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from 'prop-types';

export const ResetPassword = ({ handleOnchange, handleOnResetSubmit, formSwitcher, email }) => {  //destructure the props
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Forget Password</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}   //passs as a vlaue to populate
                                onChange={handleOnchange}   //calling the function on change
                                placeholder="Enter Email Used for the Account"
                                required
                            />
                        </Form.Group>

                        <Button type="submit">Reset Confirm</Button>

                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={() => formSwitcher('login')}>Login now from here</a>
                </Col>
            </Row>

        </Container>


    );

};

ResetPassword.prototype = {
    handleOnchange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,



};