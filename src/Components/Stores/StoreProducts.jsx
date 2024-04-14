import React, { useState } from 'react';
import './StoreProducts.css';
import ProductCard from '../ReusableComponents/ProductCard';
import { FiSearch } from 'react-icons/fi';
import BestSellingProduct from '/assets/BestSellingProduct.png';
import ear from '/assets/ear.jpeg';

const StoreProducts = () => {
    const [selectedOption, setSelectedOption] = useState('latest');
    const [searchTerm, setSearchTerm] = useState('');

    const searchArray = [{
        id: 1,
        title: 'Silver Necklace',
        description: 'Silver necklace with dark red accessory',
        imageUrl: BestSellingProduct, 
        priceWithVAT: 'EGP90.00 With VAT',
        originalPrice: 'EGP110.00',
        discountPercentage: 18,
    }, {
        id: 2,
        title: 'Grey Necklace',
        description: 'Grey necklace with dark red accessory',
        imageUrl: ear, 
        priceWithVAT: 'EGP90.00 With VAT',
        originalPrice: 'EGP110.00',
        discountPercentage: 18,
    }];

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredSearchArray = searchArray.filter(item =>
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let products = {
        id: 1,
        title: 'Silver Necklace',
        description: 'Silver necklace with dark red accessory',
        imageUrl: BestSellingProduct, 
        priceWithVAT: 'EGP90.00 With VAT',
        originalPrice: 'EGP110.00',
        discountPercentage: 18,
    }
    const productArray = Array(9).fill(products);

    return (
        <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row mdsm:flex-row w-90p mt-20 mx-auto p-2 custom-range-div">
            <div className="w-3/4 sm:w-20p responsive-width">
                <div className="text-white p-4">
                    <div className="max-w-md mx-auto">
                        <div className="flex flex-col items-center pb-10 rounded-sm shadow-md">
                            <h2 className="text-lg font-semibold mb-3 w-full text-center p-2 bg-veryLightGray text-white">Search</h2>
                            <div className="flex items-center max-w-xs mx-auto mt-5 bg-white shadow-md overflow-hidden">
                                <input
                                    className="px-4 py-5 w-full text-gray-700 leading-tight focus:outline-none"
                                    id="search"
                                    type="text"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <button className="flex items-center justify-center w-12 h-12 bg-purple text-white">
                                    <FiSearch size={20} />
                                </button>
                            </div>
                        </div>
                        <div className='mt-10 h-auto shadow-md'>
                            <h2 className="text-lg font-semibold w-full text-center p-2 bg-veryLightGray text-white">Results</h2>
                            {filteredSearchArray.map((item) => (
                                <div className="flex flex-col md:flex-row w-full mx-auto">
                                    <div className="w-full md:w-3/10 p-4">
                                        <img src={item.imageUrl} alt="Product" className='h-20 w-20 mx-auto'></img>
                                    </div>
                                    <div className="w-full md:w-7/10 p-4 text-black">
                                        <p>{item.description}</p>
                                        <div className="flex flex-col md:flex-row items-baseline">
                                            <span className="inline-block mt-5 md:mt-0 text-red-500">{item.priceWithVAT}</span>
                                            <span className="ml-1 text-sm">With VAT</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full sm:w-80p">
        <div className="flex justify-between w-full">
            <div className="text-gray-500 italic p-4 ml-10">
                <p>Showing all 22 results</p>
            </div>
            <div className="text-black" style={{"marginRight" : "42px"}}>
            <div className="w-56 relative">
                <select
                    className="block appearance-none w-full bg-white border border-gray-300 px-4 py-2 pr-8 rounded shadow leading-tight"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                >
                    <option value="latest">Sort by latest</option>
                    <option value="priceLowHigh">Sort by price: low to high</option>
                    <option value="priceHighLow">Sort by price: high to low</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.516 7.548c.436-.446 1.045-.481 1.576 0l3.908 3.747 3.908-3.747c.53-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615l-4.662 4.576c-.217.223-.502.335-.81.335s-.592-.112-.813-.335l-4.655-4.576c-.408-.418-.436-1.17 0-1.615z" />
                    </svg>
                </div>
                </div>
            </div>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 mdsm:grid-cols-1 md:grid-cols-2 lg:w-grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {Array.from({ length: 9 }).map((_, index) => (
            <div key={index}>
                <ProductCard product={products} />
            </div>
            ))}
        </div>
      </div>

        </div>
    );
}

export default StoreProducts;
