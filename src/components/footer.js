import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Navbar fixedBottom className="change-nav">
        <Nav pullRight>
          <NavItem eventKey={1} className="footer-color">
            © 2018 AutonomIQ Inc.
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Footer;
