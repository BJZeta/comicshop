import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// GET Request
// Fetch All Products
// Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

// GET Request
// Fetch Single Product
// Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }

  res.json(product);
});

// DELETE Request
// Delete a product
// Private/ADMIN
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

export { getProductById, getProducts, deleteProduct };
