import React,{useState} from 'react';
import './Categories.css';
import ProductCard from '../ReusableComponents/ProductCard';
import { FaSearch } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../ProductsDetails/BreadCrumb';
import { menuItems } from '../../menuItems';
import Logo from '/assets/SouqLogo.png';
import TopOffers from './TopOffers';
import BlackNecklace from '/assets/blackNecklace.jpeg';


const Categories = () => {
  const [selectedOption, setSelectedOption] = useState('latest');
  const { category } = useParams();
  const [price, setPrice] = useState(20);
  const breadcrumbItems = [
    { text: 'Home', href: '/' },
    { text: 'Joha mall', href: '/joha-mall' },
    { text: 'HealthAndBeauty', href: '/jewelery' }
  ];

  let products = {
    id: 1,
    title: 'Silver Necklace',
    description: 'Silver necklace with dark red accessory',
    imageUrl: BlackNecklace, 
    priceWithVAT: 'EGP90.00 With VAT',
    originalPrice: 'EGP110.00',
    discountPercentage: 18,
}

  function findSubmenuTitlesByName(items, name) {
    let titles = [];
  
    function recurse(subitems) {
      subitems.forEach(item => {
        if (item.name === name) {
          if (item.submenu && item.submenu.length > 0) {
            item.submenu.forEach(subItem => {
              titles.push(subItem.title); // Collecting titles
            });
          }
        }
        if (item.submenu) {
          recurse(item.submenu); // Continue searching in nested submenus
        }
      });
    }
  
    recurse(items);
    return titles;
  }
  
  const titles = findSubmenuTitlesByName(menuItems, category);
  console.log(titles)
    return(
        <div className="flex justify-center items-center py-2">
          <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row w-4/5 p-4" style={{ maxWidth: '80%' }}>
                <div className="w-full sm:w-3/5 text-white 2xl:w-3/5 3xl:w-3/5 lg:w-3/5 p-4">
                    <Breadcrumb items={breadcrumbItems} />
                    <p className='text-2xl text-black mt-5 mb-10'>Health And Beauty</p>
                    <div className="flex justify-between flex-wrap w-full">
                        <div className="text-black w-full sm:w-auto mt-2">
                            <p className='text-sm italic'>Showing 1–12 of 536 results</p>
                        </div>
                        <div className="text-black w-full sm:w-auto mb-2">
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
                     <div className="grid grid-cols-1 md:grid-cols-2 xl-lg:grid-cols-2 above-xl:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-4 gap-4">
                        {titles.map((title, index) => (
                          <div key={index} className="shadow-lg p-4 flex flex-col justify-between">
                            <div className="text-black flex items-center justify-between">
                              <p className="text-sm">{title}</p>
                              <img src={Logo} alt="Logo" className="w-20 h-20"></img>
                            </div>
                          </div>
                        ))}
                      </div>


                      <div className="grid grid-cols-1 md:grid-cols-2 md-lg:grid-cols-1 xl-lg:grid-cols-2 above-xl:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-3 gap-3">
                        {Array.from({ length: 9 }).map((_, index) => (
                            <div key={index}>
                                <ProductCard product={products} component="category" />
                            </div>
                        ))}
                    </div>


  

                </div>
                <div className="p-4 w-full 2xl:w-1/3 3xl:w-1/3 lg:w-1/3">
                    <p className='text-lg text-gray-500 ml-5'>Search</p>
                    <div className="flex w-80 ml-5 mt-3 mb-3">
                      <div className="flex-1 bg-purple h-1"></div>
                      <div className="flex-1 bg-gray-200 h-1"></div> {/* Adjust the color as per your color palette */}
                    </div>
                    <div className="flex w-full items-center justify-center p-4">
                      <div className="flex border-2 rounded w-full">
                        <input
                          type="text"
                          className="flex-1 px-4 py-2"
                          placeholder="Search..."
                        />
                        <button className="flex items-center justify-center px-4 bg-purple border-l w-12">
                          <FaSearch className="text-white text-2xl" />
                        </button>
                      </div>
                    </div>
                    <p className='text-lg text-gray-500 ml-5 mt-5'>Filter By Price</p>
                    <div className="flex w-80 ml-5 mt-3 mb-3">
                      <div className="flex-1 bg-purple h-1"></div>
                      <div className="flex-1 bg-gray-200 h-1"></div> {/* Adjust the color as per your color palette */}
                    </div>

                    <div className="flex flex-col items-center py-4 w-full">
                        <div className="flex w-full items-center">
                          <div className="w-5">
                            <button className="bg-purple-600 text-white py-2 px-4 rounded-full focus:outline-none">FILTER</button>
                          </div>
                          <div className="flex-grow mx-4 relative">
                            <input
                              type="range"
                              min={20}
                              max={2820}
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              className="w-full cursor-pointer"
                            />
                            <div className="w-full flex justify-between text-xs px-2">
                              <span>EGP20</span>
                              <span>EGP2820</span>
                            </div>
                          </div>
                        </div>
                        <div className="w-full text-center mt-2">
                          <p className="text-sm">
                            Price: EGP{price}
                          </p>
                          <button className='bg-purple text-white px-10 py-2 rounded mt-2 mb-2'>Fliter</button>
                        </div>
                      </div>


                      <p className='text-lg text-gray-500 ml-5 mt-5'>Top Offers</p>
                      <div className="flex w-80 ml-5 mt-3 mb-3">
                        <div className="flex-1 bg-purple h-1"></div>
                        <div className="flex-1 bg-gray-200 h-1"></div> {/* Adjust the color as per your color palette */}
                      </div>
                      <div className="grid grid-cols-1">
                        {Array.from({ length: 6 }).map((_, index) => (
                          <TopOffers key={index} />
                        ))}
                      </div>

                </div>
            </div>
        </div>
    )
}

export default Categories;
