import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DatePicker from "./DatePicker";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/datePicker">
          <DatePicker />
        </Route>
        <Route exact path="/datePicker/:id">
          <DatePicker />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default AppRoutes;
