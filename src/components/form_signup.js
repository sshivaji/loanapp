import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthMiddleWare from "../store/middleware/authMiddleware";
// import TeacherInputs from './teacherInputs';
import { connect } from "react-redux";
import { createAccount, authenticate, CREATE_ACCOUNT } from "../store/actions";

class FormSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "teacher",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      schoolName: "",
      districtName: "",
      error: ""
    };
    this.handleChangeSel = this.handleChangeSel.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChangeS = this.handleChangeS.bind(this);
    this.handleChangeD = this.handleChangeD.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
  }
  handleChangeSel(e) {
    this.setState({
      value: e.target.value
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authReducer.isSignUp) {
      this.props.authenticate(true);
      this.props.history.push("/lessons");
    }
  }

  handleChange1(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  handleChange2(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  handleChange3(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleChange4(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleChange5(e) {
    this.setState({
      confirmPassword: e.target.value
    });
  }

  handleChangeS(e) {
    this.setState({
      schoolName: e.target.value
    });
  }

  handleChangeD(e) {
    this.setState({
      districtName: e.target.value
    });
  }
  handleUsername(e) {
    this.setState({
      username: e.target.value
    }); 
  }

  handleSubmit(e) {
    // console.log("FOrm Signup");
    e.preventDefault();
    if (this.state.password.length < 6) {
      this.setState({
        error: "Password should be atleast 6 characters"
      });
      return;
    }

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        error: "Please confirm the Password"
      });
      return;
    }

    if (this.state.email === undefined) {
      this.setState({
        error: "User email doesn't exist"
      });
      return false;
    }

    let data = {
      email: this.state.email,
      profile: {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        role: this.state.value,
        school_name: this.state.schoolName,
        district_name: this.state.districtName,
        password: this.state.password,
        // username: this.state.username
      }
    };
    this.props.signUpDispatch(data);

    // this.props.createAccount(
    //     this.state.firstName,
    //     this.state.lastName,
    //     this.state.email,
    //     this.state.password,
    //     this.state.value
    // );
    // console.log("After creating account: ", this.props.createAccountReducer);
    // this.props.authenticate(true);
    // this.props.history.push("/reports");
  }

  render() {
    return (
      <div className="container pdTop50">
        <div className="form-signup-layout">
          <div className="form-layout-continer">
            <form className="form-signup" onSubmit={this.handleSubmit}>
              <h3 className="form-signup-heading">
                  Sign up now to learn chess!
              </h3>
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                value={this.state.firstName}
                placeholder="First Name"
                onChange={this.handleChange1}
                required
                autoFocus
              />
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleChange2}
                required
              />
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Email address"
                value={this.state.email}
                onChange={this.handleChange3}
                required
              />
              {/*<label htmlFor="username" className="sr-only">*/}
                {/*Username*/}
              {/*</label>*/}
              {/*<input*/}
                {/*type="text"*/}
                {/*id="username"*/}
                {/*className="form-control"*/}
                {/*placeholder="Username"*/}
                {/*value={this.state.username}*/}
                {/*onChange={this.handleUsername}*/}
                {/*required*/}
              {/*/>*/}

              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Password - dont use an important password"
                onChange={this.handleChange4}
                value={this.state.password}
                required
              />
              <label htmlFor="passwordConfirm" className="sr-only">
                Password Confirm
              </label>
              <input
                type="password"
                id="passwordConfirm"
                className="form-control"
                placeholder="Password Confirm"
                value={this.state.passwordConfirm}
                onChange={this.handleChange5}
                required
              />
              <select
                id="role"
                name="role"
                className="form-control role-select"
                value={this.state.value}
                onChange={this.handleChangeSel}
              >
                  <option value="teacher">Teacher</option>
                <option value="individual">Individual</option>
              </select>
              {this.state.value === "teacher" && (
                <div>
                  <label htmlFor="schoolName" className="sr-only">
                    School Name
                  </label>
                  <input
                    type="text"
                    id="schoolName"
                    name="schoolName"
                    className="form-control"
                    placeholder="School Name"
                    value={this.state.schoolName}
                    onChange={this.handleChangeS}
                    required
                  />

                  <label htmlFor="districtName" className="sr-only">
                    District Name
                  </label>
                  <input
                    type="text"
                    id="districtName"
                    name="districtName"
                    className="form-control"
                    placeholder="District Name"
                    value={this.state.districtName}
                    onChange={this.handleChangeD}
                    required
                  />
                </div>
              )}

              <br />
              {this.state.error !== "" && (
                <p style={{ color: "red" }}>{this.state.error}</p>
              )}
              <br />
              <button className="btn btn-lg btn-block signup-btn" type="submit">
                REGISTER
              </button>
              <br />
              <div className="link-section">
                Already have an account?{" "}
                <Link to="/" className="a-t">
                  Login
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

const mapDispatchToProps = dispatch => {
  return {
    signUpDispatch: data => dispatch(AuthMiddleWare.signup(data)),
    authenticate: data => dispatch(authenticate(data))
  };
};

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated,
    authReducer: state.authReducer
  };
};

FormSignup = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSignup);
export default FormSignup;
