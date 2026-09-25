import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Client } = pg;

const setupDatabase = async () => {
  const client = new Client({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'postgres', // Connect to default database first
  });

  try {
    await client.connect();
    console.log('✅ Connected to PostgreSQL');

    // Create database if it doesn't exist
    const dbName = process.env.DB_NAME || 'lab_of_innovation';
    await client.query(`CREATE DATABASE ${dbName}`);
    console.log(`✅ Database ${dbName} created`);
    
  } catch (error) {
    if (error.code === '42P04') {
      console.log('ℹ️  Database already exists');
    } else {
      console.error('❌ Error:', error.message);
    }
  } finally {
    await client.end();
  }

  // Now connect to the new database and create tables
  const dbClient = new Client({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'lab_of_innovation',
  });

  try {
    await dbClient.connect();
    console.log('✅ Connected to application database');

    // Create tables
    await dbClient.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Users table created');

    await dbClient.query(`
      CREATE TABLE IF NOT EXISTS programs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        type VARCHAR(50) NOT NULL,
        age_group VARCHAR(50),
        duration VARCHAR(100),
        description TEXT,
        price DECIMAL(10, 2),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Programs table created');

    await dbClient.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        original_price DECIMAL(10, 2),
        rating DECIMAL(3, 2),
        reviews INTEGER DEFAULT 0,
        description TEXT,
        stock INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Products table created');

    await dbClient.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        total DECIMAL(10, 2) NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        customer_info JSONB,
        items JSONB NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Orders table created');

    await dbClient.query(`
      CREATE TABLE IF NOT EXISTS enrollments (
        id SERIAL PRIMARY KEY,
        program_id INTEGER REFERENCES programs(id),
        user_id INTEGER REFERENCES users(id),
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Enrollments table created');

    await dbClient.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'new',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Contacts table created');

    console.log('\n✨ Database setup completed successfully!');
    
  } catch (error) {
    console.error('❌ Error setting up tables:', error.message);
  } finally {
    await dbClient.end();
  }
};

setupDatabase();
