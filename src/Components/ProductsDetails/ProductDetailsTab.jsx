import React, { useState } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './ProductDetailsTab.css'; 

const ProductDetailsTab = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const tabs = [
    { id: 'description', title: 'Description' },
    { id: 'reviews', title: 'Reviews (0)' },
    { id: 'offers', title: 'More Offers' },
    { id: 'policies', title: 'Store Policies' },
    { id: 'inquiries', title: 'Inquiries' },
  ];

  const tabIndex = tabs.findIndex(t => t.id === activeTab);
  const highlightWidth = 100 / tabs.length;

  // Define the content for each tab
  const tabContent = {
    description: <p className='ml-40 mt-20 mb-20'>Silver necklace with dark red accessory</p>,
    reviews: <div className='ml-40'>
      <h2 className='text-2xl'>Reviews</h2>
      <p className='mt-7 mb-7'>There are no reviews yet.</p>
      <p>Be the first to review “Silver necklace with dark red accessory”</p>
      <p>You must be logged in to post a review.</p>
      <p className='mt-10 bg-lightGray text-white' style={{"width" : "180px"}}>Login with your Social ID</p>
      <div className="flex items-center space-x-2 mt-5">
          <input
            id="privacyPolicy"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            htmlFor="privacyPolicy"
            className="text-gray-700 select-none"
            style={{"fontSize" : "10px"}}
          >
            I agree to my personal data being stored and used as per <span className='text-blue-500'>Privacy Policy</span>
          </label>
    </div>
      <div className="flex mt-2 gap-2">
        <div className="bg-blue-600 ">
          <FaFacebookF className="text-white text-4xl m-2" />
        </div>

         <div className="bg-white border border-blue-500 shadow-md">
          <FcGoogle className="text-4xl m-2" />
        </div>

        <div className="bg-pink-600 ">
          <FaInstagram className="text-white text-4xl m-2" />
        </div>
      </div>
    </div>,
    offers: <p className='ml-40 mt-20 mb-20'>No more offers for this product!</p>,
    policies: <p></p>,
    inquiries: <div className='ml-40'>
       <h2 className='text-2xl'>General Inquiries</h2>
       <p className='mt-7 mb-7'>There are no inquiries yet.</p>
    </div>,
  };

  return (
    <>
      <div className="tab-container ml-40 mt-20">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </div>
        ))}
        <div className="tab-highlight" style={{ left: `${tabIndex * highlightWidth}%`, width: `${highlightWidth}%` }} />
      </div>
      <div className="tab-content mt-4">
        {tabContent[activeTab]}
      </div>
    </>
  );
};

export default ProductDetailsTab;
