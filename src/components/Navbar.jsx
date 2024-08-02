import React from 'react'
import { BiHomeAlt2 } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GiHamburgerMenu } from "react-icons/gi";
import { change } from '../redux/Slices/Menucheck';

function Navbar(){
  const {cart}=useSelector((state)=>state);
  const dispatch=useDispatch();
  return (
    <div className='relative w-full bg-green-900 '>
    <button className='absolute top-[32%] left-[15px]' onClick={() => dispatch(change())}><GiHamburgerMenu fontSize='1.5rem' color='white' /></button>
      <div className='w-[880px] mx-auto flex flex-row justify-between items-center py-2'>
        <NavLink to='/home'>
        <div className='flex flex-row gap-x-1 items-center justify-center'>
            <FaShoppingBag fontSize='3rem' color='white' />
            <span className='text-white text-semibold text-[30px]'>VibeVogue</span>
        </div>
        </NavLink>
    

        <div className='relative flex flex-row gap-x-10 items-center justify-center'>
        {
          cart.length>0 && <div className='absolute bg-orange-500 text-[10px] text-white w-[15px] h-[15px] rounded-full top-[-5px] left-[78px] flex flex-row justify-center items-center'>{cart.length}</div>
        }
        
        <NavLink to='/home'><BiHomeAlt2 fontSize='1.5rem' color='white' /></NavLink>
        <NavLink to='/cart'><FaCartShopping fontSize='1.5rem' color='white'/></NavLink>
        
        
        </div>
      </div>
    </div>
  )
}

export default Navbar;
