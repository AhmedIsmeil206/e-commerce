import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header/Header';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
