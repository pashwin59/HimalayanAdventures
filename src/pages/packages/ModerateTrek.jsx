
import { Link } from "react-router-dom";

import heroImage from "../../../photos/main4.jpeg";
import abcImage from "../../../photos/images.jpeg";
import langtangImage from "../../../photos/kyangin.jpg";
import mardiImage from "../../../photos/newss.avif";
import khopraImage from "../../../photos/khayers.jpg";

const treks = [
  {
    name: "Annapurna Base Camp Trek",
    slug: "annapurna-base-camp",
    duration: "7–10 Days",
    altitude: "4,130 m",
    difficulty: "Moderate",
    image: abcImage,
    description:
      "Journey through beautiful mountain villages, bamboo forests and dramatic gorges before reaching the spectacular Annapurna Base Camp, surrounded by towering Himalayan peaks.",
    highlights: [
      "Annapurna mountain amphitheatre",
      "Traditional mountain villages",
      "Bamboo forests and deep gorges",
      "Relaxation at Jhinu hot springs",
    ],
  },
  {
    name: "Langtang Valley Trek",
    slug: "langtang-valley",
    duration: "7–8 Days",
    altitude: "3,870 m",
    difficulty: "Moderate",
    image: langtangImage,
    description:
      "Explore the beautiful Langtang Valley, experience Tamang heritage and Tibetan-influenced culture, and discover monasteries, glaciers and mountain landscapes around Kyanjin Gompa.",
    highlights: [
      "Kyanjin Gompa village",
      "Tamang heritage and culture",
      "Glaciers and mountain panoramas",
      "Local yak cheese experience",
    ],
  },
  {
    name: "Mardi Himal Full Trek",
    slug: "mardi-himal-full",
    duration: "6–7 Days",
    altitude: "4,500 m",
    difficulty: "Moderate",
    image: mardiImage,
    description:
      "Walk along spectacular ridgelines through forests and alpine terrain, with beautiful sunset views of Annapurna South and close-up perspectives of Machhapuchhre.",
    highlights: [
      "Scenic mountain ridge walking",
      "Annapurna South sunset views",
      "Machhapuchhre panoramas",
      "Beautiful alpine landscapes",
    ],
  },
  {
    name: "Khopra Ridge & Khayer Lake Trek",
    slug: "khopra-ridge",
    duration: "8–10 Days",
    altitude: "4,660 m",
    difficulty: "Moderate to Challenging",
    image: khopraImage,
    description:
      "Discover a less-crowded Himalayan route with spectacular views of the Kali Gandaki region and an opportunity to visit the sacred alpine Khayer Lake.",
    highlights: [
      "Panoramic Khopra Ridge views",
      "Sacred Khayer Lake",
      "Views towards the Kali Gandaki",
      "Less-crowded mountain trails",
    ],
  },
];

function ModerateTrek() {
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
                Go beyond,
                <span className="block italic text-[#a58b58]">
                  discover more.
                </span>
              </h1>

              <p className="text-[#77786d] text-lg leading-8 mt-8 max-w-lg">
                Moderate Trekking Packages in Nepal (5–12 Days).
                Explore breathtaking Himalayan sanctuaries, traditional
                mountain villages, beautiful valleys and spectacular
                high-altitude viewpoints.
              </p>

              <div className="flex gap-10 mt-10 border-t border-[#ded9cc] pt-7">

                <div>
                  <p className="font-serif text-3xl text-[#263e32]">5–12</p>
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
                Plan Your Moderate Trek <span>↗</span>
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
            Discover More in Nepal
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Himalayan Adventure Starts Here
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Moderate treks are perfect for active hikers looking for
            rewarding multi-day adventures. Explore spectacular mountain
            viewpoints, traditional villages, alpine landscapes and
            unforgettable Himalayan trails.
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
              Our Moderate Trek Packages
            </h2>

            <p className="text-gray-600 mt-4">
              Explore some of Nepal's most beautiful moderate trekking routes.
            </p>

          </div>

          {/* TREK CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">

            {treks.map((trek) => (

              <article
                key={trek.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >

                {/* IMAGE */}
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

                {/* CARD CONTENT */}
                <div className="p-7">

                  <h3 className="text-2xl font-bold mb-4">
                    {trek.name}
                  </h3>

                  {/* ALTITUDE AND LEVEL */}
                  <div className="flex flex-wrap gap-3 mb-5 text-sm">

                    <span className="bg-gray-100 px-3 py-2 rounded-lg">
                      <strong>Altitude:</strong> {trek.altitude}
                    </span>

                    <span className="bg-gray-100 px-3 py-2 rounded-lg">
                      <strong>Level:</strong> {trek.difficulty}
                    </span>

                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {trek.description}
                  </p>

                  {/* HIGHLIGHTS */}
                  <h4 className="font-bold mb-3">
                    Highlights
                  </h4>

                  <ul className="space-y-2 mb-7">

                    {trek.highlights.map((highlight) => (

                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-gray-600 text-sm"
                      >

                        <span className="text-amber-500 font-bold">
                          ✓
                        </span>

                        {highlight}

                      </li>

                    ))}

                  </ul>

                  {/* INDIVIDUAL TREK DETAIL PAGE */}
                  <Link
                    to={`/packages/trek/moderate-trek/${trek.slug}`}
                    className="inline-block border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-6 py-3 rounded-full font-semibold transition"
                  >
                    View Trek Details →
                  </Link>

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
            Ready for Your Next Himalayan Adventure?
          </h2>

          <p className="text-gray-300 text-lg mb-9 leading-relaxed">
            Choose your preferred moderate trek and let us help you
            plan an unforgettable journey through the Himalayas.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="/plan-your-trek"
              className="bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-full font-semibold transition"
            >
              Plan Your Moderate Trek
            </a>

            <a
              href="/contact"
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

export default ModerateTrek;
