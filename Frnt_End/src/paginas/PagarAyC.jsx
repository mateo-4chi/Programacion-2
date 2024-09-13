import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import "./PagarAyC.css"; // Importa el archivo CSS

const items = [
  { id: 1, name: "Almuerzo 1", price: 10 },
  { id: 2, name: "Almuerzo 2", price: 15 },
  { id: 3, name: "Almuerzo 3", price: 20 },
  { id: 4, name: "Almuerzo 4", price: 12 },
  { id: 5, name: "Almuerzo 5", price: 18 },
  { id: 6, name: "Almuerzo 6", price: 22 },
  { id: 7, name: "Almuerzo 7", price: 25 },
  { id: 8, name: "Almuerzo 8", price: 11 },
  { id: 9, name: "Almuerzo 9", price: 14 },
  { id: 10, name: "Almuerzo 10", price: 19 },
  { id: 11, name: "Almuerzo 11", price: 16 },
  { id: 12, name: "Almuerzo 12", price: 23 },
  { id: 13, name: "Almuerzo 13", price: 30 },
];

export function PagarAyC() {
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
      "Su pedido fue tomado con éxito, en breve estaremos llevando a su mesa."
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
    <div className="pagar-ayc">
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
