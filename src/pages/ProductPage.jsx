import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import formatPrice from '../utils/formatPrice';

const ProductPage = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ProductContext);
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-lg text-gray-600 mt-2">{product.description}</p>
            <p className="text-2xl font-semibold text-gray-800 mt-4">{formatPrice(product.price)}</p>
            <button 
              onClick={() => addToCart(product)}
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
