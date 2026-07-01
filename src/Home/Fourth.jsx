import React from 'react'

const Fourth = () => {
    return (
        <div className='h-[600px] w-full bg-slate-900 flex'>
            <div className='w-[400px] ml-[60px]'>
                <div className='pt-[70px] text-orange-500 text-center font-semibold  text-left text-2xl mt-[15px]'>Get the the best travel experience with ZAZI</div>
                <div className='pt-[20px] text-gray-300 text-center font-normal  text-left text-mds mt-[15px]' >Turn your dream vacation into reality with ZAZI. Our expertly crafted travel packages, experienced guides, and personalized services ensure every journey is smooth, exciting, and filled with moments you'll cherish forever.</div>
                <div className='text-gray-300 text-center font-normal  text-left text-mds mt-[15px]' >At ZAZI, we believe every trip should be filled with unforgettable memories. From stunning beaches to vibrant cities and breathtaking mountains, we help you explore the world's most beautiful destinations with comfort, safety, and ease.</div>
            </div>
            <div className=' ml-[30px] mt-[70px] text-white'>
                <img className='h-[370px] rounded-md' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYK7uwlCCMjmov4soaAuw8juYqZWbsT6qGOcWYXMfqFwdw_zXm1aIqJYg&s=10' />
                <div className=' mt-[60px] flex'>
                    <div className='ml-[60px]'><p className='text-4xl font-bold '>100K</p><p className='text-xs font-normal'>Happy Traveller</p></div>
                    <div className='ml-[70px]'><p className='text-4xl font-bold'>94.7%</p><p className='text-xs font-normal'>Satisfaction Rate</p></div>
                    <div className='ml-[70px]'><p className='text-4xl font-bold'>4000+</p><p className='text-xs font-normal'>Tour Completed</p></div>
                </div>
            </div>
        </div>
    )
}

export default Fourth
