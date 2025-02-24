import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Routess from './routes/Routess';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/common/Preloader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      
      <BrowserRouter>
        <Toaster />
        <Routess />
      </BrowserRouter>
    </>
  );
};

export default App;
