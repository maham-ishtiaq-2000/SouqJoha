import React from "react";
import { Routes, Route } from "react-router-dom";
import MainScreen from './Components/Screens/MainScreen';
import ProductDetailScreen from "./Components/Screens/ProductDetailScreen";


const AppRoutes = () => {
    
    return (
        <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/productDetailScreen/:id" element={<ProductDetailScreen />} />
        </Routes>
    );
};

export default AppRoutes;
