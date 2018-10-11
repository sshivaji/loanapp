import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DashboardMiddleWare from "../store/middleware/dashboardMiddleware";
import axios, { post } from 'axios';


class StudentList extends Component {
  constructor() {
    super();
      // this.uploadStudentFile = this.uploadStudentFile.bind(this);
      // this.onFormSubmit = this.onFormSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
      this.fileUpload = this.fileUpload.bind(this);
      this.state = {
      student: false
    };
  }
  componentDidMount() {
    this.props.studentDispatch(this.props.authReducer.user.id);
  }
  componentWillReceiveProps(nextProps) {
    let getData = nextProps.studentReport.dashboard;
    // console.log("getStudentData:");
    // console.log(getData);
    if (getData && getData.student) {
      this.setState({ student: getData.student })
    }
    if (getData && getData.student.teacher)
    {
        this.setState({teacher: getData.student.teacher})
    }

  }

    // onFormSubmit(e){
    //     e.preventDefault(); // Stop form submit
    //     console.log("on form submit");
    //     this.fileUpload(this.state.file).then((response)=>{
    //         console.log(response.data);
    //     })
    // }

    onChange(e) {
      console.log("this.onchange");
        // this.setState({file:e.target.files[0]});
        console.log("on form submit");
        console.log("file: "+e.target.files[0]);
        this.fileUpload(e.target.files[0]).then((response)=>{
            console.log(response.data);
            // this.props.addStudentDispatch(response.data);
            this.props.history.push("/reports");


        });

    }
    fileUpload(file){
        const url = 'http://db.firstmovechess.org/student/bulkcreate';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('teacher', this.state.teacher);
        // console.log("file:");
        // console.log(file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return  post(url, formData, config);
    }

    render() {
      // console.log("this.state.student:");
      // console.log(this.state.student);
    return (
      <div className="container pdTop50">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
            <h1>Applicant List</h1>
            <Table className="list">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>
                    <Link className="add-std" to="/students/create">
                      <span className="glyphicon glyphicon-plus" /> Add User
                    </Link>
                  </th>

                    {/*<th>*/}
                        {/*<Link className="add-std" type="file" to="/students/create">*/}
                            {/*<span className="glyphicon glyphicon-plus" /> Upload Students*/}
                        {/*</Link>*/}
                    {/*</th>*/}

                    <th>
                            <input className="inputfile" type="file" name="file1" id="fileupload"
                                   onChange={this.onChange}
                                   // onChange={(event)=> {
                                   //     this.uploadStudentFile(event)
                                   // }}
                                   // onClick={(event)=> {
                                   //     event.target.value = null
                                   // }}
                            />
                        <label htmlFor="fileupload">

                            <span title="Upload Multiple students using an excel file with columns in the following order, firstname, lastname, username, password. Do not use sensitive passwords." className="glyphicon glyphicon-plus" /> Upload Applicants (Excel file)

                        </label>
                        {/*</Link>*/}
                    </th>

                </tr>
              </thead>
              <tbody>
                {
                  this.state.student && !this.state.student.error ?
                    this.state.student.results.map((value, index) => {
                    let get = value.fields;
                    return <tr key={index}>
                      <td>{get.username}</td>
                      <td>{get.password}</td>
                      <td>{get.first_name}</td>
                      <td>{get.last_name}</td>
                      <td>
                        <Link className="a-edit" to={`students/`+`${value.id}`}>
                          <span className="glyphicon glyphicon-edit" /> Edit
                        </Link>
                      </td>
                      </tr>
                    
                  }) :
                  <tr>
                    {/*<td colSpan="4">*/}
                      {/*<h4 align="center"> No students are enrolled yet!</h4>*/}
                    {/*</td>*/}
                  </tr>
                }
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    studentDispatch: id => dispatch(DashboardMiddleWare.student(id))
  };
};

const mapStateToProps = state => {
  return {
    studentReport: state,
    authReducer: state.authReducer
  };
};

StudentList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList);

export default StudentList;
