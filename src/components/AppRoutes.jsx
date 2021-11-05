import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { generalRoutes, privateRoutes, publicRoutes } from "../utils/routes";

function AppRoutes ({isAuth}) {
  const [routes, setRoutes] = useState([...generalRoutes, ...publicRoutes]);

  useEffect(() => {
    if(isAuth){
      setRoutes([...generalRoutes, ...privateRoutes]);
    } else{
      setRoutes([...generalRoutes, ...publicRoutes]);
    }
  }, [isAuth]);

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

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(AppRoutes);