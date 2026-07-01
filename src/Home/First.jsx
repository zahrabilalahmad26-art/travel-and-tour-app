import React, { useState } from 'react'
import vid from '../assets/v2.mp4'
import {tour} from '../Tours/Tours.jsx'
import { Link, useNavigate } from 'react-router-dom';

const First = () => {
    const [destination, setDestination] = useState("");
    const [amount, setAmount] = useState("");
    const [days, setDays] = useState("");
    const [guest, setGuest] = useState("");
    const navigate=useNavigate();
  const handleSearch = () => {
  const filtered = tour.filter((tour) => {
    return (
      (destination === "" || tour.location.includes(destination)) &&
      (amount === "" || Number(tour.amount.replace("$", "")) <= Number(amount)) &&
      (days === "" || tour.duration.startsWith(days)) &&
      (guest === "" || tour.person.startsWith(guest))
    );
  });
      navigate("/Search", {
    state: { tours: filtered },
  });
};
    return (
        <>
            <div className='h-[400px] w-full' >
                <video className='h-[500px] w-full object-cover relative' autoPlay loop muted src={vid} />
                <div className="absolute inset-0 flex flex-col justify-center px-16 mt-[150px] ml-[100px] text-white z-10">
                    <p className="text-4xl font-bold w-[450px]">
                        Plan tours to dream locations in just a second
                    </p>
                    <p className="mt-4 text-lg w-[500px]">
                        Explore amazing destinations, enjoy unforgettable adventures, and create lifelong memories with every journey.
                    </p>
                </div>
                <div className="absolute left-1/2 ml-[50px] bottom-[-50px] -translate-x-1/2 w-[1000px] h-[120px] flex bg-slate-800 rounded-xl shadow-lg z-20">
                    <div className='py-[25px]  w-[200px] pl-[50px] text-white'>
                        <p><i class="fa-solid fa-location-dot"></i>Destination</p>
                        <select value={destination} onChange={(e)=>setDestination(e.target.value)}  className="border-none outline-none pl-[5px] mt-[8px] ml-[10px] text-white bg-slate-900">
                             <option value="">All Destinations</option>
                            <option>Paris</option>
                            <option>Dubai</option>
                            <option>London</option>
                            <option>Tokyo</option>
                        </select>
                    </div>
                    <div className='py-[25px]  w-[200px] pl-[50px] text-white'>
                        <p><i class="fa-solid fa-dollar-sign"></i>Amount</p>
                        <select value={amount} onChange={(e)=>setAmount(e.target.value)}  className="border-none outline-none pl-[5px] mt-[8px] ml-[10px] text-white bg-slate-900">
                            <option value="">Any Amount</option>
                            <option value="200">Under $200</option>
                            <option value="500">Under $500</option>
                            <option value="1000">Under $1,000</option>
                            <option value="2000">Under $2,000</option>
                            <option value="5000">Under $5,000</option>
                            <option value="5000+">$5,000+</option>

                        </select>
                    </div>
                    <div className='py-[25px]  w-[200px] pl-[50px] text-white'>
                        <p><i class="fa-solid fa-clock"></i>Days</p>
                        <select value={days} onChange={(e)=>setDays(e.target.value)} className="border-none outline-none pl-[5px] mt-[8px] ml-[10px] text-white bg-slate-900">
                           <option value="">Any Duration</option>
                            <option value="1">1 Day</option>
                            <option value="2">2 Days</option>
                            <option value="3">3 Days</option>
                            <option value="4">4 Days</option>
                            <option value="5">5 Days</option>
                            <option value="6">6 Days</option>
                            <option value="7">7 Days</option>
                            <option value="10">10 Days</option>
                            <option value="14">14 Days</option>
                            <option value="21">21 Days</option>
                        </select>
                    </div>
                    <div className='py-[25px]  w-[200px] pl-[50px] text-white'>
                        <p><i class="fa-solid fa-user"></i>Guest</p>
                        <select value={guest} onChange={(e)=>setGuest(e.target.value)}  className="border-none outline-none pl-[5px] mt-[8px] ml-[10px] text-white bg-slate-900">
                           <option value="">Any Guests</option>
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6+ Guests</option>
                        </select>
                    </div>
                    <button onClick={handleSearch}className="bg-orange-500 ml-[30px] my-[35px] w-[150px] hover:font-bold hover:transition-all hover:bg-orange-600 active:bg-orange-800">Search Plan</button>
                </div>
            </div >
        </>
    )
}

export default First
