import { Router } from "express";
import {
  createNewCategoria,
  deleteCategoriasById,
  getCategorias,
  getCategoriasById,
  getTotalCategorias,
  updateCategoriasById,
} from "../controllers/categorias.controller";

const router = Router();

router.get("/categorias", getCategorias);

router.post("/categorias", createNewCategoria);

router.get("/categorias/count", getTotalCategorias);

router.get("/categorias/:id_categoria", getCategoriasById);

router.delete("/categorias/:id_categoria", deleteCategoriasById);

router.put("/categorias/:id_categoria", updateCategoriasById);

export default router;
