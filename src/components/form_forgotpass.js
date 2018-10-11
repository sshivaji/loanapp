import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthMiddleWare from "../store/middleware/authMiddleware";
// import TeacherInputs from './teacherInputs';
import { connect } from "react-redux";
import { createAccount, authenticate, CREATE_ACCOUNT } from "../store/actions";

class FormForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "teacher",
      // firstName: "",
      // lastName: "",
      email: "",
      // password: "",
      // confirmPassword: "",
      // username: "",
      // schoolName: "",
      // districtName: "",
      // error: ""
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
    console.log(nextProps.authReducer);
    if (nextProps.authReducer.isSignUp) {
      // this.props.authenticate(true);
      // this.props.history.push("/lessons");
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
    this.props.forgotPassDispatch(data);
    // console.log("Reply: Data");
    // console.log(data);

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
      const { handleSubmit } = this.props;

      return (
      <div className="container pdTop50">
        <div className="form-signup-layout">
          <div className="form-layout-continer">
            <form className="form-signup" onSubmit={this.handleSubmit}>
              <h3 className="form-signup-heading">
                Forgot your password?
              </h3>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email address"
                value={this.state.email}
                onChange={this.handleChange3}
                required
              />

                {this.props.authReducer.success ? (
                    <div> {this.props.authReducer.msg}</div>
                ) : (
                    <p style={{ color: "red" }}>{this.props.authReducer.msg}</p>
                )}

              <br />
              <button className="btn btn-lg btn-block signup-btn" type="submit">
                Retrieve Password
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
    forgotPassDispatch: data => dispatch(AuthMiddleWare.forgotpass(data)),
    authenticate: data => dispatch(authenticate(data))
  };
};

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated,
    authReducer: state.authReducer
  };
};

FormForgotPass = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormForgotPass);
export default FormForgotPass;
