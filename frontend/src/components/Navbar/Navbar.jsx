import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="logo"></div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/articles">Articles</a>
          </li>
          <li>
            <a href="/tarifs">Tarifs</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/inscription">Inscription</a>
          </li>
          <li>
            <a href="/Connexion">Connexion</a>
          </li>

          <li className="panier">
            <a href="/panier">Panier</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
