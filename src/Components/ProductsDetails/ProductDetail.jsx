import React,{useState,useRef} from 'react';
import styled from 'styled-components';
import './ProductDetail.css';
import Breadcrumb from './BreadCrumb';
import MySue from '/assets/MissSue.png';
import details from '/assets/productDescription.png';
import ItrahSawal from '/assets/itrahSawal.png';
import ChatNow from '/assets/chatNow.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaWhatsapp, FaInstagram, FaGooglePlusG, FaPlus } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import ProductDetailSlider from './ProductDetailSlider';
import ProductDetailsTab from './ProductDetailsTab';
import ProductCard from '../ReusableComponents/ProductCard';
import { useNavigate } from 'react-router-dom';
import { AiOutlineFullscreen, AiOutlineClose } from 'react-icons/ai'; 
import BlackNecklace from '/assets/blackNecklace.jpeg';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height : 75%;
  display: flex; 
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 14px 24px rgba(0, 0, 0, 0.55), 0 14px 18px rgba(0, 0, 0, 0.55);
  }
`;

const ZoomableImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.2s ease-out;
  cursor: zoom-in;
`;

const FullscreenIcon = styled(AiOutlineFullscreen)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 10;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  padding: 5px;
`;

const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #fff;
  padding: 5px;
  margin-top: 30px;
  margin-right: 70px;
  z-index: 1050;  // Ensure it's above other content
`;

const FullscreenModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;




const ProductDetail = () => {
    const [number, setNumber] = useState(1);
    const navigate = useNavigate();
    const productCountArray = Array.from({ length: 9 }, (_, index) => index);
    const imageRef = useRef(null);
    const [zoom, setZoom] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
    const handleMouseEnter = () => setZoom(true);
    const handleMouseLeave = () => {
      setZoom(false);
    };
  
    const handleMouseMove = (e) => {
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const x = ((e.pageX - left) / width) * 100;
      const y = ((e.pageY - top) / height) * 100;
      setMousePosition({ x, y });
    };
  
    const togglePreview = (e) => {
        if (isPreviewOpen) {
            window.location.reload();
          } else {
            setIsPreviewOpen(true);
          }
    };
  
    const zoomStyle = zoom ? {
      transform: `scale(2)`,
      transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
    } : {};
  
  
  
    

    let products = {
        id: 1,
        title: 'Silver Necklace',
        description: 'Silver necklace with dark red accessory',
        imageUrl: BlackNecklace, 
        priceWithVAT: 'EGP90.00 With VAT',
        originalPrice: 'EGP110.00',
        discountPercentage: 18,
    }

    const productArray = [
        { id: 1, name: 'Product 1'},
        { id: 2, name: 'Product 2'},
        { id: 3, name: 'Product 3'},
        { id: 4, name: 'Product 4'},
        { id: 5, name: 'Product 5'},
        { id: 6, name: 'Product 6'},
        { id: 7, name: 'Product 7'},
        { id: 8, name: 'Product 8'},
        { id: 9, name: 'Product 9'},
      ];
      

    const navigateToStore = () => {
        navigate('/storeScreen/missSue')
     }

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
              <div className="flex flex-col lg:flex-row w-full px-3 lg:px-10 mt-2 text-white">
                 <div className="w-full md:w-4/6 p-3 mb-6 md:mb-0">
                    <div className="p-4 lg:ml-35 sm:ml-10">
                       <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="flex flex-col md:flex-row w-full md:px-10  text-white">
                    <div className="md:w-1/2 w-full md:mb-0 flex justify-center items-center">
                    <Container
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                    >
                        <FullscreenIcon onClick={togglePreview} size="24px" />
                        <ZoomableImage
                        ref={imageRef}
                        src="https://souqjoha.com/wp-content/uploads/2019/09/1915.jpg"
                        alt="Descriptive text for image"
                        style={zoomStyle}
                        />
                           {isPreviewOpen && (
                        <FullscreenModal>
                            <CloseIcon onClick={togglePreview} size="40px" />
                            <img src="https://souqjoha.com/wp-content/uploads/2019/09/1915.jpg" alt="Full preview" style={{ maxWidth: '100%', maxHeight: '80%' }} />
                        </FullscreenModal>
                        )}
                    </Container>
                    </div>



                        <div className="md:w-1/2 w-full p-3 pl-10">
                                <div className="flex space-x-1"> {/* Right Div */}
                                <button className="text-black px-4 py-2 rounded hover:border hover:border-black hover:text-red-500" style={{minWidth: '150px', minHeight: '40px'}}>
                                    <FontAwesomeIcon icon={faHeart} /> Add to wishlist
                                </button>

                                <button className="text-black px-4 py-2 rounded flex items-center hover:border hover:border-black" style={{minWidth: '150px', minHeight: '40px'}}>
                                    <FontAwesomeIcon icon={faBalanceScale} className="text-lg" />
                                    <span className="ml-2">Add to compare</span>
                                </button>


                                </div>
                                <div className="flex justify-end">
                                    <p className="bg-yellow w-20 items-center p-1 pl-6">-18%</p> {/* Adjusted the background color class to be more specific */}
                                </div>

                                <p className='text-3xl text-black mt-2 mb-3'>Silver necklace with dark red accessory</p>
                                <p className='text-1xl text-black mb-4'>Silver necklace with dark red accessoey</p>
                                <img src={MySue} width={"160px"} height={"100px"} className='mb-10 cursor-pointer' onClick={navigateToStore}></img>
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

                    <div className="w-full md:w-2/6 p-3">
                          <ProductDetailSlider slides={slides}></ProductDetailSlider>
                        </div>
                </div>

                <ProductDetailsTab></ProductDetailsTab>
                <div className="border-t border-1 border-gray-300 mt-5 mb-5 w-1/2 ml-40" />
                <div className='mt-20 ml-40' style={{width: "70%"}}>
                    <p className='font-semibold text-lg mb-6'>Related Products</p>
                    <div className="flex flex-wrap -mx-2">
                        {productCountArray.map((_, index) => (
                            // Adjust the responsive width for each breakpoint
                            <div className="w-full sm:w-1/2 mdsm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 custom-range-div p-2" key={index}>
                                <ProductCard product={products} />
                            </div>
                        ))}
                    </div>
                </div>




        </>
    )
}

export default ProductDetail;