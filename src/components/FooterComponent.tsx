import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand'
class FooterComponent extends React.PureComponent {
    render() {
     return(   
      <Navbar style={{backgroundColor: "#071740"}} variant="dark" >
              <NavbarBrand>Footer</NavbarBrand>
      </Navbar>)
    }
  }
  export default FooterComponent