import React from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'

const NavBar = () => (
    <Navbar expand="lg" className='p-0' style={{backgroundColor: '#111', color: 'white'}}>
        <Navbar.Brand href="#home">
            <a className="navbar-brand" href="#">
                 <img src="./assets/netflix_logo.png" alt='logo' id="logo" />
            </a>
                 </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <Nav.Link href="#home" className='text-white'>Tv Shows</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Add New</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
            <Nav.Link href="#home" ><a className="nav-link text-white" href="#">KIDS</a></Nav.Link>
            <Nav.Link>
                <a className="navbar-brand" href="#">
                <img src="./assets/avatar.png" id="avatar" />
                </a>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" > 
                <NavDropdown.Item href="#manage-profiles">Manage Profiles</NavDropdown.Item>
                <NavDropdown.Item href="#account">Account</NavDropdown.Item>
                <NavDropdown.Item href="#help-center">Help Center</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#sign-out-netflix">Sign out Netflix</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

//  
)

export default NavBar