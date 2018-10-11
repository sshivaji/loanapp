import dashboardAction from '../actions/dashboardAction'
import FetchService from '../../service/api.js'

export default class DashboardMiddleWare {

    static report(id) {
        return (dispatch) => {
            FetchService.report(id)
             .then((response) => {
                   dispatch(dashboardAction.report(response))
                })
        }
    }

    static lesson(role, username, id) {
        return (dispatch) => {
            FetchService.lesson(role, username, id)
                .then((response) => {
                    dispatch(dashboardAction.lesson(response))
                })
        }
    }

    static student(id) {
        return (dispatch) => {
            FetchService.student(id)
             .then((response) => {
                   dispatch(dashboardAction.student(response))
                })
        }
    }

    static resetScore(id, username, lesson_id, name, value) {
        return (dispatch) => {
            let data = {
                id: id,
                "lesson_id": lesson_id,
                "Score": value,
                "name": name,
                "username": username
            };
            FetchService.resetScore(data)
             .then((response) => {
                   return response;
                })
        }
    }

    
      static update(data) {
        return (dispatch) => {
            FetchService.update(data)
             .then((response) => {
                 console.log("UPDATE RESPONSE", response);
                    dispatch(dashboardAction.update(response))
                })
        }
    }
    
    static delete(id) {
        return (dispatch) => {
            return FetchService.delete(id)
             .then((response) => {
                    dispatch(dashboardAction.delete(response))
                })
        }
    }

    static addStudent(data) {
        return (dispatch) => {
            return FetchService.add_student(data)
             .then((response) => {
                dispatch(dashboardAction.addstudent(response))
                FetchService.student(data.teacher_id)
                .then((response) => {
                      dispatch(dashboardAction.student(response))
                   })
                })
        }
    }
}