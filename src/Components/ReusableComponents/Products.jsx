import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ products, fromDailyDeals }) => {
  const gridColumnClass = fromDailyDeals ? 'lg:grid-cols-4' : 'lg:grid-cols-3';

  return (
    <div className="py-8">
      <div className="container mx-auto pl-10">
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${gridColumnClass} gap-6`}>
          {products.map(product => (
            <ProductCard key={product.id} product={product}  fromDailyDeals={false}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
