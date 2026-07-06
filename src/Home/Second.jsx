import React from 'react'
import { useCount } from '../Upper/Count'
const Second = () => {
    const { count, setCount } = useCount();
    return (
        <div className='h-[500px] w-full bg-slate-950'>
            <div className='text-orange-500  text-center text-xl font-medium font-mono mt-[50px]'>special offers</div>
            <div className='text-white text-center font-semibold text-3xl mt-[15px]'>Winter our Big Offers to Inspire you </div>
            <div className='flex mt-[100px] mx-[200px]  text-gray-50 '>
                <div className='h-[250px] w-[450px] pt-[50px] animate-bounce opacity-100 bg-cover bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_v_rN3jTuVqL4JNCaIjnQzrPhSV2NWZ9JuQJRu2p_qiKmYsjbTJSRkQ&s=10)] ml-[50px]'>
                    <p className='text-orange-500 font-semibold text-xl font-mono '>Save up to</p>
                    <p className='font-bold text-3xl '>50% </p>
                    <p className='font-bold text-2xl '>Let's Explore The World</p>
                    <p><i class="fa-solid fa-location-dot "></i>Maldives</p>
                    
                </div>
           
                <div className='h-[250px] w-[450px] pt-[50px] animate-bounce opacity-100 bg-cover bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-fR0pgmR66JRHW1unAQxuiJJMPkZptWWiy7MLHVOEEdR8Hntbuy4ls_O&s=10)] ml-[50px]'>
                    <p className='text-orange-500 font-semibold text-xl font-mono '>Save up to</p>
                    <p className='font-bold text-3xl '>20% </p>
                    <p className='font-bold text-2xl '>Let's Explore The World</p>
                    <p><i class="fa-solid fa-location-dot "></i>Tokyo, Japan</p>

                </div>
           
        </div>
         </div>
            )
}

export default Second
