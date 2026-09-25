import { validationResult } from 'express-validator';

export const submitContact = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        errors: errors.array(),
      });
    }

    const { name, email, subject } = req.body;

    res.status(201).json({
      status: 'success',
      message: 'Thank you for contacting us. We will get back to you soon.',
      data: { name, email, subject },
    });
  } catch (error) {
    next(error);
  }
};
