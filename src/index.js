import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext'; // Import the OrderProvider
import './styles/tailwind.css'; // Adjust the path as needed

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <OrderProvider> {/* Wrap with OrderProvider */}
          <App />
        </OrderProvider>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
