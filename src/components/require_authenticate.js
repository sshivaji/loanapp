import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      // console.log("before", this.props.authenticated);
      if (!this.props.authenticated) {
        this.props.history.push("/");
      }
    }

    componentWillUpdate(nextProps) {
      console.log("next props auth", nextProps.authenticated);
      if (!nextProps.authenticated) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  const mapStateToProps = state => {
    return {
      authenticated: state.authenticated
    };
  };
  return connect(mapStateToProps)(Authentication);
}
