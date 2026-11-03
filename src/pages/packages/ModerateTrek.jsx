import heroImage from "../../../photos/main4.jpeg";
import abcImage from "../../../photos/annapurna.jpeg";
import langtangImage from "../../../photos/langtanf.jpg";
import mardiImage from "../../../photos/mardiss.webp";
import khopraImage from "../../../photos/khopra.jpeg";

const treks = [
  {
    name: "Annapurna Base Camp (ABC) Trek",
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
    name: "Khopra Ridge & Khayer Lake",
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

      {/* PREMIUM MODERATE TREK HERO */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 pb-20">

        <div className="flex items-center gap-3 text-xs uppercase tracking-[3px] text-[#95876c] mb-10">
          <span>Explore Nepal</span>
          <span className="w-10 h-px bg-[#b5a88d]"></span>
          <span>Moderate Treks</span>
        </div>

        <div className="relative grid lg:grid-cols-[1.15fr_0.85fr] min-h-[510px]">

          {/* LEFT IMAGE */}
          <div className="relative min-h-[330px] lg:min-h-[580px]">
            <img
              src={heroImage}
              alt="Himalayan mountain trekking"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            <div className="absolute bottom-7 left-7 text-white">
              <p className="uppercase tracking-[3px] text-xs">
                Beyond the familiar trails
              </p>
              <p className="font-serif text-3xl mt-2">
                Find your altitude.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-[#eae6da] flex flex-col justify-center px-8 md:px-14 py-14 lg:-ml-12 lg:my-14 relative">

            <p className="text-[#a58b58] text-xs uppercase tracking-[4px] mb-7">
              The Himalayan collection
            </p>

            <h1 className="font-serif text-5xl md:text-6xl leading-[1.1]">
              Go beyond
              <span className="block italic text-[#9b8966]">
                the ordinary.
              </span>
            </h1>

            <p className="text-[#77786d] text-lg leading-8 mt-7">
              Moderate Trekking Packages in Nepal (5–12 Days).
              Discover iconic mountain trails, hidden valleys,
              spectacular sanctuaries and unforgettable Himalayan scenery.
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-[#d3cbbb] mt-9 pt-7">

              <div>
                <p className="font-serif text-3xl">5–12</p>
                <p className="text-[10px] uppercase tracking-wider text-[#898678] mt-2">
                  Days
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl">4</p>
                <p className="text-[10px] uppercase tracking-wider text-[#898678] mt-2">
                  Routes
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl">4,660m</p>
                <p className="text-[10px] uppercase tracking-wider text-[#898678] mt-2">
                  Highest point
                </p>
              </div>

            </div>

            <a
              href="/#contact"
              className="inline-flex items-center gap-4 mt-9 text-sm uppercase tracking-[2px] font-semibold border-b border-[#526b52] pb-2 w-fit hover:text-[#a58b58] transition"
            >
              Explore the journeys <span>↗</span>
            </a>

          </div>
        </div>
      </section>

      {/* INTRODUCTION - SAME AS SHORT TREK */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
            Discover More in Nepal
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Go Beyond the Ordinary Trails
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Moderate treks are designed for active hikers with standard
            physical fitness. Explore classic Himalayan routes, mountain
            sanctuaries, high valleys and iconic base camps.
          </p>

        </div>
      </section>

      {/* TREK PACKAGES - EXACT SAME CARD DESIGN AS SHORT TREK */}
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
              Discover Nepal's iconic mountain trails and beautiful valleys.
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

      {/* CTA - SAME AS SHORT TREK */}
      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-amber-400 uppercase tracking-[3px] text-sm mb-4">
            Your Journey Awaits
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready for a Bigger Himalayan Adventure?
          </h2>

          <p className="text-gray-300 text-lg mb-9 leading-relaxed">
            Discover Nepal's remarkable mountain trails. Contact us to
            plan your next moderate trekking adventure.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="/#contact"
              className="bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-full font-semibold transition"
            >
              Book a Moderate Trek
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

export default ModerateTrek;