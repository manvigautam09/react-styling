import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AntDesignDashboard from "./AntDesignDashboard";
import MaterialUiDashboard from "./MaterialUiDashboard";
import ReactStrapDashboard from "./ReactStrapDashboard";

const AppRoutes = () => {
    
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/1">
          <AntDesignDashboard />
        </Route>
        <Route exact path="/2">
          <MaterialUiDashboard />
        </Route>
        <Route exact path="/3">
          <ReactStrapDashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default AppRoutes;
