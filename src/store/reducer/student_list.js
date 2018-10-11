import { ADD_STUDENT, DELETE_STUDENT } from "../actions";

const studentListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return [
        ...state,
        // Object.assign({}, action.first)
        {
          firstName: action.firstName,
          lastName: action.lastName,
          email: action.email,
          username: action.username,
          password: action.password
        }
      ];
    case DELETE_STUDENT:
      return state.filter((data, i) => i !== action.id);
    default:
      return state;
  }
};

export default studentListReducer;
