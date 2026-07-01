import React, { useState } from 'react'
import { useCount } from '../Upper/Count'
const Hoteld = ({ hotel }) => {
const { count, setCount, cart, setCart } = useCount();
    const [task, setTask] = useState("");
    const [addedId, setAddedId] = useState(null);
    const tasks = () => {
        const task = "Task Added"
    }
    return (
        hotel.map((card) => {
            return (
                <div key={card.id} className='border-[1px] border-gray-300 w-[350px] h-[470px] pl-[25px] pt-[30px] rounded-lg bg-slate-900 text-slate-50'>
                    <div className="relative">
                        <img src={card.image} alt="hotel" className="w-[300px] h-[200px] rounded-lg" />
                        <span className="absolute top-2 right-2 bg-yellow-100 text-black px-2 py-1 rounded-md font-bold">⭐ {card.rating}</span>
                    </div>
                    <h3 className='mt-[15px] ml-[10px] text-xl font-bold'>{card.title} </h3>
                    <p className=' ml-[10px] text-orange-500'><i class="fa-solid fa-location-dot "></i>{card.location}</p>
                    <div className="ml-[10px] flex flex-wrap gap-[20px] mt-[5px]">
                        {card.facilities.map((facility, index) => (
                            <span key={index} className="text-sm">
                                <i class="fa-solid fa-circle"></i>{facility}
                            </span>
                        ))}
                    </div>
                    <div className='flex justify-between mx-[10px] mt-[25px]'>
                        <span className='text-blue-500 mt-[20px]'>{card.price} /Person</span>
                        <button className='text-white bg-orange-500 w-[150px] mt-[10px] h-[40px] ml-[10px] hover:font-bold hover:bg-orange-600 hover:text-white active:text-white transition-all cursor-pointer duration-500  active:bg-orange-800' onClick={() => {
                          setCart([...cart, card]);   setAddedId(card.id); setCount(count + 1); setTimeout(() => {
                                setAddedId(null);
                            }, 500);
                        }}>Add to Cart</button>

                    </div>
                    {addedId === card.id && (
                        <div className="text-green-500 font-bold mt-[10px] text-center transition-all duration-500 "> Task Added</div>
                    )}
                </div>
            )
        })
    )
}

export default Hoteld
