import React, { createContext, useState } from 'react';
import productsData from '../mock/products.json';
import categoriesData from '../mock/categories.json';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [categories] = useState(categoriesData);

  const filterByCategory = (category) => {
    if (category) {
      setProducts(productsData.filter(product => product.category === category));
    } else {
      setProducts(productsData);
    }
  };

  const sortProducts = (sortType) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sortType === 'priceAsc') return a.price - b.price;
      if (sortType === 'priceDesc') return b.price - a.price;
      if (sortType === 'nameAsc') return a.name.localeCompare(b.name);
      if (sortType === 'nameDesc') return b.name.localeCompare(a.name);
      return 0;
    });
    setProducts(sortedProducts);
  };

  const addToCart = (product) => {
    // Simulate adding product to cart
    console.log(`${product.name} added to cart`);
  };

  return (
    <ProductContext.Provider value={{ products, categories, filterByCategory, sortProducts, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};
