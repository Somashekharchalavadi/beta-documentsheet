import React from 'react';
import { motion } from 'framer-motion';

const Header = () => (
  <motion.header
    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 px-6 text-center relative overflow-hidden"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
    <h1 className="md:text-4xl text-2xl font-bold p-1 relative z-10">
      Premium Document Package
    </h1>
    <p className="mt-4 text-xl max-w-2xl mx-auto relative z-10">
      Get 5 High-Quality Sheets with Secure Storage Solution
    </p>
  </motion.header>
);

const Features = () => (
  <motion.section
    className="max-w-7xl mx-auto py-16 px-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Package?</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: "🛡️",
          title: "Premium Quality",
          description: "Made with high-grade materials for lasting durability"
        },
        {
          icon: "🔒",
          title: "Secure Storage",
          description: "Waterproof and fireproof file protection included"
        },
        {
          icon: "✨",
          title: "Professional Format",
          description: "Designed to meet industry standards and requirements"
        }
      ].map((feature, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </motion.section>
);

const PricingSection = () => (
  <motion.section
    className="bg-gray-50 py-16 px-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-orange-500 text-white p-8 text-center">
          <h3 className="text-2xl font-semibold">Complete Package</h3>
          <div className="mt-4">
            <span className="text-5xl font-bold">₹100</span>
            <span className="text-lg ml-2">only</span>
          </div>
        </div>
        <div className="p-8">
          <ul className="space-y-4">
            {[
              "5 Premium Quality Sheets",
              "Waterproof & Fireproof File",
              "Professional Format",
              "24/7 Customer Support",
              "Money-back Guarantee",
              "Free Delivery"
            ].map((benefit, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
          <button className="w-full mt-8 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </div>
  </motion.section>
);

const Testimonials = () => (
  <motion.section
    className="max-w-7xl mx-auto py-16 px-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          name: "Rajesh Kumar",
          role: "Business Owner",
          content: "The quality of the documents exceeded my expectations. The waterproof file is a great addition!"
        },
        {
          name: "Priya Sharma",
          role: "Professional",
          content: "Excellent customer service and quick delivery. The document quality is top-notch."
        }
      ].map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-orange-500 text-xl font-bold">
                {testimonial.name.charAt(0)}
              </span>
            </div>
            <div className="ml-4">
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-gray-700">{testimonial.content}</p>
        </div>
      ))}
    </div>
  </motion.section>
);

const Contact = () => (
  <motion.section
    className="max-w-7xl mx-auto py-16 px-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Ready to Order?</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/contact-illustration.svg" alt="Contact" className="w-full max-w-md mx-auto" />
        </div>
        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <span className="text-2xl">📞</span>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">9036664041</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <span className="text-2xl">📧</span>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">contact@documentsheet.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <span className="text-2xl">💬</span>
            <div>
              <h3 className="font-semibold">WhatsApp</h3>
              <a
                href="https://wa.me/9036664041"
                className="text-orange-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

const Pricing = () => (
  <div>
    <Header />
    <Features />
    <PricingSection />
    <Testimonials />
    <Contact />
  </div>
);

export default Pricing;
