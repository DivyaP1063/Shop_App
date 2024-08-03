import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice';
const Cartitems = ({post})=>{
    const dispatch=useDispatch();

    function removeFromCart(){
        dispatch(remove(post.id));
        toast.error("Item Removed from Cart")
    }
  return (
    <div className='w-full '>
        <div className='w-full flex flex-row gap-3 p-2'>
            <div className='w-[30%] my-auto'>
                <img className='h-[150px] object-scale-down' src={post.image} alt='img'></img>
            </div>

            <div className='w-[70%] flex flex-col gap-3'>
                <h1 className='text-[17px] font-bold text-slate-600'>{post.title}</h1>
                <p className='text-[15px] '>{post.description.substr(0,85)}...</p>
                <div className='flex flex-row justify-between'>
                    <span className='text-[14px] text-green-500 font-bold'>${post.price}</span>
                    <button onClick={removeFromCart} className='w-[30px] h-[30px] bg-red-200 rounded-full'>
                    <MdDeleteOutline fontSize='1.3rem' color='red' className='mx-auto' />
                    </button>
                    
                </div>
            </div>
        </div>
        <div className='w-full h-[2px] bg-gray-500'></div>
    </div>
  )
}

export default Cartitems;
