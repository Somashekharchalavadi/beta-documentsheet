import { Helmet } from 'react-helmet';
import AboutCard from '../components/About/AboutCard';
import AboutTabs from '../components/About/AboutTabs';
import CTA from '../components/common/CTA';
import HeroAbout from '../components/About/HeroAbout';
import Banner from '../components/common/Banner';
import Mission from '../components/About/Mission';
import Stats from '../components/About/Stats';
import Values from '../components/About/Values';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Document Sheet | Your Digital Document Manager</title>
        <meta
          name="description"
          content="Learn about Document Sheet's mission, values, and commitment to revolutionizing document management. Discover how we're making document handling easier and more secure."
        />
        <meta
          name="keywords"
          content="document management, digital documents, secure storage, QR code documents, about document sheet, document solutions, paperless office"
        />
        <meta property="og:title" content="About Document Sheet - Your Digital Document Manager" />
        <meta
          property="og:description"
          content="Learn about Document Sheet's mission and how we're revolutionizing document management with secure, easy-to-use solutions."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://documentsheet.com/about" />
      </Helmet>

      <Banner title={'About Us'} text={'See How We are Helping People To Manage Sheets'} />
      <HeroAbout />
      <Mission />
      <Stats />
      <Values />
      <AboutCard />
      <AboutTabs />
      <CTA
        title="Create Your New Document Sheet with Ease"
        text=" Start your journey to effortless documentation. Create your sheets in a few clicks, and access them securely anytime, anywhere."
        btnText="Create Your Sheet"
      />
    </>
  );
};

export default About;
