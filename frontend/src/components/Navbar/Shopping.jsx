import React, { useState } from "react";
import "./Shopping.css";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      reference: "123",
      description: "Bracelet",
      quantity: 2,
      unitPriceHT: 10.0,
    },
    {
      id: 2,
      reference: "456",
      description: "collier",
      quantity: 1,
      unitPriceHT: 25.0,
    },
  ]);

  const calculateTotalHT = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.unitPriceHT,
      0
    );
  };

  const calculateTVA = () => {
    const totalHT = calculateTotalHT();
    const tvaRate = 0.2; // Taux de TVA à 20%

    const tvaAmount = totalHT * tvaRate;

    return tvaAmount;
  };

  const calculateTotalTTC = () => {
    const totalHT = calculateTotalHT();
    const tvaRate = 0.2; // Taux de TVA à 20%

    const tvaAmount = calculateTVA();
    const totalTTC = totalHT + tvaAmount;

    return totalTTC;
  };

  const handleCheckout = () => {
    alert("Achat validé !");
  };

  return (
    <div>
      <h1>Panier d'achat</h1>
      <table>
        <thead>
          <tr>
            <th>Référence</th>
            <th>Description</th>
            <th>Quantité</th>
            <th>Prix unitaire HT</th>
            <th>Prix total TTC</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.reference}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPriceHT}</td>
              <td>{item.quantity * item.unitPriceHT}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-container">
        <strong>Total HT:</strong> {calculateTotalHT()} €
      </div>
      <div className="total-container">
        <strong>Total TVA:</strong> {calculateTVA()} €
      </div>
      <div className="total-container">
        <strong>Total TTC:</strong> {calculateTotalTTC()} €
      </div>
      <div className="button-container">
        <button onClick={handleCheckout}>Valider votre achat</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
