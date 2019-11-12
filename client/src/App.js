import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer";
import Joblistings from "./components/Joblistings/index";
import Login from "./components/Login/index";
import Signup from "./components/Register/index";
import Schedule from "./components/Schedule/index";
import Profile from "./components/Profile/index";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Joblistings} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
