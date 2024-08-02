import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Wishlistitems from '../components/Wishlistitems';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
function Cart(){
  const {wish}=useSelector((state)=>state);

  return (
    <div>
            <Navbar/>
            <SideBar/>
            <div className='w-full mt-4'>
      {
        wish.length>0?(
          <div className='w-[880px] mx-auto '>
          <div className='w-full'>
            {
              wish.map((post)=>{
                return <Wishlistitems key={post.id} post={post}/>
            })
            }
          </div>
          </div>) :

          (<div className='w-[880px] h-[550px] mx-auto flex flex-col justify-center items-center gap-3'>
          <h1 className='text-[20px] font-bold text-slate-600'>WishList Empty</h1>
          <NavLink to='/home'>
          <button className='bg-green-600 text-white rounded-md font-bold py-2 px-4
          hover:bg-green-400'>Explore Now</button>
          </NavLink>
          </div>
        )
      }
    </div>
    </div>

  )
}

export default Cart;