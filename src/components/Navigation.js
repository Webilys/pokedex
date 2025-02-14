import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div className="navigation">
      <Logo />
      <ul>
        <NavLink
          to="/"
          className={(nav) =>
            nav.isActive ? "nav-item nav-active" : "nav-item"
          }
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/a-propos"
          className={(nav) =>
            nav.isActive ? "nav-item nav-active" : "nav-item"
          }
        >
          <li>À propos</li>
        </NavLink>
        <NavLink
          to="/creer-un-pokemon"
          className={(nav) =>
            nav.isActive ? "nav-item nav-active" : "nav-item"
          }
        >
          <li>Créer un pokemon</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
