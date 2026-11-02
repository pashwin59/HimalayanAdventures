import { Link } from "react-router-dom";

import heroImage from "../../../photos/main1.jpeg";
import poonHillImage from "../../../photos/main2.jpeg";
import mardiImage from "../../../photos/main3.jpeg";
import panchaseImage from "../../../photos/eco.webp";
import nagarkotImage from "../../../photos/heritage.jpeg";

const treks = [
  {
    name: "Ghorepani Poon Hill Trek",
    duration: "4–5 Days",
    altitude: "3,210 m",
    difficulty: "Easy to Moderate",
    image: poonHillImage,
    description:
      "Enjoy a spectacular 360° sunrise panorama over the Annapurna and Dhaulagiri ranges, walk through beautiful rhododendron forests, and experience traditional Gurung village culture.",
    highlights: [
      "Iconic Himalayan sunrise viewpoint",
      "Rhododendron forests",
      "Traditional stone steps and teahouses",
      "Gurung village culture",
    ],
  },
  {
    name: "Mardi Himal Short Trek",
    duration: "4–5 Days",
    altitude: "4,500 m",
    difficulty: "Moderate",
    image: mardiImage,
    description:
      "Experience stunning views of Machhapuchhre (Fishtail) along a quiet mountain ridge, with fewer crowds and a beautiful transition from oak forests to alpine landscapes.",
    highlights: [
      "Spectacular Fishtail mountain views",
      "Quiet and scenic ridge trails",
      "Oak forests and alpine landscapes",
      "High Camp and viewpoint experience",
    ],
  },
  {
    name: "Panchase Eco Trek",
    duration: "3–4 Days",
    altitude: "2,500 m",
    difficulty: "Easy",
    image: panchaseImage,
    description:
      "Discover rich biodiversity, peaceful forest trails, a sacred hilltop temple, and beautiful Annapurna views from the hills surrounding Pokhara.",
    highlights: [
      "Rich biodiversity",
      "Sacred Panchase hilltop temple",
      "Annapurna mountain views",
      "Ideal for nature lovers and birdwatchers",
    ],
  },
  
  {
    name: "Nagarkot to Dhulikhel Ridge Walk",
    duration: "2–3 Days",
    altitude: "2,175 m",
    difficulty: "Easy",
    image: nagarkotImage,
    description:
      "Explore beautiful ridge trails, enjoy sunrise views of the Everest range, and discover historic Newari towns and traditional terraced farmland near Kathmandu.",
    highlights: [
      "Sunrise Himalayan panoramas",
      "Historic Newari towns",
      "Traditional terraced farmland",
      "Relaxed walking experience",
    ],
  },
];

function ShortTrek() {
  return (
    <main className="bg-white text-gray-900">
      {/* PREMIUM EDITORIAL HERO */}
<section className="bg-[#f8f7f2]">
  <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-14 md:py-20">

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* LEFT CONTENT */}
      <div className="order-2 lg:order-1">

        <p className="text-xs uppercase tracking-[4px] text-[#a58b58] mb-7">
          Discover the Himalayas · Nepal
        </p>

        <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-[#263e32]">
          Short escapes,
          <span className="block italic text-[#a58b58]">
            lasting memories.
          </span>
        </h1>

        <p className="text-[#77786d] text-lg leading-8 mt-8 max-w-lg">
          Short Trekking Packages in Nepal (1–5 Days). Experience
          breathtaking Himalayan panoramas, traditional villages and
          beautiful mountain trails.
        </p>

        <div className="flex gap-10 mt-10 border-t border-[#ded9cc] pt-7">

          <div>
            <p className="font-serif text-3xl text-[#263e32]">1–5</p>
            <p className="text-xs uppercase tracking-wider text-[#898678] mt-2">
              Days
            </p>
          </div>

          <div>
            <p className="font-serif text-3xl text-[#263e32]">4</p>
            <p className="text-xs uppercase tracking-wider text-[#898678] mt-2">
              Trek options
            </p>
          </div>

          <div>
            <p className="font-serif text-3xl text-[#263e32]">Nepal</p>
            <p className="text-xs uppercase tracking-wider text-[#898678] mt-2">
              Himalayas
            </p>
          </div>

        </div>

        <a
          href="/#contact"
          className="inline-flex items-center gap-4 mt-10 bg-[#263e32] text-white px-8 py-4 hover:bg-[#a58b58] transition"
        >
          Plan Your Short Trek <span>↗</span>
        </a>

      </div>

      {/* RIGHT IMAGE */}
      <div className="order-1 lg:order-2 relative">

        <img
          src={heroImage}
          alt="Himalayan trekking experience in Nepal"
          className="w-full h-[350px] md:h-[540px] object-cover"
        />

        <div className="absolute bottom-5 left-5 bg-[#f8f7f2] px-6 py-4">
          <p className="text-xs uppercase tracking-[2px] text-[#a58b58]">
            Your next adventure
          </p>
          <p className="font-serif text-xl text-[#263e32] mt-1">
            Into the mountains
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
            Discover More in Less Time
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Himalayan Adventure Starts Here
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Short treks are perfect for beginners, families, and travellers
            with limited time. Enjoy scenic mountain viewpoints, traditional
            villages, and comfortable tea-house experiences.
          </p>
        </div>
      </section>

      {/* TREK PACKAGES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
              Choose Your Adventure
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Our Short Trek Packages
            </h2>

            <p className="text-gray-600 mt-4">
              Explore some of Nepal's most beautiful short trekking routes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
            {treks.map((trek, index) => (
              <article
                key={trek.name}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={trek.image}
                    alt={trek.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />

                  <span className="absolute top-5 left-5 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {trek.duration}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold mb-4">
                    {trek.name}
                  </h3>

                  <div className="flex flex-wrap gap-3 mb-5 text-sm">
                    <span className="bg-gray-100 px-3 py-2 rounded-lg">
                      <strong>Altitude:</strong> {trek.altitude}
                    </span>

                    <span className="bg-gray-100 px-3 py-2 rounded-lg">
                      <strong>Level:</strong> {trek.difficulty}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {trek.description}
                  </p>

                  <h4 className="font-bold mb-3">Highlights</h4>

                  <ul className="space-y-2 mb-7">
                    {trek.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-gray-600 text-sm"
                      >
                        <span className="text-amber-500 font-bold">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/#contact"
                    className="inline-block border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-6 py-3 rounded-full font-semibold transition"
                  >
                    Enquire Now →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-amber-400 uppercase tracking-[3px] text-sm mb-4">
            Your Journey Awaits
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Have Only a Few Days in Nepal?
          </h2>

          <p className="text-gray-300 text-lg mb-9 leading-relaxed">
            Make the most of your time in the Himalayas. Contact us to plan
            your short trekking adventure.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              className="bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-full font-semibold transition"
            >
              Book a Short Trek
            </a>

            <a
              href="/#contact"
              className="border border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ShortTrek;