import express from "express";
import { addOrderItems, getOrById, updateOrderToPaid } from '../controllers/orderController.js'
import {protect} from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrById);
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router;
