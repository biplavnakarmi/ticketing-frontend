import React from 'react'
import { Table } from 'react-bootstrap'

export const TicketTable = ({ tickets }) => {
    return (
        <Table striped hover>
            <thead>

                <tr>
                    <th>#</th>
                    <th>Subjects</th>
                    <th>Status</th>
                    <th>Opened Date</th>
                </tr>
            </thead>
            <tbody>

                {/* if there is ticket display this row /
                 map function we can get the row out of it / if no id index can be taken similarly */}
                {tickets.length ? (tickets.map(row => (

                    // tr>td*4 - need unique id to rendering multiple table thopugh the loop
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.subject}</td>
                        <td>{row.status}</td>
                        <td>{row.addedAt}</td>
                    </tr>
                ))
                ) : (
                        <tr>
                            <td colSpan="4" className="text-center text-capitalize">There is no pending tickets</td>
                        </tr>
                    )}
            </tbody>
        </Table>
    )
}
