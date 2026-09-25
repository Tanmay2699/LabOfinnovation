import express from 'express';
import { body } from 'express-validator';
import {
  createOrder,
  getOrderById,
  getMyOrders,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post(
  '/',
  [
    body('items').isArray().withMessage('Items must be an array'),
    body('total').isNumeric().withMessage('Total must be a number'),
    body('customerInfo').notEmpty().withMessage('Customer info is required'),
  ],
  createOrder
);

router.get('/:id', getOrderById);
router.get('/my-orders', protect, getMyOrders);

export default router;
