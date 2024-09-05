import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Header = () => {
  const { cartItems } = React.useContext(CartContext);

  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">E-Commerce</Link>
      <nav>
        <Link to="/cart" className="ml-4">
          Cart ({cartItems.length})
        </Link>
       </nav>
    </header>
  );
};

export default Header;
