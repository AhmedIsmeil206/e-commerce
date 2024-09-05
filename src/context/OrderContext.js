import React, { createContext, useState, useEffect } from 'react';
import ordersMock from '../mock/orders.json'; // Assuming you have a mock file

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching order data
    setOrders(ordersMock);
  }, []);

  return (
    <OrderContext.Provider value={{ orders }}>
      {children}
    </OrderContext.Provider>
  );
};
