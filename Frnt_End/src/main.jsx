import React from "react";
import ReactDOM from "react-dom/client"; // Cambiar a 'react-dom/client'
import App from "./App";

// Crear un contenedor raíz usando createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderizar la aplicación dentro de ese contenedor
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
