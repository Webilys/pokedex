import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div className="container page-error">
      <Logo />
      <h1>Erreur 404</h1>
      <img src="/ronflex.png" alt="Ronflex qui dort" />
      <p>
        Oups ! Il semblerait que Ronflex dort sur cette page ou qu'elle n'existe
        pas.
      </p>
      <NavLink
        to="/"
        className={(nav) => (nav.isActive ? "nav-item nav-active" : "nav-item")}
      >
        <button className="button">Revenir à l'accueil</button>
      </NavLink>
    </div>
  );
};

export default Error;
