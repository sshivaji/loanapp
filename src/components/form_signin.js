import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { FormEmail, FormPassword } from "./input_fields";
import { authenticate } from "../store/actions";
import authenticated from "../store/actions";
import AuthMiddleWare from "../store/middleware/authMiddleware";
import FetchService from "../service/api";
import authActions from "../store/actions";

class FormSignin extends Component {
  loginAccount(values) {
    let data = {
      email: values.email,
      password: values.password
    };
    this.props.signInDispatch(data);
  }

  componentWillMount() {
    var user = localStorage.getItem("user");
    if (user) {
      this.props.authenticated(JSON.parse(user));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authReducer.isSignin) {
      this.props.authenticate(true);
      if (nextProps.authReducer.user.role === "teacher")
        this.props.history.push("/reports");
      else this.props.history.push("/lessons");
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container pdTop50">
        <div className="form-signin-layout">
          <div className="form-layout-continer">
            <h1 className="tag-line">Loan Application</h1>
            <form
              onSubmit={handleSubmit(this.loginAccount.bind(this))}
              className="form-signin"
            >
              <br />
              <Field
                label="Enter your email"
                placeholder="firstname"
                type="text"
                name="email"
                component={FormEmail}
              />
              <Field
                label="Enter your password"
                placeholder="pwd25"
                type="password"
                name="pword"
                component={FormPassword}
              />
              <div className="link-section forgot">
                Forgot
                <Link className="a-t" to="/forgot">
                  {" "}
                  password
                </Link>?
              </div>
              {!this.props.authReducer.isSignin && this.props.authReducer.isSignin !== '' &&
                <div style={{ color: 'red', fontSize: 14 }}> {this.props.authReducer.errorMsg}</div>
              }
              <button className="btn btn-lg btn-block signin-btn" type="submit">
                Sign in
              </button>
              <br />
              <div className="link-section">
                Don't have an account?{" "}
                <Link className="a-t" to="/register">
                  Register
                </Link>{" "}
                now
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

let form = reduxForm({
  form: "existUser"
})(FormSignin);

const mapDispatchToProps = dispatch => {
  return {
    signInDispatch: data => dispatch(AuthMiddleWare.signin(data)),
    authenticate: data => dispatch(authenticate(data)),
    authenticated: data => dispatch(authenticated.signin(data))
  };
};

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated,
    authReducer: state.authReducer
  };
};

form = connect(
  mapStateToProps,
  mapDispatchToProps
)(form);

export default form;
