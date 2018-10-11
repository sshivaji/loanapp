import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NavRight from "./nav_right";
class Header extends Component {
  render() {
    console.log("state", this.props.authenticated);
    return (
      <Navbar fixedTop className="nav-color">
        <div className="row">
          <div className="col-lg-2 col-lg-offset-2 col-md-2 col-md-offset-1">
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">
                  <img src="../images/mortgage_image.jpg" height="100%" alt="" />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </div>
          <div className="col-lg-4 col-lg-offset-2 col-md-6 col-md-offset-2">
            <Navbar.Collapse>
              {this.props.authenticated && <NavRight />}
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated
  };
};

export default connect(mapStateToProps)(Header);
