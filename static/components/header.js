import React from 'react'
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import '../css/header.css';

export default class App extends React.Component {
  render() {
    return <Navbar collapseOnSelect>
  <Navbar.Header>
    <a href="/">
      <Navbar.Brand>
        Cook That
      </Navbar.Brand>
    </a>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>

    <Nav pullRight>
      <NavItem href="/about">
        About
      </NavItem>
      <NavItem href="/main">
      Login
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  }
}
