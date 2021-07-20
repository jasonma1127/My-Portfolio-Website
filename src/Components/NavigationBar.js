import React from "react";
import { NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavigationBar(props) {
  return (
    <div className={`navigation-bar ${props.page}`}>
      <div className="logo">
        <h1>JASON Ma</h1>
      </div>
      <div className="nav-btn">
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink
              to={process.env.PUBLIC_URL + "/"}
              exact
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={process.env.PUBLIC_URL + "/about"}
              exact
              activeClassName="active"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={process.env.PUBLIC_URL + "/portfolios"}
              exact
              activeClassName="active"
            >
              Portfolios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={process.env.PUBLIC_URL + "/contact"}
              exact
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <span className="nav-item-bars pad">
          <FontAwesomeIcon icon={faBars} className="fa-3x"/>
        </span>
        <span className="nav-item-bars mobile">
          <FontAwesomeIcon icon={faBars} className="fa-1x"/>
        </span>
      </div>
    </div>
  );
}

export default NavigationBar;
