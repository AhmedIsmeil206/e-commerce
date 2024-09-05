import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import formatPrice from '../../utils/formatPrice';

const CartItem = ({ item }) => {
  const { incrementQuantity, decrementQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">{formatPrice(item.price)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="px-2 py-1 border border-gray-300 rounded-lg mr-2"
          onClick={() => decrementQuantity(item.id)}
        >
          -
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button
          className="px-2 py-1 border border-gray-300 rounded-lg mr-2"
          onClick={() => incrementQuantity(item.id)}
        >
          +
        </button>
        <button
          className="px-2 py-1 bg-red-500 text-white rounded-lg"
          onClick={() => removeFromCart(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
