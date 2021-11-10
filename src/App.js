import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Problem is that it is overriding the script already there
import "./App.css";
import Navbar from "./navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CalenderComp from "./pages/calender";
import Folders from "./pages/folders";
import Land from "./pages/land";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <div>
                <Land />
              </div>
            )}
          />

          <Route
            path="/home"
            render={() => (
              <div class="barcontent">
                <Navbar content={Home} />
                <Home />
              </div>
            )}
          />
          <Route
            path="/calender"
            render={() => (
              <div class="barcontent">
                <Navbar />
                <CalenderComp />
              </div>
            )}
          />
          <Route
            path="/folders"
            render={() => (
              <div class="barcontent">
                <Navbar />
                <Folders />
              </div>
            )}
          />

          {/* <Route path='/sign-in' component={SignIn} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
