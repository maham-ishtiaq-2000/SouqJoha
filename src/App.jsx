import { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';


function App() {

 
  return (
    <>
       <Router>
          <AppRoutes></AppRoutes>
       </Router>
    </>
  )
}

export default App
