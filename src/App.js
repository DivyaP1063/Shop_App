import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Toaster } from "react-hot-toast";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist"
function App() {
  return (
    <div className="relative App min-h-screen max-w-[100vw] overflow-hidden">
    <Toaster/>
      <Routes>
      <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/signup" element={<Signup/>} />
        <Route path="/wishlist" element={<Wishlist/>} />  
 
      </Routes>
    </div>
  )
}

export default App;
