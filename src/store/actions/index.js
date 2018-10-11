export const AUTH_CHANGE = "auth_change";

export const ADD_STUDENT = "ADD_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const SIGNIN = "SIGNIN";
export const SIGNIN_FAILURE = "SIGNIN_FAILURE";
export const SIGNUP = "SIGNUP";
export const FORGOT = "FORGOT";
export const FORGOT_FAILURE = "FORGOT_FAILURE";

export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const CREATE_ACCOUNT = "CREATE_ACCOUNT";

// define action creator
export const authenticate = isLOggedIn => {
  return {
    type: AUTH_CHANGE,
    payload: isLOggedIn
  };
};

export function addStudent(firstName, lastName, email, username, password) {
  return {
    type: ADD_STUDENT,
    firstName,
    lastName,
    email,
    username,
    password
  };
}

export function createAccount(firstName, lastName, email, password, role) {
  return {
    type: CREATE_ACCOUNT,
    firstName,
    lastName,
    email,
    password,
    role
  };
}

export default class AuthActions {
  static signin(user) {
    return {
      type: SIGNIN,
      payload: user
    };
  }
  static signinFailure(data) {
    return {
      type: SIGNIN_FAILURE,
      payload: data
    };
  }

  static forgot(user) {
      return {
          type: FORGOT,
          payload: user
      };
  }

  static forgotFailure(user) {
      return {
          type: FORGOT_FAILURE,
          payload: user
      };
  }

  static signup(user) {
    return {
      type: SIGNUP,
      payload: user
    };
  }

  static signupFailure(data) {
    return {
      type: SIGNUP_FAILURE,
      payload: data
    };
  }
}
