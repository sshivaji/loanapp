import React, { Component } from "react";
import { connect } from "react-redux";
import DashboardMiddleWare from "../store/middleware/dashboardMiddleware";

class ReportEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            progress: props.get.fields.progress
        };
    }
    onchange = (field, ev) => {
        let { value } = ev.target;
        this.setState({
            [field]: value
        })
    };
    update = () => {
        let { progress } = this.state;
        let { get } = this.props;
        console.log("get command: ");
        console.log(get);
        this.props.resetScore(get.id, get.fields.username, get.fields.current_lesson, get.fields.name,  progress);
    };
    render() {
        let { get: { fields }, index } = this.props;
        return (
            <tr key={index}>
                <td>{fields.username}</td>
                <td>{fields.first_name}</td>
                <td>{fields.last_name}</td>
                <td>{fields.name}</td>
                <td>{
                    this.state.editable
                        ? <input
                            type="number"
                            name="quantity"
                            min="0"
                            max="100"
                            value={this.state.progress}
                            onChange={(ev) => this.onchange('progress', ev)}
                            style={{ width: "65px" }}
                        />
                        : `${this.state.progress}`
                }</td>
                <td>
                    {
                        this.state.editable
                            ? <button
                                className="a-edit"
                                onClick={() => {
                                    let { progress } = this.state;
                                    if (progress < 0)
                                        this.setState({ editable: !this.state.editable, progress: 0 }, () => this.update());
                                    else if (progress > 100)
                                        this.setState({ editable: !this.state.editable, progress: 100 }, () => this.update());
                                    else
                                        this.setState({ editable: !this.state.editable }, () => this.update())
                                }}
                            >
                                <span className="glyphicon glyphicon-check" /> Done
                            </button>
                            : <button
                                className="a-edit"
                                onClick={() => this.setState({ editable: !this.state.editable })}
                            >
                                <span className="glyphicon glyphicon-edit" /> Edit
                            </button>
                    }
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reportDispatch: (id) => dispatch(DashboardMiddleWare.report(id)),
        resetScore: (id, username, lesson_id, name, value) => dispatch(DashboardMiddleWare.resetScore(id, username, lesson_id, name, value))
    };
};

const mapStateToProps = state => {
    return {
        studentReport: state,
        authReducer: state.authReducer
    };
};

ReportEdit =
    connect(mapStateToProps,
        mapDispatchToProps)
        (ReportEdit);

export default ReportEdit;
