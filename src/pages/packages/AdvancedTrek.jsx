
import { Link } from "react-router-dom";

import heroImage from "../../../photos/namche.jpg";
import everestImage from "../../../photos/everest.jpeg";
import annapurnaImage from "../../../photos/thoran.jpeg";
import manasluImage from "../../../photos/manaslus.jpg";
import threePassImage from "../../../photos/everestss.jpeg";
import apiImage from "../../../photos/api.jpeg";
import phoksundoImage from "../../../photos/she.png";

const treks = [
  {
    name: "Everest Base Camp & Cho La Pass Trek",
    slug: "everest-base-camp-cho-la-pass",
    duration: "16–18 Days",
    altitude: "5,545 m (Kala Patthar) / 5,420 m (Cho La Pass)",
    difficulty: "Strenuous / Advanced",
    image: everestImage,
    description:
      "Combine the legendary Everest Base Camp journey with the spectacular Gokyo Lakes circuit and the challenging Cho La Pass. Experience the best of the Khumbu region through glaciers, alpine landscapes and traditional Sherpa villages.",
    highlights: [
      "Stand at the legendary Everest Base Camp",
      "Cross the glaciated Cho La Pass",
      "Discover the turquoise Gokyo Lakes",
      "Experience sunrise from Kala Patthar",
    ],
  },
  {
    name: "Api Himal Base Camp Trek",
    slug: "api-himal-base-camp",
    duration: "16–18 Days",
    altitude: "4,200 m (Kali Dhunga Lake) / 3,861 m (Api Himal Base Camp)",
    difficulty: "Challenging / Strenuous",
    image: apiImage,
    description:
      "Explore the remote wilderness of Far-Western Nepal on the spectacular Api Himal Base Camp Trek. Journey through traditional villages, dense forests, alpine meadows and breathtaking Himalayan landscapes while discovering the untouched beauty of the Api Nampa Conservation Area.",
    highlights: [
      "Experience breathtaking views of Mt. Api (7,132 m)",
      "Explore the spectacular Api Himal Base Camp",
      "Discover the sacred and scenic Kali Dhunga Lake",
      "Experience traditional village life and local culture in Darchula",
      "Trek through pristine forests and remote alpine landscapes",
    ],
  },
  {
    name: "Shey Phoksundo Lake Trek",
    slug: "shey-phoksundo-lake",
    duration: "15–17 Days",
    altitude: "3,611 m (Shey Phoksundo Lake)",
    difficulty: "Challenging / Remote",
    image: phoksundoImage,
    description:
      "Discover the untouched beauty of the remote Dolpo region on the spectacular Shey Phoksundo Lake Trek. Journey through pristine forests, dramatic mountain landscapes and traditional Tibetan-influenced villages before reaching the breathtaking turquoise waters of Nepal's deepest lake. Experience ancient Bon Buddhist culture and the peaceful wilderness of Shey Phoksundo National Park.",
    highlights: [
      "Explore the stunning turquoise waters of Shey Phoksundo Lake",
      "Witness the spectacular Phoksundo Waterfall",
      "Discover the traditional Bon Buddhist culture of Ringmo Village",
      "Visit the ancient Tshowa Gompa monastery",
      "Trek through the pristine wilderness of Shey Phoksundo National Park",
      "Experience breathtaking views of the remote Dolpo Himalayas",
    ],
  },
  {
    name: "Annapurna Circuit via Thorong La Pass",
    slug: "annapurna-circuit-thorong-la",
    duration: "15–18 Days",
    altitude: "5,416 m (Thorong La Pass)",
    difficulty: "Strenuous / Advanced",
    image: annapurnaImage,
    description:
      "Journey through the diverse landscapes of the Annapurna region, from lush river valleys and traditional mountain villages to the dramatic high-altitude terrain of the Tibetan plateau.",
    highlights: [
      "Cross the famous Thorong La Pass",
      "Explore the dramatic Mustang landscapes",
      "Visit the sacred Muktinath pilgrimage site",
      "Experience diverse Himalayan cultures",
    ],
  },
  {
    name: "Manaslu Circuit Trek",
    slug: "manaslu-circuit",
    duration: "15–17 Days",
    altitude: "5,106 m (Larkya La Pass)",
    difficulty: "Strenuous / Advanced",
    image: manasluImage,
    description:
      "Explore the remote and restricted Manaslu region, circling the spectacular 8,163-metre Mount Manaslu. Discover pristine landscapes, traditional Tibetan Buddhist culture and challenging mountain trails.",
    highlights: [
      "Explore the remote Manaslu Conservation Area",
      "Experience authentic Tibetan Buddhist culture",
      "Cross the dramatic Larkya La Pass",
      "Discover less-travelled Himalayan trails",
    ],
  },
  {
    name: "Everest Three Passes Trek",
    slug: "everest-three-passes",
    duration: "18–20 Days",
    altitude: "5,535 m (Kongma La Pass)",
    difficulty: "Extreme / Challenging",
    image: threePassImage,
    description:
      "The ultimate high-altitude adventure in the Khumbu region. Take on three legendary mountain passes while exploring spectacular viewpoints, remote valleys and the heart of the Everest region.",
    highlights: [
      "Cross Kongma La, Cho La and Renjo La",
      "Explore four spectacular mountain viewpoints",
      "Experience the complete Everest region",
      "Challenge yourself on demanding alpine trails",
    ],
  },
];

function AdvancedTrek() {
  return (
    <div className="bg-white w-full overflow-hidden">

      {/* ADVANCED TREK HERO */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 pt-8 sm:pt-12 pb-12 sm:pb-20">

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] text-[#95876c] mb-7 sm:mb-10">
          <span>Explore Nepal</span>
          <span className="w-7 sm:w-10 h-px bg-[#b5a88d]"></span>
          <span>Advanced Expeditions</span>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] min-h-0 lg:min-h-[510px]">

          {/* LEFT CONTENT */}
          <div className="bg-[#263e32] text-white flex flex-col justify-center px-5 sm:px-8 md:px-14 py-10 sm:py-14 lg:my-12 lg:-mr-12 relative z-10">

            <p className="text-[#d2b477] text-[10px] sm:text-xs uppercase tracking-[3px] sm:tracking-[4px] mb-5 sm:mb-7">
              The Ultimate Himalayan Challenge
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.1]">
              Conquer the
              <span className="block italic text-[#d2b477]">
                extraordinary.
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-7 sm:leading-8 mt-5 sm:mt-7 max-w-lg">
              Push beyond familiar trails and discover Nepal's most
              demanding Himalayan adventures. Cross legendary mountain
              passes, explore remote valleys and experience the
              Himalayas at their wildest.
            </p>

            {/* EXPEDITION DETAILS */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/20 mt-7 sm:mt-9 pt-6 sm:pt-7">

              <div className="min-w-0">
                <p className="font-serif text-2xl sm:text-3xl text-[#d2b477]">
                  15–20
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-300 mt-2">
                  Days
                </p>
              </div>

              <div className="min-w-0">
                <p className="font-serif text-2xl sm:text-3xl text-[#d2b477]">
                  06
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-300 mt-2">
                  Routes
                </p>
              </div>

              <div className="min-w-0">
                <p className="font-serif text-2xl sm:text-3xl text-[#d2b477] whitespace-nowrap">
                  5,545m
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-300 mt-2">
                  Highest Point
                </p>
              </div>

            </div>

            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-4 mt-8 sm:mt-9 bg-[#d2b477] text-[#263e32] px-6 sm:px-7 py-4 font-semibold hover:bg-white transition w-full sm:w-fit text-sm sm:text-base"
            >
              Explore Expeditions <span>↗</span>
            </a>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[280px] sm:min-h-[350px] lg:min-h-[580px]">

            <img
              src={heroImage}
              alt="High altitude Himalayan trekking expedition"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute bottom-5 right-4 sm:bottom-7 sm:right-7 text-white text-right">
              <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[10px] sm:text-xs">
                Beyond the limits
              </p>
              <p className="font-serif text-2xl sm:text-3xl mt-2">
                Into the Himalayas.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-amber-600 uppercase tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm font-semibold mb-3">
            Challenge Your Limits
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6">
            Explore the Ultimate Himalayan Adventures
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-relaxed">
            Advanced treks are designed for experienced hikers seeking
            demanding high-altitude journeys. Cross legendary mountain
            passes, explore remote valleys and discover the extraordinary
            beauty of Nepal's Himalayas.
          </p>

        </div>
      </section>

      {/* TREK PACKAGES */}
      <section className="bg-gray-50 py-14 sm:py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-10 sm:mb-14">

            <p className="text-amber-600 uppercase tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm font-semibold mb-3">
              Take the Challenge
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Our Advanced Trek Packages
            </h2>

            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              Discover Nepal's most demanding and rewarding trekking routes.
            </p>

          </div>

          {/* TREK CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-9">

            {treks.map((trek) => (

              <article
                key={trek.slug}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 min-w-0"
              >

                {/* IMAGE */}
                <div className="relative h-56 sm:h-72 overflow-hidden">

                  <img
                    src={trek.image}
                    alt={trek.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />

                  <span className="absolute top-3 left-3 sm:top-5 sm:left-5 bg-amber-500 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                    {trek.duration}
                  </span>

                </div>

                {/* CARD CONTENT */}
                <div className="p-5 sm:p-7">

                  <h3 className="text-xl sm:text-2xl font-bold mb-4 leading-snug">
                    {trek.name}
                  </h3>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mb-5 text-sm">

                    <span className="bg-gray-100 px-3 py-2 rounded-lg text-gray-700 text-xs sm:text-sm leading-relaxed break-words min-w-0">
                      <strong>Altitude:</strong> {trek.altitude}
                    </span>

                    <span className="bg-gray-100 px-3 py-2 rounded-lg text-gray-700 text-xs sm:text-sm leading-relaxed break-words min-w-0">
                      <strong>Level:</strong> {trek.difficulty}
                    </span>

                  </div>

                  <p className="text-gray-600 text-sm sm:text-base leading-7 mb-6">
                    {trek.description}
                  </p>

                  <h4 className="font-bold mb-3 text-base sm:text-lg">
                    Highlights
                  </h4>

                  <ul className="space-y-2 mb-7">

                    {trek.highlights.map((highlight) => (

                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-gray-600 text-sm leading-6"
                      >

                        <span className="text-amber-500 font-bold shrink-0">
                          ✓
                        </span>

                        <span>{highlight}</span>

                      </li>

                    ))}

                  </ul>

                  {/* INDIVIDUAL TREK DETAIL PAGE */}
                  <Link
                    to={`/packages/trek/advanced-trek/${trek.slug}`}
                    className="inline-flex items-center justify-center w-full sm:w-fit text-center border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-5 sm:px-6 py-3 rounded-full font-semibold transition text-sm sm:text-base"
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
      <section className="bg-slate-900 text-white py-14 sm:py-20">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

          <p className="text-amber-400 uppercase tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm mb-4">
            Your Next Great Adventure
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-5 sm:mb-6 leading-tight">
            Ready to Take on the Himalayas?
          </h2>

          <p className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-9 leading-7 sm:leading-relaxed">
            Take on Nepal's most challenging trekking adventures.
            Get in touch with our team and start planning your next
            Himalayan expedition.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">

            <a
              href="/#contact"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 px-7 sm:px-8 py-4 rounded-full font-semibold transition text-center text-sm sm:text-base"
            >
              Plan Your Expedition
            </a>

            <a
              href="/#contact"
              className="w-full sm:w-auto border border-white hover:bg-white hover:text-slate-900 px-7 sm:px-8 py-4 rounded-full font-semibold transition text-center text-sm sm:text-base"
            >
              Contact Us
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}

export default AdvancedTrek;
