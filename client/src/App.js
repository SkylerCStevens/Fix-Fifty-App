import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/index";
import Joblistings from "./components/Joblistings/index";
import Login from "./components/Login/index";
import Signup from "./components/Register/index";
import Schedule from "./components/Schedule/index";
import Unverified from "./components/Profile/Unverified";
import Verified from './components/Profile/Verified';
import VerifiedJobs from './components/Joblistings/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Joblistings} />
          <Route path="/jobs" component={VerifiedJobs} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/profile/Unverified" exact component={Unverified} />
          <Route path="/profile/Verified" exact component={Verified} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
