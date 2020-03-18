import React from 'react';
import Button from 'react-bootstrap/Button';
import {Animated} from "react-animated-css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
class SidebarComponent extends React.PureComponent {
    render() {
     return(   
      <div className="sideBar">
      {/* <Animated animationIn="pulse" animationOut="pulse" isVisible={true}> */}
     <Container >
     <Col></Col>
     <Col>
      <Row><Button>HOME1</Button></Row>
      <Row><Button>HOME2</Button></Row>
      <Row><Button>HOME3</Button></Row>
      <Row><Button>HOME4</Button></Row>
      <Row><Button>HOME5</Button></Row>
      <Row><Button>HOME6</Button></Row>
      </Col>
      <Col></Col>
       </Container>
      {/* </Animated> */}
        </div>
     )
    }
  }
  export default SidebarComponent