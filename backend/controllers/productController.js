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

// POST Request
// Create a Product
// Private/ADMIN
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({});

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// PUT Request
// Update a Product
// Private/ADMIN
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();

    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

export { getProductById, getProducts, deleteProduct, createProduct, updateProduct };
