import React from 'react'
import { useState,useEffect } from 'react';
import Spinner from '../components/Spinner';
import Products from '../components/Products';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import { useSelector } from 'react-redux';

function Home(){
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    }
    catch(error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])

  const {sidebar}=useSelector((state)=>state);

  return (
    <div className='relative'>
      {
        sidebar && <div className='absolute h-screen w-screen z-10 bg-black bg-opacity-30'></div>
      }
      <Navbar/>
      <SideBar/>
      <div className='w-full flex flex-col items-center px-4 gap-4 mt-2'>
      <h2 className=' text-center text-green-900 text-[30px] font-bold'>All Products On OFFER!!</h2>
      <div className='lg:w-[880px] max-lg:w-full mx-auto flex flex-wrap gap-x-3 gap-y-7 '>
      {
        loading?(<Spinner/>):(
          posts.map((post)=>(
            <Products key={post.id} post={post}/>
          ))
        )
      }
    </div>
      </div>

    </div>

  )
}

export default Home;
