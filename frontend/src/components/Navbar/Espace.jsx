import React from 'react';
import { Link } from 'react-router-dom';
import "./Espace.css";

function Espace() {
  return (
    <div className="espace">
      <h1>Bienvenue sur votre espace</h1>
      <div className="espace-cards">
        <div className="espace-card">
          <h2>Vos commandes</h2>
        </div>
        <div className="espace-card">
          <h2>Vos informations personnelles</h2>
        </div>
        <div className="espace-card">
          <h2>Votre articles favoris</h2>
        </div>
        <div className="espace-card">
          <h2>Messages</h2>
        </div>
      </div>
    </div>
  );
}

export default Espace;
