import React from 'react'
import { NewsData } from '../News/NewsData.jsx'

const Blog5 = () => {
  const { newa } = NewsData();

  const blog = newa.find((item) => item.id === 5);

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
            Luxury travel is more than just staying in an expensive hotel—it's
            about experiencing exceptional comfort, personalized service, and
            unforgettable surroundings. Whether overlooking tropical beaches,
            city skylines, or mountain landscapes, these world-class hotels are
            worth every penny.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            1. Burj Al Arab – Dubai, UAE
          </h2>
          <p>
            Often called the world's most luxurious hotel, Burj Al Arab is
            famous for its sail-shaped design, lavish suites, private butlers,
            and spectacular views of the Arabian Gulf.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            2. The Ritz Paris – France
          </h2>
          <p>
            Combining timeless elegance with modern luxury, The Ritz Paris
            offers beautifully designed rooms, Michelin-star dining, and
            exceptional hospitality.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            3. Marina Bay Sands – Singapore
          </h2>
          <p>
            Home to the famous rooftop infinity pool, Marina Bay Sands offers
            breathtaking skyline views, luxury shopping, world-class restaurants,
            and unforgettable entertainment.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            4. Four Seasons Bora Bora – French Polynesia
          </h2>
          <p>
            Relax in stunning overwater villas surrounded by crystal-clear
            lagoons. It's a dream destination for honeymooners and luxury
            travelers.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            5. The Plaza – New York City
          </h2>
          <p>
            Located beside Central Park, The Plaza is an iconic luxury hotel
            known for its elegant rooms, rich history, and premium service.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            6. Aman Tokyo – Japan
          </h2>
          <p>
            Blending traditional Japanese design with modern architecture, Aman
            Tokyo provides peaceful luxury in the heart of one of the world's
            busiest cities.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            7. The Savoy – London, England
          </h2>
          <p>
            One of London's most famous hotels, The Savoy is celebrated for its
            luxurious rooms, exceptional afternoon tea, and outstanding service.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            8. Emirates Palace – Abu Dhabi, UAE
          </h2>
          <p>
            Featuring grand architecture, private beaches, fine dining, and
            lavish interiors, Emirates Palace delivers a truly royal experience.
          </p>

          <h2 className="font-bold text-2xl mt-8">
            Why Choose a Luxury Hotel?
          </h2>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Spacious rooms with premium amenities.</li>
            <li>Exceptional customer service available 24/7.</li>
            <li>Fine dining by award-winning chefs.</li>
            <li>Luxury spas, infinity pools, and wellness centers.</li>
            <li>Prime locations near famous attractions.</li>
            <li>Exclusive experiences and personalized services.</li>
          </ul>

          <h2 className="font-bold text-2xl mt-8">
            Booking Tips
          </h2>

          <p className="mt-3">
            Book several months in advance to secure the best rates. Travel
            during the shoulder season for lower prices while still enjoying
            excellent weather and fewer crowds. Joining hotel loyalty programs
            can also provide free upgrades and exclusive benefits.
          </p>

          <h2 className="font-bold text-2xl mt-8">
            Final Thoughts
          </h2>

          <p className="mt-3">
            Luxury hotels provide more than just a place to sleep—they create
            unforgettable experiences through world-class hospitality,
            breathtaking locations, and unmatched comfort. Whether you're
            celebrating a special occasion or simply treating yourself, these
            hotels promise memories that last a lifetime.
          </p>

          <p className="mt-4 italic text-lg">
            "Luxury is not about extravagance—it's about unforgettable
            experiences."
          </p>

        </div>
      </div>
    </>
  );
};

export default Blog5;