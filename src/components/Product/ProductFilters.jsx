import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

const ProductFilters = () => {
  const { filterByCategory, categories } = useContext(ProductContext);

  return (
    <div className="mb-4">
      <select onChange={(e) => filterByCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category.id} value={category.name}>{category.name}</option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilters;
