import React from "react";
import { Routes, Route } from "react-router-dom";
import MainScreen from './Components/Screens/MainScreen';
import ProductDetailScreen from "./Components/Screens/ProductDetailScreen";
import StoreScreen from "./Components/Screens/StoreScreen";


const AppRoutes = () => {
    
    return (
        <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/productDetailScreen/:id" element={<ProductDetailScreen />} />
            <Route path="/storeScreen/:name" element={<StoreScreen />} />
        </Routes>
    );
};

export default AppRoutes;
