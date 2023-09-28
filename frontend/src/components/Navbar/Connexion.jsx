import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
//import { toast } from "react-toastify";
//import { useUser } from "../contexts/UserContext";

import "./Connexion.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //const { setUser } = useUser();


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlechange = () => {
    navigate("/espace");
  };
  const navigate = useNavigate();

  const [error, setError] = useState("");



  const handleSubmit = async(event) => {
    event.preventDefault();


    const formDataToSend ={
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5080"}
      /login`,
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      }
      )
      
      if (!response.ok) {
        const errorData = await response.json();
        setError(
          errorData.message ||
            "Une erreur s'est produite lors de la connexion."
        );
      } else {
        await response.json();
        navigate("/espace");
        // Vous pouvez également utiliser la bibliothèque "react-toastify" ici pour afficher un message de réussite.
        // toast.success("Compte créé avec succès", toastOptions);
      }
    } catch (error) {
      setError("Une erreur s'est produite lors de la connexion.");

    }
  
     // Réinitialiser le formulaire après l'envoi
     setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="connexion_customer">
      <p>Connexion </p>
      <div className="Connexion-connexion_customer1">

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
                onClick={""}
              >
                Mot de passe oublié ?
              </button>
            </div>
            <div className="connexion_button">
            <button className="connexion_submitButton" type="button" 
              onClick={handlechange}>
              Se connecter
            </button>              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;

Login.propTypes = {
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
