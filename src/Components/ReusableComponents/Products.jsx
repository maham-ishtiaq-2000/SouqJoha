import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ products, fromDailyDeals }) => {
  // Updated grid layout classes for non-daily deals for smoother transitions
  const gridColumnClass = fromDailyDeals
    ? '2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2' // Configuration for daily deals
    : '2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'; // Updated configuration for regular products

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 ${gridColumnClass} gap-4 gap-y-8`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
