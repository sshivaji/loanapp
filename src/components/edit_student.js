import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardMiddleWare from "../store/middleware/dashboardMiddleware";

class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:false,
      lastName:false,
      userName:false,
      // email:false,
      password:false
    }
  }
 
  componentDidMount() {
    let id = this.props.match.params.id;
    let data = this.props.edit.results;
    // console.log(data);
    //   console.log("edit_student_id:");
    // console.log(id);
      let res = data.filter(std=> std.id == id)[0];

      this.setState({
          firstName:res.fields.first_name,
          lastName:res.fields.last_name,
          userName:res.fields.username,
          password:res.fields.password,
          // email:res.fields.email,
          id:id
    })
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
      userName: e.target.value
    });
  }

  handleChange5(e) {
    this.setState({
      password: e.target.value
    });
  }
  
  onUpdateHandler(e) {
    e.preventDefault();
    // console.log("data_id: ");
    // console.log(this.props.match.params.id);
    // console.log(id);
     let data = {
      id: this.state.id,
      email: this.state.email,
      profile: {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        role: 'individual',
        username: this.state.userName,
          password: this.state.password
       
      }
   };
     this.props.editDispatch(data);
  }

  onDeleteHandler(e) {
      // e.preventDefault();
      this.props.deleteDispatch("/"+this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
      if(nextProps.editdata.updated) {
        this.props.history.push("/students");
      }
      if(nextProps.editdata.delete) {
        this.props.history.push("/students");
      }
  }
  render() {
    let get = this.state.edit ? this.state.edit.fields : false;
    return (
      <div className="container pdTop50">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <h1>Edit</h1>
          </div>
        </div>
        <form onSubmit={(e) => this.onUpdateHandler(e)}>
          <div className="form-group row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-2">
              <label htmlFor="firstname">firstname</label>
              <input
                type="text"
                className="form-control"
                value={this.state.firstName}
                onChange={this.handleChange1.bind(this)}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-2">
              <label htmlFor="lastname">lastname</label>
              <input
                type="text"
                className="form-control"
                value={this.state.lastName}
                onChange={this.handleChange2.bind(this)}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-2">
              <label htmlFor="username">username</label>
              <input
                type="text"
                className="form-control"
                value={this.state.userName}
                onChange={this.handleChange4.bind(this)}
              />
            </div>
          </div>

            <div className="form-group row">
                <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                    <label htmlFor="username">password</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.handleChange5.bind(this)}
                    />
                </div>
            </div>

          <div className="form-group row">
            <div className="col-xs-12 col-sm-1 col-sm-offset-2" style={{marginRight:30}}>
              <button
                type="submit"
         
                style={{
                  backgroundColor: '#4CAF50', /* Green */
                  border: 'none',
                  color: 'white',
                  padding: '12px 30px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: 16,
                  margin: '4px 2px',
                  cursor: 'pointer',
                  fontWeight:'bold'
                }}
              >
                Update
              </button>
            </div>
            <div className="col-xs-12 col-sm-1">

            </div>
          </div>
        </form>
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => {
  return {
    editDispatch: (data) => dispatch(DashboardMiddleWare.update(data)),
    deleteDispatch: (id) => dispatch(DashboardMiddleWare.delete(id))
  };
};

const mapStateToProps = (state) => {
  return {
    edit: state.dashboard.student,
    editdata: state.dashboard,
    userobj: state.authReducer
  }
};

EditStudent = connect(mapStateToProps, mapDispatchToProps)(EditStudent);


export default EditStudent;
