import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileX2, Home, PlusCircle, ScanBarcode, Phone } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FileX2 className="mx-auto h-24 w-24 text-[#219B9D]" />
          <h2 className="mt-6 text-4xl font-extrabold text-gray-900">Page Not Found</h2>
          <p className="mt-2 text-sm text-gray-600">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 space-y-4"
        >
          <p className="text-sm font-medium text-gray-700">Try these useful links instead:</p>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Link
              to="/"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-[#219B9D] hover:bg-[#219B9D]/90 transition-colors duration-200"
            >
              <Home className="w-4 h-4 mr-2" />
              Home Page
            </Link>

            <Link
              to="/create-new-sheet"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-[#219B9D] hover:bg-[#219B9D]/90 transition-colors duration-200"
            >
              <PlusCircle className="w-4 h-4 mr-2" />
              Create Sheet
            </Link>

            <Link
              to="/scan-qr"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-[#219B9D] hover:bg-[#219B9D]/90 transition-colors duration-200"
            >
              <ScanBarcode className="w-4 h-4 mr-2" />
              Scan QR
            </Link>

            <Link
              to="/contact-us"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-[#219B9D] hover:bg-[#219B9D]/90 transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 text-sm text-gray-500"
        >
          <p>
            If you believe this is a mistake, please{' '}
            <Link to="/contact-us" className="text-[#219B9D] hover:text-[#219B9D]/80 font-medium">
              contact our support team
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;