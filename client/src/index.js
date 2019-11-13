import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./assets/styles/styles.scss";
import reducer from "./store/reducer";
import Login from "./components/Login";
import Signup from "./components/Register";
import Joblistings from "./components/Joblistings";
import Nav from "./components/Nav";
import Schedule from './components/Schedule/index';
import Profile from './components/Profile/index';

import 'bootstrap/dist/css/bootstrap.css';

// creating a store for redux with the redux chrome extension
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Routing = (
  <Router>
    <Nav />
    <Switch>
      <main>
        <Route path="/" exact component={Joblistings} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/profile" component={Profile} />
      </main>
    </Switch>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>{Routing}</Provider>,
  document.getElementById("root")
);
