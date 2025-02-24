import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import CardGrid from '../components/scan-qr/CardGrid';
import ScanHero from '../components/scan-qr/ScanHero';
import ScanTabs from '../components/scan-qr/ScanTab';
import Banner from '../components/common/Banner';

const HowItWorks = () => (
  <motion.section
    className="py-16 bg-gradient-to-r from-orange-50 to-orange-100"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            step: '01',
            title: 'Scan QR Code',
            description: 'Use your device camera to scan the QR code on your document sheet'
          },
          {
            step: '02',
            title: 'Enter Serial Number',
            description: 'Alternatively, enter the serial number printed on your document'
          },
          {
            step: '03',
            title: 'View Details',
            description: 'Get instant access to your document details and verification status'
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg relative"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
              {item.step}
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const Features = () => (
  <motion.section
    className="py-16"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            icon: '🔍',
            title: 'Quick Scan',
            description: 'Instant QR code scanning with real-time verification'
          },
          {
            icon: '🔢',
            title: 'Serial Search',
            description: 'Easy lookup using document serial numbers'
          },
          {
            icon: '📱',
            title: 'Mobile Friendly',
            description: 'Works seamlessly on all mobile devices'
          },
          {
            icon: '🔒',
            title: 'Secure Access',
            description: 'Safe and protected document verification'
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="text-center p-6 rounded-lg hover:bg-orange-50 transition-colors"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const FAQ = () => (
  <motion.section
    className="py-16 bg-gray-50"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {[
          {
            question: 'How do I scan a QR code?',
            answer: 'Simply click on the QR Code Scanner tab and allow camera access. Point your device camera at the QR code on your document to scan.'
          },
          {
            question: 'What if my QR code is not scanning?',
            answer: 'You can use the Serial Number search option instead. Enter the serial number printed on your document to retrieve the details.'
          },
          {
            question: 'Is my document information secure?',
            answer: 'Yes, we use advanced security measures to protect all document information. Your data is encrypted and safely stored.'
          }
        ].map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const ScanQr = () => {
  return (
    <>
      <Helmet>
        <title>Scan QR Code - Document Sheet | Quick Document Access</title>
        <meta
          name="description"
          content="Access your documents instantly by scanning QR codes. Our secure QR code system provides quick and easy access to your important documents anytime, anywhere."
        />
        <meta
          name="keywords"
          content="QR code scanner, document access, secure documents, quick document retrieval, QR code documents, digital document access, document management"
        />
        <meta property="og:title" content="Scan QR Code - Quick Document Access with Document Sheet" />
        <meta
          property="og:description"
          content="Access your documents instantly with our QR code scanning feature. Secure, quick, and convenient document retrieval system."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://documentsheet.com/scan-qr" />
      </Helmet>

      <Banner title={'Scan QR'} text={'Access Your Documents Instantly'} />
      <ScanHero />
      <HowItWorks />
      <Features />
      <ScanTabs />
      <CardGrid />
      <FAQ />
    </>
  );
};

export default ScanQr;
