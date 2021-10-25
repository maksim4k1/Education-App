import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { generalRoutes, privateRoutes, publicRoutes } from "../utils/routes";

const routes = [...generalRoutes, ...privateRoutes, ...publicRoutes];

function AppRoutes () {
  return(
    <Switch>
      {
        routes.map((route, index) => {
          return <Route key={index} {...route} />
        })
      }
      <Redirect to="/error/404" />
    </Switch>
  );
}

export default AppRoutes;