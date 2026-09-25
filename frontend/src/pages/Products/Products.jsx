import PageSky from '../../components/Space/PageSky';
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import AnimatedSection from '../../components/UI/AnimatedSection';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import FeaturedProducts from '../../components/Home/FeaturedProducts';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="pt-20">
      <section className="section-padding band-atmospheric">
        <PageSky />
        <div className="container-custom relative z-10">
          <AnimatedSection animation="fadeUp" className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-semibold text-ink mb-6">
 Robotics <span className="text-gradient">Products</span>
            </h1>
            <p className="text-xl text-ink-secondary mb-8">
              High-quality kits, components, and accessories for learners and professionals
            </p>
            
            {/* Search Bar */}
            <div className="flex gap-4 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-ink-tertiary w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full min-h-[44px] pl-12 pr-4 py-3 rounded-control border border-line-strong bg-surface-inset text-sm text-ink shadow-well transition-[border-color] duration-quick ease-standard hover:border-signal-500 focus:outline-none focus:border-signal-300"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-5 h-5" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FeaturedProducts />
    </div>
  );
};

export default Products;
