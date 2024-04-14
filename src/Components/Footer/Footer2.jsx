import React from 'react';
import Aman from '/assets/aman.png';
import Masary from '/assets/masary.png';
import Accept from '/assets/accept.png';
import MasterCard from '/assets/masterCard.png';
import Visa from '/assets/visa.png';
import GooglePlayLogo from '/assets/googlePlay.png';
import Logo from '/assets/SouqLogo.png';

const Footer2 = () => {
  return (
    <div className="bg-yellow text-white">
      <div className="flex flex-wrap justify-center md:justify-start md:flex-nowrap items-center p-4 md:p-6">
        <img src={Aman} alt="Aman" className="h-10 w-10 mx-2 my-1" />
        <img src={Masary} alt="Masary" className="h-10 w-10 mx-2 my-1" />
        <img src={Accept} alt="Accept" className="h-10 w-10 mx-2 my-1" />
        <img src={Visa} alt="Visa" className="h-10 w-18 mx-2 my-1" />
        <img src={MasterCard} alt="MasterCard" className="h-10 w-18 mx-2 my-1" />
        {/* Additional left margin for the Google Play logo at larger screens */}
        <img src={GooglePlayLogo} alt="GooglePlayLogo" className="h-16 w-52 mx-2 my-1 lg:ml-80 md:mx-3 lg:mx-4"/>
        <img src={Logo} alt="Logo" className="h-30 w-32 mx-2 my-1 lg:ml-80 md:mx-3 lg:mx-4" />
      </div>
      <div className="flex w-full justify-center mt-2 mb-1">
        <p className='text-black text-sm md:text-base font-semibold'>Copyright © Souq Joha 2019 - All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer2;
