import React from 'react';
import  "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li><a href="/qui-sommes-nous">Qui sommes nous ?</a></li>
          <li><a href="/conditions-generales">Conditions générales de vente</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;