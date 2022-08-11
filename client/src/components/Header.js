import React from "react";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

// function Header(){
//     return(
// <div id="header-container">
// <Navbar className="navbar navbar-dark bg-primary w-100">
// <div className="container-fluid">
//     <span className="navbar-brand mb-0 h1"> Street Canvas</span>

//     <Button 
//         className="navbar-toggler" 
//         type="button" 
//         data-bs-toggle="collapse" 
//         data-bs-target="#toggleMobileMenu" 
//         aria-controls="toggleMobileMenu" 
//         aria-expanded="false" 
//         aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//     </Button>

// </div>
// </Navbar>
// </div>
//     )
// }

// export default Header;

function Header(){
    return(
<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Street Canvas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/library">Library</Nav.Link>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item href="action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header;


