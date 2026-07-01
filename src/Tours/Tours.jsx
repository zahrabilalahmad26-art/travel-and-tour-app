import React, { useState } from 'react'
import Tourd from './Tourd'
 export const tour = [
    {
      id: 1,
      title: "Paris City Tour",
      location: "Paris, France",
      duration: "5 Days",
      person: "2 Persons",
      price: "$1200",
      rating: "4.8",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSLnmtudQu_AAo3-roOroAWDFzI3dPLZPA6mIhtYt0VQ&s=10"
    },
    {
      id: 2,
      title: "Dubai Desert Safari",
      location: "Dubai, UAE",
      duration: "3 Days",
      person: "2 Persons",
      price: "$800",
      rating: "4.7",
      image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/b8/9c/3a.jpg"
    },
    {
      id: 3,
      title: "Istanbul Heritage Tour",
      location: "Istanbul, Turkey",
      duration: "6 Days",
      person: "2 Persons",
     price: "$1100",
      rating: "4.9",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSDjCxV3TJR1ZGcxGNaqhf-xhHeUpt4o4coA&s"
    },
    {
      id: 4,
      title: "London Sightseeing",
      location: "London, UK",
      duration: "4 Days",
      person: "2 Persons",
      price: "$1300",
      rating: "4.6",
      image: "https://theluxxemag.com/wp-content/uploads/2026/03/Velogemel-WM-2024-03-1024x683.jpg"
    },
    {
      id: 5,
      title: "Swiss Alps Adventure",
      location: "Interlaken, Switzerland",
      duration: "7 Days",
      person: "2 Persons",
     price: "$1800",
      rating: "5.0",
      image: "https://www.londonperfect.com/cdn-cgi/image/format=auto,width=600/https://toursadmin.vacationperfect.com/uploads/london/category/the-london-eye.jpg"
    },
    {
      id: 6,
      title: "Tokyo Experience",
      location: "Tokyo, Japan",
      duration: "5 Days",
      person: "2 Persons",
     price: "$1500",
      rating: "4.8",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZJTy56SOH95tWlFdXQ37jgR1QfPwl7GYcsQ&s"
    },
    {
      id: 7,
      title: "Rome Historical Tour",
      location: "Rome, Italy",
      duration: "4 Days",
      person: "2 Persons",
      price: "$1250",
      rating: "4.7",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PEHXSiFh68MPBdsIQYj_VeJRv3c9cFrF5g&s"
    },
    {
      id: 8,
      title: "Bali Beach Escape",
      location: "Bali, Indonesia",
      duration: "6 Days",
      person: "2 Persons",
    price: "$950",
      rating: "4.9",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCIW96dequlIALZAisI3_skNSr82hyHih1OJ8Art3G29U3A6bIdHDg3rI&s=10"
    },
    {
      id: 9,
      title: "Maldives Retreat",
      location: "Maldives",
      duration: "5 Days",
      person: "2 Persons",
      price: "$2000",
      rating: "5.0",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtf89l4hhkyTIOoBQ7k-hES9CQBoTOEtfcA&s"
    },
    {
      id: 10,
      title: "New York Explorer",
      location: "New York, USA",
      duration: "4 Days",
      person: "2 Persons",
   price: "$1400",
      rating: "4.6",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJFYWfOAw8U5ayaATUbZJORH_jNHalCunKvA&s"
    },
    {
      id: 11,
      title: "Sydney Adventure",
      location: "Sydney, Australia",
      duration: "5 Days",
      person: "2 Persons",
     price: "$1600",
      rating: "4.8",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLf35UAl6IwA_vIiwlFeKYH109PnsKBcR3w&s"
    },
    {
      id: 12,
      title: "Cappadocia Balloon Tour",
      location: "Cappadocia, Turkey",
      duration: "3 Days",
      person: "2 Persons",
      price: "$900",
      rating: "4.9",
      image: "https://www.travelandleisure.com/thmb/MbwHC-LaxhJsfeBEBVAYCBrg5wY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-air-balloons-festival-cappadocia-turkey-HOTAIR0605-6d61318b9ac0462d9d20f387e5c7d1a9.jpg"
    },
    {
      id: 13,
      title: "Hunza Valley Tour",
      location: "Hunza, Pakistan",
      duration: "7 Days",
      person: "4 Persons",
    price: "$700",
      rating: "4.8",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7jA_77IB4hx9L9uSvLZS_6DQrd0hngkswQ&s"
    },
    {
      id: 14,
      title: "Skardu Trek",
      location: "Skardu, Pakistan",
      duration: "8 Days",
      person: "4 Persons",
    price: "$850",
      rating: "4.9",
      image: "https://www.privatetour.com/images/pakistan/19-days-trek-snow-lake-and-biafo-and-hispar-glaciers-skardu-balistan-pakistan/S-1_1.jpg"
    },
    {
      id: 15,
      title: "Bangkok Cultural Tour",
      location: "Bangkok, Thailand",
      duration: "4 Days",
      person: "2 Persons",
     price: "$750",
      rating: "4.7",
      image: "https://cdn.getyourguide.com/img/location/5e4ea85f8c1e5.jpeg/68.jpg"
    },
    {
      id: 16,
      title: "Santorini Sunset Tour",
      location: "Santorini, Greece",
      duration: "5 Days",
      person: "2 Persons",
      price: "$1700",
      rating: "4.9",
      image: "https://www.santorinitravel.com/wp-content/uploads/2021/04/private-tour-in-Santorini-at-sunset-time.jpg"
    }
  ]
  const Tours = () => {
  return (
    <div className='grid grid-cols-3 bg-slant-900 gap-10 ml-[25px] my-[65px]'>
    <Tourd tour={tour}/>
    </ div>
  )
}

export default Tours
