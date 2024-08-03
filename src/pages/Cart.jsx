import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Cartitems from '../components/Cartitems';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
function Cart(){
  const {cart,sidebar}=useSelector((state)=>state);
  const [totalamount,setTotalamount]=useState(0);

  useEffect(()=>{
    setTotalamount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return (
    <div>
      {
        sidebar && <div className='absolute h-screen w-screen z-10 bg-black bg-opacity-30'></div>
      }
            <Navbar/>
            <SideBar/>
      <div className='w-full mt-4'>
      {
        cart.length>0?(
          <div className='w-[880px] max-lg:w-full max-lg:p-4  mx-auto flex flex-row max-lg:flex-col gap-3 '>
          <div className='w-[60%] max-lg:w-full'>
            {
              cart.map((post)=>{
                return <Cartitems key={post.id} post={post}/>
            })
            }
          </div>
          <div className='w-[40%] max-lg:w-full  border-2 rounded lg:h-[650px] p-3'>
          <div className='text-green-600 text-[18px] font-bold'>YOUR CART</div>
            <div className='text-green-600 text-[30px] font-bold leading-[20px]'>SUMMARY</div>
            <p className='mt-5'>
             <span className='text-[18px] font-bold text-slate-600'>Total Items: {cart.length}</span>
            </p>
          
          <div className='lg:mt-[440px] w-full flex flex-col gap-y-4'>
            <p className='text-[18px] font-bold text-slate-600'>Total Amount: <span className='text-black font-extrabold'>${Math.round(totalamount)}</span></p>
            <button className=' w-[75%] max-lg:w-full bg-green-600 text-white rounded-md font-bold py-2 px-4'>CheckOut Now</button>
          </div>

          </div>
          </div>) :

          (<div className='w-[880px] max-lg:w-full h-[550px] mx-auto flex flex-col justify-center items-center gap-3'>
          <h1 className='text-[20px] font-bold text-slate-600'>Cart Empty</h1>
          <NavLink to='/home'>
          <button className='bg-green-600 text-white rounded-md font-bold py-2 px-4
          hover:bg-green-400'>Shop Now</button>
          </NavLink>
          </div>
        )
      }
    </div>
    </div>

  )
}

export default Cart;
