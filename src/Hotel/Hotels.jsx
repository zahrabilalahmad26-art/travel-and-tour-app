import React, { useState } from 'react'
import Hoteld from './Hoteld'

const Hotels = () => {
  const [hotel,sethotel]=useState([
      {
    id: 1,
    title: "Burj Al Arab",
    location: "Dubai, UAE",
    rating: 5.0,
    price: "$1200",
    facilities: ["Free Wi-Fi", "Private Beach", "Spa", "Luxury Suites"],
    image:"https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg/960px-Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg"
  },
  {
    id: 2,
    title: "The Plaza",
    location: "New York, USA",
    rating: 4.8,
    price: "$850",
    facilities: ["Free Wi-Fi", "Restaurant", "Gym", "Room Service"],
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqpfSGcfiGFcj3PxzvPS7TFWMb8p-HWE11D-Jq-uxBv-kcr01apt3ReI&s=10"
  },
  {
    id: 3,
    title: "Marina Bay Sands",
    location: "Singapore",
    rating: 4.9,
    price: "$700",
    facilities: ["Infinity Pool", "Casino", "Spa", "Free Wi-Fi"],
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyYXPRMn3h2TIeB6ccEiZvdnzOPHag7tBh2aMfY9R7UdaybyIrF6W2aEg&s=10"
  },
  {
    id: 4,
    title: "The Ritz Paris",
    location: "Paris, France",
    rating: 4.9,
    price: "$950",
    facilities: ["Spa", "Restaurant", "Bar", "Free Wi-Fi"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/H%C3%B4tel_Ritz.jpg/330px-H%C3%B4tel_Ritz.jpg"
  },
  {
    id: 5,
    title: "Claridge's",
    location: "London, UK",
    rating: 4.8,
    price: "$900",
    facilities: ["Gym", "Spa", "Restaurant", "Free Wi-Fi"],
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAIxnR10PGXQbulFWqdQ4xnAmFlYi_xJgV_jXfpoKETr0x57Fttcu6AI5H&s=10"
  },
  {
    id: 6,
    title: "Hotel Sacher",
    location: "Vienna, Austria",
    rating: 4.7,
    price: "$650",
    facilities: ["Free Wi-Fi", "Cafe", "Spa", "Airport Shuttle"],
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUXnKuDWpa3cI5gYEmJCH-qIbNf890afgjyOmP_zFTA&s=10"
  },
  {
    id: 7,
    title: "Four Seasons Tokyo",
    location: "Tokyo, Japan",
    rating: 4.9,
    price: "$800",
    facilities: ["Spa", "Gym", "Restaurant", "Free Wi-Fi"],
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJ5T-vCa3XTpFvwNQE3MnN9NPq8cyLMgv-TMVcriLWw&s=10"
  },
  {
    id: 8,
    title: "Shangrila Resort",
    location: "Skardu, Pakistan",
    rating: 4.9,
    price: "$180",
    facilities: ["Lake View", "Restaurant", "Free Wi-Fi", "Airport Shuttle"],
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3U6ZWeAyJTDWyjFJn2ism6ZkZBVjnwutD5eoChQ_rT2oThATbpCKOXac&s=10"
  },
  {
    id: 9,
    title: "Cape Grace",
    location: "Cape Town, South Africa",
    rating: 4.7,
    price: "$450",
    facilities: ["Harbor View", "Spa", "Pool", "Free Wi-Fi"],
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3j8zeUR4mjgwBOvXoQad3WvxxwPgptUgDJVcLhYpbMR2GfXB-ZkSVas&s=10"
  },
  {
    id: 10,
    title: "Fairmont Banff Springs",
    location: "Alberta, Canada",
    rating: 4.8,
    price: "$600",
    facilities: ["Golf Course", "Spa", "Pool", "Free Wi-Fi"],
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIja_5hhxGTnA73ZU1hjKXm-FZ0t0UIfyqPQRLZPaYQlS7-rrMD0zMB7E&s=10"
  },
  {
    id: 11,
    title: "Copacabana Palace",
    location: "Rio de Janeiro, Brazil",
    rating: 4.8,
    price: "$550",
    facilities: ["Beach Access", "Pool", "Restaurant", "Free Wi-Fi"],
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9EZnmId8Sfu_S4jcUoRsHtdEvcKDrIkevD6hkh83VWgh5BJecFhNxoy6&s=10"
  }

  ])
  return (
    <div className='grid grid-cols-3 bg-slant-900 gap-10 ml-[25px] my-[65px]'>
    <Hoteld hotel={hotel}/>
    </ div>
  )
}

export default Hotels
