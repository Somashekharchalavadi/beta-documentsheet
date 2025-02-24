import { Home, PlusCircle, ScanBarcode, Phone, DollarSign, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const pathname = window.location.pathname;

  return (
    <>
      {/* Desktop Footer */}
      <footer className="bg-[#C2E9DB] rounded-lg shadow hidden md:block">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-center">
          <span className="text-sm text-black sm:text-center">
            {' '}
            2024{' '}
            <Link to="/" className="hover:underline">
              Document Sheet
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-regular sm:mt-0 justify-evenly">
            <li>
              <Link to="/privacy-policy" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-condition" className="hover:underline me-4 md:me-6">
                Terms & Condition
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="hover:underline me-4 md:me-6">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </footer>

      {/* Mobile Footer Navigation */}
      <motion.footer
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="fixed -bottom-1 left-0 right-0 bg-gray-100 text-white flex justify-around items-center px-4 py-2 md:hidden shadow-3xl rounded-t-2xl"
      >
        {/* Home */}
        <motion.div className="relative">
          <Link
            to="/"
            className={`flex flex-col items-center text-xs ${
              pathname === '/' ? 'text-orange-500' : 'text-gray-500'
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 h-6 mb-1"
            >
              <Home className="w-full h-full" />
            </motion.div>
            <span>Home</span>
          </Link>
        </motion.div>

        {/* Scan */}
        <motion.div className="relative">
          <Link
            to="/scan-qr"
            className={`flex flex-col items-center text-xs ${
              pathname === '/scan-qr' ? 'text-orange-500' : 'text-gray-500'
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 h-6 mb-1"
            >
              <ScanBarcode className="w-full h-full" />
            </motion.div>
            <span>Scan</span>
          </Link>
        </motion.div>

        {/* Create New Sheet - Elevated */}
        <motion.div className="relative -mt-5">
          <Link
            to="/create-new-sheet"
            className={`flex flex-col items-center text-xs ${
              pathname === '/create-new-sheet' ? 'text-orange-500' : 'text-gray-500'
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-[#219B9D] flex items-center justify-center shadow-lg mb-1"
            >
              <PlusCircle className="w-8 h-8 text-white" />
            </motion.div>
            <span>Create</span>
          </Link>
        </motion.div>

        {/* Pricing */}
        <motion.div className="relative">
          <Link
            to="/pricing"
            className={`flex flex-col items-center text-xs ${
              pathname === '/pricing' ? 'text-orange-500' : 'text-gray-500'
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 h-6 mb-1"
            >
              <IndianRupee className="w-full h-full" />
            </motion.div>
            <span>Pricing</span>
          </Link>
        </motion.div>

        {/* Contact */}
        <motion.div className="relative">
          <Link
            to="/contact-us"
            className={`flex flex-col items-center text-xs ${
              pathname === '/contact' ? 'text-orange-500' : 'text-gray-500'
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 h-6 mb-1"
            >
              <Phone className="w-full h-full" />
            </motion.div>
            <span>Contact</span>
          </Link>
        </motion.div>
      </motion.footer>
    </>
  );
};

export default Footer;
