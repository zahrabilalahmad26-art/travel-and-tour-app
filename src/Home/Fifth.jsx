import React, { useState } from 'react'
import { tour } from '../Tours/Tours.jsx'
import { useCount } from '../Upper/Count'
const Fifth = () => {
const { count, setCount, cart, setCart } = useCount();
    const [task, setTask] = useState("");
    const [addedId, setAddedId] = useState(null);
    const tasks = () => {
        const task = "Task Added"
    }
    return (
        <div className='h-[650px] w-full bg-slate-900'>
            <div className='text-orange-500  text-center text-xl font-medium font-mono pt-[50px]'>Features Tours</div>
            <div className='text-white text-center font-semibold text-3xl mt-[15px]'>Most Favourite Tour Place</div>
            <div className='text-white text-center font-semibold text-3xl '>in The World</div>
            <div className='flex mx-[100px] mt-[60px] '>
                {tour.slice(4, 8).map((card) => (
                    <div key={card.id} className='transition-all hover:w-[400px]  duration-1000 border-[1px] mx-[10px] border-gray-300 w-[300px] h-[360px] pl-[5px] pt-[15px] rounded-lg bg-slate-900 text-slate-50'>
                        <img src={card.image} alt='working' className='w-[220px] h-[100px] rounded-l' />
                        <h3 className='mt-[15px] ml-[10px] text-xl font-bold'>{card.title} </h3>
                        <p className='text-orange-500 ml-[10px]'><i class="fa-solid fa-location-dot"></i>{card.location}</p>
                        <div className='bg-slate-800 mr-[20px] flex justify-between px-[10px] mt-[15px]'>
                            <div><i class="fa-regular fa-clock"></i>{card.duration}</div>
                            <div><i class="fa-regular fa-circle-user"></i>{card.person}</div>
                        </div>
                        <div className='flex justify-between mx-[10px] mt-[25px]'>
                            <span className='text-blue-500'>From {card.amount} </span>
                            <span className='bg-yellow-100 text-black'>⭐{card.rating} </span>
                        </div>
                        <button className='text-white bg-orange-500 w-[150px] mt-[10px] h-[40px] ml-[10px] hover:font-bold hover:bg-orange-600 hover:text-white active:text-white transition-all cursor-pointer duration-500  active:bg-orange-800' onClick={() => {
                    setCart([...cart, card]);         setAddedId(card.id); setCount(count + 1); setTimeout(() => {
                                setAddedId(null);
                            }, 500);
                        }}>Add to Cart</button>
                        {addedId === card.id && (
                            <div className="text-green-500 font-bold ml-[20px] mt-2 transition-all duration-500 "> Task Added</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Fifth
