import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <h1>BROWSE</h1>
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <h1>SIGNIN</h1>
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <h1>SIGNUP</h1>
      </Route>
    </Router>
  );
}

export default App;
