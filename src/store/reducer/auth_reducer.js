import { AUTH_CHANGE } from "../actions";

const authReducer = (state = false, action) => {
  switch (action.type) {
    case AUTH_CHANGE:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
