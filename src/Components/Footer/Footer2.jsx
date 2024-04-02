import React from 'react';
import Aman from '../../assets/aman.png';
import Masary from '../../assets/masary.png';
import Accept from '../../assets/accept.png';
import MasterCard from '../../assets/masterCard.png';
import Visa from '../../assets/visa.png';
import GooglePlayLogo from '../../assets/googlePlay.png';
import Logo from '../../assets/SouqLogo.png';

const Footer2 = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-red-800 text-white">
        <div className="md:w-full w-full md:mb-0 bg-yellow">
          <div className="flex items-center">
            <img src={Aman} alt="Aman" className="h-12 w-12 ml-60" /> 
            <img src={Masary} alt="Masary" className="h-12 w-12" />
            <img src={Accept} alt="Accept" className="h-12 w-12" />
            <img src={Visa} alt="Visa" className="h-12 w-20" />
            <img src={MasterCard} alt="MasterCard" className="h-12 w-20" />
            <img src={GooglePlayLogo} alt="GooglePlayLogo" className="hidden md:block h-20 w-65 ml-40" />
            <img src={Logo} alt="Logo" className="hidden md:block h-25 w-40 ml-40" />
        </div>   
        <div className="flex w-full justify-center mt-4 mb-2 md:mt-0">
            <p className='text-black font-semibold'>Copyright © Souq Joha 2019 - All rights reserved.</p>   
        </div>
        </div>
    </div>
  );
};

export default Footer2;
