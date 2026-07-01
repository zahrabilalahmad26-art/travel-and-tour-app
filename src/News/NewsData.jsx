import React,{useState} from 'react'

export const NewsData = () => {
    
    const [newa,setNewa]=useState([
        { id: 1,
        title: "10 Hidden Gems in Switzerland",
        author: "Emma Wilson",
        date: "26 Jun 2026",
        readTime: "5 Min",
        type: "Travel Guide",
        category: "Europe",
        description: "Explore breathtaking villages and scenic mountain destinations away from the crowds.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28TAXXsvEtpe2Sna-oMRff5LVmzz_qvjn7SJ9qRNvPPYdNN90qnzRMMWZ&s=10"
      },
      {
        id: 3,
        title: "Top Beaches to Visit This Summer",
        author: "Sophia Lee",
        date: "22 Jun 2026",
        readTime: "4 Min",
        type: "Beach Vacation",
        category: "Summer",
        description: "Relax on crystal-clear beaches with unforgettable ocean views.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_VZzeCr9TNuWIgpmWPdVbMQLCZWRvC0GDX0FzSxujyb_Wv0ByOlz-z5v&s=10"
      },
      {
        id: 4,
        title: "Best Hiking Trails Around the World",
        author: "David Brown",
        date: "20 Jun 2026",
        readTime: "6 Min",
        type: "Adventure",
        category: "Nature",
        description: "Discover exciting mountain trails for beginners and experienced hikers.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTQdTuIKsYZsfhkYiSaid1C9AkMp0IqlHi0T71UTs96wr2C7CnMVYhA&s=10"
      },
      {
        id: 5,
        title: "Luxury Hotels Worth Every Penny",
        author: "Olivia Smith",
        date: "18 Jun 2026",
        readTime: "5 min",
        type: "Luxury Travel",
        category: "Hotels",
        description: "Experience world-class hospitality and breathtaking accommodations.",
        image:"https://whatthefab.com/wp-content/uploads/2024/09/cabo-luxury-hotels-11.png.webp"
      },
      {
        id: 7,
        title: "Road Trip Across Northern Pakistan",
        author: "Ayesha Khan",
        date: "14 Jun 2026",
        readTime: "8 Min",
        type: "Road Trip",
        category: "Pakistan",
        description: "Visit Hunza, Skardu, and Fairy Meadows on an unforgettable journey.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5FEwNSqOPKveZ2iZCmqa-8t9FqpbZi8LN5GO3m_tbdWn9XSv5c08L4E&s=10"
      },
      {
        id: 9,
        title: "Packing Checklist for Every Trip",
        author: "Sarah Johnson",
        date: "10 Jun 2026",
        readTime: "3 Min",
        type: "Travel Tips",
        category: "Guide",
        description: "Never forget your travel essentials with this simple packing guide.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1ZuwwiKtQ4utowteT1J-YK9xNhaFm8SAmyG1vLS6iSP0vOv7u7cb4h4&s=10"
      },
      {
        id: 10,
        title: "Top Family-Friendly Destinations",
        author: "Noah Williams",
        date: "8 Jun 2026",
        readTime: "6 Min",
        type: "Family Travel",
        category: "Family",
        description: "Discover destinations that offer fun experiences for all ages.",
        image:"https://www.deshvideshtravels.com/_next/image?url=https%3A%2F%2Fdeshvideshstrapi.s3.ap-south-1.amazonaws.com%2Fvietnam_golden_bridge_8906751eb0.jpg&w=1920&q=75"
      },
      {
        id: 12,
        title: "Top Mountain Destinations for Nature Lovers",
        author: "Alex Turner",
        date: "4 Jun 2026",
        readTime: "7 Min",
        type: "Mountain Escape",
        category: "Nature",
        description: "Experience stunning landscapes, fresh air, and unforgettable mountain adventures.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKI8ts0iyGeeT7pekBE25NUwYv1C8ViNqWno9cADywptW3Q0R2pF18Tx-B&s=10"
      }
      ])
  return { newa, setNewa };
}

export default NewsData
