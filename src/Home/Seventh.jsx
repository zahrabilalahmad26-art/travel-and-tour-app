import React from 'react'
import sara from '../assets/sara.png'
import vv1 from '../assets/vv1.mp4'
import vv2 from '../assets/vv2.mp4'
import vv3 from '../assets/vv3.mp4'
import ahmed from '../assets/ahmed.png'
import emily from '../assets/emily.png'
const Seventh = () => {
    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            image: sara,
            video: vv1,
            company: "ZAZI",
            date: "Jan 20, 2026",
            review:
                "Hi, I'm Sarah Johnson. I recently visited Paris with this amazing travel agency, and it was truly an unforgettable experience. Everything was perfectly organized, from the comfortable hotel to the guided city tours."
        },
        {
            id: 2,
            name: "Ahmed Khan",
            image: ahmed,
            video: vv2,
            company: "ZAZI",
            date: "Feb 08, 2026",
            review:
                "I visited Hunza Valley with this travel agency, and the experience exceeded my expectations. The hotels, transportation, and tour guide were outstanding. I would definitely travel with them again."
        },
        {
            id: 3,
            name: "Emily Brown",
            image: emily,
            video: vv3,
            company: "ZAZI",
            date: "Mar 15, 2026",
            review:
                "I visited Dubai for the first time, and everything was planned perfectly. The itinerary was excellent, the staff was friendly, and I made unforgettable memories throughout the trip."
        }
    ];
    return (
        <div className='h-[600px] w-full bg-slate-950 text-orange-500 bg-repeat'>
            <div className='text-orange-500  text-center text-xl font-medium font-mono pt-[50px]'>Testimonial</div>
            <div className='text-white text-center font-semibold text-3xl mt-[15px]'>What People Have Said </div>
            <div className='text-white text-center font-semibold text-3xl '>About Our Services</div>
      <div className='flex'>
       { reviews.map((card) => {
            return (
            <div key={card.id} className='text-white flex w-[500px] transition-all duration-500 ease-in-out  '>
                <div className='bg-slate-900 w-[150px] hover:w-[300px] transition-all duration-500 ease-in-out h-[330px] overflow-hidden rounded-md ml-[5px] mt-[40px]'>
                    <div className='flex'> <img src={card.image} className='h-[40px] w-[40px] ml-[10px] mt-[20px] rounded-full' /><p className=' text-white ml-[5px] mt-[30px]'>{card.name}</p> </div>
                    <div className='text-white text-sm font-light  ml-[10px]'>{card.review}</div>
                    <div className='flex'><p className='text-orange-500 ml-[10px]'>ZAZI</p> </div>
                    <p className='text-md font-light ml-[10px]'>{card.date}</p>
                </div>
                <div className='ml-[20px] mt-[30px] h-[350px] transition-all duration-500 ease-in-out w-[100px] hover:w-[400px]'>
                    <video src={card.video} className='h-[350px] w-[400px] rounded-md'  controls/>
                </div>
            </div>
       
    )
}) }</div></div>
    )
}

export default Seventh
