import React from 'react'
import Nike from "../assets/shoesP.jpg"
import Headphone from "../assets/headphone.jpg"
import hero from "../assets/hero-1.png"
import partner from "../assets/partner1.png"
import shoes from "../assets/shoes.jpg"
import clothes from "../assets/clothes.jpg"
import bag from "../assets/bag.jpg"
import laptop from "../assets/laptop.jpg"
import { FaShoppingBag } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
const Landing = () => {
  return (
    <div className="  bg-green-100 h-screen w-full overflow-hidden">
    <div className='bg-green-900 py-2 text-white text-center '>
        <p >
            Get A 50% discount on all products. 
        </p>
    </div>
      <header className=" py-2 px-[50px]">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className='flex flex-row justify-center gap-2 items-center'>
          <FaShoppingBag fontSize='3rem' style={{ color: 'rgb(20, 83, 45)' }} />
            <span className='text-2xl font-bold text-green-900'>VibeVogue</span>
          </div>
          <nav className="flex flex-row justify-even text-lg font-semibold items-center space-x-6">
            <NavLink href="/" className="  hover:text-green-400">
              What New!
            </NavLink>
            <NavLink href="/" className="  hover:text-green-400">
              About
            </NavLink>
            <a href="/" className="  hover:text-green-400">
              Contact
            </a>
            <NavLink to='/signup'>
            <button className="bg-white text-green-900 font-medium py-2 px-4 rounded-2xl hover:bg-green-500">
              Sign Up
            </button>
            </NavLink>
            <NavLink to='/login'>
            <button className="bg-green-900 text-white font-medium py-2 px-4 rounded-2xl hover:bg-green-500">
              Login
            </button>
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 mt-2">
        <div className="relative left-[50px] w-[600px]">
        <span className="text-xl font-bold text-green-900  bg-white rounded-lg p-1">
              #1 E-commerce Platform 2023
            </span>
          <h1 className="text-[80px] font-bold text-green-900 leading-[80px] ">
            Explore, shop, repeat again.
          </h1>
          <p className=" text-slate-500 font-semibold mt-4">
          VibeVogue is a driving force behind the dreams of emerging entrepreneurs, a trusted partner for industry leaders.
          </p>
          <NavLink to='/login'>
          <button className="bg-white text-green-900 font-semibold mt-2 py-2 px-5 rounded-2xl  hover:bg-green-900">
            Login
          </button>
          </NavLink>

        </div>


          <div className="absolute w-[250px] h-[250px]  right-[230px] top-[28%] bg-white rounded-2xl  p-4">
            <div className="rounded-2xl ">
            <img className='rounded-2xl  w-full h-[170px]' src={Nike} alt=''></img>
              <p className=" font-medium text-sm">
                Nike Zoom Overpower
              </p>
            </div>
            <div className='flex flex-row justify-between'>
            <h3 className="text-lg font-bold text-gray-900">
              $45.00
            </h3>
            
              <button className="bg-green-900 text-white  py-1 px-2 rounded-2xl hover:bg-green-900">
                Buy
              </button>
            </div>
            </div>
            <div className="absolute w-[300px] h-[250px]  right-[230px] bottom-[10px] bg-white rounded-2xl  p-4">
            <div className="rounded-2xl ">
            <img className='rounded-2xl w-full h-[170px]' src={Headphone} alt=''></img>
              <p className=" font-medium text-sm">
                 Dolby Headphone
              </p>
            </div>
            <div className='flex flex-row justify-between'>
            <h3 className="text-lg font-bold text-gray-900">
              $90.00
            </h3>
            
              <button className="bg-green-900 text-white  py-1 px-2 rounded-2xl hover:bg-green-900">
                Buy
              </button>
            </div>
            </div>
          
          <div className="flex flex-col gap-3 absolute right-[10px] w-[200px] top-[35%] bg-white rounded-2xl  p-4">
          <div className='w-[90%] absolute top-[45px] left-[10px] h-[1.5px] bg-gray-900'></div>
            <div className="flex justify-between items-center ">
              <h3 className=" font-bold text-gray-900">Product</h3>
              <h3 className=" font-bold text-gray-900">Price</h3>
            </div>
            <div className="flex flex-row justify-between items-center ">
            <div className='flex flex-row justify-between gap-2 items-center'>
            <img className='w-[30px] rounded-md aspect-square' src={bag} alt="Shoes"  />
            <p className=" text-sm font-semibold text-gray-900">Bag</p>
            </div>

              <p className=" text-gray-900">$20</p>
            </div>
            <div className="flex flex-row justify-between items-center ">
            <div className='flex flex-row justify-between gap-2 items-center'>
            <img className='w-[30px] aspect-square' src={shoes} alt="Shoes"  />
            <p className=" text-sm font-semibold text-gray-900">Shoes</p>
            </div>

              <p className=" text-gray-900">$20</p>
            </div>
            <div className="flex flex-row justify-between items-center ">
            <div className='flex flex-row justify-between gap-2 items-center'>
            <img className='w-[30px] aspect-square' src={laptop} alt="Shoes"  />
            <p className=" text-sm font-semibold text-gray-900">Laptop</p>
            </div>

              <p className=" text-gray-900">$20</p>
            </div>
            <div className="flex flex-row justify-between items-center ">
            <div className='flex flex-row justify-between gap-2 items-center'>
            <img className='w-[30px] aspect-square' src={clothes} alt="Shoes"  />
            <p className=" text-sm font-semibold text-gray-900">Clothes</p>
            </div>

              <p className=" text-gray-900">$20</p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-1 bg-white rounded-2xl  p-4 absolute w-[350px] right-[590px] bottom-[250px]">
            <div className='w-[40%]'>
              <img className=' w-full h-[60px]' src={partner} alt="Logos"  />
            </div>
            <p className="text-center w-[60%] text-[20px] text-gray-900">Partnering with many e-commerce</p>
          </div>


          <div className="flex flex-col justify-center items-center bg-green-900 rounded-2xl  p-6 text-center absolute h-[250px] w-[450px] right-[550px] bottom-[-20px]">
            <h2 className="text-[55px] font-bold text-white mb-4">50x</h2>
            <p className="text-lg text-white">New customer every week</p>
          </div>
          <div className="bg-white rounded-2xl p-4 absolute right-[10px] w-[200px] bottom-[115px]">
            <h2 className=" font-bold text-gray-900 text-center mb-2">Sales </h2>
            <div className="flex flex-col gap-2 ">
              <div className='w-full flex flex-row justify-between items-center'>
                <p className="text-sm text-gray-900">New</p>
                <div className="bg-gray-300 rounded-2xl h-4 w-[80%]">
                  <div className="bg-green-900 rounded-2xl h-4 w-[80%]" ></div>
                </div>
              </div>
              <div className='w-full flex flex-row justify-between items-center'>
                <p className="text-sm text-gray-900">Old</p>
                <div className="bg-gray-300 rounded-2xl h-4 w-[80%]">
                  <div className="bg-green-900 rounded-2xl h-4 w-[60%]"></div>
                </div>
              </div>
            </div>
          </div>

            <img className='rounded-2xl bg-green-900  absolute w-[450px] left-[50px] bottom-[-10px]' src={hero} alt=''></img>
          
      </main>
    </div>
  )
}

export default Landing;