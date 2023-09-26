import React from 'react';
import "./conditions.css";

function Conditions() {
  return (
    <div className="conditions">
      <h1>Conditions Générales de Vente</h1>

      <h2>Article 1 - Objet</h2>
      <p>Les présentes conditions générales de vente ont pour objet de définir les droits et obligations des parties dans le cadre de la vente en ligne de produits proposés par [Votre Nom d'Entreprise] au consommateur.</p>

      <h2>Article 2 - Prix</h2>
      <p>Les prix de nos produits sont indiqués en euros, toutes taxes comprises (TVA et autres taxes applicables au jour de la commande), sauf indication contraire et hors frais de traitement et d'expédition.</p>

      <h2>Article 3 - Commande</h2>
      <p>Le client a la possibilité de passer sa commande en ligne, à partir du catalogue en ligne, pour tout produit, dans la limite des stocks disponibles. Il devra ensuite suivre les instructions pour finaliser sa commande.</p>

      {/* Ajoutez d'autres articles et sections au besoin. */}

      <h2>Article X - Litiges</h2>
      <p>Les présentes conditions générales de vente sont soumises à la loi [votre loi applicable]. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut, les tribunaux [votre juridiction compétente] seront seuls compétents.</p>
    </div>
  );
}

export default Conditions;
