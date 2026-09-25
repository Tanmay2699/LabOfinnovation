import HeroVideo from '../components/Home/HeroVideo';
import FrameScroll from '../components/Home/FrameScroll';
import HeroSection from '../components/Home/HeroSection';
import StatsSection from '../components/Home/StatsSection';
import FeaturedPrograms from '../components/Home/FeaturedPrograms';
import ParallaxSection from '../components/Home/ParallaxSection';
import PartnersSection from '../components/Home/PartnersSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import CTASection from '../components/Home/CTASection';

/**
 * Home.
 *
 * What used to live here: a fixed layer of eight lucide icons on 20–25s
 * infinite rotate loops, two parallax groups, and a circuit SVG redrawing
 * its own path every 3 seconds. All of it is gone. Atmosphere is now a
 * single CSS starfield that drifts once every four minutes, and each
 * section owns its own ground — see `.band-atmospheric` in index.css.
 *
 * Section rhythm down the page: film (video) -> frame scrub -> atmospheric (hero) -> raised (stats) ->
 * inset (parallax) -> base (programs) -> raised (testimonials) -> base
 * (partners) -> atmospheric (CTA). Never two atmospheric bands in a row.
 */
const Home = () => {
  return (
    <div className="relative">
      <HeroVideo />
      <FrameScroll />
      <HeroSection />
      <StatsSection />
      <ParallaxSection />
      <FeaturedPrograms />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </div>
  );
};

export default Home;
