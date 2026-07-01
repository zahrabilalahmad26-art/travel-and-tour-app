import React, { useState } from 'react'
import { useCount } from '../Upper/Count.jsx'
const Transportd = ({ transport }) => {
    const { count, setCount, cart, setCart } = useCount();
    const [task, setTask] = useState("");
    const [addedId, setAddedId] = useState(null);
    const tasks = () => {
        const task = "Task Added"
    }
    return (
        transport.map((card) => {
            return (
                <div key={card.id} className='border-[1px] border-gray-300 w-[350px] h-[490px] pl-[25px] pt-[30px] rounded-lg bg-slate-900 text-slate-50'>
                    <div className="relative">
                        <img src={card.image} alt="hotel" className="w-[300px] h-[200px] rounded-lg" />
                        <span className="absolute top-2 right-2 bg-yellow-100 text-black px-2 py-1 rounded-md font-bold">⭐ {card.rating}</span>
                    </div>
                    <h3 className='mt-[15px] ml-[10px] text-xl font-bold'>{card.title} </h3>
                    <p className='text-orange-500 ml-[10px]'><i class="fa-solid fa-location-dot"></i>{card.location}</p>
                    <div className='mx-[4px] flex justify-between mt-[15px]'>
                        <div><i className="fa-solid fa-car"></i>{card.miles} Miles</div>
                        <div><i className="fa-solid fa-gear "></i>{card.type}</div>
                        <div><i className="fa-solid fa-chair "></i>Seats : {card.seats}</div>
                    </div>
                    <div className='mx-[4px] mt-[15px]'>
                        <div><i className="fa-solid fa-grip "></i>Trips : {card.trips}</div>
                    </div>
                    <div className='flex justify-between mx-[10px] mt-[25px]'>
                        <span className='text-blue-500'>{card.price}</span>

                        <button className='text-white bg-orange-500 w-[150px] mt-[10px] h-[40px] ml-[10px] hover:font-bold hover:bg-orange-600 hover:text-white active:text-white transition-all cursor-pointer duration-500  active:bg-orange-800' onClick={() => {
                            setCart([...cart, card]);  setAddedId(card.id); setCount(count + 1); setTimeout(() => {
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

export default Transportd
