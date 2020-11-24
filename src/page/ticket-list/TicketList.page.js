import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import tickets from '../../assests/data/dummy-ticket.json'

export const TicketList = () => {

    const [str, setStr] = useState('')
    const [dispTicket, setDispTicket] = useState(tickets);

    useEffect(() => {
       
    }, [str, dispTicket])

    const handleOnChange = e => {
        const { value } = e.target;

        setStr(value);
        searchTicket(value);
        //console.log(e.target)

    };

    const searchTicket = sttr => {
        const displayTickets = tickets.filter((row) => row.subject.toLowerCase().includes(sttr.toLowerCase())
        );

       // console.log(displayTickets);
        setDispTicket(displayTickets);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Ticket Lists" />
                </Col>
            </Row>
            <Row className="mt-3">

            </Row>
            <Row>
                <Col>
                    <Button variant="info"> Add New Ticket </Button>
                </Col>
                <Col className="test-right">
                    <SearchForm handleOnChange={handleOnChange} str={str} />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <TicketTable tickets={dispTicket} />
                </Col>
            </Row>



        </Container>
    )
}
