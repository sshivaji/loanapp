import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import DashboardMiddleWare from "../store/middleware/dashboardMiddleware";
import ReportEdit from "./edit_report";

function Object_values(obj) {
    let vals = [];
    for (const prop in obj) {
        vals.push(obj[prop]);
    }
    return vals;
}


class StudentReport extends Component {
  constructor() {
    super();
    this.state = {
      report: false
    };
  }
  apiInterval;
  componentDidMount() {
    //Calling for first time
    this.props.reportDispatch(this.props.authReducer.user.id);

    //Calling after every 10 sec for rereshed data
    // this.apiInterval = setInterval(() => this.props.reportDispatch(this.props.authReducer.user.id), 10000);
  }
  componentWillUnmount() {
    // clearInterval(this.apiInterval);
  }
  componentWillReceiveProps(nextProps) {
    let getData = nextProps.studentReport.dashboard;
    if (getData && getData.report) {
      // console.log("Student Report:");
      // console.log(getData);
      this.setState({ report: getData });
    }
  }
  render() {
    return (
      <div className="container pdTop50">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
            <h1>Applicant Report</h1>
            <Table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Portfolio</th>
                  <th>Risk Score</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.report && this.state.report.report && !this.state.report.report.error ?
                  Object_values(this.state.report.report.results).map(
                    (value, index) => {
                      let get = value;
                      return (
                        <ReportEdit get={get} index={index} key={index} />
                      );
                    }
                  ) :
                  <tr>
                    {/*<td colSpan="6">*/}
                      {/*<h4 align="center">No students yet!</h4>*/}
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
    reportDispatch: (id) => dispatch(DashboardMiddleWare.report(id)),
    resetScore: id => dispatch(DashboardMiddleWare.resetScore(id))
  };
};

const mapStateToProps = state => {
  return {
    studentReport: state,
    authReducer: state.authReducer
  };
};

StudentReport = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentReport);

export default StudentReport;
