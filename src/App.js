import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./features/components/Home";
import Contact from "./features/components/Contact";
import UserInformation from "./features/components/UserInformation";
import GlobalStyle from "./globalStyles";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/user" component={UserInformation} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
