import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NAV_ROUTES } from "../config/routes.config";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar__wrapper">
      <img
        className="navbar__logo"
        src={`${process.env.PUBLIC_URL}/Byredo_logo_wordmark.png`}
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
      </ul>
    </nav>
  );
};

export default Navbar;
