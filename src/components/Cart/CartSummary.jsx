import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import formatPrice from '../../utils/formatPrice';

const CartSummary = () => {
  const { cartItems } = useContext(CartContext);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">Cart Summary</h2>
      <div className="mb-4">
        {cartItems.length > 0 ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}
      </div>
      <div className="mt-4 border-t pt-2">
        <span className="font-semibold">Total:</span>
        <span className="font-semibold">{formatPrice(totalAmount)}</span>
      </div>
    </div>
  );
};

export default CartSummary;
