
import { Link } from "react-router-dom";

import pokharaImage from "../../../../photos/cycler.png";
import kathmanduImage from "../../../../photos/ktmvalley.jpg";
import nagarkotImage from "../../../../photos/enduro.jpg";
import mustangImage from "../../../../photos/himalayan.jpg";
import annapurnaImage from "../../../../photos/mtb.jpg";
import forestImage from "../../../../photos/cross.jpg";
import pokharalake from "../../../../photos/pokharalake.jpg";
import leisure from "../../../../photos/leisure.jpg";


const categories = [
  {
    name: "Leisure & E-Bike Tours",
    duration: "Half-Day to 1 Day",
    bestFor: "Families, casual riders, and city explorers",
    description:
      "Relaxed cycling experiences through lakeside roads, rural farmland, and beautiful cultural valleys.",
    image: leisure,
    link: "leisure-tours",
  },
  {
    name: "Cross-Country & Singletrack",
    duration: "1–3 Days",
    bestFor: "Intermediate mountain bikers",
    description:
      "Explore technical climbs, forest singletracks, ridge trails, and exciting downhill routes.",
    image: forestImage,
    link: "cross-country",
  },
  {
    name: "Himalayan MTB Expeditions",
    duration: "4+ Days",
    bestFor: "Experienced cyclists and endurance riders",
    description:
      "Multi-day journeys through high mountain passes, alpine valleys, and rugged Himalayan terrain.",
    image: mustangImage,
    link: "himalayan-expeditions",
  },
];

const packages = [
  {
    name: "Pokhara Lake & Pame Valley Loop",
    duration: "Half-Day / Full-Day",
    category: "Leisure & E-Bike Tours",
    terrain: "Flat asphalt & easy dirt jeep track",
    bike: "Hardtail MTB or E-MTB",
    difficulty: "Easy",
    image: pokharalake,
    id: "leisure-tours",
    description:
      "Enjoy a relaxing ride along the shore of Phewa Lake into rural Pokhara farmland. This scenic cycling route is ideal for casual cyclists and families.",
    highlights: [
      "Phewa Lake waterfront views",
      "Rural rice terrace riding",
      "Beautiful countryside scenery",
      "Lakeside lunch stop at Pame",
    ],
  },
  {
    name: "Kathmandu Valley Rim Singletrack Ride",
    duration: "1 Day",
    category: "Cross-Country & Singletrack",
    terrain: "Forest singletrack, steep climbs, rocks and roots",
    bike: "Full-Suspension MTB",
    difficulty: "Technical",
    image: kathmanduImage,
    id: "cross-country",
    description:
      "A technical mountain biking experience through forest trails and mountain ridges surrounding Kathmandu Valley, designed for active riders.",
    highlights: [
      "Shivapuri forest trails",
      "Panoramic Langtang range views",
      "Technical singletrack sections",
      "Exciting downhill riding",
    ],
  },
  {
    name: "Nagarkot Enduro & Ridge Trail",
    duration: "1–2 Days",
    category: "Cross-Country & Singletrack",
    terrain: "Jeep track, village singletrack and downhills",
    bike: "Hardtail MTB or Full-Suspension",
    difficulty: "Intermediate to Advanced",
    image: nagarkotImage,
    id: "nagarkot-enduro",
    description:
      "Ride along the Nagarkot ridge with spectacular Himalayan views before enjoying an exhilarating downhill journey through pine forests and historic villages.",
    highlights: [
      "Sunrise Himalayan mountain views",
      "Scenic Nagarkot ridge riding",
      "Pine forest downhill trails",
      "Descent towards Changu Narayan",
    ],
  },
  {
    name: "Lower Mustang & Jomsom Downhill MTB Expedition",
    duration: "5–7 Days",
    category: "Himalayan MTB Expeditions",
    terrain: "High-altitude dirt tracks and rocky singletracks",
    bike: "Full-Suspension MTB or E-MTB",
    difficulty: "Advanced",
    image: mustangImage,
    id: "himalayan-expeditions",
    description:
      "A memorable mountain biking adventure combining dramatic high-desert Himalayan landscapes with flowing downhill dirt trails through the Kali Gandaki region.",
    highlights: [
      "Ride through Jomsom and Kali Gandaki valley",
      "Explore the Muktinath region",
      "Discover traditional Marpha village",
      "Experience dramatic Mustang landscapes",
    ],
  },
  {
    name: "Annapurna Circuit MTB Expedition",
    duration: "12–14 Days",
    category: "Himalayan MTB Expeditions",
    terrain: "Rugged alpine trails, hike-a-bike and high passes",
    bike: "Lightweight Full-Suspension MTB",
    difficulty: "Advanced / Extreme",
    image: annapurnaImage,
    id: "annapurna-mtb",
    description:
      "The ultimate high-altitude mountain biking adventure. Ride and push your bike across alpine terrain and legendary mountain passes before enjoying spectacular descents.",
    highlights: [
      "Cross the legendary Thorong La Pass",
      "Explore dramatic alpine landscapes",
      "Experience trails towards Muktinath",
      "Discover the Annapurna region",
    ],
  },
];

const support = [
  {
    title: "High-End Rental Fleet",
    description:
      "Choose from modern Hardtail MTBs, Full-Suspension trail bikes, and electric mountain bikes.",
  },
  {
    title: "4WD Support Vehicles",
    description:
      "Backup vehicles on selected multi-day routes for luggage, bike repairs, and rider assistance.",
  },
  {
    title: "Mechanic & Trail Lead",
    description:
      "Professional cycling guides equipped with trail spares, repair kits, and first-aid supplies.",
  },
  {
    title: "Safety Equipment",
    description:
      "Essential protective equipment including helmets, gloves, and hydration packs.",
  },
];

function Cycling() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 pb-20">

        <div className="flex items-center gap-3 text-xs uppercase tracking-[3px] text-[#95876c] mb-10">
          <span>Explore Nepal</span>
          <span className="w-10 h-px bg-[#b5a88d]"></span>
          <span>Cycling Adventures</span>
        </div>

        <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] min-h-[480px]">

          {/* LEFT CONTENT */}
          <div className="bg-[#eae6da] flex flex-col justify-center px-8 md:px-14 py-14 lg:mr-[-35px] relative z-10">

            <p className="text-[#a58b58] text-xs uppercase tracking-[4px] mb-7">
              Discover Nepal on Two Wheels
            </p>

            <h1 className="font-serif text-5xl md:text-6xl leading-[1.1] text-[#263e32]">
              Mountain Biking
              <span className="block italic text-[#9b8966]">
                & Cycling
              </span>
              <span className="block">Adventures in Nepal</span>
            </h1>

            <p className="text-[#77786d] text-lg leading-8 mt-7 max-w-lg">
              From smooth lakeside leisure rides and singletrack
              ridge descents to high-altitude Himalayan multi-day
              expeditions.
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-[#d3cbbb] mt-9 pt-7">

              <div>
                <p className="font-serif text-3xl text-[#263e32]">03</p>
                <p className="text-xs uppercase tracking-wider text-[#898678] mt-2">
                  Categories
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl text-[#263e32]">05</p>
                <p className="text-xs uppercase tracking-wider text-[#898678] mt-2">
                  Routes
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl text-[#263e32]">5,416m</p>
                <p className="text-xs uppercase tracking-wider text-[#898678] mt-2">
                  Highest Pass
                </p>
              </div>

            </div>

            <button
              type="button"
              onClick={() => scrollToSection("featured-cycling")}
              className="inline-flex items-center gap-4 mt-9 bg-[#263e32] text-white px-8 py-4 hover:bg-[#a58b58] transition w-fit"
            >
              Explore Cycling Routes <span>↗</span>
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[350px] lg:min-h-[540px]">

            <img
              src={pokharaImage}
              alt="Cycling adventure in Nepal"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute bottom-7 right-7 text-white text-right">
              <p className="uppercase tracking-[3px] text-xs">
                Ride Beyond the Ordinary
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
            Explore Nepal Differently
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discover Nepal on Two Wheels
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Nepal is one of the world's most dramatic mountain biking
            destinations. Whether you want a relaxed e-bike cruise
            around cultural valleys, technical downhill singletracks
            through pine forests, or epic high-pass cross-country
            expeditions across rugged mountain deserts, our guided
            cycling packages offer quality rental gear, support
            vehicles, and experienced trail leaders.
          </p>

        </div>

      </section>

      {/* CYCLING CATEGORIES */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
              Choose Your Riding Style
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Explore Our Cycling Categories
            </h2>

            <p className="text-gray-600 mt-4">
              From relaxed valley rides to challenging mountain expeditions.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

            {categories.map((category) => (

              <article
                key={category.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >

                <div className="relative h-56 overflow-hidden">

                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />

                  <span className="absolute top-5 left-5 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {category.duration}
                  </span>

                </div>

                <div className="p-7">

                  <h3 className="text-xl font-bold text-[#263e32] mb-4">
                    {category.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {category.description}
                  </p>

                  <div className="border-t border-gray-100 pt-5">

                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                      Best for
                    </p>

                    <p className="text-sm text-gray-700 mb-5">
                      {category.bestFor}
                    </p>

                    <button
                      type="button"
                      onClick={() => scrollToSection(category.link)}
                      className="text-[#263e32] font-semibold text-sm hover:text-amber-700 transition"
                    >
                      View Cycling Packages →
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURED CYCLING PACKAGES */}
      <section
        id="featured-cycling"
        className="py-20 scroll-mt-24"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
              The Cycling Collection
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Cycling & MTB Packages
            </h2>

            <p className="text-gray-600 mt-4">
              Find your next route through Nepal's valleys, forests, and mountains.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">

            {packages.map((item) => (

              <article
                key={item.name}
                id={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 scroll-mt-24"
              >

                <div className="relative h-72 overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />

                  <span className="absolute top-5 left-5 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {item.duration}
                  </span>

                </div>

                <div className="p-7">

                  <p className="text-amber-600 uppercase tracking-wider text-xs font-semibold mb-3">
                    {item.category}
                  </p>

                  <h3 className="text-2xl font-bold mb-4">
                    {item.name}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* CYCLING SPECIFICATIONS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">

                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">
                        Trail Surface
                      </p>
                      <p className="text-sm font-semibold">
                        {item.terrain}
                      </p>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">
                        Recommended Bike
                      </p>
                      <p className="text-sm font-semibold">
                        {item.bike}
                      </p>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">
                        Technical Difficulty
                      </p>
                      <p className="text-sm font-semibold">
                        {item.difficulty}
                      </p>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">
                        Elevation Profile
                      </p>
                      <p className="text-sm font-semibold">
                        Route dependent
                      </p>
                    </div>

                  </div>

                  <h4 className="font-bold mb-3">
                    Ride Highlights
                  </h4>

                  <ul className="space-y-2 mb-7">

                    {item.highlights.map((highlight) => (

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

                  <Link
                    to="/contact"
                    className="inline-block border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-6 py-3 rounded-full font-semibold transition"
                  >
                    Enquire Now →
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* TECHNICAL & SUPPORT */}
      <section
        className="bg-gray-50 py-20"
        id="bike-support"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
              Ride With Confidence
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Technical & Support Services
            </h2>

            <p className="text-gray-600 mt-4">
              Everything you need for a comfortable and supported ride.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {support.map((item, index) => (

              <div
                key={item.title}
                className="bg-white p-7 rounded-2xl shadow-sm"
              >

                <p className="text-amber-600 font-serif text-3xl mb-5">
                  0{index + 1}
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

          <div className="mt-14 text-center">

            <p className="text-gray-600 mb-5">
              Choose the bike that matches your adventure.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <span className="bg-white border border-gray-200 rounded-full px-6 py-3 text-sm font-semibold">
                Hardtail MTB
              </span>

              <span className="bg-white border border-gray-200 rounded-full px-6 py-3 text-sm font-semibold">
                Full-Suspension MTB
              </span>

              <span className="bg-white border border-gray-200 rounded-full px-6 py-3 text-sm font-semibold">
                E-MTB
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-amber-400 uppercase tracking-[3px] text-sm mb-4">
            Your Next Ride Awaits
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Hit the Himalayan Trails on Two Wheels?
          </h2>

          <p className="text-gray-300 text-lg mb-9 leading-relaxed">
            Need bike rentals, custom route planning, or an e-bike setup?
            Tell us your riding experience and we'll help plan the
            perfect cycling adventure.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              to="/contact"
              className="bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-full font-semibold transition"
            >
              Request Custom Bike Tour
            </Link>

            <Link
              to="/contact"
              className="border border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition"
            >
              Chat with Biking Specialist
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Cycling;
