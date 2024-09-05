import React ,{useContext}from 'react';
import Navbar from '../components/Navbar/Navbar';
import { CartContext } from '../context/CartContext';
import CartSummary from '../components/Cart/CartSummary';
import CartTotals from '../components/Cart/CartTotals';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart</h1>
        {cartItems.length > 0 ? (
          <div className="bg-white shadow-md rounded-lg p-4">
            <CartSummary />
            <CartTotals />
          </div>
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
