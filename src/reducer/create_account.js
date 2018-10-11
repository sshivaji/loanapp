import { CREATE_ACCOUNT } from "../actions";

const createAccountReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return [
        ...state,
        {
          firstName: action.firstName,
          lastName: action.lastName,
          email: action.email,
          password: action.password,
          role: action.role
        }
      ];
    default:
      return state;
  }
};

export default createAccountReducer;
