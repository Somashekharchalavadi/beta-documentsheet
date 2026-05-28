import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileX2, Home, PlusCircle, ScanBarcode, Phone } from 'lucide-react';

const NotFoundPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 md:py-16 md:px-8  p-2 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.1, scale: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-orange-200 rounded-full blur-3xl" />
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.1, scale: 1 }} transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }} className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-200 rounded-full blur-3xl" />
      </div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-md w-full md:space-y-4 space-y-2 text-center relative">
        {/* 404 SVG Animation */}
        <motion.div variants={itemVariants} className="relative mx-auto w-64 h-64 md:mb-8 mb-2">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.path d="M20,50 C20,34 34,20 50,20 C66,20 80,34 80,50 C80,66 66,80 50,80 C34,80 20,66 20,50" fill="none" stroke="#219B9D" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: 'easeInOut' }} />
            <motion.circle cx="50" cy="50" r="30" fill="none" stroke="#F97316" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 1 }} />
            <motion.text x="50" y="55" textAnchor="middle" fontSize="16" fill="#374151" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }}>
              404
            </motion.text>
          </svg>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <FileX2 className="w-20 h-20 text-[#219B9D] drop-shadow-lg" />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="md:space-y-4 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Oops! Page Not Found</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-sm mx-auto">The page you&apos;re looking for seems to have wandered off. Don&apos;t worry, you can find your way back using these helpful links.</p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 md:mt-8 mt-2">
          {[
            { to: '/', icon: Home, text: 'Back Home', color: 'bg-[#219B9D]' },
            {
              to: '/create-new-sheet',
              icon: PlusCircle,
              text: 'Create Sheet',
              color: 'bg-orange-500',
            },
            { to: '/scan-qr', icon: ScanBarcode, text: 'Scan QR', color: 'bg-blue-500' },
            { to: '/contact-us', icon: Phone, text: 'Contact Us', color: 'bg-purple-500' },
          ].map((link, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
              <div className={`absolute inset-0 ${link.color} rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity`} />
              <Link to={link.to} className={`relative flex items-center justify-center gap-2 px-4 py-3 ${link.color} text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200`}>
                <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 15 }} transition={{ type: 'spring', stiffness: 400 }}>
                  <link.icon className="w-5 h-5" />
                </motion.div>
                <span className="font-medium">{link.text}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="md:mt-8 mt-2 text-sm sm:text-base text-gray-500">
          <p>
            If you believe this is a mistake, please{' '}
            <Link to="/contact-us" className="text-[#219B9D] hover:text-[#219B9D]/80 font-medium hover:underline transition-all duration-200">
              contact our support team
            </Link>
            .
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
