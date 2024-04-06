import React,{useState,useEffect} from 'react';
import StoreScreen from '../../../public/assets/StoreImage.png';
import SueeLogo from '../../../public/assets/SueeLogo.png';
import { FaStar, FaRegStar,FaComment  } from 'react-icons/fa';
import { FiHeart, FiBriefcase } from 'react-icons/fi';
import { AiOutlineQuestion, AiOutlineUserAdd } from 'react-icons/ai'; 

const StoreFullScreen = () => {
    const [rating, setRating] = useState(0);
  
    const Star = ({ index }) => {
      const handleClick = () => setRating(index);
      
      return index <= rating ? (
        <FaStar className="text-yellow-500 cursor-pointer" onClick={handleClick} />
      ) : (
        <FaRegStar className="text-gray-400 cursor-pointer" onClick={handleClick} />
      );
    };
  
    return (
        <div className="relative w-full" style={{"marginBottom" : "100px"}}>
            <img src={StoreScreen} className="w-full h-[363px]" alt="Store"/>
            <div className="absolute bottom-[-40px] left-20 xl:ml-[130px] w-3/4 h-1/2 bg-veryLightGray bg-opacity-90 rounded text-white flex items-center justify-center">
            <div className="flex flex-col sm:flex-row w-full h-full rounded">
                
            <div className="relative sm:w-4/5 flex flex-col">
                {/* Image positioned absolutely to overlap the top edge of the div */}
                <img src={SueeLogo} className="absolute -top-40 left-20 transform translate-y-1/2 w-40 h-40 object-cover" alt="Descriptive Alt Text" />

                <div className="flex flex-col sm:flex-row w-full h-full mt-10">
                    <div className="sm:w-2/6 flex flex-col items-center justify-center mb-4 sm:mb-0">
                        <div className="flex gap-1 mr-5 mt-5 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} index={i + 1} />
                            ))}
                        </div>
                        <div className="flex flex-col items-start justify-start space-y-3 mr-5 mt-2">
                            <div className="flex items-center">
                                <FiHeart className="text-white" />
                                <span className="ml-1 text-sm">Product Votes: 2</span>
                            </div>
                            <div className="flex items-center">
                                <FiBriefcase className="text-white" />
                                <span className="ml-1 text-sm">Total submitted: 44</span>
                            </div>
                        </div>
                    </div>

                    <div className="sm:w-4/6  w-full">
                        <p className='text-2xl w-full'>miss Sueee</p>
                        <nav className="text-white h-1/9 p-3 mr-50 px-20" style={{"marginRight" : "70px" , "marginTop" : "60px"}}>
                            <ul className="flex space-x-4">
                                <li className="hover:text-gray-300 cursor-pointer">Products</li>
                                <li className="hover:text-gray-300 cursor-pointer">About</li>
                                <li className="hover:text-gray-300 cursor-pointer">Policies</li>
                                <li className="hover:text-gray-300 cursor-pointer">Reviews<span>(0)</span></li>
                                <li className="hover:text-gray-300 cursor-pointer">Followers<span>(0)</span></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            
            <div className="sm:w-1/5 flex items-center justify-center">
                <div className="flex flex-col items-center space-y-3">
                    <button className="flex items-center px-10 py-1 bg-white text-black rounded w-full">
                    <FaComment className="mr-2" />
                    Chat Now
                    </button>
                    <button className="flex items-center px-10 py-1 bg-purple text-white rounded w-full">
                    <AiOutlineQuestion className="mr-2" />
                    Inquiry
                    </button>
                    <button className="flex items-center px-10 py-1 bg-white text-black rounded w-full">
                    <AiOutlineUserAdd className="mr-2" />
                    Follow
                    </button>
                </div>
            </div>

            </div>
            
         </div>
        </div>
    );
}

export default StoreFullScreen;
