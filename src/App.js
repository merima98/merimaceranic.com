import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./features/components/Home";
import Contact from "./features/components/Contact";
import UserInformation from "./features/components/UserInformation";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/user" component={UserInformation} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
