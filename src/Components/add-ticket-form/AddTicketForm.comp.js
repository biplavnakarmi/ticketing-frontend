import React from 'react';
import {
    Jumbotron, Form, Button,
    Row, Col
} from 'react-bootstrap'
import PropTypes from 'prop-types'
import './add-ticket-form-style.css'



export const AddTicketForm = ({ 
    handleOnSubmit, handleOnchange, frmDt, frmDataError }) => {
    console.log(frmDt);

    return (
        <Jumbotron className="mt-3 add-new-ticket bg-light">
            <h1 className="text-info text-center"> Add new ticket</h1>
            <hr/>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                        <Form.Control name="subject"
                            value={frmDt.subject}
                            //minLength ="10"
                            onChange={handleOnchange}
                            placeholder="Issue"
                            //required
                        />
                        <Form.Text className="text-danger">{
                        frmDataError.subject && "Subject is to short! It must be more than 3 letters"}
                        </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Issue Found</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="date"
                            name="issueDate"
                            value={frmDt.issueDate}
                            onChange={handleOnchange}
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Comment / Issue Detail</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="detail"
                        rows="5"
                        value={frmDt.detail}
                        onChange={handleOnchange}
                        required
                    />
                </Form.Group>
                <Button type="submit" variant="info" block >Submit Ticket</Button>

            </Form>
        </Jumbotron>
    )
}

AddTicketForm.propTypes={
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnchange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
    frmDataError: PropTypes.object.isRequired,

};
