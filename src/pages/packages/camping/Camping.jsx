import riverImage from "../../../../photos/campingsss.png";
import australianImage from "../../../../photos/ridge.png";
import panchaseImage from "../../../../photos/Panchase.jpg";
import nagarkotImage from "../../../../photos/nagarkotcamp.png";
import campingImage from "../../../../photos/camping.jpeg";
import forestImage from "../../../../photos/forestcamp.png";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Riverside & Leisure Camping",
    duration: "1–2 Days",
    bestFor: "Families, friends, and weekend relaxers",
    description:
      "Scenic camps beside rivers and lakes, with campfire evenings, outdoor BBQ options, and gentle nature walks.",
    image: riverImage,
    link: "#riverside-leisure-camping",
  },
  {
    name: "Ridge & Stargazing Camps",
    duration: "2–3 Days",
    bestFor: "Photographers, sunset lovers, and stargazers",
    description:
      "Ridge-top camping with panoramic Himalayan views, beautiful sunsets, and clear night skies away from city lights.",
    image: australianImage,
    link: "#ridge-stargazing-camps",
  },
  {
    name: "Wild Wilderness & Eco Camping",
    duration: "3+ Days",
    bestFor: "Outdoor enthusiasts and adventurous travelers",
    description:
      "Multi-day wilderness stays in remote valleys, forest sanctuaries, and high-alpine meadows with a dedicated support team.",
    image: forestImage,
    link: "#wild-wilderness-camping",
  },
];

const packages = [
  {
    name: "Trishuli Riverbank Camping & Adventure",
    id: "riverside-leisure-camping",
    duration: "2 Days / 1 Night",
    category: "Riverside & Leisure Camping",
    setting: "Sandy river beach along the Trishuli River",
    gear: "All-weather tents, sleeping bags, campfire setup, and beach games",
    image: riverImage,
    description:
      "A fun and accessible getaway between Kathmandu and Pokhara. Enjoy a relaxing outdoor night beside the river, ideal for groups, couples, and families.",
    highlights: [
      "Riverside campfire evening",
      "Acoustic music and BBQ night",
      "Optional white-water rafting",
      "Relaxing river sounds and natural surroundings",
    ],
  },
  {
    name: "Australian Camp Sunset & Stargazing Stay",
    id: "ridge-stargazing-camps",
    duration: "2 Days / 1 Night",
    category: "Ridge & Stargazing Camps",
    setting: "High ridge viewpoint at 2,060 m",
    gear: "High-altitude tents, insulated sleeping mats, and warm sleeping bags",
    image: australianImage,
    description:
      "Experience the magic of camping high above the clouds, with panoramic views of the Annapurna Range right outside your tent.",
    highlights: [
      "Sunset over Annapurna South and Machhapuchhre",
      "Clear night sky stargazing",
      "Panoramic mountain scenery",
      "Sunrise with morning coffee",
    ],
  },
  {
    name: "Panchase Wild Forest & Ridge Camping",
    id: "wild-wilderness-camping",
    duration: "3 Days / 2 Nights",
    category: "Wild Wilderness & Eco Camping",
    setting: "Remote hilltop meadows and rhododendron forests at 2,500 m",
    gear: "Expedition camping gear, kitchen tent, dining setup, and eco-toilet tents",
    image: panchaseImage,
    description:
      "A peaceful, eco-friendly wilderness camping journey through quiet forests and mountain ridges near Pokhara, away from crowded trekking routes.",
    highlights: [
      "Uncrowded wilderness trails",
      "Ancient sacred ponds",
      "Rich birdwatching opportunities",
      "Wilderness camp dinners",
    ],
  },
  {
    name: "Nagarkot Hilltop Stargazing & Camping",
    id: "nagarkot-hilltop-camping",
    duration: "2 Days / 1 Night",
    category: "Ridge & Stargazing Camps",
    setting: "Kathmandu Valley rim ridge at 2,175 m",
    gear: "Dome tents, camp chairs, lanterns, campfire setup, and sleeping gear",
    image: nagarkotImage,
    description:
      "Enjoy an overnight camping escape from Kathmandu, with a panoramic Himalayan horizon, distant city lights, and a peaceful mountain atmosphere.",
    highlights: [
      "Panoramic Himalayan horizon",
      "Night views of Kathmandu Valley lights",
      "Bonfire evening",
      "Beautiful mountain sunrise",
    ],
  },
];

const services = [
  {
    number: "01",
    title: "Premium Outdoor Gear",
    description:
      "Waterproof three-season and four-season tents, quality sleeping pads, warm sleeping bags, and LED camp lighting.",
  },
  {
    number: "02",
    title: "On-Site Camp Crew",
    description:
      "Dedicated camp cooks, assistants, and guides to set up tents, prepare meals, and support your stay.",
  },
  {
    number: "03",
    title: "Freshly Cooked Camp Meals",
    description:
      "Hot breakfasts, lunches, and dinners prepared fresh at camp, with options to accommodate dietary preferences.",
  },
  {
    number: "04",
    title: "Sanitation & Hygiene",
    description:
      "Portable toilet tents, handwashing stations, and clean filtered drinking water throughout your stay.",
  },
  {
    number: "05",
    title: "Leave-No-Trace Commitment",
    description:
      "Responsible camping practices, including packing out waste to help protect Nepal's natural habitats.",
  },
];

function Camping() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 pb-20">

        <div className="flex items-center gap-3 text-xs uppercase tracking-[3px] text-[#95876c] mb-10">
          <span>Explore Nepal</span>
          <span className="w-10 h-px bg-[#b5a88d]"></span>
          <span>Camping Experiences</span>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] min-h-[480px]">

          {/* IMAGE FIRST */}
          <div className="relative min-h-[350px] lg:min-h-[530px] order-2 lg:order-1">

            <img
              src={campingImage}
              alt="Outdoor camping experience in Nepal"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute bottom-7 left-7 bg-white/90 px-6 py-4">
              <p className="text-xs uppercase tracking-[2px] text-[#95876c]">
                Escape Into Nature
              </p>
              <p className="font-serif text-2xl text-[#263e32] mt-1">
                Find Your Quiet Place.
              </p>
            </div>

          </div>

          {/* TEXT PANEL */}
          <div className="bg-[#eae6da] flex flex-col justify-center px-8 md:px-14 py-14 order-1 lg:order-2">

            <p className="text-[#a58b58] text-xs uppercase tracking-[4px] mb-7">
              Stay Closer to Nature
            </p>

            <h1 className="font-serif text-4xl md:text-5xl leading-[1.15] text-[#263e32]">
              Wilderness Camping
              <span className="block italic text-[#9b8966]">
                & Stargazing
              </span>
              <span className="block">Experiences in Nepal</span>
            </h1>

            <p className="text-[#77786d] text-lg leading-8 mt-7">
              Sleep under the Himalayan stars, sit around roaring
              campfires, and connect with untouched nature in
              full-service camp setups.
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-[#d3cbbb] mt-9 pt-7">

              <div>
                <p className="font-serif text-3xl text-[#263e32]">03</p>
                <p className="text-xs uppercase tracking-wider text-[#898678] mt-2">
                  Categories
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl text-[#263e32]">04</p>
                <p className="text-xs uppercase tracking-wider text-[#898678] mt-2">
                  Experiences
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl text-[#263e32]">3+</p>
                <p className="text-xs uppercase tracking-wider text-[#898678] mt-2">
                  Days Options
                </p>
              </div>

            </div>

            <a
              href="#featured-camping"
              className="inline-flex items-center gap-4 mt-9 bg-[#263e32] text-white px-8 py-4 hover:bg-[#a58b58] transition w-fit"
            >
              Explore Camping Packages <span>↗</span>
            </a>

          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
            Beyond the Usual Trails
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Outdoors, Uninterrupted
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Camping in Nepal is the ultimate way to step away from
            busy teahouse routes and immerse yourself directly in
            nature. Whether you prefer cozy riverside glamping,
            high-altitude alpine ridge camping, or wild forest
            wilderness stays, our all-inclusive camping packages
            cover everything—from high-quality tents and sleeping
            gear to freshly prepared hot camp meals cooked on site.
          </p>

        </div>

      </section>

      {/* CAMPING CATEGORIES */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
              Choose Your Experience
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Explore Our Camping Categories
            </h2>

            <p className="text-gray-600 mt-4">
              From riverside evenings to remote Himalayan wilderness camps.
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
                      Best For
                    </p>

                    <p className="text-sm text-gray-700 mb-5">
                      {category.bestFor}
                    </p>

                    <a
                      href={category.link}
                      className="text-[#263e32] font-semibold text-sm hover:text-amber-700 transition"
                    >
                      View Camping Packages →
                    </a>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURED PACKAGES */}
      <section id="featured-camping" className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-amber-600 uppercase tracking-[3px] text-sm font-semibold mb-3">
              Selected Outdoor Experiences
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Camping Packages
            </h2>

            <p className="text-gray-600 mt-4">
              Discover some of Nepal's most memorable places to camp.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">

            {packages.map((item) => (

              <article
                key={item.name}
                id={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
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

                  <div className="space-y-4 mb-7">

                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                        Camping Setting
                      </p>
                      <p className="text-sm font-semibold text-gray-800">
                        {item.setting}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                        Camping Gear Provided
                      </p>
                      <p className="text-sm font-semibold text-gray-800">
                        {item.gear}
                      </p>
                    </div>

                  </div>

                  <h4 className="font-bold mb-3">
                    Experience Highlights
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

      {/* FULL SERVICE CAMPING */}
      <section className="bg-[#eae6da] py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center">

            <div>

              <p className="text-[#a58b58] uppercase tracking-[3px] text-sm font-semibold mb-4">
                Everything Taken Care Of
              </p>

              <h2 className="font-serif text-4xl md:text-5xl text-[#263e32] leading-tight mb-6">
                A Complete
                <span className="block italic text-[#9b8966]">
                  Camping Experience
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed mb-7">
                Enjoy the outdoors without worrying about the setup.
                Our camping experiences include the essential gear,
                on-site assistance, meals, and responsible camp
                management throughout your stay.
              </p>

              <img
                src={campingImage}
                alt="Camping setup in nature"
                className="w-full h-64 object-cover rounded-xl"
              />

            </div>

            <div className="grid sm:grid-cols-2 gap-5">

              {services.map((service) => (

                <div
                  key={service.number}
                  className="bg-white p-7 rounded-xl shadow-sm"
                >

                  <p className="font-serif text-3xl text-[#a58b58] mb-5">
                    {service.number}
                  </p>

                  <h3 className="text-lg font-bold text-[#263e32] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-amber-400 uppercase tracking-[3px] text-sm mb-4">
            Your Outdoor Escape Awaits
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Camp Under the Himalayan Stars?
          </h2>

          <p className="text-gray-300 text-lg mb-9 leading-relaxed">
            Want to set up a private camp for your group, combine
            camping with a hike, or plan a custom riverside stay?
            Contact us today to build your camping trip.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              to="/contact"
              className="bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-full font-semibold transition"
            >
              Book a Camping Trip
            </Link>

            <Link
              to="/contact"
              className="border border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition"
            >
              Chat with Camp Organizer
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Camping;