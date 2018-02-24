import React from 'react'
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap"
import '../css/header.css';

export default class App extends React.Component {
  render() {
    return <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          Cook That
        </Navbar.Brand>

      </Navbar.Header>

      <Navbar.Collapse>

    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        About
      </NavItem>
      <NavItem eventKey={2} href="#">
        Login
      </NavItem>
    </Nav>
  </Navbar.Collapse>

    </Navbar>;
  }
}
