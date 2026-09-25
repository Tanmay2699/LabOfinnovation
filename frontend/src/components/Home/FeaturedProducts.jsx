import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, ArrowRight, Package } from 'lucide-react';
import NebulaWash from '../Space/NebulaWash';
import Reveal from '../UI/Reveal';
import SectionHeading from '../UI/SectionHeading';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Badge from '../UI/Badge';
import { useApp } from '../../context/AppContext';
import arduinoKitImg from '../../assets/img/products/arduino-starter-kit.svg';
import piRobotImg from '../../assets/img/products/raspberry-pi-robot-kit.svg';
import sensorPackImg from '../../assets/img/products/sensor-expansion-pack.svg';
import servoBundleImg from '../../assets/img/products/servo-motor-bundle.svg';

const FeaturedProducts = () => {
  const { addToCart } = useApp();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Arduino Starter Kit Pro',
      category: 'Robotics Kits',
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviews: 234,
      badge: 'Bestseller',
      image: arduinoKitImg,
      description: 'Complete robotics kit with Arduino Uno, sensors, motors, and comprehensive tutorials.',
    },
    {
      id: 2,
      name: 'Raspberry Pi Robot Kit',
      category: 'AI & IoT',
      price: 249.99,
      rating: 4.9,
      reviews: 189,
      badge: 'New',
      image: piRobotImg,
      description: 'Advanced robotics platform with Raspberry Pi 4, camera, and AI capabilities.',
    },
    {
      id: 3,
      name: 'Sensor Expansion Pack',
      category: 'Accessories',
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.7,
      reviews: 156,
      badge: 'Sale',
      image: sensorPackImg,
      description: '20+ sensors including ultrasonic, IR, temperature, and motion sensors.',
    },
    {
      id: 4,
      name: 'Servo Motor Bundle',
      category: 'Components',
      price: 59.99,
      rating: 4.6,
      reviews: 98,
      image: servoBundleImg,
      description: 'Professional-grade servo motors for precise robotic movements.',
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    /* The store band stays deliberately quiet: a flat raised ground and two
       nebulae on different periods. No starfield, no constellation cards —
       a catalogue that performs on every hover feels slow on the second
       visit, and the second visit is the one that converts. */
    <section className="section-padding bg-surface-raised relative overflow-hidden">
      <NebulaWash tone="indigo" size={560} top={-200} left={-170} />
      <NebulaWash tone="ion" size={470} bottom={-210} right={-140} phase={2600} />

      <div className="container-custom relative z-content">
        <SectionHeading
          title={<>Featured <span className="text-signal-300">Products</span></>}
          lead="High-quality robotics kits, components, and accessories for learners and professionals"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {products.map((product, index) => (
            <Reveal key={product.id} variant="scaleIn" index={index} className="h-full">
              <Card
                className="h-full"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product image. Kit photography is shot on a white sweep, so
                    it goes on a .product-plate, cropped square — never
                    inverted or multiplied to fit the dark ground. Drop the
                    <img> in place of the placeholder icon. No scale-on-hover:
                    the card lift is the only hover motion in the system. */}
                <div className="relative mb-5">
                  {product.badge && (
                    <div className="absolute top-3 left-3 z-[1]">
                      <Badge variant={
                        product.badge === 'Sale' ? 'danger' :
                        product.badge === 'New' ? 'success' : 'primary'
                      }>
                        {product.badge}
                      </Badge>
                    </div>
                  )}

                  <div className="product-plate aspect-square flex items-center justify-center">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        width="400"
                        height="400"
                        loading="lazy"
                        decoding="async"
                        className="no-plate w-full h-full object-contain"
                      />
                    ) : (
                      <Package className="w-10 h-10 text-signal-300" aria-hidden="true" />
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div className="eyebrow mb-2">
                  {product.category}
                </div>

                <h3 className="text-h4 font-display font-semibold text-ink mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-body-sm text-ink-body mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-signal-300 fill-signal-300'
                            : 'text-line-strong'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-body-sm text-ink-muted">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-h2 font-display font-semibold text-ink">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-body-sm text-ink-muted line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <Button
                  fullWidth
                  onClick={() => handleAddToCart(product)}
                  icon={<ShoppingCart className="w-4 h-4" />}
                >
                  Add to Cart
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal variant="rise" className="text-center mt-12">
          <Link to="/products">
            <Button size="lg">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default FeaturedProducts;
