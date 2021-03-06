import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap/";
import logo from "../images/MP-logo-transparent-bg.png";

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} className="logo" alt="Mariana Pantelic Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/Projects">Portfolio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
