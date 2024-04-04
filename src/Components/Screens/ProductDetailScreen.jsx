import { useState } from 'react'
import Header from '../Header/Header';
import ProductDetail from '../ProductsDetails/ProductDetail';
import Footer from '../Footer/Footer';
import Footer2 from '../Footer/Footer2';


const ProductDetailScreen = () => {
  return(
    <>
      <Header screen="productDetailScreen"></Header>
      <ProductDetail></ProductDetail>
      <Footer></Footer>
      <Footer2></Footer2>
  </>
  )
}
 
export default ProductDetailScreen;
