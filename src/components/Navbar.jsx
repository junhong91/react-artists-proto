import React from "react";
import { Link } from "react-router-dom";
import { NAV_ROUTES } from "../config/routes.config";

const Navbar = () => {
  return (
    <nav>
      <ul>
        {NAV_ROUTES.map((route) => (
          <li key={route.path}>
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
