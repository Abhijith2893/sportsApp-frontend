import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/home";
import NotFound from "./containers/notFound";
import Soccer from "./views/Soccer";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/soccer">
        <Soccer />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}