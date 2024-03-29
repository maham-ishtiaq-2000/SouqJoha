import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown, faUser, faHeart, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English - Egypt');

    const languages = [
        { name: 'English - Egypt', flagUrl: 'https://m.media-amazon.com/images/I/71lzCJduZKL.jpg' },
        { name: 'Arabic - Egypt', flagUrl: 'https://cdn.britannica.com/79/5779-050-46C999AF/Flag-Saudi-Arabia.jpg' },
    ];

    return (
        <header className="bg-yellow-400 md:p-10 flex flex-wrap pb-10 items-center">
            <div className="flex items-center">
                {/* Logo always visible */}
                <div className="flex-shrink-0"> 
                    <img src="https://souqjoha.com/wp-content/uploads/2019/11/joha_logo.png" alt="Logo" className="h-20 ml-40" />
                </div>
                
                {/* Toggle Button for Mobile Menu */}
                <button className="ml-auto md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <FontAwesomeIcon icon={faBars} className="text-2xl" />
                </button>
            </div>

            {/* Elements that are conditionally rendered based on screen size */}
            <div className={`w-full md:flex md:items-center md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="search-bar flex items-center bg-white rounded w-full md:w-auto mt-4 md:mt-0 " style={{"width" : "70vh"}}>
                    <input type="search" placeholder="Search" className="p-2 flex-grow rounded-l-full outline-none "style={{ width: isMobileMenuOpen ? '10px' : '10px' }} />
                    <button className="bg-purple-600 text-white p-2 rounded-tr rounded-br">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                    <div className="relative language-selector mx-4">
                        <button className="bg-white text-black px-2 py-2 rounded flex items-center" onClick={() => setIsOpen(!isOpen)}>
                            <img src={languages.find(lang => lang.name === selectedLanguage)?.flagUrl} alt="" className="w-5 mr-3" />
                            {selectedLanguage} <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        {isOpen && (
                            <div className="absolute bg-white mt-1 rounded shadow-lg z-10">
                                {languages.map((language) => (
                                    <div key={language.name} className="px-10 py-2 flex items-center cursor-pointer hover:bg-gray-100" onClick={() => {
                                        setSelectedLanguage(language.name);
                                        setIsOpen(false);
                                    }}>
                                        <img src={language.flagUrl} alt="" className="w-5 mr-2" />
                                        {language.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <button className="favorite-btn text-black text-3xl mr-4 ml-4">
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                    <button className="favorite-btn text-red-500 text-3xl mr-4 ml-4">
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </div>
            </div>
            
            {/* Shopping Cart always visible */}
            <div className="relative ml-30" >
                <FontAwesomeIcon icon={faShoppingCart} className="text-gray-800 text-3xl" />
                <div className="absolute -top-3 -right-3 bg-purple-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
                    2
                </div>
            </div>
        </header>
    );
};

export default Header;
