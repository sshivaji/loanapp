import authenticate from '../actions';
import FetchService from '../../service/api.js'

export default class AuthMiddleWare {

    static signup(data) {
        return (dispatch) => {
            FetchService.signup(data)
                .then((response) => {
                    if (!response || response.error) {
                        response.msg = "Unable to register new user";
                        dispatch(authenticate.signupFailure(response))
                    }
                    else {
                        dispatch(authenticate.signup(response))
                        localStorage.setItem("user", JSON.stringify(response))
                    }
                })
        }
    }

    static forgotpass(data) {
        return (dispatch) => {
            FetchService.forgotpass(data)
                .then((response) => {
                    if (!response || response.error) {
                        response.msg = "Unable to locate email address";
                        dispatch(authenticate.forgotFailure(response))
                    }
                    else {
                        response.msg = "Your registration information has been emailed, check your email";
                        dispatch(authenticate.forgot(response))

                        // localStorage.setItem("user", JSON.stringify(response))
                    }
                })
        }
    }

    static signin(data) {
        return (dispatch) => {
            FetchService.signin(data)
                .then((response) => {
                    if (!response || response.error) {
                        response.msg = "Email or password does not exist";
                        dispatch(authenticate.signinFailure(response))
                    }
                    else {
                        dispatch(authenticate.signin(response))
                        localStorage.setItem("user", JSON.stringify(response))
                    }
                })
        }
    }
    static logout(useruid) {
        return (dispatch) => {
        }
    }
}