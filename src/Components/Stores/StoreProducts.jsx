import React,{useState} from 'react';
import ProductCard from '../ReusableComponents/ProductCard';
import { FiSearch } from 'react-icons/fi';
import BestSellingProduct from '../../../public/assets/BestSellingProduct.png';


const StoreProducts = () => {
    const [selectedOption, setSelectedOption] = useState('latest');
    let products = {
        id: 1,
        title: 'Silver Necklace',
        description: 'Silver necklace with dark red accessory',
        imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', 
        priceWithVAT: 'EGP90.00 With VAT',
        originalPrice: 'EGP110.00',
        discountPercentage: 18,
    }
    const productArray = Array(9).fill(products);
  return (
    <div className="flex flex-wrap w-3/4 ml-10 p-2 w-full">
      <div className="w-3/4 sm:w-20p">
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
                        />
                        <button className="flex items-center justify-center w-12 h-12 bg-purple text-white ">
                            <FiSearch size={20} />
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-10 h-auto shadow-md'>
                <h2 className="text-lg font-semibold w-full text-center p-2 bg-veryLightGray text-white">Search</h2>
                <div className="flex w-full mx-auto">
                    <div className="w-3/10 p-4 mr-1">
                        <img src={BestSellingProduct} className='h-20 w-20'></img>
                    </div>
                    <div className="w-7/10 p-4 ml-1 text-black">
                        <p>Guaiche Leather Set with Crystal and Silver Pendants</p>
                        <div className="flex items-baseline">
                            <span className="inline-block mt-5 text-red-500">EGP80.00</span>
                            <span className="ml-1 text-sm">With VAT</span>
                        </div>
                    </div>
                </div>
                <hr className="border-t border-gray-300 mx-auto" style={{"width" : "90%"}} />
                <div className="flex w-full">
                    <div className="w-3/10 p-4 mr-1">
                        <img src={BestSellingProduct} className='h-20 w-20'></img>
                    </div>
                    <div className="w-7/10 p-4 ml-1 text-black">
                        <p>Guaiche Leather Set with Crystal and Silver Pendants</p>
                        <div className="flex items-baseline">
                            <span className="inline-block mt-5 text-red-500">EGP80.00</span>
                            <span className="ml-1 text-sm">With VAT</span>
                        </div>
                    </div>
                </div>
                <hr className="border-t border-gray-300" style={{"width" : "90%"}} />
                <div className="flex w-full">
                    <div className="w-3/10 p-4 mr-1">
                        <img src={BestSellingProduct} className='h-20 w-20'></img>
                    </div>
                    <div className="w-7/10 p-4 ml-1 text-black">
                        <p>Guaiche Leather Set with Crystal and Silver Pendants</p>
                        <div className="flex items-baseline">
                            <span className="inline-block mt-5 text-red-500">EGP80.00</span>
                            <span className="ml-1 text-sm">With VAT</span>
                        </div>
                    </div>
                </div>
                <hr className="border-t border-gray-300" style={{"width" : "90%"}} />
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
