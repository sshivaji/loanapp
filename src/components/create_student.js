import React, { Component } from "react";

import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import DashboardMiddleWare from "../store/middleware/dashboardMiddleware";
import {
  FormGroupFirstName,
  FormGroupLastName,
  // FormGroupEmail,
  FormGroupPassword,
  FormGroupUsername
} from "./createStudent_field";

import { addStudent } from "../store/actions";

class CreateStudent extends Component {
  createStudent(values) {
    // values.preventDefault();
    let data = {
      email: values.email,
      password: values.password,
      teacher_id: this.props.authReducer.user.id,
      profile: {
        first_name: values.firstname,
        last_name: values.lastname,
        role: 'individual',
        username: values.username
      }
   };
     this.props.addStudentDispatch(data);
     // this.props.router.push("/students");

     // let added = true;
      this.props.history.push("/students");


  }


  render() {
    // console.log("teacher_id");
    // console.log(this.props);
    //  console.log(this.props.authReducer.user.id);
    const { handleSubmit, router } = this.props;
      // if (isAuthenticated) {
      //     return <Redirect to='/students' />;
      // }
    return (
      <div className="container pdTop50">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <h1>Create New Applicant</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit(this.createStudent.bind(this))}>

            <Field id="new_first"
                   label="firstname"
                   type="text"
                   name="firstname"
                   component={FormGroupFirstName}
            />

          <Field id="last"
            label="lastname"
            type="text"
            name="lastname"
            component={FormGroupLastName}
          />

          <Field
            label="username"
            type="text"
            name="username"
            component={FormGroupUsername}
          />
          <Field
            label="password"
            type="password"
            name="password"
            component={FormGroupPassword}
          />





          <div className="form-group row">
            <div className="col-xs-12 col-sm-2 col-sm-offset-2">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{ backgroundColor: "#1967be" }}
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

let form = reduxForm({
  form: "createStudent"
})(CreateStudent);

const mapDispatchToProps = dispatch => {
  return {
    addStudentDispatch: data => dispatch(DashboardMiddleWare.addStudent(data))
  };
};

const mapStateToProps = state => {
  return {
      addStudent: state.dashboard,
      authReducer: state.authReducer

  };
};

form = connect(mapStateToProps,mapDispatchToProps)(form);

export default form;
// export default withRouter(form);
