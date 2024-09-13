import app from "./app";
import cors from "cors";
import express from "express";

import productsroutes from "./routes/products.routes.js";
import mesasroutes from "./routes/mesas.routes.js";
import categoriasroutes from "./routes/categorias.routes.js";
import pedidosroutes from "./routes/pedidos.routes.js";


app.listen(app.get("port"));

app.use(
  cors({
    origin: "http://localhost:5173", // Reemplaza con el origen de tu frontend
  })
);
app.use(cors());

app.use(express.json());
app.use(productsroutes);
app.use(mesasroutes);
app.use(categoriasroutes);
app.use(pedidosroutes);

console.log("server on port", app.get("port"));
