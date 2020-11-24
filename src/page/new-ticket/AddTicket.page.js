import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import {shortText} from '../../../src/utils/validation'

const initialFrmDt = {
    subject: '',
    issueDate: '',
    detail: '',
};
const initialFrmError = {
    subject: false,
    issueDate: false,
    detail: false,
};

export const AddTicket = () => {

    const [frmData, setFrmData] = useState(initialFrmDt);
    const [frmDataError, setFrmDataError] = useState(initialFrmError);

    useEffect(() => { }, [frmData, frmDataError]);

    const handleOnchange = e => {
        const { name, value } = e.target;

        setFrmData({
            ...frmData,
            [name]: value,
        })

        // console.log(name, value);
    };

    const handleOnSubmit = async(e) => {

        e.preventDefault()

        const isSubjectValid = await shortText(frmData.subject)

              
        setFrmDataError({

            ...initialFrmError,
            subject: !isSubjectValid,
        });

        console.log('Form Submit Request Received', frmData)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="New Ticket" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm
                        handleOnchange={handleOnchange}
                        handleOnSubmit={handleOnSubmit}
                        frmDt={frmData}
                        frmDataError={frmDataError}
                    />
                </Col>
            </Row>
        </Container>
    )
}
