import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
class HeaderComponent extends React.PureComponent {
    render() {
      return(
        <Navbar style={{backgroundColor: "#071740", position: "sticky"}} variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
      )
    }
  }
  export default HeaderComponent