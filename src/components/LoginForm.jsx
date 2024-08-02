import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import cover from "../assets/backgreen.jpg"
import {
  setName,
  setEmail,
  setPassword,
  login,
  resetFields 
} from '../redux/Slices/LoginSlice';
import { setUserName } from "../redux/Slices/Username";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Template = () => {

  const Name = useSelector((state) => state.olduser.Name);
  const email = useSelector((state) => state.olduser.email);
  const password = useSelector((state) => state.olduser.password);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
    dispatch(setUserName(e.target.value));
  };


  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Name.length===0||email.length===0||password.length===0||password.length<8){
      toast.error("Please fill the field properly");
    }
    else{
    navigate('/home');
    toast.success("Logged In Succressfully");
    dispatch(login());
    dispatch(resetFields());
    }
  }

  return (
    <div className="flex flex-row h-screen w-screen bg-gray-100">
    <div className="bg-white rounded p-[100px] w-[40%]">
      <div className=" text-center">
        <h2 className="text-2xl font-bold text-gray-800">VibeVogue</h2>
        <p className="text-gray-600 text-lg mt-2">
          Hi there! 👋 Get started By Logging In.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      <div >
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            User Name
          </label>
          <input
            type="text"
            className="shadow  border rounded w-full py-2 px-3 text-gray-700  outline-green-900 focus:outline"
            id="firstName"
            placeholder="Enter First Name"
            value={Name}
            onChange={handleNameChange}
          />
        </div>


        <div className="">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            className="shadow border rounded w-full py-2 px-3 text-gray-700  outline-green-900 focus:outline"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            className="shadow border rounded w-full py-2 px-3 text-gray-700  outline-green-900 focus:outline"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <button
            type="submit"
            className="w-full bg-green-900 hover:bg-green-500 text-white font-bold py-2 px-4 rounded "
          >
            Login
          </button>
        </div>
      </form>

    </div>
    <img className="w-[60%]" src={cover} alt=""/> 

  </div>
  );
};

export default Template;