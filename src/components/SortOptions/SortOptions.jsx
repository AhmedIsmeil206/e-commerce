import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

const SortOptions = () => {
  const { sortProducts } = useContext(ProductContext);

  return (
    <div className="mb-4">
      <label htmlFor="sort" className="block text-gray-700">Sort by:</label>
      <select id="sort" onChange={(e) => sortProducts(e.target.value)} className="border rounded px-3 py-2 w-full">
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="nameAsc">Name: A-Z</option>
        <option value="nameDesc">Name: Z-A</option>
      </select>
    </div>
  );
};

export default SortOptions;
