
import heroImage from "../../../photos/main5.jpeg";
import everestImage from "../../../photos/main2.jpeg";
import annapurnaImage from "../../../photos/main3.jpeg";
import manasluImage from "../../../photos/main4.jpeg";
import threePassImage from "../../../photos/group.jpeg";

const treks = [
  {
    name: "Everest Base Camp & Cho La Pass Trek",
    duration: "14–16 Days",
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
    name: "Annapurna Circuit via Thorong La Pass",
    duration: "12–16 Days",
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
    duration: "13–15 Days",
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
    <div className="bg-white">

      {/* ADVANCED TREK HERO */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 pb-20">

        <div className="flex items-center gap-3 text-xs uppercase tracking-[3px] text-[#95876c] mb-10">
          <span>Explore Nepal</span>
          <span className="w-10 h-px bg-[#b5a88d]"></span>
          <span>Advanced Expeditions</span>
        </div>

        <div className="relative grid lg:grid-cols-[0.85fr_1.15fr] min-h-[510px]">

          {/* LEFT CONTENT */}
          <div className="bg-[#263e32] text-white flex flex-col justify-center px-8 md:px-14 py-14 lg:my-12 lg:-mr-12 relative z-10">

            <p className="text-[#d2b477] text-xs uppercase tracking-[4px] mb-7">
              The Ultimate Himalayan Challenge
            </p>

            <h1 className="font-serif text-5xl md:text-6xl leading-[1.1]">
              Conquer the
              <span className="block italic text-[#d2b477]">
                extraordinary.
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-7 max-w-lg">
              Push beyond familiar trails and discover Nepal's most
              demanding Himalayan adventures. Cross legendary mountain
              passes, explore remote valleys and experience the
              Himalayas at their wildest.
            </p>

            {/* EXPEDITION DETAILS */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/20 mt-9 pt-7">

              <div>
                <p className="font-serif text-3xl text-[#d2b477]">
                  12–20
                </p>
                <p className="text-xs uppercase tracking-wider text-gray-300 mt-2">
                  Days
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl text-[#d2b477]">
                  04
                </p>
                <p className="text-xs uppercase tracking-wider text-gray-300 mt-2">
                  Routes
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl text-[#d2b477]">
                  5,545m
                </p>
                <p className="text-xs uppercase tracking-wider text-gray-300 mt-2">
                  Highest Point
                </p>
              </div>

            </div>

            <a
              href="/#contact"
              className="inline-flex items-center gap-4 mt-9 bg-[#d2b477] text-[#263e32] px-7 py-4 font-semibold hover:bg-white transition w-fit"
            >
              Explore Expeditions <span>↗</span>
            </a>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[350px] lg:min-h-[580px]">

            <img
              src={heroImage}
              alt="High altitude Himalayan trekking expedition"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute bottom-7 right-7 text-white text-right">
              <p className="uppercase tracking-[3px] text-xs">
                Beyond the limits
              </p>
              <p className="font-serif text-3xl mt-2">
                Into the Himalayas.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
            Challenge Your Limits
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore the Ultimate Himalayan Adventures
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Advanced treks are designed for experienced hikers seeking
            demanding high-altitude journeys. Cross legendary mountain
            passes, explore remote valleys and discover the extraordinary
            beauty of Nepal's Himalayas.
          </p>

        </div>

      </section>

      {/* TREK PACKAGES */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
              Take the Challenge
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Our Advanced Trek Packages
            </h2>

            <p className="text-gray-600 mt-4">
              Discover Nepal's most demanding and rewarding trekking routes.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">

            {treks.map((trek) => (

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
            Your Next Great Adventure
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Take on the Himalayas?
          </h2>

          <p className="text-gray-300 text-lg mb-9 leading-relaxed">
            Take on Nepal's most challenging trekking adventures.
            Get in touch with our team and start planning your next
            Himalayan expedition.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="/#contact"
              className="bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-full font-semibold transition"
            >
              Plan Your Expedition
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

    </div>
  );
}

export default AdvancedTrek;
