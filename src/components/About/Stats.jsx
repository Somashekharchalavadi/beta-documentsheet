import { motion } from 'framer-motion';

const Stats = () => (
  <motion.section className="py-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { number: '10K+', label: 'Active Users' },
          { number: '50K+', label: 'Documents Created' },
          { number: '99.9%', label: 'Uptime' },
          { number: '24/7', label: 'Support' },
        ].map((stat, index) => (
          <motion.div key={index} className="text-center p-6 rounded-xl bg-white hover:shadow hover:shadow-green-200 border border-orange-100" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">{stat.number}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Stats;
