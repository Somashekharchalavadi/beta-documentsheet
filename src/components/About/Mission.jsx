import { motion } from 'framer-motion';
import Pill from '../common/Pill';

const Mission = () => (
  <motion.section className="md:py-24 py-16 bg-gradient-to-r from-orange-50 to-orange-100" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Pill text={'Mission'} />
          <h2 className="text-3xl font-bold my-6">How We Work</h2>
          <p className="text-gray-600 mb-6">At Document Sheet, we re committed to revolutionizing document management through innovative digital solutions. Our mission is to make document handling seamless, secure, and accessible to everyone.</p>
          <div className="space-y-4">
            {['Simplify document management for businesses and individuals', 'Ensure maximum security and privacy of your data', 'Provide easy access to documents anytime, anywhere', 'Reduce paper waste and promote sustainability', 'The Support is backed by KARNATAKA PARISHAR SAMRAKSHAN SAMITI'].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div className="relative" initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <div className="aspect-square rounded-full bg-orange-100 absolute -top-4 -right-4 w-24 h-24"></div>
          <div className="aspect-square rounded-full bg-orange-200 absolute -bottom-4 -left-4 w-16 h-16"></div>
          <img src="/logo.png" alt="Our Mission" className="relative z-10 w-full hover:animate-pulse cursor-crosshair h-auto  rounded-full" />
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default Mission;
