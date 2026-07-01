import React from 'react'
import { NewsData } from '../News/NewsData.jsx'

const Blog7 = () => {
  const { newa } = NewsData();

  const blog = newa.find((item) => item.id === 7);

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
            Northern Pakistan is one of the world's most breathtaking road trip
            destinations. Towering mountains, turquoise lakes, historic forts,
            and welcoming local communities make every kilometer an unforgettable
            adventure. Whether you're driving with friends or family, this
            journey offers incredible scenery and lasting memories.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            1. Islamabad to Naran
          </h2>
          <p>
            Begin your adventure from Islamabad and drive through scenic valleys
            to Naran. Stop at Balakot and enjoy the refreshing views of the
            Kunhar River along the way.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            2. Babusar Pass
          </h2>
          <p>
            One of Pakistan's highest mountain passes, Babusar Pass offers
            spectacular panoramic views, cool weather, and countless
            photography opportunities.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            3. Hunza Valley
          </h2>
          <p>
            Explore the beautiful Hunza Valley, famous for Baltit Fort, Altit
            Fort, Attabad Lake, Passu Cones, and the warm hospitality of the
            local people.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            4. Skardu
          </h2>
          <p>
            Visit Shangrila Resort, Upper Kachura Lake, Satpara Lake, and enjoy
            breathtaking views of the Karakoram Mountains. Skardu is also the
            gateway to K2 expeditions.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            5. Fairy Meadows
          </h2>
          <p>
            End your road trip with a visit to Fairy Meadows, offering one of
            the most stunning views of Nanga Parbat. It's a paradise for hikers,
            campers, and nature lovers.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            6. Local Cuisine
          </h2>
          <p>
            Taste delicious traditional dishes including Chapshuro, Hunza
            bread, trout fish, local apricots, and fresh mountain honey during
            your journey.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            7. Adventure Activities
          </h2>
          <p>
            Enjoy boating on Attabad Lake, jeep safaris, hiking, camping,
            photography, zip-lining, and exploring colorful local markets.
          </p>

          <h2 className="font-bold text-2xl mt-8">
            Road Trip Essentials
          </h2>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Inspect your vehicle before departure.</li>
            <li>Carry a spare tire and essential tools.</li>
            <li>Download offline maps for remote areas.</li>
            <li>Pack warm clothes, even during summer.</li>
            <li>Carry snacks, drinking water, and a first-aid kit.</li>
            <li>Fill your fuel tank whenever possible in mountain regions.</li>
            <li>Drive carefully on steep and winding roads.</li>
          </ul>

          <h2 className="font-bold text-2xl mt-8">
            Best Time to Visit
          </h2>

          <p className="mt-3">
            The ideal time for a northern Pakistan road trip is from May to
            September, when most mountain roads remain open and the weather is
            pleasant for sightseeing and outdoor activities.
          </p>

          <h2 className="font-bold text-2xl mt-8">
            Final Thoughts
          </h2>

          <p className="mt-3">
            A road trip across Northern Pakistan is more than just a vacation—
            it's an unforgettable journey through some of the world's most
            spectacular landscapes. From peaceful lakes and towering peaks to
            historic forts and vibrant local culture, every stop offers a new
            adventure waiting to be discovered.
          </p>

          <p className="mt-4 italic text-lg">
            "The best road trips aren't measured in miles—they're measured in unforgettable memories."
          </p>

        </div>
      </div>
    </>
  );
};

export default Blog7;