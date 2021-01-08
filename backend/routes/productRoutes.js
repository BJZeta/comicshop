import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
const router = express.Router();

// GET Request 
// Fetch All Products 
// Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products)
  })
);

// GET Request 
// Fetch Single Product 
// Public
router.get("/:id", asyncHandler( async (req, res) => {
  const product = await Product.findById(req.params.id)

  if(product) {
    res.json(product);
  } else {
      res.status(404)
      throw new Error('Product not Found')
  }

  res.json(product);
}));

export default router;
