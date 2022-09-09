import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { NAV_ROUTES } from "../config/routes.config";
import "./Navbar.css";

const Navbar = ({ navbarLogo, signIn }) => {
  const navigate = useNavigate();
  function gotoHome() {
    navigate("/");
  }
  return (
    <nav className="navbar__wrapper">
      <img className="navbar__logo" src={navbarLogo.imgURL} alt="logo" onClick={gotoHome} />
      <ul className="navbar__menu">
        {NAV_ROUTES.map((route) => (
          <li className="navbar__menu__item" key={route.path}>
            <Link to={route.path} key={route.path}>
              {route.name}
            </Link>
          </li>
        ))}
        <button className="navbar__menu__btn" onClick={signIn.onClickHandler}>
          {signIn.userProfile.accounts.length === 0 ? signIn.btnName : signIn.userProfile.name}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
