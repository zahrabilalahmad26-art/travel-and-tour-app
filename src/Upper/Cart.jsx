import React from 'react'
import { useCount } from "../Upper/Count";
const Cart = () => {
 const { cart, setCart } = useCount();
  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price.replace("$", ""));
  }, 0);
  const removeItem = (id) => {
  setCart(cart.filter((item) => item.id !== id));
};
  return (
    <div className=' w-full bg-slate-950'>
      <div className='text-orange-500  text-center text-3xl font-bold font-mono pt-[50px]'><i className="fa-solid fa-cart-shopping text-orange-500 mr-[20px]"></i>                   Tour Cart Summary</div>
      <div className='text-white text-center font-light text-md mt-[15px]'>Home<i class="fa-solid fa-arrow-right-long"></i>Your Cart</div>
      <div className='text-white font-semibold text-2xl mt-[15px]'>Your Cart Details</div>
      <div className='flex w-full  ml-[10px]'>
        <div className=' w-[750px]  '>
          <div className='w-[750px] h-[50px] rounded flex bg-white text-gray-900 justify-between'>
            <div>Package</div>
            <div className='flex '>
              <p className='mr-[70px]'>Price</p>
              <p className='mr-[50px]'>Remove</p>
            </div>
          </div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between bg-gray-900 text-white p-3 mt-2 rounded"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  className="w-20 h-20 rounded"
                />

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
                </div>
              </div>

              <div className='ml-[190px] '>{item.price}</div>
                    <button
        onClick={() => removeItem(item.id)}
        className="bg-red-500 hover:bg-red-600 w-[70px] h-[50px] px-3 py-2 rounded text-white transition-all duration-300"
      >
        <i className="fa-solid fa-trash"></i>
      </button>
            </div>
          ))}
        </div>
        <div className='h-[400px] w-[450px]  ml-[100px]'>
          <i className="fa-solid fa-cart-shopping text-orange-500 text-[200px]"></i>
          <div className='text-white mt-[50px] ml-[20px] text-xl font-bold'>Total:${total} <button className='bg-orange-500 hover:font-bold hover:bg-orange-600 hover:text-white active:text-white transition-all cursor-pointer duration-500  active:bg-orange-800  ml-[100px] h-[50px] w-[90px] rounded'>Checkout</button></div>
        </div>

      </div>
    </div>
  )
}

export default Cart
