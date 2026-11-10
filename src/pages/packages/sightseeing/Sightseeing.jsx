import { Link } from "react-router-dom";
import heritageImage from "../../../../photos/kathmandu1.jpeg";
import pokharaImage from "../../../../photos/sarangkot.jpg";
import chitwanImage from "../../../../photos/eco.webp";
import lumbiniImage from "../../../../photos/Lumbini.jpeg";
import nagarkotImage from "../../../../photos/bhaktapur.jpeg";

const categories = [
  {
    number: "01",
    name: "Cultural & Heritage Tours",
    duration: "1–3 Days",
    bestFor: "History lovers, photographers, and city explorers",
    description:
      "Explore ancient Durbar Squares, holy pilgrimage temples, and sacred Buddhist stupas with knowledgeable local guides.",
    color: "bg-[#e9efe5]",
    link: "#cultural-heritage",
  },
  {
    number: "02",
    name: "Nature & City Highlights",
    duration: "1–4 Days",
    bestFor: "Families, leisure travelers, and nature enthusiasts",
    description:
      "Enjoy scenic lake boat rides, sunrise viewpoints, waterfalls, and cave explorations in Nepal's beautiful tourist destinations.",
    color: "bg-[#f5eedb]",
    link: "#nature-city",
  },
  {
    number: "03",
    name: "Wildlife & Jungle Safaris",
    duration: "2–4 Days",
    bestFor: "Wildlife enthusiasts and eco-tourists",
    description:
      "Discover tropical national parks through jeep safaris, canoe rides, and guided jungle walks.",
    color: "bg-[#f3e6e3]",
    link: "#wildlife-safari",
  },
];

const tours = [
  {
    name: "Kathmandu Valley UNESCO World Heritage Tour",
    duration: "1–2 Days",
    category: "Cultural & Heritage",
    image: heritageImage,
    description:
      "Explore Kathmandu's most sacred and historic sites, showcasing beautiful Newari woodcarvings, ancient pagoda architecture, and living traditions.",
    highlights: [
      "Pashupatinath Temple",
      "Swayambhunath (Monkey Temple)",
      "Boudhanath Stupa",
      "Patan Durbar Square",
    ],
    id: "cultural-heritage",
  },
  {
    name: "Pokhara Valley Highlights & Sunrise Tour",
    duration: "1–2 Days",
    category: "Nature & City Highlights",
    image: pokharaImage,
    description:
      "Experience Nepal's tourism capital with panoramic mountain views, underground caves, peaceful lakesides, and unforgettable sunrise scenery.",
    highlights: [
      "Sarangkot sunrise over Annapurna",
      "Phewa Lake boating",
      "Davis Falls and Gupteshwor Cave",
      "World Peace Pagoda",
    ],
    id: "nature-city",
  },
  {
    name: "Chitwan National Park Wildlife Safari",
    duration: "3 Days / 2 Nights",
    category: "Wildlife & Jungle Safari",
    image: chitwanImage,
    description:
      "Venture into southern Nepal's subtropical jungles for an authentic wilderness safari and cultural experience.",
    highlights: [
      "4WD Jeep safari",
      "Rapti River canoe ride",
      "Tharu cultural dance show",
      "One-horned rhinoceros and bird sightings",
    ],
    id: "wildlife-safari",
  },
  {
    name: "Lumbini Pilgrimage & Spiritual Tour",
    duration: "2 Days / 1 Night",
    category: "Cultural & Heritage",
    image: lumbiniImage,
    description:
      "Experience one of the world's most sacred spiritual destinations, exploring Buddhist history, peaceful gardens, and international monasteries.",
    highlights: [
      "Maya Devi Temple",
      "Sacred Garden",
      "Ashoka Pillar",
      "International Buddhist monasteries",
    ],
    id: "lumbini-tour",
  },
  {
    name: "Bhaktapur & Nagarkot Day Tour",
    duration: "1 Day",
    category: "Heritage & Nature",
    image: nagarkotImage,
    description:
      "Step back in time in the medieval city of Bhaktapur before heading to Nagarkot for sweeping views of the Himalayan range.",
    highlights: [
      "Bhaktapur Durbar Square",
      "Traditional pottery square",
      "The famous 55-Window Palace",
      "Himalayan panorama from Nagarkot",
    ],
    id: "bhaktapur-tour",
  },
];

const inclusions = [
  {
    number: "01",
    title: "Private Vehicles",
    description:
      "Comfortable air-conditioned cars, vans, or tourist buses with professional drivers.",
  },
  {
    number: "02",
    title: "Licensed City Guides",
    description:
      "Knowledgeable local English-speaking guides familiar with Nepal's history and heritage.",
  },
  {
    number: "03",
    title: "Entrance Fees & Permits",
    description:
      "Heritage site passes, museum fees, and national park tickets arranged for your journey.",
  },
  {
    number: "04",
    title: "Flexible Pick-up & Drop-off",
    description:
      "Convenient collection and drop-off directly from your hotel or airport.",
  },
];

function Sightseeing() {
  // Replace with your actual WhatsApp number.
  // Include country code without + or spaces.
  const whatsappNumber = "97798XXXXXXXX";

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 pb-20">

        <div className="flex items-center gap-3 text-xs uppercase tracking-[3px] text-[#95876c] mb-10">
          <span>Discover Nepal</span>
          <span className="w-10 h-px bg-[#b5a88d]"></span>
          <span>Sightseeing & Heritage</span>
        </div>

        <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] min-h-[510px]">

          {/* LEFT CONTENT */}
          <div className="bg-[#eae6da] flex flex-col justify-center px-8 md:px-14 py-14 lg:mr-[-35px] relative z-10">

            <p className="text-[#a58b58] text-xs uppercase tracking-[4px] mb-7">
              Discover the soul of Nepal
            </p>

            <h1 className="font-serif text-5xl md:text-6xl leading-[1.1] text-[#263e32]">
              Cultural & Heritage
              <span className="block italic text-[#9b8966]">
                Sightseeing Tours
              </span>
              <span className="block">in Nepal</span>
            </h1>

            <p className="text-[#77786d] text-lg leading-8 mt-7 max-w-lg">
              Immerse yourself in ancient palaces, UNESCO heritage
              sites, spiritual temples, scenic lakes, and wildlife
              safaris across Nepal.
            </p>

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
                  Featured Tours
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl text-[#263e32]">1–4</p>
                <p className="text-xs uppercase tracking-wider text-[#898678] mt-2">
                  Days
                </p>
              </div>

            </div>

            <button
              type="button"
              onClick={() => scrollToSection("featured-tours")}
              className="inline-flex items-center gap-4 mt-9 bg-[#263e32] text-white px-8 py-4 hover:bg-[#a58b58] transition w-fit"
            >
              Explore Sightseeing Tours <span>↗</span>
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[350px] lg:min-h-[580px]">

            <img
              src={heritageImage}
              alt="Nepal cultural heritage and historic architecture"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute bottom-7 right-7 text-white text-right">
              <p className="uppercase tracking-[3px] text-xs">
                History, culture & nature
              </p>
              <p className="font-serif text-3xl mt-2">
                Discover Nepal.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
            More Than Mountains
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discover the Rich Heritage of Nepal
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Nepal's rich heritage goes far beyond its high peaks.
            From the medieval architecture of the Kathmandu Valley
            and the serene lakes of Pokhara to the birthplace of
            Buddha in Lumbini and the wild jungles of Chitwan, our
            sightseeing packages combine culture, history, and
            nature in comfortable, guided journeys.
          </p>

        </div>

      </section>

      {/* SIGHTSEEING CATEGORIES */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
              Find Your Experience
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Explore Our Sightseeing Categories
            </h2>

            <p className="text-gray-600 mt-4">
              Choose the kind of Nepal experience you would love to discover.
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

                  <button
                    type="button"
                    onClick={() => scrollToSection(category.link.replace("#", ""))}
                    className="inline-flex items-center gap-2 text-[#263e32] font-semibold hover:text-amber-700 transition"
                  >
                    View Packages →
                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURED SIGHTSEEING TOURS */}
      <section
        id="featured-tours"
        className="py-20 scroll-mt-24"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
              Explore Nepal
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Sightseeing Tours & Packages
            </h2>

            <p className="text-gray-600 mt-4">
              Discover the best of Nepal through our handpicked sightseeing journeys.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">

            {tours.map((tour) => (

              <article
                key={tour.name}
                id={tour.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 scroll-mt-24"
              >

                <div className="relative h-72 overflow-hidden">

                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />

                  <span className="absolute top-5 left-5 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {tour.duration}
                  </span>

                </div>

                <div className="p-7">

                  <p className="text-amber-600 uppercase tracking-wider text-xs font-semibold mb-3">
                    {tour.category}
                  </p>

                  <h3 className="text-2xl font-bold mb-4">
                    {tour.name}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {tour.description}
                  </p>

                  <h4 className="font-bold mb-3">
                    Tour Highlights
                  </h4>

                  <ul className="space-y-2 mb-7">

                    {tour.highlights.map((highlight) => (

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

      {/* WHAT IS INCLUDED */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
              Travel With Confidence
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              What's Included in Every Sightseeing Package?
            </h2>

            <p className="text-gray-600 mt-4">
              Enjoy a comfortable and well-organized sightseeing experience.
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
            Your Journey, Your Way
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Want a Customized Sightseeing Plan?
          </h2>

          <p className="text-gray-300 text-lg mb-9 leading-relaxed">
            Looking to combine multiple cities, add a luxury resort
            stay, or create a private family tour? Contact our travel
            planners to customize your sightseeing itinerary.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              to="/contact"
              className="bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-full font-semibold transition"
            >
              Request Custom Sightseeing Tour
            </Link>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
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

export default Sightseeing;
