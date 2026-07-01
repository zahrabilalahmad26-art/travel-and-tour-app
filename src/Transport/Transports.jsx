import React, { useState } from 'react'
import Transportd from './Transportd'

const Transports = () => {
  const [transport,setTransport]=useState([
  {
    id: 1,
    title: "Toyota Corolla",
    location: "Dubai, UAE",
    miles: "25,000",
    type: "Sedan",
    seats: "5",
    trips: "120",
    price: "$45/day",
    rating: 4.8,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBBwYJ7Ia_viXDaPXtS2PaSZIqo3IOUWQnuRh9_-mHQ&s"
  },
  {
    id: 2,
    title: "Honda Civic",
    location: "New York, USA",
    miles: "18,000",
    type: "Sedan",
    seats: "5",
    trips: "95",
    price: "$50/day",
    rating: 4.7,
    image:"https://hips.hearstapps.com/hmg-prod/images/2025-honda-civic-hybrid-hatchback-106-698b62819cc26.jpg?crop=0.722xw:0.614xh;0.148xw,0.272xh&resize=1200:*"
  },
  {
    id: 3,
    title: "BMW X5",
    location: "London, UK",
    miles: "12,000",
    type: "SUV",
    seats: "7",
    trips: "80",
    price: "$120/day",
    rating: 4.9,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-N6ubkyF6ozLDNo0anvxF8kCToVNUW96VW6hlGBRmFcDICyfOR-0zBUt&s=10"
  },
  {
    id: 4,
    title: "Mercedes C-Class",
    location: "Paris, France",
    miles: "15,000",
    type: "Luxury",
    seats: "5",
    trips: "65",
    price: "$140/day",
    rating: 4.8,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfnYR0y9AhHn2tA7_xrHykGdvdJHh5_uIp6gbOlmZscetnuuXtHhtq2FI&s=10"
  },
  {
    id: 5,
    title: "Hyundai Tucson",
    location: "Islamabad, Pakistan",
    miles: "20,000",
    type: "SUV",
    seats: "5",
    trips: "75",
    price: "$60/day",
    rating: 4.6,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5oXlxLjzVAFzdjw39XzO4f0srTg8oww0Lodfb6G--BaxzxvDzKm4FlDU&s=10"
  },
  {
    id: 6,
    title: "Kia Sportage",
    location: "Lahore, Pakistan",
    miles: "22,000",
    type: "SUV",
    seats: "5",
    trips: "90",
    price: "$65/day",
    rating: 4.7,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIWCzas4i4kHbXQhYpMY4qAhhfrJ7GDXmoGKseWnRbnXmbCr3wDE59j_bE&s=10"
  },
  {
    id: 7,
    title: "Audi A6",
    location: "Berlin, Germany",
    miles: "10,000",
    type: "Luxury",
    seats: "5",
    trips: "50",
    price: "$150/day",
    rating: 4.9,
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Audi_A6_C9_IAA_2025_DSC_1920.jpg/330px-Audi_A6_C9_IAA_2025_DSC_1920.jpg"
  },
  {
    id: 8,
    title: "Ford Mustang",
    location: "Los Angeles, USA",
    miles: "8,000",
    type: "Sports",
    seats: "4",
    trips: "40",
    price: "$180/day",
    rating: 5.0,
    image:"https://www.usnews.com/object/image/0000019b-0a66-dbed-adff-0a7612800000/2026-ford-mustang-front-angle-view-ak.jpg?update-time=1765406019919&size=responsiveGallery&format=webp"
  },
  {
    id: 9,
    title: "Nissan Patrol",
    location: "Abu Dhabi, UAE",
    miles: "16,000",
    type: "SUV",
    seats: "7",
    trips: "85",
    price: "$110/day",
    rating: 4.8,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymgRahJ3I0JTObjnCpwesTfB7Eat7WDVTLg_Q_N4i1KFTzxoqdEyCLuhK&s=10"
  },
  {
    id: 10,
    title: "Tesla Model 3",
    location: "Toronto, Canada",
    miles: "9,000",
    type: "Electric",
    seats: "5",
    trips: "70",
    price: "$130/day",
    rating: 4.9,
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Tesla_Model_3_%282023%29_Autofr%C3%BChling_Ulm_IMG_9282.jpg/1280px-Tesla_Model_3_%282023%29_Autofr%C3%BChling_Ulm_IMG_9282.jpg"
  }
  ])
  return (
    <div className='grid grid-cols-3 bg-slant-900 gap-10 ml-[25px] my-[65px]'>
    <Transportd transport={transport}/>
    </ div>
  )
}

export default Transports
