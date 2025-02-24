import TabComponent from '../components/contact/TabComponent';
import ContactPageMessage from '../components/contact/ContactPageMessage';
import Banner from '../components/common/Banner';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const FAQ = () => (
  <motion.section
    className="py-12 bg-gray-50"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          {
            question: 'What are your support hours?',
            answer: 'Our support team is available Monday to Friday, 9:00 AM to 6:00 PM IST.'
          },
          {
            question: 'How quickly do you respond to inquiries?',
            answer: 'We aim to respond to all inquiries within 24 hours during business days.'
          },
          {
            question: 'Do you offer emergency support?',
            answer: 'Yes, we provide priority support for urgent issues related to document access or security concerns.'
          }
        ].map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Document Sheet | Get Support & Assistance</title>
        <meta
          name="description"
          content="Get in touch with Document Sheet's support team. We're here to help you with any questions about our document management solutions and services."
        />
        <meta
          name="keywords"
          content="contact document sheet, customer support, help desk, document management support, technical assistance, contact us"
        />
        <meta property="og:title" content="Contact Document Sheet - Get Support & Assistance" />
        <meta
          property="og:description"
          content="Need help with Document Sheet? Our support team is ready to assist you with any questions about our document management solutions."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://documentsheet.com/contact" />
      </Helmet>

      <Banner title={'Contact Us'} text={'Get in Touch with Our Team'} />
      
      <motion.div 
        className="py-12 p-1 space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <TabComponent />
          </motion.div>
        </div>
        
        <motion.h2 
          className="md:text-2xl text-lg text-center font-semibold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Got a query? Let us know, and we'll respond promptly!
        </motion.h2>
        
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <ContactPageMessage />
          </motion.div>
        </div>
      </motion.div>
      <FAQ />
    </>
  );
};

export default Contact;
