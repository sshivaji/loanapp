import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth_reducer";
import studentListReducer from "./student_list";
import authreducer from "./authReducer";
import dashboardReducer from './dashboard_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  studentListReducer: studentListReducer,
  authenticated: authReducer,
  authReducer: authreducer,
  dashboard: dashboardReducer
});

export default rootReducer;
