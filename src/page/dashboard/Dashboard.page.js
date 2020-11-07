import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import tickets from '../../assests/data/dummy-ticket.json';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'


export const Dashboard = () => {
    return (
        <Container>

            <Row>
                <Col>
                    <PageBreadcrumb page="Dashboard" />
                </Col>
            </Row>

            <Row>
                <Col className="text-center mt-3 mb-2">
                    <Button variant="info" style={{ "fontSize": "1rem", padding: "10px 30px" }}>
                        Add New Ticket Here
        </Button>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-4 mb-2">
                    <div>Total Tickets: 100</div>
                    <div>Pending Tickets: 100</div>
                </Col>
            </Row>
            <Row>
                <Col className="mt-3">
                    Recently Added Tickets
                </Col>
            </Row>
            <Row>
                <Col className="recent-tickets mt-4">

                    {/* receiving as props */}
                    <TicketTable tickets={tickets} />
                </Col>
            </Row>

        </Container>

    )



};