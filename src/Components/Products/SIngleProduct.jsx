import React from 'react';
import ProductsSlider from '../ReusableComponents/ProductsSlider';
import Products from '../ReusableComponents/Products';

const SingleProduct = ({heading , productsList , imagesSlider1, imagesSlider2}) => {

    return(
        <div className="flex flex-col md:flex-row w-full py-5 mt-10">
            <div className="md:w-1/4 w-full md:p-10 mb-5 md:mb-0 mt-10 mr-10" style={{"height" : "100vh" , "width" : "50vh"}}>
            <div className="flex flex-col border-none">
                <div className="mb-60 text-white p-4">
                   <ProductsSlider sliderImages={imagesSlider1}></ProductsSlider>
                </div>
                <div className="text-white p-4 custom-slider-padding" style={{ paddingTop: '50px' }}>
                    <ProductsSlider sliderImages={imagesSlider2} />
                </div>

            </div> 
            </div>
            <div className="md:w-3/4 w-full">
                <p className='text-xl md:text-3xl text-purple underline ml-20'>{heading}</p>
                <Products products={productsList} className="mr-10"></Products>
            </div>
        </div>
    );
}

export default SingleProduct;
