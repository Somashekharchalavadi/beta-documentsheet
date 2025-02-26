import Banner from '../components/common/Banner';
import Features from '../components/Pricing/Features';
import PricingSection from '../components/Pricing/PricingSection';
import Testimonial from '../components/Pricing/Testimonial';
import Contact from '../components/Pricing/Contact';

const Pricing = () => (
  <div>
    <Banner
      title="Premium Document Package"
      text=" Get 5 High-Quality Sheets with Secure Storage Solution"
    />
    <Features />
    <PricingSection />
    <Testimonial />
    <Contact />
  </div>
);

export default Pricing;
