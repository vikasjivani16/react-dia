import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import logo from '../img/avplogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useLocation} from "react-router-dom";

const Header = () => {
  let location = useLocation();
  // console.log(location.pathname)
  
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowsignup, setModalShowsignup] = React.useState(false);

  function MyVerticallyCenteredModalsignup(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
           Sign up
          </Modal.Title>
        </Modal.Header> */}
        {/* <Modal.Body>
            <div className='signup-form-section'>
              <div className='signup-form-input-section'>
                  <input type='text' placeholder='Username'/>
              </div>
              <div className='signup-form-input-section'>
                  <input type='text' placeholder='E-mail'/>
              </div>
              <div className='signup-form-input-section'>
                  <input type='text' placeholder='Create Password'/>
              </div>
            </div>
        </Modal.Body> */}
        {/* <Modal.Footer>
        <div className='signup-form-btn'>
        <a href="" >Sign up</a>
        </div>
        <div className='new-register-section'>
          <span>already login? <a href="">Sign in </a></span>
        </div>
      </Modal.Footer> */}
      </Modal>
    );
  }

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
        Sign in
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='login-form-section'>
          <div className='login-form-input-section'>
              <input type='text' placeholder='Username'/>
          </div>
          <div className='login-form-input-section'>
              <input type='text' placeholder='Password'/>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className='login-form-btn'>
        <a href="" >Sign in</a>
        </div>
        <div className='new-register-section'>
          <span>New Registration ? <a href="">Sign up </a></span>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
 
  return (
    
    <div>
      <Navbar expand="lg">
       <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo} className='logo-img'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='navbar-link'>
            <Nav.Link className={location.pathname == "/" ? 'active' : ''} as={Link} to="/">Home</Nav.Link>
            <Nav.Link className={location.pathname == "/about" ? 'active' : ''} as={Link} to="/about">About Us</Nav.Link>
            {/* <Nav.Link className={location.pathname == "/templates" ? 'active' : ''} as={Link} to="/templates">Templates</Nav.Link>                */}
            <Nav.Link className={location.pathname == "/contact" ? 'active' : ''} as={Link} to="/contact">Contact</Nav.Link>               
          </Nav>
        </Navbar.Collapse>
        {/* <Navbar.Collapse id="navbarScroll" className='login-button'>
          <Nav>
            <Nav.Link as={Link} to="#" onClick={() => setModalShow(true)} >Sign in</Nav.Link>            
            <div className="sign-in">
            <Nav.Link as={Link} to="#" onClick={() => setModalShowsignup(true)}>Sign Up</Nav.Link>            
            </div>
          <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
          <MyVerticallyCenteredModalsignup show={modalShowsignup} onHide={() => setModalShowsignup(false)}/>
          </Nav>
          
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
    </div>
  )
}

export default Header;