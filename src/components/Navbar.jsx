import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { NAV_ROUTES } from "../config/routes.config";
import "./Navbar.css";

const Navbar = ({ navbarLogo, navbarSignInBtnProps }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar__wrapper">
      <img
        className="navbar__logo"
        src={navbarLogo.imgURL}
        alt="logo"
        onClick={() => navigate("/")}
      />
      <ul className="navbar__menu">
        {NAV_ROUTES.map((route) => (
          <li className="navbar__menu__item" key={route.path}>
            <Link to={route.path} key={route.path}>
              {route.name}
            </Link>
          </li>
        ))}
        <button className="navbar__menu__btn" onClick={navbarSignInBtnProps.onClick}>
          {navbarSignInBtnProps.userProfile.accounts.length === 0
            ? navbarSignInBtnProps.btnName
            : navbarSignInBtnProps.userProfile.name}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
