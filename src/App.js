import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultLayout from "../src/containers/DefaultLayout";
import Login from "../src/pages/Login";

export default function App() {
  console.log("test");
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route exact path="/">
            <Login />
          </Route> */}
          <Route path="/dash-board">
            <Router>
              <DefaultLayout />
            </Router>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
