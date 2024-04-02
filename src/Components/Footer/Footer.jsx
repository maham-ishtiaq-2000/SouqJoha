import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = ({ heading, productsList, imagesSlider1, imagesSlider2 }) => {
  return (
    <div className="flex flex-col md:flex-row w-full md:px-10 mt-10 bg-gray-800 text-white">
      <div className="md:w-1/4 w-full p-3 mb-6 md:mb-0">
        <p className='text-lg mb-7 mt-3'>Newsletter</p>
        <div className="flex flex-col items-center md:items-end w-full">
          <input type="text" placeholder="Email" className="form-input px-4 py-2 border rounded w-full outline:none" />
          <button className="px-4 py-2 bg-purple text-white rounded hover:bg-purple-700 w-full">Subscribe</button>
        </div>
        <p className='text-lg mb-7 mt-10'>Follow Us</p>
        <div className="flex justify-start space-x-4 w-full">
          <a href="https://www.facebook.com" className="bg-blue-600 p-2 rounded-full">
            <FaFacebookF className="text-white text-xl" />
          </a>
          <a href="https://www.twitter.com" className="bg-blue-400 p-2 rounded-full">
            <FaTwitter className="text-white text-xl" />
          </a>
          <a href="https://www.instagram.com" className="bg-pink-600 p-2 rounded-full">
            <FaInstagram className="text-white text-xl" />
          </a>
          <a href="https://www.youtube.com" className="bg-red-600 p-2 rounded-full">
            <FaYoutube className="text-white text-xl" />
          </a>
        </div>
      </div>

      <div className="md:w-3/4 w-full p-3">
        <div className="flex flex-wrap justify-start md:justify-between">
          <ul className="list-disc space-y-2 p-4 w-1/4">
            <li className='underline'>Vendor Dashboard</li>
            <li className='underline'>My Account</li>
            <li className='underline'>My Orders</li>
            <li className='underline'>My Downloads</li>
            <li className='underline'>My Wishlist</li>
            <li className='underline'>My favorite shops</li>
            <li className='underline'>Cart</li>
            <li className='underline'>FAQ</li>
            <li className='underline'>Value-Added Tax</li>
          </ul>
          <ul className="list-disc space-y-2 p-4 w-3/4">
            <li className='underline'>Contribution Agreement</li>
            <li className='underline'>Contribution</li>
            <li className='underline'>Retrieval policy.</li>
            <li className='underline'>Privacy policy.</li>
            <li className='underline'>Terms and Conditions</li>
            <li className='underline'>Seller Services and Subscriptions Agreement</li>
            <li className='underline'>How to use?</li>
            <li className='underline'>Contact Us</li>
            <li className='underline'>Affiliate Dashboard</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
