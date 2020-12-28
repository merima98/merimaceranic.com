import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./features/components/Home";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact to="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
