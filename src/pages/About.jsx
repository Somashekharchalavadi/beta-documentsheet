import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import AboutCard from '../components/About/AboutCard';
import AboutTabs from '../components/About/AboutTabs';
import CTA from '../components/common/CTA';
import HeroAbout from '../components/About/HeroAbout';
import Banner from '../components/common/Banner';

const Mission = () => (
  <motion.section
    className="py-16 bg-gradient-to-r from-orange-50 to-orange-100"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">How We Work</h2>
          <p className="text-gray-600 mb-6">
            At Document Sheet, we're committed to revolutionizing document management through innovative digital solutions. Our mission is to make document handling seamless, secure, and accessible to everyone.
          </p>
          <div className="space-y-4">
            {[
              'Simplify document management for businesses and individuals',
              'Ensure maximum security and privacy of your data',
              'Provide easy access to documents anytime, anywhere',
              'Reduce paper waste and promote sustainability'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="aspect-square rounded-full bg-orange-100 absolute -top-4 -right-4 w-24 h-24"></div>
          <div className="aspect-square rounded-full bg-orange-200 absolute -bottom-4 -left-4 w-16 h-16"></div>
          <img
            src="/assets/mission.png"
            alt="Our Mission"
            className="relative z-10 w-full hover:animate-pulse cursor-crosshair h-auto rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  </motion.section>
);

const Stats = () => (
  <motion.section
    className="py-16"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { number: '10K+', label: 'Active Users' },
          { number: '50K+', label: 'Documents Created' },
          { number: '99.9%', label: 'Uptime' },
          { number: '24/7', label: 'Support' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center p-6 rounded-xl bg-white hover:shadow hover:shadow-green-200 border border-orange-100"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-4xl font-bold text-orange-500 mb-2">{stat.number}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);


const Values = () => (
  <motion.section
    className="py-16"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: '🎯',
            title: 'Innovation',
            description: 'Constantly pushing boundaries to create better solutions'
          },
          {
            icon: '🤝',
            title: 'Trust',
            description: 'Building lasting relationships through reliability and transparency'
          },
          {
            icon: '⚡',
            title: 'Excellence',
            description: 'Committed to delivering the highest quality in everything we do'
          }
        ].map((value, index) => (
          <motion.div
            key={index}
            className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="text-4xl mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

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

      <Banner title={'About Us'} text={'See How We are Helping People To Manage Sheets'}  />
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
