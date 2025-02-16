import { Home, PlusCircleIcon, ScanBarcodeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const pathname = window.location.pathname;
  return (
    <>
      <footer className="bg-[#C2E9DB] rounded-lg shadow hidden md:block">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-center">
          <span className="text-sm text-black sm:text-center">
            © 2024{' '}
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
          </ul>
        </div>
      </footer>

      <div className="flex justify-center items-center">
        <footer className="w-full md:hidden flex justify-around items-center bg-[#C2E9DB] z-[20] fixed bottom-1 p-1 shadow-md rounded-t-3xl">
          <Link to={'/'} className={`flex flex-col justify-center items-center ${pathname === "/" ? 'text-orange-500' : 'text-black'}`}>
            <Home size={25} />
            <small className='text-xs'> Home </small>
          </Link>
          <Link
            to={'/create-new-sheet'}
            className={`flex flex-col justify-center items-center ${pathname === "/create-new-sheet" ? 'text-orange-500' : 'text-black'}`}
          >
            <PlusCircleIcon size={25} />
            <small className='text-xs'>Create</small>
          </Link>
          <Link to={'/scan-qr'} className={`flex flex-col justify-center items-center ${pathname === "/scan-qr" ? 'text-orange-500' : 'text-black'}`}>
            <ScanBarcodeIcon size={25} />
            <small className='text-xs'>Scan</small>
          </Link>
        </footer>
      </div>
    </>
  );
};

export default Footer;
