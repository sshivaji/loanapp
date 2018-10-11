export const DASHBOARD_REPORT = "DASHBOARD_REPORT";
export const DASHBOARD_STUDENT = 'DASHBOARD_STUDENT';
export const DASHBOARD_LESSON = 'DASHBOARD_LESSON';

export const UPDATE_DATA = "UPDATE_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const ADD_STUDENT = "ADD_STUDENT";

export default class AuthActions {
    static report(user) {
        return {
            type: DASHBOARD_REPORT,
            payload: user
        }
    }

    static lesson(user) {
        return {
            type: DASHBOARD_LESSON,
            payload: user
        }
    }

    static student(user) {
        return {
            type: DASHBOARD_STUDENT,
            payload: user
        }
    }
    static update(user) {
        return {
            type: UPDATE_DATA,
            payload: user
        }
    }
    static delete(user) {
        return {
            type: DELETE_DATA,
            payload: user
        }
    }
    static addstudent(user) {
        return {
            type: ADD_STUDENT,
            payload: user
        }
    }
    
}