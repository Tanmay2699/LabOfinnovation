import express from 'express';
import { body } from 'express-validator';
import {
  getAllPrograms,
  getProgramById,
  getProgramsByType,
  enrollInProgram,
} from '../controllers/programController.js';

const router = express.Router();

router.get('/', getAllPrograms);
router.get('/:id', getProgramById);
router.get('/type/:type', getProgramsByType);

router.post(
  '/enroll',
  [
    body('programId').notEmpty().withMessage('Program ID is required'),
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone').optional(),
  ],
  enrollInProgram
);

export default router;
