import React from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'

const NavBar = () => (
    <Navbar expand="lg" style={{backgroundColor: 'rgb(33, 37, 41)'}}>
        <Navbar.Brand href="#home">
            <a className="navbar-brand" href="#">
                 <img src="./assets/netflix_logo.png" alt='logo' id="logo" />
            </a>
                 </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <Nav.Link href="#home">Tv Shows</Nav.Link>
            <Nav.Link href="#link">Add New</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
            <Nav.Link href="#link">
                <a className="nav-link active" aria-current="page" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search icon" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                </a>
            </Nav.Link>
            <Nav.Link href="#home"><a className="nav-link" href="#">KIDS</a></Nav.Link>
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

//  <div>
//     <Nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'rgb(33, 37, 41)'}}>
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="#">
//                     <img src="../assets/netflix_logo.png" alt='logo' id="logo" />
//                 </a>
//                 <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </Button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">TV Shows</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" data-toggle="modal" data-target="#newModal" href="#">Add new</a>
//                         </li>
//                     </ul>

//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search icon" viewBox="0 0 16 16">
//                                     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
//                                 </svg>
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">KIDS</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill icon" viewBox="0 0 16 16">
//                                     <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"></path>
//                                 </svg>
//                             </a>
//                         </li>

//                         <li className="nav-item">
//                             <div className="btn-group">
//                                 <Button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
//                                     <img src="../assets/avatar.png" alt='avatar' id="avatar" />
//                                 </Button>
//                                 <ul className="dropdown-menu dropdown-menu-dark">
//                                     <li>
//                                         <a className="dropdown-item" href="./profile.html">
//                                             <div className="d-flex align-items-center">
//                                                 <img src="../assets/avatar.png" alt='avatar-small' id="avatar-small" />
//                                                 User
//                                             </div>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a className="dropdown-item" href="./profile.html">Manage Profiles</a>
//                                     </li>
//                                     <li>
//                                         <a className="dropdown-item" href="./accounts.html">Account</a>
//                                     </li>
//                                     <li><a className="dropdown-item" href="#">Help Center</a></li>
//                                     <li>
//                                         <hr className="dropdown-divider" />
//                                     </li>
//                                     <li><a className="dropdown-item" href="#">Signout Netflix</a></li>
//                                 </ul>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </Nav>
//     </div> 
)

export default NavBar