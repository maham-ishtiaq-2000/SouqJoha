import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Footer2 from '../Footer/Footer2';
import StoreFullScreen from '../Stores/StoreFullScreen';
import StoreProducts from '../Stores/StoreProducts';

const StoreScreen = () => {
  // State to hold the full-screen status
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Check if the screen is full width and update the state
  const checkFullScreen = () => {
    // The condition checks if the window width is at least 95% of the screen width.
    const threshold = window.screen.width * 0.95;
    setIsFullScreen(window.innerWidth >= threshold);
  };

  // Effect to add event listener to window resize
  useEffect(() => {
    // Make sure we are in the browser environment
    if (typeof window !== 'undefined') {
      checkFullScreen(); // Check full screen on initial mount

      // Add event listener for resize events
      window.addEventListener('resize', checkFullScreen);

      // Clean up the event listener when the component unmounts
      return () => window.removeEventListener('resize', checkFullScreen);
    }
  }, []);

  return (
    <>
      <Header screen="productDetailScreen" />
      {isFullScreen && <StoreFullScreen />}
      <StoreProducts></StoreProducts>
      <Footer />
      <Footer2 />
    </>
  );
};

export default StoreScreen;
