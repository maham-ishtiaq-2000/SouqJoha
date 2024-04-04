import React,{useState} from 'react';
import Breadcrumb from './BreadCrumb';
import MySue from '../../../public/assets/MissSue.png';
import details from '../../../public/assets/productDescription.png';
import ItrahSawal from '../../../public/assets/itrahSawal.png';
import ChatNow from '../../../public/assets/chatNow.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaWhatsapp, FaInstagram, FaGooglePlusG, FaPlus } from 'react-icons/fa';
import ProductDetailSlider from './ProductDetailSlider';

const ProductDetail = () => {
    const [number, setNumber] = useState(1);

    const handleInputChange = (event) => {
        setNumber(event.target.value);
    };

    const handleClick = () => {
        console.log('Button clicked with number:', number);
    };
    const breadcrumbItems = [
        { text: 'Home', href: '/' },
        { text: 'Joha mall', href: '/joha-mall' },
        { text: 'Jewelery', href: '/jewelery' },
        { text: 'Chains', href: '/chains' },
        { text: 'Silver necklace with dark red accessory', href: '/silver-necklace' },
      ];

      const slides = [
        { image: 'https://souqjoha.com/wp-content/uploads/2019/12/26712190005-788x824.jpg' },
        { image: 'https://souqjoha.com/wp-content/uploads/2019/12/26712190005-788x824.jpg' },
        // ...more slides
      ];
    return(
        <>
               <div className="flex flex-col md:flex-row w-full md:px-10mt-2 text-white" >
                    <div className="md:w-4/6 w-full p-3 mb-6 md:mb-0">
                    <div className="p-4 lg:ml-35 sm:ml-10">
                       <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="flex flex-col md:flex-row w-full md:px-10  text-white">
                    <div className="md:w-1/2 w-full p-3 md:mb-0 flex justify-center items-center">
                        <img
                            src="https://souqjoha.com/wp-content/uploads/2019/09/1915.jpg"
                            alt="Descriptive text for image"
                            className="w-full h-auto mb-10 object-cover"
                        />
                    </div>



                        <div className="md:w-1/2 w-full p-3 pl-10">
                                <div className="flex space-x-1"> {/* Right Div */}
                                            <button className="text-black px-4 pt-2 pb-1 mb-1 rounded hover:border hover:border-black hover:text-red-500">
                                            ♡ Add to wishlist
                                        </button>

                                            <button className="text-black px-4 pt-3 rounded flex  hover:border hover:border-black ">
                                                <span className="text-lg">𓌖</span> {/* Adjust the text size if necessary */}
                                                <span className="ml-2 mb-2">Add to compare</span>
                                            </button>
                                </div>
                                <div className="flex justify-end">
                                    <p className="bg-yellow w-20 items-center p-1 pl-6">-18%</p> {/* Adjusted the background color class to be more specific */}
                                </div>

                                <p className='text-3xl text-black mt-2 mb-3'>Silver necklace with dark red accessory</p>
                                <p className='text-1xl text-black mb-4'>Silver necklace with dark red accessoey</p>
                                <img src={MySue} width={"160px"} height={"100px"} className='mb-10'></img>
                                <p style={{ fontSize: '15px' }} className='text-black mb-3'>SKU: 1915</p>
                                <p className='text-black text-2xl'>EGP110.00<span>EGP90.00</span>With VAT</p>
                                <p style={{ fontSize: '15px' }} className='text-black mb-5 mt-5 text-green-500'>2 in stock</p>
                                <div className="flex items-center space-x-2">
                                <input
                                    type="number"
                                    value={number}
                                    onChange={handleInputChange}
                                    className="border-2 border-gray-300 rounded px-1 py-1.5 w-20 text-center focus:outline-none text-black"
                                />
                                <button
                                    onClick={handleClick}
                                    className="bg-purple text-white py-2 w-40 rounded w-40"
                                >
                                    ADD TO CART
                                </button>
                                </div>
                                <img src={details} width={"90%"} height={"5px"} className='mt-7'></img>

                                <div className="flex space-x-1 mt-7 mb-7"> {/* Right Div */}
                                    <button className="flex items-center justify-center w-15 h-10 bg-white text-black mr-3 rounded">
                                        <img src={ItrahSawal} className="w-full h-full object-contain" alt="Description" />
                                    </button>

                                    <button className="flex items-center justify-center w-15 h-10 bg-white text-black rounded">
                                        <img src={ChatNow} className="w-full h-full object-contain" alt="Description" />
                                    </button>
                                </div>

                                <div className="flex justify-center space-x-4">
                                    <a href="https://www.facebook.com" className="bg-blue-600 text-white rounded-full p-2">
                                        <FaFacebookF className="text-2xl" />
                                    </a>
                                    <a href="https://www.twitter.com" className="bg-blue-400 text-white rounded-full p-2">
                                        <FaTwitter className="text-2xl" />
                                    </a>
                                    <a href="https://www.linkedin.com" className="bg-blue-700 text-white rounded-full p-2">
                                        <FaLinkedinIn className="text-2xl" />
                                    </a>
                                    <a href="https://www.pinterest.com" className="bg-red-600 text-white rounded-full p-2">
                                        <FaPinterestP className="text-2xl" />
                                    </a>
                                    <a href="https://www.whatsapp.com" className="bg-green-500 text-white rounded-full p-2">
                                        <FaWhatsapp className="text-2xl" />
                                    </a>
                                    <a href="https://www.instagram.com" className="bg-yellow text-white rounded-full p-2">
                                        <FaInstagram className="text-2xl" />
                                    </a>
                                    <a href="https://plus.google.com" className="bg-red-500 text-white rounded-full p-2">
                                        <FaGooglePlusG className="text-2xl" />
                                    </a>
                                    <a href="/additional" className="bg-orange-500 text-white rounded-full p-2">
                                        <FaPlus className="text-2xl" />
                                    </a>
                                </div>
                        </div>
                    </div>


                        
                    </div>

                        <div className="md:w-2/6 w-full p-3">
                          <ProductDetailSlider slides={slides}></ProductDetailSlider>
                        </div>
                </div>
        </>
    )
}

export default ProductDetail;