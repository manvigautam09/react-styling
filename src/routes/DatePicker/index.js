import React from "react";
import "./style.css";
import { withRouter } from "react-router-dom";
import BasicLayout from "../../components/BasicLayout";
import AntDesignDatePicker from "../../components/AntDesignDatePicker";
import MaterialUiDatePicker from "../../components/MaterialUIDatePicker";
import ReactStrapDatePicker from "../../components/ReactStrapDatePicker";

const DatePickerComponent = props => {
  return (
    <BasicLayout heading="DatePicker">
      {props.match.params.id === "antDesign" && (
        <div className="containers">
          <AntDesignDatePicker />
        </div>
      )}
      {props.match.params.id === "materialUi" && (
        <div className="containers">
          <MaterialUiDatePicker />
        </div>
      )}
      {props.match.params.id === "reactstrap" && (
        <div className="containers">
          <ReactStrapDatePicker />
        </div>
      )}
    </BasicLayout>
  );
};
export default withRouter(DatePickerComponent);
