import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";
import { connect } from "react-redux";
import { authenticate } from "../store/actions";
import { Link } from "react-router-dom";

class NavRight extends Component {
  logout() {
    localStorage.removeItem("user");
    this.props.authenticate(false);
  }

  render() {
    let userRol = "";
    if(this.props.authReducer && this.props.authReducer.user && this.props.authReducer.user.profile.role)
       this.userRole =  this.props.authReducer.user.profile.role ;
    return (
      <Nav pullRight className="header">
        {this.userRole == "teacher" && (
            <NavItem
              componentClass={Link}
              eventKey={1}
              to="/students"
              href="/students"
            >
              Applicants
            </NavItem>
          )}
        {this.userRole == "teacher" && (
            <NavItem
              componentClass={Link}
              eventKey={2}
              to="/reports"
              href="/reports"
            >
              Reports
            </NavItem>
          )}
        <NavItem
          componentClass={Link}
          eventKey={3}
          to="/lessons"
          href="/lessons"
        >
          Portfolio
        </NavItem>
        <NavItem eventKey={4}
                 onClick={this.logout.bind(this)}

        to="/login"
        href="/"
        >
          Logout
        </NavItem>
      </Nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated,
    authReducer: state.authReducer
  };
};

export default connect(
  mapStateToProps,
  { authenticate }
)(NavRight);
