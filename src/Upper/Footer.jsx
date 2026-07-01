import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="bg-gray-800 text-white mb-[0px] left-0 w-full h-[530px] text-center py-3">
      <div className='grid grid-cols-4 mt-[20px] ml-[100px] mr-[100px]'>
        <div >
          <p className='font-bold'>Company</p>
          <ul className='font-light text-sm mt-[10px]'>
            <li><Link to="/About" className='hover:font-bold hover:text-orange-500 transition-all cursor-pointer '><i class="fa-solid fa-angle-right"></i>About us</Link></li>
            <li><Link to="/News" className='hover:font-bold hover:text-orange-500 transition-all cursor-pointer'><i class="fa-solid fa-angle-right"></i>News</Link></li>
            <li><Link to="/FAQ" className='hover:font-bold hover:text-orange-500 transition-all cursor-pointer'><i class="fa-solid fa-angle-right"></i>FAQ</Link></li>
            <li><Link to="/Contact" className='hover:font-bold hover:text-orange-500 transition-all cursor-pointer'><i class="fa-solid fa-angle-right"></i>Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className='font-bold'>Explore</p>
          <ul className='font-light text-sm mt-[10px]'>
            <li><Link to="/Tours" className='hover:font-bold hover:text-orange-500 transition-all cursor-pointer'><i class="fa-solid fa-location-dot"></i>Tour listings</Link></li>
            <li><Link to="/Tours" className='hover:font-bold hover:text-orange-500 transition-all cursor-pointer'><i class="fa-solid fa-location-dot"></i>Destination</Link></li>
            <li><Link to="/FAQ" className='hover:font-bold hover:text-orange-500 transition-all cursor-pointer'><i class="fa-solid fa-circle-question"></i>FAQ</Link></li>
          </ul>
        </div>
        <div>
          <p className='font-bold'>Quick Links</p>
          <ul className='font-light text-sm mt-[10px]'>
            <li><Link to="/Home" className='hover:font-bold hover:text-orange-500 transition-all cursor-pointer'><i class="fa-solid fa-house"></i>Home</Link></li>
            <li><Link to="/About" className='hover:font-bold hover:text-orange-500 transition-all cursor-pointer'><i class="fa-solid fa-circle-info"></i>About us</Link></li>
            <li><Link to="/Contact" className='hover:font-bold hover:text-orange-500 transition-all cursor-pointer'><i class="fa-solid fa-phone"></i>Contact us</Link></li>
          </ul>
        </div>
        <div>
          <p className='font-bold'>Contact</p>
          <ul className='font-light text-sm mt-[10px]'>
            <li><p className='hover:font-bold hover:text-orange-500 transition-all cursor-pointer'><i class="fa-solid fa-location-dot"></i>Abdullah City Faisalabad</p></li>
            <li><p className='hover:font-bold hover:text-orange-500 transition-all cursor-pointer'><i class="fa-solid fa-phone"></i>+923940811123</p></li>
            <li><p className='hover:font-bold hover:text-orange-500 transition-all cursor-pointer'><i class="fa-solid fa-envelope"></i>example@gmail.com</p></li>
          </ul>
        </div>
      </div>
      <div className='bg-gray-900 w-[900px] h-[200px] ml-[170px] mt-[100px] flex justify-between '>
        <div>
          <p className='pl-[10px] font-bold text-xl' >&#x2124;<br></br><b>ZAZI </b><span className="font-normal">Travels & Tours</span></p>
          <p className='font-light text-sm w-[250px] mt-[20px]'>Explore amazing destinations, enjoy unforgettable adventures, and create lifelong memories with every journey.</p>
        </div>
        <div className='mt-[80px] w-[700px]' >
          <p className='font-bold text-xl'>Subscribe to our Newsletter</p>
          <button className='rounded-ml border-[2px] h-[50px] w-[350px] ml-[90px]'>
            <input placeholder='Enter your E-mail' className='border-none focus:outline-none focus:ring-0 w-[250px]'/>
            <button className='bg-orange-500 mr-[10px] w-[40px] h-[40px] ml-[40px]'><i class="fa-solid fa-paper-plane"></i></button>
            
          </button>
        </div>

      </div>
       <hr className="border-t border-olive-500 my-4 ml-[170px] mr-[30px] mr-[150px]" />
      <div className='flex justify-between mx-[170px] font-light text-sm'>
        <p>© 2026 Zazi. All Rights Reserved</p>
        <p>Powered by @zazi123</p>
      </div>
    </div>
  )
}

export default Footer
