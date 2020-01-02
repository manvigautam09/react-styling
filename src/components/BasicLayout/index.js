import React from "react";
import "./style.css";
import Navbar from "../Navbar";

const BasicLayout = props => {
  return (
    <div className="outer-contain">
      <h1>{props.heading}</h1>
      <Navbar />
      {props.children}
    </div>
  );
};
export default BasicLayout;
