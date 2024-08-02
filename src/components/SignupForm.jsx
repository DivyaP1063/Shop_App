import React from "react";
import cover from "../assets/backgreen.jpg"
import { useSelector, useDispatch } from 'react-redux';
import {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
} from '../redux/Slices/Singupslice.js';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Template = () => {

  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const dispatch = useDispatch();

  const handleFirstNameChange = (e) => {
    dispatch(setFirstName(e.target.value));
  };

  const handleLastNameChange = (e) => {
    dispatch(setLastName(e.target.value));
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
    if(firstName.length===0||lastName.length===0||email.length===0||password.length===0||password.length<8){
      toast.error("Please fill the field properly");
      if(password.length<8){
        toast.error("Minimum password length must be 8");
      }
      return;
    }
    else{
      navigate('/login');
      toast.success("Account Created Succressfully");
    }

  }

  return (
    <div className="flex flex-row h-screen w-screen bg-gray-100">
    <div className="bg-white rounded p-[100px] w-[40%]">
      <div className=" text-center">
        <h2 className="text-2xl font-bold text-gray-800">VibeVogue</h2>
        <p className="text-gray-600 text-lg mt-2">
          Hi there! 👋 Get started with your free account today.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-row gap-3 w-full">
      <div className="w-[50%]">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            className="shadow  border rounded w-full py-2 px-3 text-gray-700  outline-green-900 focus:outline"
            id="firstName"
            placeholder="Enter First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="w-[50%]">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            className="shadow  border rounded w-full py-2 px-3 text-gray-700  outline-green-900 focus:outline"
            id="lastName"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
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
            className="shadow border rounded w-full py-2 px-3 text-gray-700 outline-green-900 focus:outline"
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
            Sign Up
          </button>
        </div>
      </form>

    </div>
    <img className="w-[60%]" src={cover} alt=""/> 

  </div>
  );
};

export default Template;