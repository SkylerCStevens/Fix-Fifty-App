import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Counter from "./containers/Counter/Counter";
import Home from "./pages/userPages/Home";
import Jobs from "./pages/userPages/Jobs";
import Reviews from "./pages/userPages/Reviews";
import Users from "./pages/userPages/Users";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./pages/loginPage/Login"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/counter" component={Counter} />
          <Route path="/login" component={Login} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
