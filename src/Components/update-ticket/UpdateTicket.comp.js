import React from 'react'
import { Form, Button } from 'react-bootstrap'
import PropTypes from "prop-types"

export const UpdateTicket = ({msg, handleOnChange, handleOnSubmit}) => {
    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Label className="font-weight-bold text-info">Reply</Form.Label>

            <Form.Control
            onChange={handleOnChange}
            value={msg}
                as="textarea"
                rowe="5"
                name="detail"
                placeholder="Please add you comment here or update the ticket"
                required />

            <div className="text-right">

                <Button variant="outline-info mt-3 mb-3" type="submit" >Reply</Button>
            </div>
        </Form>
    )
}


UpdateTicket.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired
}