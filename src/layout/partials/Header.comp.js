import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import logo from '../../assests/image/logo.png'

export const Header = () => {
    return (
        //menu collapsable on click
        <Navbar
            collapseOnSelect
            varirant="dark"
            bg="info"
            expand="md"
        >

            <Navbar.Brand>
                <img src={logo} alt="logo" width="50px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/dashboard">Tickets</Nav.Link>
                    <Nav.Link href="/dashboard">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}
