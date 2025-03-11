import { Home, IndianRupee, MessageCircle, PlusCircleIcon, QrCode } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const footerLinks = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/scan-qr', icon: QrCode, label: 'Scan QR' },
    { path: '/create-new-sheet', icon: PlusCircleIcon, label: 'Create' },
    { path: '/pricing', icon: IndianRupee, label: 'Pricing' },
    { path: '/contact-us', icon: MessageCircle, label: 'Contact' }
  ];

  return (
    <>
      {/* Desktop Footer */}
      <footer className="bg-[#C2E9DB] rounded-lg shadow hidden md:block">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-center">
          <span className="text-sm text-black sm:text-center">
            {' '}
            2025{' '}
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

      {/* Mobile View Footer */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t flex justify-around items-center md:hidden px-2 py-1"
      >
        {footerLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-all duration-200 ${isActive(link.path)
              ? 'text-orange-500 scale-110'
              : 'text-gray-600 hover:text-orange-500'
              }`}
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              className={`mb-0.5 ${isActive(link.path) ? 'drop-shadow-md' : ''}`}
            >
              {<link.icon size={28} strokeWidth={isActive(link.path) ? 2.5 : 2} />}
            </motion.div>
            <span className={`text-[10px]  ${isActive(link.path) ? 'text-orange-400' : 'text-gray-500'
              }`}>
              {link.label}
            </span>
          </Link>
        ))}
      </motion.div>
    </>
  );
};

export default Footer;
