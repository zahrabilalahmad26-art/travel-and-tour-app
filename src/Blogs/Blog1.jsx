import React from 'react'
import { NewsData } from '../News/NewsData.jsx'
const Blog1 = () => {
  const { newa } = NewsData();

  const blog = newa.find((item) => item.id === 1);
  return (
    <>
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[600px] opacity-40 object-cover"
        />

        <div className="bg-slate-800 text-white w-[1000px] mx-auto -mt-60 px-16 py-10 relative z-10 mb-[100px] rounded-lg shadow-lg">

          <h1 className="font-bold text-3xl">{blog.title}</h1>

          <div className="flex gap-5 text-gray-300 mt-3 mb-6">
            <span>By {blog.author}</span>
            <span>{blog.date}</span>
            <span>{blog.readTime}</span>
          </div>

        <p className='font-normal text-xl first-letter:text-7xl'>Switzerland is famous for its snow-capped mountains, crystal-clear lakes, and charming cities like Zurich, Geneva, and Lucerne. While these destinations attract millions of visitors every year, the country is also home to countless hidden gems waiting to be discovered. If you're looking to escape the crowds and experience the authentic beauty of Switzerland, these lesser-known places deserve a spot on your travel bucket list.</p>
        <h1 className='font-bold text-xl'>1. Lauterbrunnen Valley</h1>
        <p className='font-normal text-md'>Often called the "Valley of 72 Waterfalls," Lauterbrunnen offers dramatic cliffs, peaceful hiking trails, and breathtaking scenery. It's the perfect destination for nature lovers and photographers.</p>
        <h1 className='font-bold text-xl'>
          2. Blausee
        </h1>
        <p className='font-normal text-md'>
          This small mountain lake is famous for its crystal-clear turquoise water. Surrounded by dense forests, Blausee feels like a fairy tale and is ideal for a relaxing day trip.
        </p>
        <h1 className='font-bold text-xl'>
          3. Iseltwald
        </h1>
        <p className='font-normal text-md'>
          Located on the shores of Lake Brienz, Iseltwald is a peaceful lakeside village with traditional Swiss houses, scenic walking paths, and unforgettable mountain views.
        </p>
        <h1 className='font-bold text-xl'>
          4. Aletsch Glacier
        </h1>
        <p className='font-normal text-md'>
          The largest glacier in the Alps provides incredible hiking routes and panoramic viewpoints. It's a must-visit destination for outdoor adventurers.
        </p>
        <h1 className='font-bold text-xl'>
          5. Bergün
        </h1>
        <p className='font-normal text-md'>
          This quiet alpine village is known for its traditional architecture and beautiful railway journey through the Swiss mountains. Winter visitors can also enjoy one of Europe's longest sledding tracks.
        </p>
        <h1 className='font-bold text-xl'>
          6. Oeschinen Lake
        </h1>
        <p className='font-normal text-md'>
          Hidden among towering peaks, Oeschinen Lake offers kayaking, hiking, and stunning picnic spots with unforgettable alpine scenery.
        </p>
        <h1 className='font-bold text-xl'>
          7. Appenzell
        </h1>
        <p className='font-normal text-md'>
          Experience authentic Swiss culture in this colorful town filled with local cheese shops, traditional restaurants, and picturesque streets.
        </p>
        <h1 className='font-bold text-xl'>
          8. Creux du Van
        </h1>
        <p className='font-normal text-md'>
          This natural rock amphitheater offers spectacular hiking trails and opportunities to spot wildlife such as ibex and marmots.
        </p>
        <h1 className='font-bold text-xl'>
          9. Soglio
        </h1>
        <p className='font-normal text-md'>
          Often called the "Gateway to Paradise," Soglio is a peaceful mountain village with cobbled streets, historic buildings, and breathtaking views of the Alps.
        </p>
        <h1 className='font-bold text-xl'>
          10. Verzasca Valley
        </h1>
        <p className='font-normal text-md'>
          Known for its emerald-green river and famous stone bridge, Verzasca Valley is perfect for swimming, hiking, and enjoying Switzerland's untouched natural beauty.
        </p>
        <h1 className='font-bold text-xl'>
          Travel Tips
        </h1>
        <p className='font-normal text-md'>
          Visit during late spring or early autumn for pleasant weather and fewer tourists.
        </p>
        <p className='font-normal text-md'>
          Purchase a Swiss Travel Pass to enjoy unlimited train, bus, and boat travel.
        </p>
        <p className='font-normal text-md'>
          Pack comfortable hiking shoes and layered clothing for changing mountain weather.
        </p>
        <p className='font-normal text-md'>
          Respect local communities by keeping nature clean and following marked trails.
        </p>
        <h1 className='font-bold text-xl'>
          Final Thoughts
        </h1>
        <p className='font-normal text-md'>
          Switzerland has much more to offer than its famous cities and ski resorts. These hidden gems provide unforgettable experiences, peaceful landscapes, and authentic local culture that many travelers miss. Whether you're planning a relaxing getaway or an adventurous road trip, exploring these off-the-beaten-path destinations will make your Swiss journey truly memorable.

          Sometimes, the best adventures aren't found in guidebooks—they're discovered where the crowds end and nature begins.

        </p>
      </div>
       </div>
    </>

  )
}

export default Blog1
