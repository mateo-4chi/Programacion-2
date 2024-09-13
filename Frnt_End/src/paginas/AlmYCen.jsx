import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AlmYCen.css"; // Importa el archivo CSS

const items = [
  {
    id: 1,
    name: "Almuerzo 1",
    price: 10,
    description: "Descripción del Almuerzo 1",
    image: "ruta/a/imagen1.jpg",
  },
  {
    id: 2,
    name: "Almuerzo 2",
    price: 15,
    description: "Descripción del Almuerzo 2",
    image: "ruta/a/imagen2.jpg",
  },
  {
    id: 3,
    name: "Almuerzo 3",
    price: 20,
    description: "Descripción del Almuerzo 3",
    image: "ruta/a/imagen3.jpg",
  },
  {
    id: 4,
    name: "Almuerzo 4",
    price: 12,
    description: "Descripción del Almuerzo 4",
    image: "ruta/a/imagen4.jpg",
  },
  {
    id: 5,
    name: "Almuerzo 5",
    price: 18,
    description: "Descripción del Almuerzo 5",
    image: "ruta/a/imagen5.jpg",
  },
  {
    id: 6,
    name: "Almuerzo 6",
    price: 22,
    description: "Descripción del Almuerzo 6",
    image: "ruta/a/imagen6.jpg",
  },
  {
    id: 7,
    name: "Almuerzo 7",
    price: 25,
    description: "Descripción del Almuerzo 7",
    image: "ruta/a/imagen7.jpg",
  },
  {
    id: 8,
    name: "Almuerzo 8",
    price: 11,
    description: "Descripción del Almuerzo 8",
    image: "ruta/a/imagen8.jpg",
  },
  {
    id: 9,
    name: "Almuerzo 9",
    price: 14,
    description: "Descripción del Almuerzo 9",
    image: "ruta/a/imagen9.jpg",
  },
  {
    id: 10,
    name: "Almuerzo 10",
    price: 19,
    description: "Descripción del Almuerzo 10",
    image: "ruta/a/imagen10.jpg",
  },
  {
    id: 11,
    name: "Almuerzo 11",
    price: 16,
    description: "Descripción del Almuerzo 11",
    image: "ruta/a/imagen11.jpg",
  },
  {
    id: 12,
    name: "Almuerzo 12",
    price: 23,
    description: "Descripción del Almuerzo 12",
    image: "ruta/a/imagen12.jpg",
  },
  {
    id: 13,
    name: "Almuerzo 13",
    price: 30,
    description: "Descripción del Almuerzo 13",
    image: "ruta/a/imagen13.jpg",
  },
];

export function AlmYCen() {
  const [quantities, setQuantities] = useState(Array(items.length).fill(0));
  const navigate = useNavigate();

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index]--;
    }
    setQuantities(newQuantities);
  };

  const handlePay = () => {
    navigate("/pagar_almuerzos_cenas", { state: { quantities } });
  };

  const totalAmount = items.reduce((acc, item, index) => {
    return acc + item.price * quantities[index];
  }, 0);

  return (
    <div className="container">
      <h1>Almuerzos y Cenas</h1>
      <div className="container">
        {items.map((item, index) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <div className="counter">
              <button onClick={() => handleDecrement(index)}>-</button>
              <span>{quantities[index]}</span>
              <button onClick={() => handleIncrement(index)}>+</button>
            </div>
          </div>
        ))}
      </div>
      {/* Resumen de pago al final */}
      <div className="payment-summary">
        <h3>Total a Pagar: ${totalAmount}</h3>
        <button className="pay-button" onClick={handlePay}>
          Pagar
        </button>
      </div>
    </div>
  );
}
