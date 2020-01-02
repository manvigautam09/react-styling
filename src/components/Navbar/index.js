import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./style.css";
const activeClass = (active, text) => {
  let activeClass = "";
  if (active === text) {
    activeClass = "active";
  }
  return activeClass;
};
const Navbar = props => {
  return (
    <div className="nav-bar">
      <Link className="link-tags" to="/datePicker/antDesign">
        <div
          className={`link-div ${activeClass(
            props.match.params.id,
            "antDesign"
          )}`}
        >
          Ant-design
        </div>
      </Link>
      <Link className="link-tags" to="/datePicker/materialUi">
        <div
          className={`link-div ${activeClass(
            props.match.params.id,
            "materialUi"
          )}`}
        >
          MaterialUI
        </div>
      </Link>
      <Link className="link-tags" to="/datePicker/reactstrap">
        <div
          className={`link-div ${activeClass(
            props.match.params.id,
            "reactstrap"
          )}`}
        >
          Reactstrap
        </div>
      </Link>
    </div>
  );
};

export default withRouter(Navbar);
