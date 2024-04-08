import React from 'react';
import TopOfferImg from '../../../public/assets/topOfferImg.png';

const TopOffers = () => {
  return (
    <div className="w-full bg-white ml-5">
        <img src={TopOfferImg} alt="Product" className="w-20 h-20" />
        <p className="text-sm font-semibold mt-1">
        3D Sleep Eye Mask Eye-shade Cover Travel Comfortable Aid Sleeping Eye Blindfold Care Tool
        </p>
        <p className="text-sm text-purple mt-2">
        EGP135.00 With VAT
        </p>
        <button className="bg-purple text-white p-2 rounded mt-2">
        Read more
        </button>
    </div>
  );
};



export default TopOffers;
