import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import formatPrice from '../../utils/formatPrice';

const CartTotals = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold text-gray-800">Total</h2>
      <p className="text-2xl font-bold">{formatPrice(total)}</p>
    </div>
  );
};

export default CartTotals;
