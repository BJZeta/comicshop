import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// POST Request
// Create New Order
// Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(404);
    throw new Error("No Order");
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      paymentMethod,
      itemsPrice,
      taxPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// GET Request
// Get Order By ID
// Private
const getOrById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});

// PUT Request
// Update Order to Paid
// Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address
    }

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});

export { addOrderItems, getOrById, updateOrderToPaid };
