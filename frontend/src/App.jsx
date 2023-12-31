import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Navbar/Home";
import Inscription from "./components/Navbar/Inscription";
import Connexion from "./components/Navbar/Connexion";
import Espace from "./components/Navbar/Espace";
import Contact from "./components/Footer/Contact";
import Shopping from "./components/Navbar/Shopping";
import Articles from "./components/Navbar/Articles";
import Whoarewe from "./components/Footer/Whoarewe";
import ConditionsGenerales from "./components/Footer/ConditionsGenerales";

import YourCommands from "./components/Navbar/YourCommands";
import ContactDetails from "./components/Navbar/ContactDetails";
import FavoritesArticles from "./components/Navbar/FavoritesArticles";
import Messages from "./components/Navbar/Messages";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/espace" element={<Espace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/panier" element={<Shopping />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/qui-sommes-nous" element={<Whoarewe />} />
          <Route
            path="/conditions-generales"
            element={<ConditionsGenerales />}
          />

          <Route path="/vos-commandes" element={<YourCommands />} />
          <Route path="/vos-coordonnees" element={<ContactDetails />} />
          <Route path="/vos-articles-favoris" element={<FavoritesArticles />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
