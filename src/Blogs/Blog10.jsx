import React from 'react'
import { NewsData } from '../News/NewsData.jsx'

const Blog10 = () => {
  const { newa } = NewsData();

  const blog = newa.find((item) => item.id === 10);

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
            Traveling with family is one of the best ways to create lasting
            memories. Whether you're looking for exciting theme parks, relaxing
            beaches, wildlife adventures, or cultural experiences, these
            destinations offer activities that everyone—from young children to
            grandparents—can enjoy together.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            1. Orlando, Florida, USA
          </h2>
          <p>
            Home to famous theme parks, water parks, and family entertainment,
            Orlando is a dream destination for children and adults alike.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            2. Gold Coast, Australia
          </h2>
          <p>
            Enjoy beautiful beaches, wildlife parks, exciting amusement parks,
            and outdoor adventures perfect for family vacations.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            3. Tokyo, Japan
          </h2>
          <p>
            Experience modern attractions, interactive museums, delicious food,
            beautiful gardens, and family-friendly entertainment throughout the
            city.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            4. Singapore
          </h2>
          <p>
            Visit Gardens by the Bay, Universal Studios Singapore, Sentosa
            Island, and the world-famous Night Safari for unforgettable family
            fun.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            5. Switzerland
          </h2>
          <p>
            Scenic train rides, alpine villages, cable cars, lakes, and gentle
            hiking trails make Switzerland a fantastic destination for families
            who love nature.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            6. Dubai, UAE
          </h2>
          <p>
            Explore indoor theme parks, aquariums, desert safaris, beaches, and
            family-friendly shopping malls with entertainment for every age.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            7. Paris, France
          </h2>
          <p>
            Visit Disneyland Paris, cruise along the Seine River, explore parks,
            museums, and enjoy delicious French pastries together.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            8. Bali, Indonesia
          </h2>
          <p>
            Relax on beautiful beaches, visit monkey forests, waterfalls, and
            family resorts offering fun activities for both children and adults.
          </p>

          <h2 className="font-bold text-2xl mt-8">
            Family Travel Tips
          </h2>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Plan activities suitable for every age group.</li>
            <li>Book accommodations with family-friendly facilities.</li>
            <li>Pack snacks, medicines, and entertainment for children.</li>
            <li>Allow extra time between activities to avoid rushing.</li>
            <li>Keep important travel documents organized and accessible.</li>
            <li>Choose destinations with safe and convenient transportation.</li>
          </ul>

          <h2 className="font-bold text-2xl mt-8">
            Why Family Travel Matters
          </h2>

          <p className="mt-3">
            Traveling together strengthens family relationships, introduces
            children to different cultures, and creates unforgettable memories.
            Every trip becomes an opportunity to learn, laugh, and explore the
            world as a family.
          </p>

          <h2 className="font-bold text-2xl mt-8">
            Final Thoughts
          </h2>

          <p className="mt-3">
            From exciting theme parks and relaxing beaches to scenic mountains
            and cultural cities, family-friendly destinations offer something
            for everyone. The best family vacations combine adventure,
            relaxation, and quality time together, making every journey truly
            special.
          </p>

          <p className="mt-4 italic text-lg">
            "The greatest souvenirs are the memories made with family."
          </p>

        </div>
      </div>
    </>
  );
};

export default Blog10;