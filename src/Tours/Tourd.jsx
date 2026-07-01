import React, { useState } from 'react'
import { useCount } from "../Upper/Count.jsx";

const Tourd = ({tour}) => {
const { count, setCount, cart, setCart } = useCount();
  const [task, setTask] = useState("");
  const [addedId, setAddedId] = useState(null);
  const tasks = () => {
    const task = "Task Added"
  }
  return (
tour.map((card)=>{
      return(
      <div key={card.id} className='border-[1px] border-gray-300 w-[350px] h-[500px] pl-[25px] pt-[30px] rounded-lg bg-slate-900 text-slate-50'>
        <img src={card.image} alt='working' className='w-[300px] h-[200px] rounded-lg' />
        <h3 className='mt-[15px] ml-[10px] text-xl font-bold'>{card.title} </h3>
        <p className='text-orange-500 ml-[10px]'><i class="fa-solid fa-location-dot"></i>{card.location}</p>
        <div className='bg-slate-800 mr-[20px] flex justify-between px-[10px] mt-[15px]'>
          <div><i class="fa-regular fa-clock"></i>{card.duration}</div>
          <div><i class="fa-regular fa-circle-user"></i>{card.person}</div>
        </div>
        <div className='flex justify-between mx-[10px] mt-[25px]'>
          <span className='text-blue-500'>From {card.price} </span>
          <span className='bg-yellow-100 text-black'>⭐{card.rating} </span>
        </div>
                   <button className='text-white bg-orange-500 w-[150px] mt-[20px] h-[40px] ml-[70px] hover:font-bold hover:bg-orange-600 hover:text-white active:text-white transition-all cursor-pointer duration-500  active:bg-orange-800' onClick={() => {
               setCart([...cart, card]); setAddedId(card.id); setCount(count + 1); setTimeout(() => {
                setAddedId(null);
              }, 500);
            }}>Add to Cart</button>
            {addedId === card.id && (
              <div className="text-green-500 font-bold  mt-[15px] text-center transition-all duration-500 "> Task Added</div>
            )}
          
      </div>
      )
    })
  )
}

export default Tourd
