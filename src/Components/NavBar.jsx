import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const NavBar = () => (
    <Navbar variant="dark" expand="lg" className="p-0">
        <Navbar.Brand href="/">
            <img src="/assets/netflix_logo.png" id="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Link href="/tv-shows">Tv Shows</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link href="/kids">KIDS</Nav.Link>
                <Nav.Link href="/account">
                    <img src="/assets/avatar.png" id="avatar" alt="" />
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

    //
)

export default NavBar
