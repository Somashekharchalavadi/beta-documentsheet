import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Pill from '../common/Pill';

const PricingSection = () => {
  return (
    <motion.section className="md:py-24 py-16 px-6 bg-gradient-to-b from-gray-50 to-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Pill text={'Pricing'} />
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">Choose Your Perfect Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Get started with our comprehensive document management solution at an unbeatable price</p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          {[
            {
              name: 'Premium Plan',
              price: '₹100',
              popular: true,
              features: ['100 To 150 GSM', '5 Premium Quality Sheets', 'Waterproof & Fireproof File', 'Professional Format', '24/7 Priority Support', '30-Day Money-back Guarantee'],
              gradient: 'from-orange-500 to-orange-600',
              shadowColor: 'orange',
            },
          ].map((plan, index) => (
            <motion.div key={index} className={`relative ${plan.popular ? 'md:-mt-4' : ''}`} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
              )}

              <motion.div className={`bg-white rounded-2xl overflow-hidden ${plan.popular ? 'border-2 border-orange-500' : 'border border-gray-200'}`} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                <div className={`bg-gradient-to-r ${plan.gradient} p-8 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="ml-2 opacity-80">only</span>
                  </div>
                </div>

                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <motion.li key={idx} className="flex items-center text-gray-700" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                        <motion.svg className={`w-5 h-5 mr-3 text-${plan.shadowColor}-500`} fill="currentColor" viewBox="0 0 20 20" whileHover={{ scale: 1.2 }}>
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </motion.svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    className={`w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${plan.gradient} 
                        transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started Now
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-16 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
          <p className="text-gray-600">
            Need a custom plan?{' '}
            <Link to="/contact-us" className="text-orange-500 font-medium hover:underline">
              Contact us
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PricingSection;
