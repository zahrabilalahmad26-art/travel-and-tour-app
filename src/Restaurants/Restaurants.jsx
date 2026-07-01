import React, { useState } from 'react'
import Restaurantd from './Restaurantd'

const Restaurants = () => {
  const [restaurant,setrestaurant]=useState([
  { id: 1, title: "Hard Rock Cafe", location: "Dubai, UAE", type: "Trendy", rating: "4.8", price: "$50",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwrtJWZ3J0yhzVoN_nhOO5Slua9YyCMsaqJen8eX2WEanFXgT7cFyh1_XG&s=10"  },
  { id: 2, title: "Nobu", location: "Tokyo, Japan", type: "Luxury", rating: "4.9", price: "$120",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOrPi79X0EV3XEc1XVFI2XAvOPaSDnKHVU2daoP1TGKg&s=10"  },
  { id: 3, title: "The Cheesecake Factory", location: "Los Angeles, USA", type: "Family Friendly", rating: "4.7", price: "$35" ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbspaaBZs_u6aRQrzTNBX7IjJsxZe76ggqKHg1xHjI7ul0M5RpLhDslJS&s=10" },
  { id: 4, title: "Din Tai Fung", location: "Taipei, Taiwan", type: "Recommended", rating: "4.9", price: "$30",image:"https://taiwanderers.com/wp-content/uploads/2024/08/din-tai-fung-10-635x800.jpg"  },
  { id: 5, title: "Pizza Hut", location: "London, UK", type: "Casual", rating: "4.5", price: "$20",image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/be/d6/fe/20190811-220514-largejpg.jpg?w=800&h=500&s=1"  },
  { id: 6, title: "KFC", location: "Lahore, Pakistan", type: "Fast Food", rating: "4.3", price: "$15" ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkyRFsGeGPOyuGTyRDMb4e3qoYTBfE8ZyHBTpifqAAtigVgLXj0ojDnyQ&s=10" },
  { id: 7, title: "McDonald's", location: "New York, USA", type: "Family Friendly", rating: "4.4", price: "$18" ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmprZP69OXNwqW6T8s8JQIEkGRcEXR8pNlK0j4999Ng&s=10" },
  { id: 8, title: "Burger King", location: "Toronto, Canada", type: "Budget Friendly", rating: "4.2", price: "$17",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0fVlpEf59_RjuSXX8O6wiSmOVyCpMAM5sT30bEx4Bx_o-42-WWdw6rUZ&s=10"  },
  { id: 9, title: "Subway", location: "Sydney, Australia", type: "Healthy", rating: "4.4", price: "$16",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAwZJ-rlJIg-RKR_AVLCLREXhyzdCcwyKrgYj4GYsgPQ&s=10"  },
  { id: 10, title: "Domino's Pizza", location: "Karachi, Pakistan", type: "Recommended", rating: "4.5", price: "$22" ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWLTa_qG3UqrFHiU9REeA-R4lXeUISMWk2ZpXbMsPv9A&s=10" },
  { id: 11, title: "TGI Fridays", location: "Doha, Qatar", type: "Cozy", rating: "4.6", price: "$40" ,image:"https://c8.alamy.com/comp/2HMYKT2/doha-qatar-january-16th-2022-tgi-fridays-restaurant-front-in-doha-qatar-2HMYKT2.jpg" },
  { id: 12, title: "Shake Shack", location: "New York, USA", type: "Trendy", rating: "4.8", price: "$28",image:"https://c8.alamy.com/comp/2A3AK3F/shake-shack-1333-broadway-new-york-ny-exterior-storefront-of-a-fast-casual-restaurant-in-midtown-manhattan-2A3AK3F.jpg"  }

  ]);
  return (
    <div className='grid grid-cols-3 bg-slant-900 gap-10 ml-[25px] my-[65px]'>
    <Restaurantd restaurant={restaurant}/>
    </ div>
  )
}

export default Restaurants
