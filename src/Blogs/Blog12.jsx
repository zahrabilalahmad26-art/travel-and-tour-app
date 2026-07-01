import React from 'react'
import { NewsData } from '../News/NewsData.jsx'

const Blog12 = () => {
  const { newa } = NewsData();

  const blog = newa.find((item) => item.id === 12);

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
            Mountains offer breathtaking landscapes, peaceful surroundings,
            and exciting adventures for travelers seeking a break from busy
            city life. Whether you're looking for hiking trails, snow-covered
            peaks, or charming alpine villages, these mountain destinations
            promise unforgettable experiences for every nature lover.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            1. Swiss Alps – Switzerland
          </h2>
          <p>
            Famous for snow-capped peaks, crystal-clear lakes, and scenic train
            rides, the Swiss Alps provide world-class hiking, skiing, and
            breathtaking panoramic views throughout the year.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            2. Rocky Mountains – Canada
          </h2>
          <p>
            Stretching across Alberta and British Columbia, the Rockies are
            home to turquoise lakes, dense forests, glaciers, and abundant
            wildlife.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            3. Himalayas – Nepal
          </h2>
          <p>
            Home to Mount Everest, the Himalayas attract trekkers from around
            the world with spectacular mountain scenery and rich cultural
            experiences.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            4. Dolomites – Italy
          </h2>
          <p>
            The Dolomites are famous for their dramatic limestone peaks,
            picturesque villages, and excellent hiking and cycling routes.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            5. Mount Fuji – Japan
          </h2>
          <p>
            Japan's iconic volcano offers unforgettable sunrise hikes,
            beautiful lakes, and stunning cherry blossom views during spring.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            6. Andes Mountains – South America
          </h2>
          <p>
            Running through seven countries, the Andes feature ancient ruins,
            colorful mountain villages, and incredible trekking opportunities.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            7. Banff National Park – Canada
          </h2>
          <p>
            Discover turquoise lakes, towering peaks, wildlife, and endless
            hiking trails in one of North America's most beautiful national
            parks.
          </p>

          <h2 className="font-bold text-2xl mt-6">
            8. Mount Kilimanjaro – Tanzania
          </h2>
          <p>
            Africa's highest mountain is a bucket-list destination for hikers,
            offering diverse landscapes from rainforests to snow-covered
            summits.
          </p>

          <h2 className="font-bold text-2xl mt-8">
            Activities to Enjoy
          </h2>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Mountain hiking and trekking</li>
            <li>Wildlife photography</li>
            <li>Camping under the stars</li>
            <li>Skiing and snowboarding during winter</li>
            <li>Cable car rides with panoramic views</li>
            <li>Exploring waterfalls and alpine lakes</li>
            <li>Visiting local mountain villages</li>
          </ul>

          <h2 className="font-bold text-2xl mt-8">
            Travel Tips
          </h2>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Carry warm clothing because temperatures can change quickly.</li>
            <li>Wear comfortable hiking boots with good grip.</li>
            <li>Stay hydrated, especially at higher altitudes.</li>
            <li>Start hikes early to avoid afternoon weather changes.</li>
            <li>Respect wildlife and protect natural environments.</li>
          </ul>

          <h2 className="font-bold text-2xl mt-8">
            Final Thoughts
          </h2>

          <p className="mt-3">
            Mountain destinations offer the perfect combination of adventure,
            relaxation, and natural beauty. Whether you're climbing legendary
            peaks, hiking through alpine forests, or simply enjoying peaceful
            valley views, every mountain journey creates memories that last a
            lifetime.
          </p>

          <p className="mt-4 italic text-lg">
            "The mountains are calling, and every trail leads to a new
            adventure."
          </p>

        </div>
      </div>
    </>
  );
};

export default Blog12;