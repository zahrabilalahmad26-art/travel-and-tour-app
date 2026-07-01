import React from 'react'

const Signin = () => {
    return (<>
        <div className='h-screen w-full flex'>
            <div className='w-[55%] h-screen bg-slate-950 text-white'>
                <div className='mx-[250px] mt-[150px] text-7xl font-bold'>&#x2124;</div>
                <div className='mx-[250px] text-xl font-normal'>Welcome to</div>
                <div className='mx-[280px] text-3xl font-normal'>Zazi</div>
                <div className='mx-[200px] text-3xl font-normal'>Travels & Tours</div>
            </div>
            <div className='bg-white h-screen w-[45%]'>
                <div className='ml-[50px] mt-[50px] text-7xl font-bold'>&#x2124;</div>
                <div className='ml-[30px] text-3xl font-normal'>Welcome </div>
                <div className='ml-[30px] text-3xl font-normal'>Back, </div>
                <div className='ml-[45px] mt-[30px] text-xl font-normal text-gray-500'>Login to continue</div>
                <div className='ml-[45px] mt-[15px] text-xl font-normal'>Username</div>
                <input className='ml-[45px] mt-[15px] border-b-3 border-gray-400 w-[350px] outline-none focus:border-slate-950' />
                <div className='ml-[45px] mt-[15px] text-xl font-normal'>Password</div>
                <input className='ml-[45px] mt-[15px] border-b-3 w-[350px] border-gray-400 outline-none focus:border-slate-950' />
               <div><button className='bg-slate-950 text-center ml-[45px] mt-[25px] h-[50px] w-[350px] text-white'>Login</button></div> 
            </div>
        </div>
    </>

    )
}

export default Signin
