import React from 'react';
import { useLocation, Link} from 'react-router-dom'; 
import "./Home.css";

function Home() {
  const location = useLocation();  

  const isHomePage = location.pathname === '/';

  return (
    <>
    
        {isHomePage && (
          <>
            <h4>Bienvenue sur notre boutique de bijoux fantaisie faits maison</h4>
            <p>Explorez notre collection de bijoux fantaisie faits maison, méticuleusement conçus à la main avec passion. <br /> Découvrez des pièces uniques et de qualité qui charmeront les petits comme les plus grands.</p>
          </>
        )}
        {/* Section Nouveautés */}
        <h3>Nouveautés</h3>
        <div className="news">
          
          <Link to="/article1" img src="bracelet.jpg" className="article"  alt="bracelet" >
           
            <h3>Bracelet </h3>
            <p>Prix : 10 €</p>
          </Link>
          <Link to="/article2" img src="collier.jpg" className="article" alt="collier" >
            <h3>Collier</h3>
            <p>Prix : 25 €</p>
          </Link>
        </div>
    </>
  );
}


export default Home;
