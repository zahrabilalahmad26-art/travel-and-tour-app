import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <div className="h-[300px] bg-[url('https://images.unsplash.com/photo-1502920917128-1aa500764ce7')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/60 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-gray-300 mt-4">
            We'd love to hear from you
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-8 grid md:grid-cols-2 gap-16">

        <div>
          <p className="text-orange-500 font-semibold text-lg">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Plan Your Next Adventure
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Whether you're planning your dream vacation, honeymoon,
            family trip, or business tour, our travel experts are
            here to help. Contact us anytime and we'll respond as
            soon as possible.
          </p>

          <div className="space-y-8 mt-10">

            <div className="flex items-center gap-4">
              <div className="bg-orange-500 p-4 rounded-full">
                <i className="fa-solid fa-location-dot"></i>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Office Address</h3>
                <p className="text-gray-400">
                  Faisalabad, Punjab, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-orange-500 p-4 rounded-full">
                <i className="fa-solid fa-phone"></i>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-400">
                  +92 300 1234567
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-orange-500 p-4 rounded-full">
                <i className="fa-solid fa-envelope"></i>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-400">
                  info@zazitravel.com
                </p>
              </div>
            </div>

          </div>
        </div>
        <div className="bg-slate-900 rounded-2xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Send a Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-lg bg-slate-800 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-lg bg-slate-800 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-lg bg-slate-800 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-slate-800 outline-none resize-none"
            ></textarea>

            <button
              className="bg-orange-500 hover:bg-orange-600 duration-300 px-8 py-4 rounded-lg font-semibold w-full"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
      <div className="max-w-7xl mx-auto px-8 pb-20">
        <iframe
          title="Google Map"
          className="w-full h-[450px] rounded-2xl"
          src="https://www.google.com/maps?q=Faisalabad,Pakistan&output=embed"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;