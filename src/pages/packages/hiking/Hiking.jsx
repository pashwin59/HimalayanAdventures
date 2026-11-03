
import shivapuriImage from "../../../../photos/shivapuri.jpeg";
import sarangkotImage from "../../../../photos/dhampuss.jpeg";
import champadeviImage from "../../../../photos/champadevi.webp";
import australianCampImage from "../../../../photos/australian.jpg";
import nagarkotImage from "../../../../photos/changu.jpeg";

const categories = [
  {
    number: "01",
    name: "Single-Day Hikes",
    duration: "1 Day",
    bestFor: "Travelers with limited time, city visitors, and relaxed outdoor lovers",
    description:
      "Enjoy short morning or full-day guided walks around the beautiful hill ridges of Kathmandu and Pokhara.",
    color: "bg-[#e9efe5]",
    link: "#single-day-hikes",
  },
  {
    number: "02",
    name: "Ridge & Nature Walks",
    duration: "1–2 Days",
    bestFor: "Photographers, birdwatchers, and sunrise enthusiasts",
    description:
      "Follow scenic ridge trails through lush forests, traditional villages, and panoramic mountain viewpoints.",
    color: "bg-[#f5eedb]",
    link: "#ridge-nature-walks",
  },
  {
    number: "03",
    name: "Multi-Day Soft Hikes",
    duration: "2–4 Days",
    bestFor: "Families, active seniors, and first-time hikers",
    description:
      "Experience gentle multi-day walks through terraced farmlands and mountain villages with comfortable lodge stays.",
    color: "bg-[#f3e6e3]",
    link: "#multi-day-soft-hikes",
  },
];

const hikes = [
  {
    name: "Shivapuri Peak & Nagi Gompa Day Hike",
    duration: "1 Day (6–7 Hours)",
    category: "Single-Day Hikes",
    altitude: "2,732 m (8,963 ft)",
    image: shivapuriImage,
    description:
      "Escape Kathmandu into the peaceful wilderness of Shivapuri National Park. Walk through oak and pine forests, visit a Buddhist monastery, and ascend towards a scenic hilltop viewpoint.",
    highlights: [
      "Explore Shivapuri National Park",
      "Visit historic Nagi Gompa nunnery",
      "Walk through oak and pine forests",
      "Enjoy views over Kathmandu Valley",
    ],
    id: "single-day-hikes",
  },
  {
    name: "Sarangkot to Dhampus Day Hike",
    duration: "1 Day (5–6 Hours)",
    category: "Single-Day Hikes",
    altitude: "1,650 m (5,413 ft)",
    image: sarangkotImage,
    description:
      "Begin with a beautiful Himalayan sunrise at Sarangkot before following scenic trails through terraced farmlands and traditional Gurung village pathways towards Dhampus.",
    highlights: [
      "Watch sunrise from Sarangkot",
      "Explore traditional Gurung villages",
      "Enjoy Annapurna South mountain views",
      "Admire Machhapuchhre (Fishtail Peak)",
    ],
    id: "sarangkot-hike",
  },
  {
    name: "Champadevi Ridge Hike",
    duration: "1 Day (4–5 Hours)",
    category: "Ridge & Nature Walks",
    altitude: "2,285 m (7,496 ft)",
    image: champadeviImage,
    description:
      "Discover the southwestern ridge of Kathmandu Valley through peaceful pine forests and scenic hilltop trails. Visit sacred shrines while enjoying beautiful mountain panoramas.",
    highlights: [
      "Walk along scenic mountain ridges",
      "Explore peaceful pine woodlands",
      "Visit the hilltop Buddhist stupa",
      "Enjoy Himalayan views on clear days",
    ],
    id: "ridge-nature-walks",
  },
  {
    name: "Australian Camp & Dhampus Village Hike",
    duration: "2 Days / 1 Night",
    category: "Multi-Day Soft Hikes",
    altitude: "2,060 m (6,758 ft)",
    image: australianCampImage,
    description:
      "Enjoy an easy overnight hiking adventure near Pokhara. Discover beautiful mountain scenery, peaceful forest trails, traditional villages, and comfortable teahouse hospitality.",
    highlights: [
      "Sunset and sunrise from Australian Camp",
      "Explore beautiful rhododendron forests",
      "Experience a traditional village stay",
      "Enjoy spectacular Himalayan scenery",
    ],
    id: "multi-day-soft-hikes",
  },
  {
    name: "Nagarkot Sunrise & Changu Narayan Hike",
    duration: "1 Day (5 Hours Hiking)",
    category: "Ridge & Nature Walks",
    altitude: "2,175 m (7,135 ft)",
    image: nagarkotImage,
    description:
      "Combine a beautiful Himalayan sunrise at Nagarkot with a scenic countryside ridge walk, ending at the historic Changu Narayan Temple.",
    highlights: [
      "Experience Nagarkot Himalayan sunrise",
      "Walk along beautiful ridge trails",
      "Explore traditional countryside villages",
      "Visit UNESCO-listed Changu Narayan Temple",
    ],
    id: "nagarkot-hike",
  },
];

const inclusions = [
  {
    number: "01",
    title: "Experienced Nature & Trail Guides",
    description:
      "Local guides familiar with the region's trails, flora, fauna, and cultural history.",
  },
  {
    number: "02",
    title: "Private Transfers",
    description:
      "Comfortable hotel pick-up and drop-off with convenient private transportation.",
  },
  {
    number: "03",
    title: "National Park & Local Permits",
    description:
      "Relevant entry tickets and park passes arranged for your hiking journey.",
  },
  {
    number: "04",
    title: "Meals & Refreshments",
    description:
      "Packed lunches, trail snacks, and hot village meals along selected routes.",
  },
];

function Hiking() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 pb-20">

        <div className="flex items-center gap-3 text-xs uppercase tracking-[3px] text-[#95876c] mb-10">
          <span>Discover Nepal</span>
          <span className="w-10 h-px bg-[#b5a88d]"></span>
          <span>Hiking Adventures</span>
        </div>

        <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] min-h-[510px]">

          {/* LEFT CONTENT */}
          <div className="bg-[#eae6da] flex flex-col justify-center px-8 md:px-14 py-14 lg:mr-[-35px] relative z-10">

            <p className="text-[#a58b58] text-xs uppercase tracking-[4px] mb-7">
              Discover the trails less travelled
            </p>

            <h1 className="font-serif text-5xl md:text-6xl leading-[1.1] text-[#263e32]">
              Scenic Hiking
              <span className="block italic text-[#9b8966]">
                Packages & Day
              </span>
              <span className="block">Walks in Nepal</span>
            </h1>

            <p className="text-[#77786d] text-lg leading-8 mt-7 max-w-lg">
              Discover single-day nature walks, hill ridge trails,
              and easy multi-day village hikes without the demands
              of long, extreme expeditions.
            </p>

            {/* HIKING STATISTICS */}
            <div className="flex flex-wrap gap-8 border-t border-[#d3cbbb] mt-9 pt-7">

              <div>
                <p className="font-serif text-3xl text-[#263e32]">03</p>
                <p className="text-xs uppercase tracking-wider text-[#898678] mt-2">
                  Categories
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl text-[#263e32]">05</p>
                <p className="text-xs uppercase tracking-wider text-[#898678] mt-2">
                  Featured Hikes
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl text-[#263e32]">1–4</p>
                <p className="text-xs uppercase tracking-wider text-[#898678] mt-2">
                  Days
                </p>
              </div>

            </div>

            <a
              href="#featured-hikes"
              className="inline-flex items-center gap-4 mt-9 bg-[#263e32] text-white px-8 py-4 hover:bg-[#a58b58] transition w-fit"
            >
              Explore Hiking Trails <span>↗</span>
            </a>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[350px] lg:min-h-[580px]">

            <img
              src={shivapuriImage}
              alt="Scenic hiking trails in Nepal"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute bottom-7 right-7 text-white text-right">
              <p className="uppercase tracking-[3px] text-xs">
                Forests, hills & mountain views
              </p>
              <p className="font-serif text-3xl mt-2">
                Find Your Trail.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
            Nature Within Reach
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Beauty of Nepal on Foot
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Hiking in Nepal offers all the beauty of the Himalayas
            on shorter, lower-altitude trails. Perfect for families,
            beginners, nature lovers, or travelers short on time,
            our hiking packages blend pine forest walks, traditional
            hill villages, and sweeping mountain views with total
            convenience and comfort.
          </p>

        </div>

      </section>

      {/* HIKING CATEGORIES */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
              Choose Your Adventure
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Explore Our Hiking Categories
            </h2>

            <p className="text-gray-600 mt-4">
              Find a trail that matches your time, interests, and pace.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

            {categories.map((category) => (

              <article
                key={category.number}
                className={`${category.color} rounded-2xl p-8 flex flex-col`}
              >

                <p className="text-sm font-semibold tracking-widest text-[#a58b58]">
                  {category.number} / EXPERIENCE
                </p>

                <h3 className="text-2xl font-bold text-[#263e32] mt-6 mb-4">
                  {category.name}
                </h3>

                <p className="text-sm font-semibold text-[#8d774f] mb-4">
                  Duration: {category.duration}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {category.description}
                </p>

                <div className="border-t border-black/10 pt-5 mt-auto">

                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                    Best for
                  </p>

                  <p className="text-sm text-gray-700 mb-6">
                    {category.bestFor}
                  </p>

                  <a
                    href={category.link}
                    className="inline-flex items-center gap-2 text-[#263e32] font-semibold hover:text-amber-700 transition"
                  >
                    View Hiking Packages →
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURED HIKING PACKAGES */}
      <section id="featured-hikes" className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
              Explore Nepal on Foot
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Our Featured Hiking Packages
            </h2>

            <p className="text-gray-600 mt-4">
              Discover beautiful nature trails, village walks, and Himalayan viewpoints.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">

            {hikes.map((hike) => (

              <article
                key={hike.name}
                id={hike.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 scroll-mt-24"
              >

                <div className="relative h-72 overflow-hidden">

                  <img
                    src={hike.image}
                    alt={hike.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />

                  <span className="absolute top-5 left-5 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {hike.duration}
                  </span>

                </div>

                <div className="p-7">

                  <p className="text-amber-600 uppercase tracking-wider text-xs font-semibold mb-3">
                    {hike.category}
                  </p>

                  <h3 className="text-2xl font-bold mb-4">
                    {hike.name}
                  </h3>

                  <div className="flex flex-wrap gap-3 mb-5 text-sm">

                    <span className="bg-gray-100 px-3 py-2 rounded-lg">
                      <strong>Max Altitude:</strong> {hike.altitude}
                    </span>

                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {hike.description}
                  </p>

                  <h4 className="font-bold mb-3">
                    Hiking Highlights
                  </h4>

                  <ul className="space-y-2 mb-7">

                    {hike.highlights.map((highlight) => (

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

      {/* WHAT IS INCLUDED */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
              Everything Taken Care Of
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              What's Included in Every Hiking Package?
            </h2>

            <p className="text-gray-600 mt-4">
              Enjoy a comfortable and well-organized hiking experience.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {inclusions.map((item) => (

              <div
                key={item.number}
                className="bg-white p-7 rounded-2xl shadow-sm"
              >

                <p className="text-amber-600 font-serif text-3xl mb-5">
                  {item.number}
                </p>

                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-amber-400 uppercase tracking-[3px] text-sm mb-4">
            Your Next Nature Escape
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready for a Day in Nature?
          </h2>

          <p className="text-gray-300 text-lg mb-9 leading-relaxed">
            Want a customized day hike, family walk, or hotel
            pick-up arrangement? Contact our team to plan your
            ideal hiking experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="/#contact"
              className="bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-full font-semibold transition"
            >
              Request Custom Hike
            </a>

            <a
              href="/#contact"
              className="border border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition"
            >
              Chat on WhatsApp
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Hiking;
