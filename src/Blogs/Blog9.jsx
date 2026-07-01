import React from 'react'
import { NewsData } from '../News/NewsData.jsx'

const Blog9 = () => {
  const { newa } = NewsData();

  const blog = newa.find((item) => item.id === 9);

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
            Packing smart can make any trip more enjoyable and stress-free.
            Whether you're heading on a weekend getaway, a beach vacation,
            or an international adventure, having the right essentials ensures
            you're prepared for every moment.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            1. Travel Documents
          </h2>
          <p>
            Keep your passport, ID card, visas, flight tickets, hotel
            reservations, travel insurance, and emergency contact information
            organized in one secure place.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            2. Clothing Essentials
          </h2>
          <p>
            Pack comfortable clothes suitable for the weather, including extra
            outfits, sleepwear, underwear, socks, a light jacket, and comfortable
            walking shoes.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            3. Toiletries
          </h2>
          <p>
            Carry travel-sized toiletries including a toothbrush, toothpaste,
            shampoo, soap, sunscreen, moisturizer, deodorant, and personal care
            items.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            4. Electronics
          </h2>
          <p>
            Don't forget your phone, charger, power bank, camera, headphones,
            universal travel adapter, and any necessary charging cables.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            5. Health & Safety
          </h2>
          <p>
            Bring prescription medicines, a small first-aid kit, hand sanitizer,
            reusable face masks if needed, and reusable water bottles.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            6. Travel Accessories
          </h2>
          <p>
            Useful accessories include sunglasses, a travel pillow, luggage
            locks, reusable shopping bags, umbrellas, and packing cubes for
            better organization.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            7. Money & Payments
          </h2>
          <p>
            Carry debit or credit cards, a small amount of local currency, and
            keep emergency cash in a separate location.
          </p>

          <h2 className="font-bold text-2xl mt-8">
            Packing Tips
          </h2>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Make a checklist before packing.</li>
            <li>Roll clothes to save luggage space.</li>
            <li>Pack heavier items at the bottom of your suitcase.</li>
            <li>Keep valuables in your carry-on bag.</li>
            <li>Leave extra space for souvenirs.</li>
            <li>Check airline baggage limits before departure.</li>
          </ul>

          <h2 className="font-bold text-2xl mt-8">
            Bonus Essentials
          </h2>

          <p className="mt-3">
            A reusable water bottle, portable charger, travel journal, snacks,
            and a downloaded offline map can make your journey much more
            comfortable, especially during long travel days.
          </p>

          <h2 className="font-bold text-2xl mt-8">
            Final Thoughts
          </h2>

          <p className="mt-3">
            A well-packed suitcase helps you travel with confidence and peace of
            mind. By preparing ahead of time and packing only what you truly
            need, you'll spend less time worrying and more time enjoying your
            adventure.
          </p>

          <p className="mt-4 italic text-lg">
            "Pack light, travel far, and make every journey unforgettable."
          </p>

        </div>
      </div>
    </>
  );
};

export default Blog9;