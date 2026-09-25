import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const isProd = process.env.NODE_ENV === 'production';

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME || 'lab_of_innovation',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
  ssl: isProd ? { rejectUnauthorized: false } : false,
});

pool.on('error', (err) => {
  if (!isProd) console.error('Database pool error:', err.message);
});

export const query = (text, params) => pool.query(text, params);

export default pool;
