import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Banner from '../components/common/Banner';
import { Link } from 'react-router-dom';

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
        <div key={index} className="bg-white p-6 rounded-lg hover:border hover:shadow-xl hover:shadow-orange-100 transition-shadow">
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </motion.section>
);

const PricingSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
            Choose Your Perfect Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started with our comprehensive document management solution at an unbeatable price
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          {[
            {
              name: "Premium Plan",
              price: "₹100",
              popular: true,
              features: [
                "5 Premium Quality Sheets",
                "Waterproof & Fireproof File",
                "Professional Format",
                "24/7 Priority Support",
                "30-Day Money-back Guarantee",
                "Free Express Delivery"
              ],
              gradient: "from-orange-500 to-orange-600",
              shadowColor: "orange"
            }
          ].map((plan, index) => (
            <motion.div
              key={index}
              className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <motion.div
                className={`bg-white rounded-2xl overflow-hidden ${
                  plan.popular ? 'border-2 border-orange-500' : 'border border-gray-200'
                }`}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
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
                      <motion.li
                        key={idx}
                        className="flex items-center text-gray-700"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <motion.svg
                          className={`w-5 h-5 mr-3 text-${plan.shadowColor}-500`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          whileHover={{ scale: 1.2 }}
                        >
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

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-600">
            Need a custom plan? <Link to="/contact-us" className="text-orange-500 font-medium hover:underline">Contact us</Link>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Testimonials = () => (
  <motion.section
    className="py-16 overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-600">Trusted by professionals and businesses worldwide</p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex gap-6 min-w-max px-4">
            {[
              {
                name: "Rahul Sharma",
                role: "Business Owner",
                image: "/assets/testimonials/user1.jpg",
                content: "Document Sheet has streamlined our document management process. The waterproof feature gives us peace of mind.",
                rating: 5
              },
              {
                name: "Priya Patel",
                role: "HR Manager",
                image: "/assets/testimonials/user2.jpg",
                content: "The professional formats save us so much time. Customer support is always responsive and helpful.",
                rating: 5
              },
              {
                name: "Amit Kumar",
                role: "Startup Founder",
                image: "/assets/testimonials/user3.jpg",
                content: "Best investment for our document needs. The quality is exceptional and delivery is always on time.",
                rating: 5
              },
              {
                name: "Sneha Reddy",
                role: "Legal Consultant",
                image: "/assets/testimonials/user4.jpg",
                content: "The fireproof feature is a game-changer. Essential for storing important legal documents.",
                rating: 5
              },
              {
                name: "Vikram Singh",
                role: "Real Estate Agent",
                image: "/assets/testimonials/user5.jpg",
                content: "Using Document Sheet for all our property documents. The security features are outstanding.",
                rating: 5
              },
              {
                name: "Anita Desai",
                role: "Education Director",
                image: "/assets/testimonials/user6.jpg",
                content: "Perfect for maintaining student records. The organization system is intuitive and efficient.",
                rating: 5
              },
              {
                name: "Mohammed Khan",
                role: "Financial Advisor",
                image: "/assets/testimonials/user7.jpg",
                content: "Highly recommend for financial document storage. The security measures are top-notch.",
                rating: 5
              },
              {
                name: "Lisa Chen",
                role: "Project Manager",
                image: "/assets/testimonials/user8.jpg",
                content: "The collaboration features have made document sharing seamless. Great for team projects.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 w-80 flex-shrink-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://ui-avatars.com/api/?name=' + testimonial.name.replace(' ', '+');
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{testimonial.content}</p>
                
                <div className="flex text-orange-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `}</style>
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
    <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-green-200 p-8 animate-gradientMove">
      <h2 className="text-3xl font-bold text-center mb-8">Ready to Order?</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/assets/ready-to-order.png" alt="Contact" className="w-full max-w-md mx-auto" />
        </div>
        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-4 shadow rounded-lg">
            <span className="text-2xl">📞</span>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <a href="tel:9036664041" className="text-gray-600 hover:underline">
                9036664041
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 shadow rounded-lg">
            <span className="text-2xl">📧</span>
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:contact@documentsheet.com" className="text-gray-600 hover:underline">
                contact@documentsheet.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 shadow rounded-lg">
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
    <Banner title="Premium Document Package" text=" Get 5 High-Quality Sheets with Secure Storage Solution" />
    <Features />
    <PricingSection />
    <Testimonials />
    <Contact />
  </div>
);

export default Pricing;
