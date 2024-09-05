import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">E-Commerce Store</Link>
        <div>
          <Link to="/" className="text-white px-4 hover:underline">Home</Link>
          <Link to="/cart" className="text-white px-4 hover:underline">Cart</Link>
          <Link to="/checkout" className="text-white px-4 hover:underline">Checkout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
