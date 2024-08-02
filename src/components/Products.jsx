import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { add,remove } from '../redux/Slices/CartSlice';
import { addW,removeW } from '../redux/Slices/WishlistSlice';
import { FcLikePlaceholder ,FcLike } from "react-icons/fc";

const Products = ({post}) => {
    let desc=post.description;
    let title=post.title; 
    const {cart,wish}=useSelector((state)=>state);
    const dispatch=useDispatch();

    function removeFromCart(){
        dispatch(remove(post.id));
        toast.error("Item Removed to Cart")
    }
    function addToCart(){
        dispatch(add(post));
        toast.success("Item Added to Cart")
    }
    function removeFromWish(){
        dispatch(removeW(post.id));
        toast.error("Item Removed From Wishlist")
    }
    function addToWish(){
        dispatch(addW(post));
        toast.success("Item Added to Wishlist")
    }
  return (
    <div className='relative bg-white w-[211px] h-[300px] flex flex-col border-2 border-gray-100 shadow-xl rounded-xl p-3 gap-2 hover:scale-110 transition-all duration-100 ease-in'>
        <div className='absolute top-[10px] right-[20px]'>
        {
        wish.some((p)=>p.id===post.id)?(<button onClick={removeFromWish}><FcLike fontSize='1.2rem' /></button>):
                    (<button onClick={addToWish}><FcLikePlaceholder fontSize='1.2rem' /></button>)
        }
        </div>
        <div className='px-2'>
            <p className='text-[14px] px-3 font-bold text-slate-600'>{title.substr(0,14)}...</p>
        </div>
        <div className='px-2 text-gray-500'>
            <p className='text-[9px] px-3'>{desc.substr(0,60)}...</p>
        </div>
        <div className='w-full h-[200px] flex flex-row justify-center items-center'>
            <img className=' h-[150px] object-scale-down' src={post.image} alt='img'></img>
        </div>
        <div className='flex flex-row justify-between items-center '>
        <div>
            <p className='text-[14px] text-green-500 font-bold'>${post.price}</p>
        </div>
        <div>
            <button className='border-2 rounded-lg py-1 px-2 text-[11px] font-bold text-slate-600 border-slate-600 hover:bg-slate-600 hover:text-white'>
                {
                    cart.some((p)=>p.id===post.id)?(<button onClick={removeFromCart}>REMOVE ITEM</button>):
                    (<button onClick={addToCart}>ADD TO CART</button>)
                }
            </button>
        </div>
        </div>

    </div>
  )
}

export default Products;
