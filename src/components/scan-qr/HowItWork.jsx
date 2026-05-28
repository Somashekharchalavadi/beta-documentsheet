import { motion } from 'framer-motion';
import Pill from '../common/Pill';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Generate QR Code',
      description: 'Create a unique QR code for your document with our simple interface.',
      icon: '📱',
    },
    {
      title: 'Share QR Code',
      description: 'Share the QR code with your team or clients securely.',
      icon: '🔄',
    },
    {
      title: 'Scan & Access',
      description: 'Instantly access your documents by scanning the QR code.',
      icon: '📄',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <Pill text={'How It Works'} />
          <h2 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">Simple Steps to Get Started</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
