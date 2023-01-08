import React from 'react';
import Img from './images/profilephoto.jpg'
import './App.css';
import { Navbar, Container, Nav, Image} from 'react-bootstrap';

import * as Icon from 'react-feather';


function App() {
  return (
    <div className="App">
    <Navbar expand="lg" className='navbar'>
    <Container>
      <Navbar.Brand>Victoria Mortensen</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link> */}
          <Navbar.Text>
            Version 0.03
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <div className="profileHeader">
    <div>
      <div className="header" >
        <p className='headerText'>Hi, I am Victoria Mortensen</p>
        <p className='subHeaderText'>Frontend / UX Design Engineer</p>
      </div>
        <div className="profileLinks">
          <a target="_blank" rel="noreferrer noopener" href="https://github.com/victoriamortensen"><Icon.GitHub/></a>
          <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/victoriamortensen/"><Icon.Linkedin/></a>
          <p className="email"> 
              <a target="_blank" rel="noreferrer noopener" href = "mailto:victoria@glavindmortensen.com" >
                victoria@glavindmortensen.com
              </a>
          </p>
          <p className="icon">
              <a target="_blank" rel="noreferrer noopener" href = "mailto:victoria@glavindmortensen.com" >
                <Icon.Mail/>
              </a>
          </p>
        </div>
    </div>
    <div className='profileImage'>
      <Image src={Img} roundedCircle></Image>
    </div>
  </div>
  </div>
  );
}

export default App;
