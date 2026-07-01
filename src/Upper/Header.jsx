import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useCount } from "./Count";
const Header = () => {
    const navigate = useNavigate();
    const {count}=useCount();
    return (
        <div className='mt-[0px] sticky h-[150px] bg-slate-900 text-white '>
            <div className='flex justify-between pt-[20px]'>
                <div className='flex pl-[20px] '>
                    <button className='rounded-full bg-gray-700 h-[35px] w-[25px] mt-[10px] hover:text-orange-500'>
                        <i class="fa-solid fa-phone"></i>
                    </button>
                    <div>
                        <p>Call Anytime</p>
                        <p>+923940811123</p>
                    </div>
                </div>
                <p className='pl-[10px] font-bold text-xl' >&#x2124;<br></br><b>ZAZI </b><span className="font-normal">Travels & Tours</span></p>
                <div >
                    <Link to="/Cart" className=' font-bold text-xl duration-500   hover:font-bold hover:transition-all hover:text-orange-600 active:text-orange-800'><i class="fa-solid fa-cart-shopping"></i></Link>
                    <sup className='pr-[30px]'>{count}</sup>
                <Link to="/Signin" className='hover:font-bold duration-500  hover:text-orange-600 transition-all cursor-pointer h-[40px] active:text-orange-800 w-[70px] border-[2px] border-white-400 mr-[20px]'>Sign in</Link>
                </div>
            </div>
            <div className='mt-[30px] flex justify-between '>
                <nav className='flex justify-between justify-center items-center'>
                    <Link to="/Home" className='pl-[40px] hover:font-bold hover:decoration-orange-600 hover:decoration-2 hover:underline hover:underline-offset-4 duration-500 hover:text-orange-600 transition-all cursor-pointer active:text-orange-800'><i className="fa-solid fa-house-chimney"></i>Home</Link>
                    <Link to="/About" className='pl-[40px] hover:font-bold hover:decoration-orange-600 hover:decoration-2 hover:underline hover:underline-offset-4 duration-500 hover:text-orange-600 transition-all cursor-pointer active:text-orange-800'><i class="fa-solid fa-circle-info"></i>About</Link>
                    <Link to="/Contact" className='pl-[40px] hover:font-bold hover:decoration-orange-600 hover:decoration-2 hover:underline hover:underline-offset-4 duration-500 hover:text-orange-600 transition-all cursor-pointer active:text-orange-800'><i class="fa-solid fa-address-book"></i>Contact</Link>
                    <Link to="/Hotels" className='pl-[40px] hover:font-bold hover:decoration-orange-600 hover:decoration-2 hover:underline hover:underline-offset-4 duration-500 hover:text-orange-600 transition-all cursor-pointer active:text-orange-800'><i class="fa-solid fa-hotel"></i>Hotels</Link>
                    <Link to="/Tours" className='pl-[40px] hover:font-bold hover:decoration-orange-600 hover:decoration-2 hover:underline hover:underline-offset-4 duration-500 hover:text-orange-600 transition-all cursor-pointer active:text-orange-800'><i class="fa-solid fa-landmark"></i>Tours</Link>
                    <Link to="/Transports" className='pl-[40px] hover:font-bold hover:decoration-orange-600 hover:decoration-2 hover:underline hover:underline-offset-4 duration-500 hover:text-orange-600 transition-all cursor-pointer active:text-orange-800'><i class="fa-solid fa-bus"></i>Transports</Link>
                    <Link to="/Restaurants" className='pl-[40px] hover:font-bold hover:decoration-orange-600 hover:decoration-2 hover:underline hover:underline-offset-4 duration-500 hover:text-orange-600 transition-all cursor-pointer active:text-orange-800'><i class="fa-solid fa-utensils"></i>Restaurants</Link>
                    <Link to="/News" className='pl-[40px] hover:font-bold hover:decoration-orange-600 hover:decoration-2 hover:underline hover:underline-offset-4 duration-500 hover:text-orange-600 transition-all cursor-pointer active:text-orange-800'><i class="fa-solid fa-newspaper"></i>Blogs</Link>
                </nav>
                <button className=' hover:font-bold hover:bg-orange-600 transition-all duration-500  cursor-pointer rounded-xl border-[2px] border-white-400 mr-[20px] bg-gray-700' >
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input placeholder='Search' className='ml-[10px]' />
                </button>
            </div>

        </div>
    )
}

export default Header
