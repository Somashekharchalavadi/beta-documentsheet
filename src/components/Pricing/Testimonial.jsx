import { motion } from 'framer-motion';
import Pill from '../common/Pill';

const Testimonial = () => {
  return (
    <motion.section className="md:py-24 py-16 overflow-hidden" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div className="text-center mb-12" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
          <Pill text={'Testimonial'} />
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">Trusted by professionals and businesses worldwide</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="overflow-x-auto pb-4 scollbar-hide">
            <div className="flex gap-6 min-w-max px-4">
              {[
                {
                  name: 'Rahul Sharma',
                  role: 'Business Owner',
                  image: '/assets/testimonials/user1.jpg',
                  content: 'Document Sheet has streamlined our document management process. The waterproof feature gives us peace of mind.',
                  rating: 5,
                },
                {
                  name: 'Priya Patel',
                  role: 'HR Manager',
                  image: '/assets/testimonials/user2.jpg',
                  content: 'The professional formats save us so much time. Customer support is always responsive and helpful.',
                  rating: 5,
                },
                {
                  name: 'Amit Kumar',
                  role: 'Startup Founder',
                  image: '/assets/testimonials/user3.jpg',
                  content: 'Best investment for our document needs. The quality is exceptional and delivery is always on time.',
                  rating: 5,
                },
                {
                  name: 'Sneha Reddy',
                  role: 'Legal Consultant',
                  image: '/assets/testimonials/user4.jpg',
                  content: 'The fireproof feature is a game-changer. Essential for storing important legal documents.',
                  rating: 5,
                },
                {
                  name: 'Vikram Singh',
                  role: 'Real Estate Agent',
                  image: '/assets/testimonials/user5.jpg',
                  content: 'Using Document Sheet for all our property documents. The security features are outstanding.',
                  rating: 5,
                },
                {
                  name: 'Anita Desai',
                  role: 'Education Director',
                  image: '/assets/testimonials/user6.jpg',
                  content: 'Perfect for maintaining student records. The organization system is intuitive and efficient.',
                  rating: 5,
                },
                {
                  name: 'Mohammed Khan',
                  role: 'Financial Advisor',
                  image: '/assets/testimonials/user7.jpg',
                  content: 'Highly recommend for financial document storage. The security measures are top-notch.',
                  rating: 5,
                },
                {
                  name: 'Lisa Chen',
                  role: 'Project Manager',
                  image: '/assets/testimonials/user8.jpg',
                  content: 'The collaboration features have made document sharing seamless. Great for team projects.',
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div key={index} className="bg-white rounded-xl shadow-lg p-6 w-80 flex-shrink-0" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
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
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
    </motion.section>
  );
};

export default Testimonial;
