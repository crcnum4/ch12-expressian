import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
// import components to show
import Register from '../Auth/Register';
import Login from '../Auth/Login';

const AppRouter = () => {
  return (
    <div style={{width: "100%", flexDirection: 'column'}}>
      {/* Any components that should be always visible go here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  ) 
}

export default AppRouter;