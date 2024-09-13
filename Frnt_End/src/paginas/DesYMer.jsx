import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DesYMer.css"; // Importa el archivo CSS

const items = [
  {
    id: 1,
    name: "Desayuno 1",
    price: 5,
    description: "Descripción del Desayuno 1",
    image: "ruta/a/imagen1.jpg",
  },
  {
    id: 2,
    name: "Desayuno 2",
    price: 7,
    description: "Descripción del Desayuno 2",
    image: "ruta/a/imagen2.jpg",
  },
  {
    id: 3,
    name: "Desayuno 3",
    price: 6,
    description: "Descripción del Desayuno 3",
    image: "ruta/a/imagen3.jpg",
  },
  {
    id: 4,
    name: "Desayuno 4",
    price: 8,
    description: "Descripción del Desayuno 4",
    image: "ruta/a/imagen4.jpg",
  },
  {
    id: 5,
    name: "Desayuno 5",
    price: 9,
    description: "Descripción del Desayuno 5",
    image: "ruta/a/imagen5.jpg",
  },
  {
    id: 6,
    name: "Desayuno 6",
    price: 10,
    description: "Descripción del Desayuno 6",
    image: "ruta/a/imagen6.jpg",
  },
  {
    id: 7,
    name: "Desayuno 7",
    price: 11,
    description: "Descripción del Desayuno 7",
    image: "ruta/a/imagen7.jpg",
  },
  {
    id: 8,
    name: "Desayuno 8",
    price: 12,
    description: "Descripción del Desayuno 8",
    image: "ruta/a/imagen8.jpg",
  },
  {
    id: 9,
    name: "Desayuno 9",
    price: 13,
    description: "Descripción del Desayuno 9",
    image: "ruta/a/imagen9.jpg",
  },
  {
    id: 10,
    name: "Desayuno 10",
    price: 14,
    description: "Descripción del Desayuno 10",
    image: "ruta/a/imagen10.jpg",
  },
  {
    id: 11,
    name: "Desayuno 11",
    price: 15,
    description: "Descripción del Desayuno 11",
    image: "ruta/a/imagen11.jpg",
  },
  {
    id: 12,
    name: "Desayuno 12",
    price: 16,
    description: "Descripción del Desayuno 12",
    image: "ruta/a/imagen12.jpg",
  },
  {
    id: 13,
    name: "Desayuno 13",
    price: 17,
    description: "Descripción del Desayuno 13",
    image: "ruta/a/imagen13.jpg",
  },
];

export function DesYMer() {
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
    navigate("/pagar_dy_m", { state: { quantities } });
  };

  const totalAmount = items.reduce((acc, item, index) => {
    return acc + item.price * quantities[index];
  }, 0);

  return (
    <div className="container">
      <h1>Desayunos y Meriendas</h1>
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
      <div className="payment-summary">
        <h3>Total a Pagar: ${totalAmount}</h3>
        <button className="pay-button" onClick={handlePay}>
          Pagar
        </button>
      </div>
    </div>
  );
}
