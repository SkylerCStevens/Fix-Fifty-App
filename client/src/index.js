import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./assets/styles/styles.scss";
import reducer from "./store/reducer";
import Header from "./components/Layout/Header";
import Login from "./components/Login";
import Signup from "./components/Register";
import Footer from "./components/Layout/Footer";
import Joblistings from "./components/Joblistings/index"
import Nav from "./components/Nav/index"

// creating a store for redux with the redux chrome extension
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Routing = (
  <Router>
    <Header />
    <Nav />
    <Switch>
      <main>
        <Route path="/" exact component={Joblistings} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </main>
    </Switch>
    <Footer />
  </Router>
);

ReactDOM.render(
  <Provider store={store}>{Routing}</Provider>,
  document.getElementById("root")
);
