import React, { useState } from 'react';
import axios from 'axios';
import { useUserContext } from '../../context/UserContext';

const GetCertificate = ({ serialNumber }) => {
  const [loading, setLoading] = useState(false);
  const { updateCertifcateDetails } = useUserContext();

  const handleGetCertificate = async () => {
    if (!serialNumber) {
      alert('Serial number is required.');
      return;
    }

    setLoading(true);
    const redirectUrl = `${window.location.origin}/certificate-callback`;
    
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/user/create-payment-for-certificate`, 
        { serialNumber, redirectUrl }
      );

      const { paymentUrl, merchantOrderId } = response.data;
      if (paymentUrl) { 
        updateCertifcateDetails({ serialNumber, merchantOrderId }); 
        window.location.href = paymentUrl;
      } else {
        throw new Error('No payment URL received');
      }
    } catch (error) {
      console.error('Error in payment creation:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleGetCertificate}
      disabled={loading}
      className={`
        inline-flex items-center gap-2 px-4 py-2 
        text-blue-600 hover:text-blue-700 hover:underline
        transition-colors duration-200
        ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      <span className="text-xl">🛡️</span>
      <span>{loading ? 'Processing...' : 'Get Certificate'}</span>
    </button>
  );
};

export default GetCertificate;
