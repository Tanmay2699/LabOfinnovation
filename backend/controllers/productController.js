// Mock data — TODO: replace with DB queries when database is connected
const mockProducts = [
  {
    id: 1,
    name: 'Arduino Starter Kit Pro',
    category: 'Robotics Kits',
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 234,
    image: '🤖',
    description: 'Complete robotics kit with Arduino Uno, sensors, motors, and tutorials.',
    stock: 50,
  },
  {
    id: 2,
    name: 'Raspberry Pi Robot Kit',
    category: 'AI & IoT',
    price: 249.99,
    rating: 4.9,
    reviews: 189,
    image: '🔧',
    description: 'Advanced robotics platform with Raspberry Pi 4, camera, and AI capabilities.',
    stock: 30,
  },
  {
    id: 3,
    name: 'Sensor Expansion Pack',
    category: 'Accessories',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 156,
    image: '📡',
    description: '20+ sensors including ultrasonic, IR, temperature, and motion sensors.',
    stock: 100,
  },
  {
    id: 4,
    name: 'Servo Motor Bundle',
    category: 'Components',
    price: 59.99,
    rating: 4.6,
    reviews: 98,
    image: '⚙️',
    description: 'Professional-grade servo motors for precise robotic movements.',
    stock: 75,
  },
];

export const getAllProducts = async (req, res, next) => {
  try {
    const { category, search, minPrice, maxPrice } = req.query;
    
    let products = [...mockProducts];
    
    // Filter by category
    if (category) {
      products = products.filter(p => p.category === category);
    }
    
    // Filter by search
    if (search) {
      products = products.filter(p => 
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Filter by price range
    if (minPrice) {
      products = products.filter(p => p.price >= parseFloat(minPrice));
    }
    if (maxPrice) {
      products = products.filter(p => p.price <= parseFloat(maxPrice));
    }
    
    res.status(200).json({
      status: 'success',
      results: products.length,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = mockProducts.find(p => p.id === parseInt(id));
    
    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: 'Product not found',
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export const getProductCategories = async (req, res, next) => {
  try {
    const categories = [...new Set(mockProducts.map(p => p.category))];
    
    res.status(200).json({
      status: 'success',
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};
