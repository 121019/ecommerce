import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "./Connexion.css";

function Connexion({ toastOptions }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [envoiMessage, setEnvoiMessage] = useState(false);

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleForgotPassword = () => {
    // Ajoutez ici la logique pour gérer la réinitialisation du mot de passe
    // Par exemple, vous pouvez rediriger l'utilisateur vers une page de réinitialisation de mot de passe.
    // navigate("/forgot-password"); // Remplacez avec votre propre gestion
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5080"}/login`,
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          // Réinitialiser le formulaire après la connexion réussie
          setFormData({
            email: "",
            password: "",
          });
          setEnvoiMessage(true);

          toast.success("Vous êtes connecté", toastOptions);
          navigate("/espace");
        }
      })
      .catch(() => {
        // En cas d'erreur de fetch ou autre
        setError("Une erreur s'est produite lors de la connexion.");
      });
  };

  return (
    <div className="connexion_customer">
      <p>Connexion </p>
      <div className="Connexion-connexion_customer1">
        <h4>{envoiMessage && <p>Vous êtes connecté !</p>}</h4>

        <div className="customerLogin_form_container1">
          <form className="connexion_form" onSubmit={handleSubmit}>
            <div id="div_input_email">
              <label htmlFor="email">Email</label>
              <input
                className="customer-form-container-info1"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email *"
                required
              />
            </div>
            <div id="div_input_password">
              <label htmlFor="password">Mot de passe</label>
              <input
                className="customer-form-container-info1"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Mot de passe *"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="forgot-password-link"
                onClick={handleForgotPassword}
              >
                Mot de passe oublié ?
              </button>
            </div>
            <div className="connexion_button">
              <button className="connexion_submitButton" type="submit">
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Connexion.propTypes = {
  toastOptions: PropTypes.shape({
    position: PropTypes.string,
    autoClose: PropTypes.number,
    hideProgressBar: PropTypes.bool,
    closeOnClick: PropTypes.bool,
    pauseOnHover: PropTypes.bool,
    draggable: PropTypes.bool,
    progress: PropTypes.number,
    theme: PropTypes.string,
  }).isRequired,
};

export default Connexion;
