import React from 'react'
import { useState,useEffect } from 'react';
import Spinner from '../components/Spinner';
import Products from '../components/Products';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';

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
  return (
    <div>
      <Navbar/>
      <SideBar/>
      <div className='w-full'>
        <h2 className=' text-center text-green-900 text-[30px] mt-1 font-bold'>All Products On OFFER!!</h2>
      </div>
      <div className='w-[880px] mx-auto flex flex-row flex-wrap gap-x-3 gap-y-7 mt-10'>
      {
        loading?(<Spinner/>):(
          posts.map((post)=>(
            <Products key={post.id} post={post}/>
          ))
        )
      }
    </div>
    </div>

  )
}

export default Home;
