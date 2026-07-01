import React from 'react'
import { NewsData } from '../News/NewsData.jsx'

const Blog3 = () => {
  const { newa } = NewsData();

  const blog = newa.find((item) => item.id === 3);

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

          <p className="text-xl first-letter:text-7xl first-letter:font-bold mb-6">
            Nothing says summer like warm sunshine, soft sand beneath your feet,
            and the relaxing sound of ocean waves. Whether you're looking for
            adventure, family fun, or a peaceful escape, these breathtaking
            beaches offer crystal-clear waters and unforgettable coastal
            experiences.
          </p>

          <h2 className="font-bold text-2xl mt-6">1. Whitehaven Beach, Australia</h2>
          <p>
            Famous for its pure white silica sand and turquoise waters,
            Whitehaven Beach is one of the world's most beautiful coastal
            destinations. Enjoy swimming, sailing, and panoramic viewpoints.
          </p>

          <h2 className="font-bold text-2xl mt-6">2. Bora Bora, French Polynesia</h2>
          <p>
            Relax in luxurious overwater bungalows surrounded by vibrant blue
            lagoons. Bora Bora is perfect for snorkeling, diving, and romantic
            vacations.
          </p>

          <h2 className="font-bold text-2xl mt-6">3. Navagio Beach, Greece</h2>
          <p>
            Also known as Shipwreck Beach, this hidden paradise is surrounded by
            dramatic cliffs and can only be reached by boat.
          </p>

          <h2 className="font-bold text-2xl mt-6">4. Maldives</h2>
          <p>
            The Maldives is home to hundreds of pristine islands featuring soft
            sandy beaches, colorful coral reefs, and luxurious resorts.
          </p>

          <h2 className="font-bold text-2xl mt-6">5. Grace Bay, Turks and Caicos</h2>
          <p>
            Grace Bay offers calm, crystal-clear waters, making it an excellent
            destination for swimming, paddleboarding, and relaxing under the sun.
          </p>

          <h2 className="font-bold text-2xl mt-6">6. Waikiki Beach, Hawaii</h2>
          <p>
            Known for its golden sand and iconic Diamond Head backdrop, Waikiki
            combines surfing, shopping, and vibrant nightlife.
          </p>

          <h2 className="font-bold text-2xl mt-6">7. Anse Source d'Argent, Seychelles</h2>
          <p>
            This beach is famous for its unique granite rock formations,
            shallow turquoise waters, and incredible photography opportunities.
          </p>

          <h2 className="font-bold text-2xl mt-6">8. Pink Sands Beach, Bahamas</h2>
          <p>
            Stretching for miles, this beach gets its unique pink color from
            tiny coral fragments mixed with soft white sand.
          </p>

          <h2 className="font-bold text-2xl mt-6">9. Railay Beach, Thailand</h2>
          <p>
            Surrounded by limestone cliffs, Railay Beach is ideal for rock
            climbing, kayaking, and enjoying spectacular sunsets.
          </p>

          <h2 className="font-bold text-2xl mt-6">10. Copacabana Beach, Brazil</h2>
          <p>
            One of the world's most famous beaches, Copacabana offers lively
            entertainment, beach sports, delicious local food, and stunning
            ocean views.
          </p>

          <h2 className="font-bold text-2xl mt-8">Travel Tips</h2>

          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Visit early in the morning to enjoy quieter beaches.</li>
            <li>Carry sunscreen, sunglasses, and plenty of water.</li>
            <li>Respect marine life and avoid leaving trash behind.</li>
            <li>Book accommodations early during peak summer months.</li>
            <li>Always check local weather and swimming conditions.</li>
          </ul>

          <h2 className="font-bold text-2xl mt-8">Final Thoughts</h2>

          <p className="mt-3">
            From tropical islands to dramatic coastal cliffs, the world's most
            beautiful beaches offer something for every traveler. Whether you
            dream of relaxing beneath palm trees, exploring colorful coral reefs,
            or watching unforgettable sunsets, these destinations promise a
            summer vacation you'll never forget.
          </p>

          <p className="mt-4 italic text-lg">
            "Life is better with sandy feet, salty air, and endless ocean
            views."
          </p>

        </div>
      </div>
    </>
  );
};

export default Blog3;