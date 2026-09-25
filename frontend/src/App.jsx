import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout/Layout';

import Home from './pages/Home';

// Home ships in the main bundle; every other page is its own chunk, loaded on
// first visit (the page loader covers the fetch). Once the browser is idle the
// rest are prefetched, so later navigation never waits on the network.
const pageLoaders = {
  SchoolPrograms: () => import('./pages/Programs/SchoolPrograms'),
  CollegePrograms: () => import('./pages/Programs/CollegePrograms'),
  CorporateTraining: () => import('./pages/Programs/CorporateTraining'),
  Products: () => import('./pages/Products/Products'),
  ProductDetail: () => import('./pages/Products/ProductDetail'),
  Cart: () => import('./pages/Products/Cart'),
  Checkout: () => import('./pages/Products/Checkout'),
  InnovationLab: () => import('./pages/InnovationLab'),
  About: () => import('./pages/About'),
  Contact: () => import('./pages/Contact'),
  Workshops: () => import('./pages/Workshops'),
  HandsOnLearning: () => import('./pages/Features/HandsOnLearning'),
  ExpertInstructors: () => import('./pages/Features/ExpertInstructors'),
  Certifications: () => import('./pages/Features/Certifications'),
  OngoingSupport: () => import('./pages/Features/OngoingSupport'),
  ScheduleConsultation: () => import('./pages/Features/ScheduleConsultation'),
};
const SchoolPrograms = lazy(pageLoaders.SchoolPrograms);
const CollegePrograms = lazy(pageLoaders.CollegePrograms);
const CorporateTraining = lazy(pageLoaders.CorporateTraining);
const Products = lazy(pageLoaders.Products);
const ProductDetail = lazy(pageLoaders.ProductDetail);
const Cart = lazy(pageLoaders.Cart);
const Checkout = lazy(pageLoaders.Checkout);
const InnovationLab = lazy(pageLoaders.InnovationLab);
const About = lazy(pageLoaders.About);
const Contact = lazy(pageLoaders.Contact);
const Workshops = lazy(pageLoaders.Workshops);
const HandsOnLearning = lazy(pageLoaders.HandsOnLearning);
const ExpertInstructors = lazy(pageLoaders.ExpertInstructors);
const Certifications = lazy(pageLoaders.Certifications);
const OngoingSupport = lazy(pageLoaders.OngoingSupport);
const ScheduleConsultation = lazy(pageLoaders.ScheduleConsultation);

const prefetchPages = () => Object.values(pageLoaders).forEach((load) => load());
if (typeof window !== 'undefined') {
  const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 2000));
  if (document.readyState === 'complete') idle(prefetchPages);
  else window.addEventListener('load', () => idle(prefetchPages), { once: true });
}

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Programs */}
            <Route path="/programs/school" element={<SchoolPrograms />} />
            <Route path="/programs/college" element={<CollegePrograms />} />
            <Route path="/programs/corporate" element={<CorporateTraining />} />
            
            {/* Products */}
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            
            {/* Features */}
            <Route path="/features/hands-on-learning" element={<HandsOnLearning />} />
            <Route path="/features/expert-instructors" element={<ExpertInstructors />} />
            <Route path="/features/certifications" element={<Certifications />} />
            <Route path="/features/ongoing-support" element={<OngoingSupport />} />
            <Route path="/features/schedule-consultation" element={<ScheduleConsultation />} />
            
            {/* Other Pages */}
            <Route path="/innovation-lab" element={<InnovationLab />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/workshops" element={<Workshops />} />
          </Routes>
          </Suspense>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
