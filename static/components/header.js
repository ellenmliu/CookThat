import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import '../css/header.css';

export default class App extends React.Component {
  render() {
    return <Navbar collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      Cook That
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>

    <Nav pullRight>
      <NavItem >
        <Link to='/about'>About</Link>
      </NavItem>
      <NavItem>
        <Link to='/'>Login</Link>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  }
}
