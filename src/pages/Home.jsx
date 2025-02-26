import { Helmet } from 'react-helmet';
import FiveCards from '../components/home/FiveCards';
import Hero from '../components/home/Hero';
import Cards from '../components/home/Cards';
import Scan from '../components/home/Scan';
import Empowering from '../components/home/Empowering';
import Testimonial from '../components/common/Testimonial';
import FAQ from '../components/home/FAQ';
import Pricing from '../components/home/Pricing';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Document Sheet - Your Digital Document Manager | Secure Document Solutions</title>
        <meta
          name="description"
          content="Transform your document management with Document Sheet. Create, store, and access your documents securely with QR code technology. Perfect for businesses and individuals."
        />
        <meta
          name="keywords"
          content="document management, digital documents, QR code documents, secure storage, document organization, paperless solutions, document sharing"
        />
        <meta property="og:title" content="Document Sheet - Your Digital Document Manager" />
        <meta
          property="og:description"
          content="Revolutionize your document management with Document Sheet. Secure, efficient, and easy-to-use digital document solutions with QR code access."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://documentsheet.com" />
      </Helmet>

      <main className="overflow-hidden">
        <Hero />
        <Cards />
        <FiveCards />
        <Scan />
        <Empowering />
        <Pricing />
        <Testimonial />
        <FAQ />
      </main>
    </>
  );
};

export default Home;
