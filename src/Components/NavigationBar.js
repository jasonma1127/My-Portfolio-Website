import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar(props) {
  return (
    <div className={`navigation-bar ${props.page}`}>
      <div className="logo">
        <h1>JASON Ma</h1>
      </div>
      <div className="nav-btn">
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolios" exact activeClassName="active">
              Portfolios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavigationBar;
