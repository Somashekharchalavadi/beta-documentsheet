import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [paymentData, setPaymentData] = useState({
    amount: '',
    name: '',
    sheetID: '',
<<<<<<< HEAD
    serialNumber: '',
    merchantOrderId: '',
  });

  const updatePaymentData = (data) => {
    setPaymentData((prev) => ({ ...prev, ...data }));
  };
=======
    serialNumber: [],
    merchantOrderId: ''
  });

  const updatePaymentData = (data) => {
    console.log('Updating Payment Data:', data);
    setPaymentData(prev => ({
      ...prev,
      ...data,
      serialNumber: Array.isArray(data.serialNumber)
        ? [...prev.serialNumber, ...data.serialNumber]
        : data.serialNumber || prev.serialNumber
    }));
  }; 
>>>>>>> 7e5f1205bdd9f8f6b9013f45ad3da8ceab874e36

  const clearPaymentData = () => {
    setPaymentData({
      amount: '',
      name: '',
      sheetID: '',
<<<<<<< HEAD
      serialNumber: '',
      merchantOrderId: '',
=======
      serialNumber: [],
      merchantOrderId: ''
>>>>>>> 7e5f1205bdd9f8f6b9013f45ad3da8ceab874e36
    });
  };

  return (
    <UserContext.Provider value={{ 
      paymentData, 
      updatePaymentData, 
      clearPaymentData 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
