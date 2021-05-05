import React from "react"
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap"

const NavBar = () => (
    <Navbar expand="lg" className="p-0" style={{ backgroundColor: "#111", color: "white" }}>
        <Navbar.Brand href="#home">
            <img src="./assets/netflix_logo.png" alt="logo" id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Link href="#home" className="text-white">
                    Tv Shows
                </Nav.Link>
                <Nav.Link href="#link" className="text-white">
                    Add New
                </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link className="text-white" href="#home">
                    KIDS
                </Nav.Link>
                <Nav.Link href="#">
                    <img src="./assets/avatar.png" id="avatar" alt="" />
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

    //
)

export default NavBar
