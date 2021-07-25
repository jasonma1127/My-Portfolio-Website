import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavigationBar(props) {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);

  return (
    <div className={`navigation-bar ${props.page}`}>
      <div className="logo">
        <h1>JASON MA</h1>
      </div>
      <div className="nav-btn">
        <ul className={click? "nav-items active" : "nav-items"}>
          <li className="nav-item" onClick={clickHandler}>
            <NavLink
              to={process.env.PUBLIC_URL + "/"}
              exact
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item" onClick={clickHandler}>
            <NavLink
              to={process.env.PUBLIC_URL + "/about"}
              exact
              activeClassName="active"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item" onClick={clickHandler}>
            <NavLink
              to={process.env.PUBLIC_URL + "/portfolios"}
              exact
              activeClassName="active"
            >
              Portfolios
            </NavLink>
          </li>
          <li className="nav-item" onClick={clickHandler}>
            <NavLink
              to={process.env.PUBLIC_URL + "/contact"}
              exact
              activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <span className="nav-item-icons pad" onClick={clickHandler}>
          <FontAwesomeIcon icon={click? faTimes : faBars} className="fa-3x"/>
        </span>
        <span className="nav-item-icons mobile" onClick={clickHandler}>
          <FontAwesomeIcon icon={click? faTimes : faBars} className="fa-1x"/>
        </span>
      </div>
    </div>
  );
}

export default NavigationBar;
