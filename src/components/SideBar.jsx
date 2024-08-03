import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoChevronBackOutline } from "react-icons/io5";
import { useDispatch} from 'react-redux';
import { change } from '../redux/Slices/Menucheck';
import { FaUserCircle } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { TbJewishStarFilled } from "react-icons/tb";
import { RiContactsFill } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";

const SideBar = () => {

  const UserName= useSelector((state)=>state.username.Name)
    const {sidebar}=useSelector((state)=>state);
    const dispatch=useDispatch();
  return (
    <div className={` border-r-4 rounded-r shadow-lg shadow-zinc-950 border-lime-600 flex flex-col gap-5 bg-white z-20 fixed top-0 left-0 max-lg:w-[60%] w-[20%] 
    h-screen transition-all duration-200 ease-in ${sidebar? 'translate-x-0 ':'translate-x-[-100%]' }`}>
        <div className='flex flex-col gap-2 bg-green-900 p-[12.8px]'>
            <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center gap-4'>
            <FaUserCircle color='white' fontSize='2.4rem' />
            <span className='text-white font-bold text-[20px]'>{UserName}</span>
            </div>
            <button  onClick={() => dispatch(change())}>
            <IoChevronBackOutline color='white' fontSize='1.7rem' />
            </button>
            
            </div>

        </div>
        <NavLink to='/wishlist'>
        <div className='flex flex-row gap-5 items-center p-[12.8px]'>
        <TbJewishStarFilled color='orange' fontSize='1.7rem'  />
        <span className='text-green-900 font-semibold text-[20px]'>WishList</span>
        </div>
        </NavLink> 
           <NavLink to='/logout'>
        <div className='flex flex-row gap-5 items-center p-[12.8px]'>
        <FcAbout color='black' fontSize='1.7rem'  />
        <span className='text-green-900 font-semibold text-[20px]'>About</span>
        </div>
        </NavLink>

        <NavLink to='/logout'>
        <div className='flex flex-row gap-5 items-center p-[12.8px]'>
            <RiContactsFill style={{ color: 'rgb(20, 83, 45)' }} fontSize='1.7rem' />
           <span className='text-green-900 font-semibold text-[20px]'>Contact</span>
        </div>
        </NavLink>
        <NavLink to='/login'>
        <div className='flex flex-row gap-5 items-center p-[12.8px]'>
            <LuLogOut color='red' fontSize='1.7rem' />
           <span className='text-green-900 font-semibold text-[20px]'>Logout</span>
        </div>
        </NavLink>
    </div>
  )
}

export default SideBar;
