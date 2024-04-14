import React from 'react';
import Products from '../ReusableComponents/Products';
import BlackNecklace from '/assets/blackNecklace.jpeg';

const DailyDeals = () => {

    const products = [
        {
          id: 1,
          title: 'Silver Necklace',
          description: 'Silver necklace with dark red accessory',
          imageUrl: BlackNecklace, // Replace with your image path
          priceWithVAT: 'EGP90.00 With VAT',
          originalPrice: 'EGP110.00',
          discountPercentage: 18,
        },
        {
          id: 3,
          title: 'Copper Necklace',
          description: 'Copper accessory necklace',
          imageUrl: BlackNecklace, // Replace with your image path
          priceWithVAT: 'EGP100.00 With VAT',
          originalPrice: 'EGP150.00',
          discountPercentage: 29,
        },
        {
            id: 1,
            title: 'Silver Necklace',
            description: 'Silver necklace with dark red accessory',
            imageUrl: BlackNecklace, // Replace with your image path
            priceWithVAT: 'EGP90.00 With VAT',
            originalPrice: 'EGP110.00',
            discountPercentage: 18,
          },
          {
            id: 3,
            title: 'Copper Necklace',
            description: 'Copper accessory necklace',
            imageUrl: BlackNecklace, // Replace with your image path
            priceWithVAT: 'EGP100.00 With VAT',
            originalPrice: 'EGP150.00',
            discountPercentage: 29,
          },
          {
            id: 1,
            title: 'Silver Necklace',
            description: 'Silver necklace with dark red accessory',
            imageUrl: BlackNecklace, // Replace with your image path
            priceWithVAT: 'EGP90.00 With VAT',
            originalPrice: 'EGP110.00',
            discountPercentage: 18,
          },
          {
            id: 3,
            title: 'Copper Necklace',
            description: 'Copper accessory necklace',
            imageUrl: BlackNecklace, // Replace with your image path
            priceWithVAT: 'EGP100.00 With VAT',
            originalPrice: 'EGP150.00',
            discountPercentage: 29,
          }
      ];
    
    return(
        <>
         <h2 className="text-4xl font-semibold mb-2 ml-40 mt-20 mb-5 text-purple">Daily Deals</h2>
          <Products products={products} fromDailyDeals={true}></Products>
        </>
    )
}

export default DailyDeals;