import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";

const Navmenu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>Game-Kanban</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>Home</Nav.Link>
      </Nav>
      <Button variant="outline-info">User</Button>
    </Navbar>
  );
};

export default Navmenu;
