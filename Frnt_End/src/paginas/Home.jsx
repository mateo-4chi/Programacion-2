import React from "react";
import { useNavigate } from "react-router-dom"; // Importa el archivo CSS
import "./styles.css";

export function Home() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div>
      <header className="header">
        <img src="./src/img/logoSable.png" alt="Logo" className="header-image" />
      </header>
      <div className="button-container">
        <button>
          <a
            href="/carta.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            Carta
          </a>
        </button>
        <button onClick={() => navigateTo("/desayunos_meriendas")}>
          Desayunos y Meriendas
        </button>
        <button onClick={() => navigateTo("/almuerzos_cenas")}>
          Almuerzos y Cenas
        </button>
      </div>
    </div>
  );
}
