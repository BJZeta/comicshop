import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(getProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)
  .post(protect, admin, createProduct);

export default router;
