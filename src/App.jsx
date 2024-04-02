import { useState } from 'react'
import Header from '../src/Components/Header/Header';
import DailyDeals from './Components/Products/DailyDeals';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import Footer2 from './Components/Footer/Footer2';


function App() {

 
  return (
    <>
       <Header></Header>
       <DailyDeals></DailyDeals>
       <Products></Products>
       <Footer></Footer>
       <Footer2></Footer2>
    </>
  )
}

export default App
