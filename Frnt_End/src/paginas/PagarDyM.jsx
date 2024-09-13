import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import "./PagarDyM.css"; // Importa el archivo CSS

const items = [
  { id: 1, name: "Desayuno 1", price: 5 },
  { id: 2, name: "Desayuno 2", price: 7 },
  { id: 3, name: "Desayuno 3", price: 6 },
  { id: 4, name: "Desayuno 4", price: 8 },
  { id: 5, name: "Desayuno 5", price: 9 },
  { id: 6, name: "Desayuno 6", price: 10 },
  { id: 7, name: "Desayuno 7", price: 11 },
  { id: 8, name: "Desayuno 8", price: 12 },
  { id: 9, name: "Desayuno 9", price: 13 },
  { id: 10, name: "Desayuno 10", price: 14 },
  { id: 11, name: "Desayuno 11", price: 15 },
  { id: 12, name: "Desayuno 12", price: 16 },
  { id: 13, name: "Desayuno 13", price: 17 },
];

export function PagarDyM() {
  const location = useLocation();
  const { quantities } = location.state;
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const [showMessage, setShowMessage] = useState(false);

  const totalAmount = items.reduce((acc, item, index) => {
    return acc + item.price * quantities[index];
  }, 0);

  const handlePayAtTable = () => {
    setMessage(
      "Su pedido fue tomado con éxito, en breve lo estaremos llevando a su mesa."
    );
    setShowMessage(true);
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  const handlePayWithDebit = () => {
    setMessage("Próximamente");
    setShowMessage(true);
  };

  const handlePayWithCredit = () => {
    setMessage("Próximamente");
    setShowMessage(true);
  };

  const closeMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className="pagar-dym">
      <h1>Ticket de Pago</h1>
      <div className="ticket">
        {/* Aquí va el resumen del pedido */}
        {quantities.map(
          (quantity, index) =>
            quantity > 0 && (
              <div key={index} className="ticket-item">
                <span>Producto {index + 1}</span>
                <span>Cantidad: {quantity}</span>
              </div>
            )
        )}
      </div>
      <div className="payment-options">
        <button onClick={handlePayAtTable}>Pagar en Mesa</button>
        <button onClick={handlePayWithDebit}>Pagar con Débito</button>
        <button onClick={handlePayWithCredit}>Pagar con Crédito</button>
      </div>
      {showMessage && (
        <div className="message">
          <span className="close" onClick={closeMessage}>
            &times;
          </span>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}
