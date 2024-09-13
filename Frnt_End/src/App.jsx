import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./paginas/Home";
import { DesYMer } from "./paginas/DesYMer.jsx";
import { PagarDyM } from "./paginas/PagarDyM.jsx";
import { AlmYCen } from "./paginas/AlmYCen.jsx";
import { PagarAyC } from "./paginas/PagarAyC.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desayunos_meriendas" element={<DesYMer />} />
        <Route path="/pagar_dy_m" element={<PagarDyM />} />
        <Route path="/almuerzos_cenas" element={<AlmYCen />} />
        <Route path="/pagar_almuerzos_cenas" element={<PagarAyC />} />
      </Routes>
    </Router>
  );
};

export default App;
