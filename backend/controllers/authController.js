import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const generateToken = (userId, email, role) => {
  return jwt.sign(
    { userId, email, role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || '7d' }
  );
};

export const register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: 'error', errors: errors.array() });
    }

    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    // TODO: replace with real DB insert when database is connected
    const userId = Date.now();
    const token = generateToken(userId, email, 'user');

    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      data: { userId, name, email, token },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: 'error', errors: errors.array() });
    }

    const { email } = req.body;

    // TODO: replace with real DB lookup when database is connected
    const userId = 1;
    const token = generateToken(userId, email, 'user');

    res.status(200).json({
      status: 'success',
      message: 'Login successful',
      data: { userId, email, token },
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.status(200).json({ status: 'success', message: 'Logout successful' });
  } catch (error) {
    next(error);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    res.status(200).json({ status: 'success', data: req.user });
  } catch (error) {
    next(error);
  }
};
