import { Router } from "express";

import {
  createNewProduct,
  deleteProduct,
  deleteProductById,
  getProductById,
  getProducts,
  getTotalProducts,
  updateProductById,
} from "../controllers/products.controller";

const router = Router();

router.get("/products", getProducts);

router.post("/products", createNewProduct);

router.get("/products/count", getTotalProducts);

router.get("/products/:id_producto", getProductById);

router.delete("/products/:id_producto", deleteProductById);

router.put("/products/:id_producto", updateProductById);

export default router;
