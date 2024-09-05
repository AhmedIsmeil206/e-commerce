import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ProductList from '../components/Product/ProductList';
import ProductFilters from '../components/Product/ProductFilters';
import SortOptions from '../components/SortOptions/SortOptions';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Navbar />
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <ProductFilters />
          <SortOptions />
        </div>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
