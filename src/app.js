import express from "express";
import config from "./config";

const app = express();

import productsRoutes from "./routes/products.routes";
import mesasroutes from "./routes/mesas.routes.js";
import categoriasroutes from "./routes/categorias.routes.js";
import pedidosroutes from "./routes/pedidos.routes.js";

// settings para configurar el puerto
app.set("port", config.port);

// llamar a los middlewars desde express para que permita la carga de datos del tipo json en los archivos.http
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(productsRoutes);
app.use(mesasroutes);
app.use(categoriasroutes);
app.use(pedidosroutes);

export default app;
