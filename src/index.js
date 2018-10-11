import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducer";
import thunk from "redux-thunk";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import FormSignin from "./components/form_signin";
import FormSignup from "./components/form_signup";
import FormForgotPoss from "./components/form_forgotpass";

import Footer from "./components/footer";
import StudentReport from "./components/student_report";
import StudentList from "./components/studentsList";
import EditStudent from "./components/edit_student";
import Lessons from "./components/lessons";
import requireAuth from "./components/require_authenticate";
import CreateStudent from "./components/create_student";
const store = createStore(rootReducer, {}, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/reports" component={requireAuth(StudentReport)} />
          <Route
            path="/students/create"
            component={requireAuth(CreateStudent)}
          />
          <Route path="/students/:id" component={requireAuth(EditStudent)} />
          <Route path="/students" component={requireAuth(StudentList)} />
          <Route path="/lessons" component={requireAuth(Lessons)} />
          <Route path="/register" component={FormSignup} />

          <Route path="/forgot" component={FormForgotPoss} />
          <Route exact path="/" component={FormSignin} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
