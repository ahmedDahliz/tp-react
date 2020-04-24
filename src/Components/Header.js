import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ()=>{
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Books Place</Navbar.Brand>
      <Nav className="mr-auto">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/">Author</Link>
        <Link className="nav-link" to="/">About</Link>
      </Nav>
    </Navbar>
  );
}

export default Header;


// 