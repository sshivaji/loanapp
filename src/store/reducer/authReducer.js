const initialState = {
  isSignin: false,
  isSignUp: false,
  errorMsg: "",
  user: {}
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        user: action.payload,
        isSignin: true,
        errorMsg: ''
      };
    case "SIGNIN_FAILURE":
      return {
        ...state,
        user: {},
        isSignUp: false,
        errorMsg: action.payload.msg
      };

    case "FORGOT":
        return {
            ...state,
            user: {},
            // isSignUp: false,
            // isSignin: false,
            success: true,
            msg: action.payload.msg
        };

    case "FORGOT_FAILURE":
        return {
            ...state,
            user: {},
            // isSignUp: false,
            // isSignin: false,
            success: false,
            msg: action.payload.msg
        };

    case "SIGNUP":
      return {
        ...state,
        user: action.payload,
        isSignUp: true,
        errorMsg: ''
      };
    case "SIGNUP_FAILURE":
      return {
        ...state,
        user: {},
        isSignUp: false,
        isSignin: false,
        errorMsg: action.payload.msg
      };

    default:
      return state;
  }
}
