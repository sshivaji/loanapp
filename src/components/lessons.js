import React from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import DashboardMiddleWare from "../store/middleware/dashboardMiddleware";
const videoDetails = [
  { value: 0, text: "Group 0" },
  { value: 1, text: "Group 1" },
  { value: 2, text: "Group 2" },
  { value: 3, text: "Group 3" },
  { value: 4, text: "Group 4" },
  { value: 5, text: "Group 5" },
  { value: 6, text: "Group 6" },
  { value: 7, text: "Group 7" },
  { value: 8, text: "Group 8" },
  { value: 9, text: "Group 9" },
  { value: 10, text: "Group 10" }
];
class Lessons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: this.props.lessons,
            userDetails: this.props.userDetails
            // userName: this.props.userName,
            // userId: this.props.userId
        };
    }
    apiInterval;
    componentDidMount() {
        //Calling for first time
        // this.props.reportDispatch(this.props.authReducer.user.id);
        // this.state.username = this.props.authReducer.user.id;

        if ((this.props.authReducer.user.id) !== undefined) {
                // console.log(this.props.authReducer.user);

                this.props.lessonDispatch(this.props.authReducer.user.profile.role,
                    this.props.authReducer.user.username, this.props.authReducer.user.id);

        }

        //Calling after every 10 sec for rereshed data
        // this.apiInterval = setInterval(() => this.props.reportDispatch(this.props.authReducer.user.id), 10000);
    }


    componentWillReceiveProps(nextProps) {

        // let getData = nextProps.studentLesson.dashboard;
        let getData = nextProps.lessonReport.dashboard;
        let userDetails = [];

        // console.log("Lesson data: ");
        // console.log(getData);
        if (getData && getData.report && getData.report.results) {
        //     // console.log("Student Report:");
        //     // console.log(getData);
            this.setState({ lessons: getData.report.results });

            let s;
            for (s of videoDetails) {
                // console.log(s);
                // console.log(getData.report.results);


                // if (this.state.lessons !==undefined)
                let score = getData.report.results.filter(lesson=> lesson.lesson_id === s.value)[0];

                if (score !== undefined)
                {
                    userDetails.push({...s, ...score});
                    // console.log(userDetails);
                }

                else {
                    userDetails.push(s);
                }

                // ... do something with s ...
            }

        }
        this.setState({ userDetails: userDetails });

    }


  render() {
    let { user } = this.props.authReducer;
    // console.log("user:");
    // console.log(user);
    // console.log(this.props);
    let username = (user && user.username) || null;


    if (username == null && user.profile) {
        username = user.profile.username;
    }
    // let {userDetails} = this.state.userDetails;


    // videoDetails.map((data, index) => (
    //     // console.log('a')
    //     // console.log(data)
    //     // console.log(index);
    //
    //     if (this.state.lessons !== undefined)
    //         console.log(this.state.lessons.filter(lesson=> lesson.id == data.value)[0])
    //     // userDetails.push(data)
    //
    // ));

    // console.log(this.state.lessons);
    // console.log(user);
      if (this.state.userDetails && username)
    return (
      <div className="container pdTop50">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
            <h1>Portfolio</h1>
            <Table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Risk Score</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {this.state.userDetails.map((data, index) => (
                    // {{ score = this.state.lessons.filter(lesson=> lesson.id == data.value)[0];
                    // console.log(score);
                    // }}

                    <tr key={index}>
                    <td>{`Portfolio ${data.value} (${data.text})`}</td>

                      <td>{data.score}</td>
                    <td>
                      <a
                        href={`https://video.firstmovechess.org/?student_id=${user.id}&username=${username}&PlayVideo=lesson_${data.value}`}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <img
                          src="../../images/poster.png"
                          className="video-stream"
                          alt=""
                        />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
      return null;
  }
}

const mapDispatchToProps = dispatch => {
    return {
        lessonDispatch: (role, username, id) => dispatch(DashboardMiddleWare.lesson(role, username, id))
        // resetScore: id => dispatch(DashboardMiddleWare.resetScore(id))
    };
};

const mapStateToProps = state => {
  return {
      lessonReport: state,
      authReducer: state.authReducer
  };
};

Lessons = connect(
  mapStateToProps,
    mapDispatchToProps
)(Lessons);

export default Lessons;
