import React from 'react'
import { NewsData } from '../News/NewsData.jsx'

const Blog4 = () => {
  const { newa } = NewsData();

  const blog = newa.find((item) => item.id === 4);

  return (
    <>
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[600px] object-cover opacity-40"
        />

        <div className="bg-slate-800 text-white w-[1000px] mx-auto -mt-60 px-16 py-10 relative z-10 mb-[100px] rounded-lg shadow-lg">

          <h1 className="font-bold text-3xl">{blog.title}</h1>

          <div className="flex gap-5 text-gray-300 mt-3 mb-6">
            <span>By {blog.author}</span>
            <span>{blog.date}</span>
            <span>{blog.readTime}</span>
          </div>

          <p className="text-xl first-letter:text-7xl first-letter:font-bold mb-6">
            Hiking is one of the best ways to experience nature while staying
            active. From towering mountains to lush forests and breathtaking
            valleys, the world's hiking trails offer unforgettable adventures
            for both beginners and experienced trekkers.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            1. Inca Trail – Peru
          </h2>
          <p>
            One of the world's most famous hiking routes, the Inca Trail leads
            through ancient ruins, cloud forests, and spectacular mountain
            scenery before reaching the legendary Machu Picchu.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            2. Everest Base Camp – Nepal
          </h2>
          <p>
            A dream trek for adventure lovers, this trail offers incredible
            Himalayan views, Sherpa culture, and the chance to stand at the foot
            of the world's highest mountain.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            3. Torres del Paine – Chile
          </h2>
          <p>
            Explore dramatic granite peaks, turquoise lakes, glaciers, and
            wildlife in one of South America's most beautiful national parks.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            4. Tour du Mont Blanc – France, Italy & Switzerland
          </h2>
          <p>
            This famous multi-country trail circles Mont Blanc and offers
            charming villages, alpine meadows, and breathtaking mountain
            landscapes.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            5. Cinque Terre Trails – Italy
          </h2>
          <p>
            Perfect for beginners, these scenic coastal paths connect colorful
            seaside villages while offering incredible Mediterranean views.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            6. Appalachian Trail – USA
          </h2>
          <p>
            Stretching over 3,500 kilometers, this iconic trail passes through
            forests, mountains, and small towns across the eastern United States.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            7. Milford Track – New Zealand
          </h2>
          <p>
            Known as the "finest walk in the world," Milford Track features
            waterfalls, rainforests, rivers, and spectacular mountain scenery.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            8. Mount Fuji Trail – Japan
          </h2>
          <p>
            Climbing Japan's highest peak is a memorable experience, especially
            when reaching the summit to witness the unforgettable sunrise.
          </p>

          <h2 className="font-bold text-2xl mt-8">
            Essential Hiking Tips
          </h2>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Wear comfortable hiking boots with good grip.</li>
            <li>Carry enough drinking water and energy snacks.</li>
            <li>Check the weather forecast before starting.</li>
            <li>Bring a map or GPS device for navigation.</li>
            <li>Pack a basic first-aid kit.</li>
            <li>Leave no trace and protect nature.</li>
            <li>Tell someone your hiking route before leaving.</li>
          </ul>

          <h2 className="font-bold text-2xl mt-8">
            Best Time to Hike
          </h2>

          <p className="mt-3">
            Spring and autumn usually provide the most comfortable temperatures
            and beautiful scenery. However, always research the ideal hiking
            season for your chosen destination, as mountain weather can change
            quickly.
          </p>

          <h2 className="font-bold text-2xl mt-8">
            Final Thoughts
          </h2>

          <p className="mt-3">
            Hiking allows you to disconnect from everyday life and reconnect
            with nature. Whether you're walking along coastal cliffs, climbing
            alpine peaks, or exploring peaceful forests, every trail offers a
            unique adventure and unforgettable memories.
          </p>

          <p className="mt-4 italic text-lg">
            "The best view comes after the hardest climb."
          </p>

        </div>
      </div>
    </>
  );
};

export default Blog4;