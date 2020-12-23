import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import tickets from '../../assests/data/dummy-ticket.json'
import { MessageHistory } from '../../components/message-history/MessageHistory.comp';
import {UpdateTicket} from '../../components/update-ticket/UpdateTicket.comp'
const ticket = tickets[0]

export const Ticket = () => {

    const [message, setMessage] = useState('');
    
    useEffect(() => {
        
    }, [message])

    const handleOnChange = e=> {
        setMessage(e.target.value);
    }

    const handleOnSubmit = () =>{
        alert('The comment has been added.');
    }

    return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col className="text-secondary text-info">
    <div className="subject">Subject : {ticket.subject}</div>
                <div className="date">Date : {ticket.addedAt}</div>
                <div className="status">Status : {ticket.status}</div>
                </Col>
                
                <Col className = "text-right">
                <Button variant = "outline-info" > Close Ticket
                </Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                <MessageHistory msg={ticket.history}/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                <UpdateTicket msg={message} 
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}/>
                </Col>
            </Row>
        </Container>
    )
};
