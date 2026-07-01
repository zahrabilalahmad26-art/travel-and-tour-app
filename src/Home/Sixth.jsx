import React from 'react'
const Sixth = () => {
  const destination = [
      {
    id: 1,
    country: "France",
    destin: "Eiffel Tower",
    rating: "4.9",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YVab59nc4eYR37K0o9soDPEYUVQWXLUzcfrvRlWu5SKHzhgrD5tsk59A&s=10"
  },
  {
    id: 2,
    country: "United Arab Emirates",
    destin: "Burj Khalifa",
    rating: "4.9",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XCsoWDczUwuIBLJdTCOlyRcbrwGPCJO_haasb5kOYYfnLDBSfi29N0zF&s=10"
  },
  {
    id: 3,
    country: "Turkey",
    destin: "Cappadocia",
    rating: "4.9",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVcrbsGBTt3fmAuBuLej8Wg2oy2qxqZSY1ZN6Q9ONCHYvUJ83tgLRLYZZ9&s=10"
  },
 {
  id: 4,
  country: "Pakistan",
  destin: "Hunza Valley",
  rating: "4.9",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjW8MG6mX3AKEdlTmC-F387xYmXrBReKTP_8Nvc9HeGAh5CtWaxUVbYW4&s=10"
},
  {
    id: 5,
    country: "Switzerland",
    destin: "Matterhorn",
    rating: "5.0",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV9KIkJ908tPOdwOYDnRWy1nmZWOPlHRMfaQvVNM4Nz9Z4n0Bhu-Ins5I&s=10"
  },
  {
    id: 6,
    country: "Japan",
    destin: "Mount Fuji",
    rating: "5.0",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfNfBypujnnJf5irf_WdUPmM0cl5kQw7rmIAaDN_6Basig2V6iTktSUok&s=10"
  },
  {
    id: 7,
    country: "Italy",
    destin: "Colosseum",
    rating: "4.9",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZxcAB7syfCM3kSeCvnsPFJeo_GQglniEPuqMeRs7vVmQll_8ZEqfjink&s=10"
  }
  ]
  return (
    <div className='h-[850px] w-full bg-slate-950'>
      <div className='text-orange-500  text-center text-xl font-medium font-mono pt-[50px]'>Destination List</div>
      <div className='text-white text-center font-semibold text-3xl mt-[15px]'>Explore Beautiful Places</div>
      <div className='text-white text-center font-semibold text-3xl '>Around The World</div>
     <div className="flex justify-center gap-8 mt-16 flex-wrap">
  {destination.slice(0, 3).map((card) => (
    <div key={card.id} className="text-gray-50 ">
      <div
        className="h-[200px] w-[300px] bg-cover bg-center rounded-lg p-6 transition-all duration-500 ease-in-out hover:w-[350px]"
        style={{ backgroundImage: `url(${card.image})` }}
      >
        <p className="text-orange-500 font-semibold text-xl bg-gray-500 w-[80px] rounded">⭐ {card.rating}</p>
        <p className="font-bold text-3xl mt-[80px]">{card.destin}</p>
        <p>
          <i className="fa-solid fa-location-dot mr-2"></i>
          {card.country}
        </p>
      </div>
    </div>
  ))}
</div>
 <div className="flex justify-center gap-8 mt-16 flex-wrap ">
  {destination.slice(3, 8).map((card) => (
    <div key={card.id} className="text-gray-50 ">
      <div
        className="h-[220px] transition-all duration-500 ease-in-out hover:w-[250px] w-[220px] bg-cover bg-center rounded-lg p-6"
        style={{ backgroundImage: `url(${card.image})` }}
      >
        <p className="text-orange-500 font-semibold text-xl bg-gray-500 w-[80px] rounded">⭐ {card.rating}</p>
        <p className="font-bold text-3xl mt-[80px]">{card.destin}</p>
        <p>
          <i className="fa-solid fa-location-dot mr-2"></i>
          {card.country}
        </p>
      </div>
    </div>
  ))}
</div>
    </div>
      )
}

      export default Sixth
