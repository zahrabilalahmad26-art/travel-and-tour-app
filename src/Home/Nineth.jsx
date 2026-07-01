import React from 'react'
import NewsData from "../News/NewsData.jsx"
import { useNavigate } from "react-router-dom";
const Nineth = () => {
    const { newa } = NewsData();
    const navigate = useNavigate();
  return (
      <div className='h-[600px] w-full bg-slate-900 text-orange-500 bg-repeat'>
        <div className='text-orange-500  text-center text-xl font-medium font-mono pt-[50px]'>News & Articles</div>
        <div className='text-white text-center font-semibold text-3xl mt-[15px]'>Latest News & Articles From The</div>
        <div className='text-white text-center font-semibold text-3xl '> Blog Posts</div>
              <div className='flex mx-[100px] mt-[60px] '>
                {newa.slice(0, 3).map((card) => (
                  <div key={card.id} className='transition-all hover:w-[400px]  duration-1000 border-[1px] mx-[10px] border-gray-300 w-[300px] h-[350px] pl-[5px] pt-[15px] rounded-lg bg-slate-900 text-slate-50'>
                    <img src={card.image} alt='working'  className="w-full h-[180px] object-cover rounded-lg transition-all duration-1000" />
                    <p className='text-orange-500 ml-[10px]'>{card.type}</p>
                    <h3 className='mt-[15px] ml-[10px] text-xl font-bold'>{card.title} </h3>
                    <div className=' mr-[20px] flex justify-between px-[10px] mt-[15px]'>
                      <div>{card.category}</div>
                      <div><i class="fa-regular fa-clock"></i>{card.readTime}</div>
                        <button  onClick={() => navigate(`/Blog${card.id}`)} className='border-[1px] border-orange-500 text-orange-500 rounded-lg w-[100px] hover:font-bold hover:bg-orange-600 hover:text-white active:text-white transition-all cursor-pointer active:bg-orange-800 duration-500 '>Read Now </button>
                    </div>
                    </div>
                ))}
              </div>
      </div>
  )
}

export default Nineth
