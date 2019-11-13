import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./assets/styles/styles.scss";
import reducer from "./store/reducer";
import Login from "./components/Login";
import Signup from "./components/Register";
import Joblistings from "./components/Joblistings/Joblistings";
import VerfiedJobs from "./components/Joblistings/index";
import Schedule from './components/Schedule/index';
import Unverified from './components/Profile/Unverified';
import Verified from './components/Profile/Verified';
import '../src/assets/styles/unverified.scss'
import '../src/assets/styles/jobs.scss'


// creating a store for redux with the redux chrome extension
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Routing = (
  <Router>
    <Switch>
      <main>
        <Route path="/" exact component={Joblistings} />
        <Route path="/jobs" component={VerfiedJobs} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/profile/Unverified" exact component={Unverified} />
        <Route path="/profile/Verified" exact component={Verified} />
      </main>
    </Switch>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>{Routing}</Provider>,
  document.getElementById("root")
);
