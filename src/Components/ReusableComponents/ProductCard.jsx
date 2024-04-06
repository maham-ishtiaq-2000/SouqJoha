import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import missSue from '../../../public/assets/MissSue.png';
import productDescription from '../../../public/assets/productDescription.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faSpinner } from '@fortawesome/free-solid-svg-icons';


const ProductCard = ({ product }) => {
    const [isHeartFilled, setIsHeartFilled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  
    const toggleHeartFill = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsHeartFilled(!isHeartFilled);
        setIsLoading(false);
      }, 1000); 
    };

    const navigateToProductDetail = () => {
      navigate(`/productDetailScreen/${product.id}`); 
    };

    const navigateToStore = () => {
       navigate('/storeScreen/missSue')
    }
  


  return (
    <div className="max-w-sm mx-auto rounded overflow-hidden bg-white shadow-lg border border-rounded border-gray-500 my-4 pt-6 relative hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer" style={{ width: "30vh", height: "54vh" }}>
    
    <div onClick={!isLoading && toggleHeartFill} className="absolute left-5 top-5 flex justify-center items-center p-2 bg-white border rounded-full cursor-pointer" style={{ width: '40px', height: '60px', boxShadow: '0 2px 4px 0 rgba(156, 163, 175, 0.8)' }}>
    {isLoading ? (
      <FontAwesomeIcon
        icon={faSpinner}
        className="h-6 w-6 text-red-500 animate-spin"
      />
    ) : (
      <svg className={`h-6 w-6 ${isHeartFilled ? 'fill-current text-red-500' : 'text-red-500'}`} fill={isHeartFilled ? "red" : "none"} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
    )}
  </div>

      
      {product.discountPercentage && (
        <span className="inline-block bg-red-200 rounded-full px-3 py-1 mb-5 text-sm font-semibold text-red-700 absolute top-5 right-10 transform -translate-y-1/2 translate-x-1/2">
          -{product.discountPercentage}%
        </span>
      )}
     <div className="flex justify-center items-center  w-full h-54 " onClick={navigateToProductDetail}>
       <img src={product.imageUrl} alt={product.title} className="object-scale-down h-full hover:opacity-75 transition-opacity duration-300 ease-in-out" style={{"maxWidth" : "15vh"}} onClick={navigateToProductDetail} />
    </div>

      <div className="px-6 py-4 justify-center" style={{"maxHeight" : "20vh"}}>
        <p className="text-gray-700 text-base text-lg text-center" style={{"minHeight" : "5vh"}}>
          {product.description}
        </p>
        <img src={missSue} alt="Miss Sue" style={{ width: '200px', height: '70px' , marginLeft : '20px' , marginTop : '20px' , "maxHeight" : "5vh"}} onClick={navigateToStore}/>
        <img src={productDescription} alt="Miss Sue" style={{ width: '250px', height: '70px' , marginLeft : '5px' , marginTop : '35px' }} />
      
      </div>
      <div className="w-full mt-20"> {/* Adjust width and margin as needed */}
        <hr className="border-t border-gray-300" /> {/* Tailwind CSS classes for styling */}
      </div>
      <div className="flex">
      <div className="w-7/10 flex-grow ml-3 mt-15">
         <p className='text-gray-500 text-sm mt-4 line-through'>EGP140.00</p>
         <p className='text-purple font-semibold text-lg'>{product.priceWithVAT}</p>
      </div>
      <div className="w-3/10 flex-grow">
            <FontAwesomeIcon icon={faShoppingCart} className='text-white bg-purple p-3 rounded-full mt-5 ml-10'></FontAwesomeIcon>
      </div>
    </div>

      
    </div>
  );
};

export default ProductCard;
