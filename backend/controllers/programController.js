import { validationResult } from 'express-validator';

const mockPrograms = [
  {
    id: 1,
    title: 'Junior Explorers',
    type: 'school',
    age_group: '6-8',
    duration: '6 months',
    description: 'Introduction to robotics through play-based learning',
    price: 499,
  },
  {
    id: 2,
    title: 'Advanced Robotics',
    type: 'college',
    age_group: '18-24',
    duration: '12 months',
    description: 'Comprehensive robotics and AI program',
    price: 2999,
  },
  {
    id: 3,
    title: 'Corporate Automation',
    type: 'corporate',
    age_group: 'Adults',
    duration: 'Flexible',
    description: 'Industry-focused automation training',
    price: 4999,
  },
];

export const getAllPrograms = async (req, res, next) => {
  try {
    res.status(200).json({ status: 'success', results: mockPrograms.length, data: mockPrograms });
  } catch (error) {
    next(error);
  }
};

export const getProgramById = async (req, res, next) => {
  try {
    const program = mockPrograms.find(p => p.id === parseInt(req.params.id));
    if (!program) {
      return res.status(404).json({ status: 'error', message: 'Program not found' });
    }
    res.status(200).json({ status: 'success', data: program });
  } catch (error) {
    next(error);
  }
};

export const getProgramsByType = async (req, res, next) => {
  try {
    const programs = mockPrograms.filter(p => p.type === req.params.type);
    res.status(200).json({ status: 'success', results: programs.length, data: programs });
  } catch (error) {
    next(error);
  }
};

export const enrollInProgram = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: 'error', errors: errors.array() });
    }

    const { programId, name, email, phone } = req.body;

    // TODO: persist enrollment to database when connected
    res.status(201).json({
      status: 'success',
      message: 'Enrollment successful',
      data: { programId, name, email, phone },
    });
  } catch (error) {
    next(error);
  }
};
