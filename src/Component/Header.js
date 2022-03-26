import React from 'react'
import { Navbar,Nav,Container,Form,FormControl } from 'react-bootstrap';
import logo from './Assets/logo.png';

export default function Header() {
  return (
    <div>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><img src={logo}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">CATEGORY 1</Nav.Link>
        <Nav.Link href="#action2">CATEGORY 2</Nav.Link>
        <Nav.Link href="#action2">CATEGORY 3</Nav.Link>
        <Nav.Link href="#action2">CATEGORY 4</Nav.Link>
        <Nav.Link href="#action2">CATEGORY 5</Nav.Link>

        
        {/* <Nav.Link href="#" disabled>
          Link
        </Nav.Link> */}
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
