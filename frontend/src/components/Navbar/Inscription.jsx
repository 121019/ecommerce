import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Inscription.css";

function Inscription() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dateofbirth: "",
    email: "",
    password: "",
    address: "",
    city: "",
    postcode: "",
    phone: "",
  });

    const user = {
      name: "John",
      firstname: "Doe",
      dateofbirth: "01/01/2000",
      email: "john.doe@example.com",
      password: "motdepasse",
      address: "123 Rue de la Rue",
      city: "Ville",
      postcode: "12345",
      phone: "0650405090",
    };

  const [envoiMessage, setEnvoiMessage] = useState(false);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {

    
    console.log("ENTER SUBMIT")
    event.preventDefault();

    // objet contenant les données du formulaire
    const formDataToSend = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      dateofbirth: formData.dateofbirth,
      email: formData.email,
      password: formData.password,
      address: formData.address,
      city: formData.city,
      postcode: formData.postcode,
      phone: formData.phone,
    };



    // Effectuer la requête d'inscription
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5080"
          }/users`,
          {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(formDataToSend),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          setError(
            errorData.message ||
              "Une erreur s'est produite lors de l'inscription."
          );
        } else {
          navigate("/");
          // Vous pouvez également utiliser la bibliothèque "react-toastify" ici pour afficher un message de réussite.
          // toast.success("Compte créé avec succès", toastOptions);
        }
      } catch (error) {
        setError("Une erreur s'est produite lors de l'inscription.");
      }


    // Réinitialiser le formulaire après l'envoi
    setFormData({
      firstname: "",
      lastname: "",
      dateofbirth: "",
      email: "",
      password: "",
      address: "",
      city: "",
      postcode: "",
      phone: "",
    });
  };

  return (
    <div className="inscription_customer">
      <p>Nouveau Client</p>
      <div className="Inscription-inscription_customer1">
        <h4>{envoiMessage && <p>Votre inscription est validée !</p>}</h4>

        <div className="customerRegistration_form_container1">
          <form onSubmit={handleSubmit}>
            <label>
              <input
                className="customer-form-container-info1"
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                placeholder="Nom *"
                required
              />
            </label>
            <label>
              <input
                className="customer-form-container-info1"
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                placeholder="Prénom *"
                required
              />
            </label>
            <label>
              <input
                className="customer-form-container-info1"
                type="date"
                name="dateofbirth"
                value={formData.dateofbirth}
                onChange={handleInputChange}
                placeholder="Date de naissance *"
                required
              />
            </label>

            <label>
              <input
                className="customer-form-container-info1"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email *"
                required
              />
            </label>
            <label>
              <input
                className="customer-form-container-info2"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Mot de passe *"
                autoComplete="new-password"
                required
              />
            </label>
            <label>
              <input
                className="customer-form-container-info2"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirmer le Mot de passe *"
                id="confirmPassword"
                required
              />
            </label>
            <label>
              <input
                className="customer-form-container-info1"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Adresse *"
                required
              />
            </label>
            <label>
              <input
                className="customer-form-container-info1"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Ville *"
                required
              />
            </label>
            <label>
              <input
                className="customer-form-container-info1"
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleInputChange}
                placeholder="Code postal *"
                required
              />
            </label>
            <label>
              <input
                className="customer-form-container-info1"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Téléphone *"
                required
              />
            </label>

            <div className="validate">
              <button type="submit">Inscription</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Inscription.propTypes = {
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

export default Inscription;
