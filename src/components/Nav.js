import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default function Nav() {
  return (
    //Navbar which is only used to display the title
    <Navbar className="nav" bg="light">
      <Container>
        <Navbar.Brand>Library</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
