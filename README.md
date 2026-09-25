# Lab of Innovation - Enterprise Robotics Platform

A comprehensive full-stack platform for robotics education, training, and e-commerce built with React, Node.js, Express, and PostgreSQL.

## 🚀 Features

### Frontend
- **Modern React Application** with component-driven architecture
- **Framer Motion** animations for smooth, engaging UI
- **Tailwind CSS** for responsive, professional design
- **React Router** for seamless navigation
- **Context API** for state management
- **Lazy loading** and code splitting for performance

### Backend
- **Node.js + Express** RESTful API
- **PostgreSQL** database
- **JWT Authentication**
- **Input validation** with express-validator
- **Security** with Helmet and CORS
- **Modular architecture** with controllers, routes, and middleware

### Key Sections
- 🏠 **Landing Page** with hero, stats, and CTAs
- 📚 **Programs** (School, College, Corporate)
- 🛒 **E-Commerce** (Products, Cart, Checkout)
- 🔬 **Innovation Lab**
- 📞 **Contact & About**

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm or yarn

### Clone & Install

```bash
# Navigate to project directory
cd "Lab of Innovation/code"

# Install dependencies for all workspaces
npm run install:all
```

### Environment Setup

#### Backend Configuration
```bash
cd backend
cp .env.example .env
```

Edit `.env` with your database credentials:
```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=lab_of_innovation
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key
```

#### Setup Database
```bash
# Create database and tables
npm run db:setup
```

### Frontend Configuration
Create `frontend/.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
# Run both frontend and backend concurrently
npm run dev

# Or run individually:
npm run dev:frontend  # Frontend on http://localhost:3000
npm run dev:backend   # Backend on http://localhost:5000
```

### Production Build
```bash
npm run build
```

## 📁 Project Structure

```
code/
├── frontend/                 # React Frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Layout/      # Header, Footer, Layout
│   │   │   ├── Home/        # Home page sections
│   │   │   └── UI/          # UI components library
│   │   ├── pages/           # Page components
│   │   ├── context/         # React Context
│   │   ├── services/        # API services
│   │   └── App.jsx          # Main app component
│   ├── index.html
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/                  # Node.js Backend
│   ├── config/              # Configuration
│   ├── controllers/         # Route controllers
│   ├── middleware/          # Express middleware
│   ├── routes/              # API routes
│   ├── scripts/             # Utility scripts
│   └── server.js            # Entry point
│
└── package.json             # Root workspace config
```

## 🎨 Design System

### Colors
- **Primary**: Blue (Innovation, Trust)
- **Secondary**: Purple (Creativity)
- **Accent**: Orange (Energy, Action)
- **Dark**: Slate (Professional)

### Typography
- **Headings**: Poppins
- **Body**: Inter

## 🔌 API Endpoints

### Programs
- `GET /api/programs` - Get all programs
- `GET /api/programs/:id` - Get program by ID
- `GET /api/programs/type/:type` - Get programs by type
- `POST /api/programs/enroll` - Enroll in program

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/categories` - Get categories

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order by ID

### Contact
- `POST /api/contact` - Submit contact form

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Axios
- Lucide Icons

### Backend
- Node.js
- Express
- PostgreSQL
- JWT
- Bcrypt
- Helmet
- CORS

## 📝 Development Guidelines

### Code Style
- Use ES6+ features
- Component-driven architecture
- Modular and reusable code
- Consistent naming conventions

### Best Practices
- Write clean, readable code
- Add comments for complex logic
- Handle errors gracefully
- Validate all inputs
- Secure API endpoints

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy dist folder
```

### Backend (Heroku/Railway)
```bash
cd backend
# Configure production environment
# Deploy with your platform
```

## 📄 License

This project is proprietary software for Lab of Innovation.

## 👥 Team

Lab of Innovation - Robotics Excellence

## 📧 Contact

- Email: info.labofinnovation@gmail.com
- Phone: +91-8949247815
- Website: www.labofinnovation.azurewebsites.net

---

Built with ❤️ for the future of robotics education
