import React,{useState} from 'react';
import Navbar from './DropdownHeader/Navbar';
import { FaSearch, FaChevronDown, FaUserAlt, FaHeart, FaShoppingCart } from 'react-icons/fa';
import AutoPlayCarousel from '../Carousels/AutoPlayCarousel';
import img1 from '/assets/img1.png'; 
import img2 from '/assets/img2.png';
import img3 from '/assets/img3.png';
import EnglishFlag from '/assets/EnglishFlag.jpeg';
import ArabicFlag from '/assets/ArabicFlag.webp'
import Logo from '/assets/SouqLogo.png';


const Header = ({screen}) => {

        const slides = [
        img1, 
        img2,
        img3
        ];
    const [selectedLanguage, setSelectedLanguage] = useState('English - Egypt');
    const [isOpen, setIsOpen] = useState(false);
    const languages = [
        { name: 'English - Egypt', flagUrl: EnglishFlag },
        { name: 'Arabic - Egypt', flagUrl: ArabicFlag},
      ];
    return(
        <>
            <div className="flex flex-col md:flex-row w-full md:px-10 bg-yellow py-5 text-white">
                <div className="md:w-1/2 w-full p-3 mb-6 md:mb-0">
                <div className="flex flex-col md:flex-row w-full text-black">
                    <div className="md:w-1/4 w-full mb-6 md:mb-0 flex justify-center items-center">
                    
                    <img src="https://souqjoha.com/wp-content/uploads/2019/11/joha_logo.png" className="w-20 h-30" alt="Logo"></img>
                    </div>

                    <div className="md:w-3/4 w-full">
                    <div className="flex items-center w-full mt-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 py-2 rounded-l-md focus:outline-none"
                        />
                        <button className="bg-purple text-white p-3 rounded-r-md ">
                            <FaSearch />
                        </button>
                        </div>
                  </div>
                </div>
                </div>
       
          <div className="md:w-1/2 w-full mt-2">
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="w-full md:w-1/2  mt-3 flex justify-center">
                            <div className="relative w-3/4 mt-2">
                                <button className="bg-white text-black pl-4 py-2 rounded flex items-center w-full" onClick={() => setIsOpen(!isOpen)}>
                                    <img src={languages.find(lang => lang.name === selectedLanguage)?.flagUrl} alt="" className="w-5 mr-2" />
                                    <span>{selectedLanguage}</span>
                                    <FaChevronDown className="shrink-0 ml-20" style={{"marginLeft" : "43%"}}/>
                                </button>
                                {isOpen && (
                                    <div className="absolute bg-white text-black mt-1 rounded shadow-lg z-10 w-full">
                                        {languages.map((language) => (
                                            <div key={language.name} className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100" onClick={() => {
                                                setSelectedLanguage(language.name);
                                                setIsOpen(false);
                                            }}>
                                                <img src={language.flagUrl}  className="w-5" />
                                                <p className='ml-2'>{language.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-4 mt-2">
                         <div className="container mx-auto flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                            <FaUserAlt className="text-white cursor-pointer favorite-btn text-black text-3xl mr-4 ml-4" />
                            <FaHeart className="text-white cursor-pointer favorite-btn text-black text-3xl mr-4 ml-4" />
                            <div className="relative ml-30" >
                                <FaShoppingCart className="text-white cursor-pointer favorite-btn text-black text-3xl mr-4 ml-4" />
                                    <div className="absolute -top-3 -right-3 bg-purple text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
                                        2
                                    </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row w-full bg-purple">
            <div class="md:w-4/6 w-full lg:ml-60"> 
                <Navbar></Navbar>
            </div>

                <div class="md:w-2/6 w-full">
                <div class="flex space-x-1 mt-2">
                    <a href="#" class="text-white px-2 text-sm py-1 rounded">Start Selling</a>
                    <a href="#" class="text-white px-2 text-sm py-1 rounded">Contact Us</a>
                </div>

                </div>
            </div>
            {screen === "mainScreen" && <AutoPlayCarousel slides={slides}></AutoPlayCarousel>}

            
        </>
    )
}

export default Header;