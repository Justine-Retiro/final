import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.webp';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container fluid>
        <Navbar.Brand href="/"><img src={logo} className='w-50 ms-5' alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 p-1 fs-5 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
            {/* <Nav.Link href="#action2" style={{ color: 'white' }}>Best sellers</Nav.Link> */}
            <Nav.Link href="/Contacts" style={{ color: 'white' }}>Contacts</Nav.Link>
          </Nav>
          <Nav.Link href="/Login" style={{ color: 'white' }}>Login</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation