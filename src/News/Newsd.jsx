import React from 'react';
import { useNavigate } from "react-router-dom";
const Newsd = ({ news }) => {
    return (
        news.map((card) => {
             const navigate = useNavigate();
            return (
                <div key={card.id} className='border-[1px] border-gray-300 w-[70%] h-[250px] pl-[25px] pt-[30px] mx-[150px] my-[50px] rounded-lg bg-slate-900 text-slate-50'>
                    <div className="flex ">
                        <img src={card.image} alt="hotel" className="w-[400px] h-[200px] rounded-lg" />
                        <div>
                             <p className='text-orange-500 ml-[10px]'>{card.type}</p>
                            <h3 className='mt-[15px] ml-[10px] text-xl font-bold'>{card.title} </h3>
                            <p className='font-light text-sm ml-[10px]'>{card.author}</p>
                            <div className='mx-[4px] flex justify-between mt-[15px]'>
                                <div><i class="fa-solid fa-calendar-days"></i>{card.date} </div>
                                <div><i class="fa-solid fa-clock"></i>{card.readTime} Read </div>
                                <div><i class="fa-solid fa-layer-group"></i>{card.category} </div>
                            </div>
                            <div className='flex justify-between mx-[10px] mt-[25px]'>
                                <button  onClick={() => navigate(`/Blog${card.id}`)} className='border-[1px] border-orange-500 text-orange-500 rounded-lg w-[100px] hover:font-bold hover:bg-orange-600 hover:text-white active:text-white transition-all cursor-pointer active:bg-orange-800 duration-500 '>Read Now </button>
                            </div>
                        </div>

                    </div>
                </div>
            )
        })
    )
}

export default Newsd
