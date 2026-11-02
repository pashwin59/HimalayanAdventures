
import heroImage from "../../../photos/main2.jpeg";
import shortTrekImage from "../../../photos/hiking.webp";
import moderateTrekImage from "../../../photos/group.jpeg";
import advancedTrekImage from "../../../photos/main3.jpeg";

const categories = [
  {
    number: "01",
    title: "Short Treks",
    duration: "1–5 Days",
    level: "Beginner Friendly",
    description:
      "Perfect for beginners, families and travelers short on time. Discover scenic viewpoints, traditional villages and beautiful Himalayan landscapes.",
    image: shortTrekImage,
    color: "bg-green-100 text-green-800",
    link: "/packages/trek/short-trek",
  },
  {
    number: "02",
    title: "Moderate Treks",
    duration: "5–12 Days",
    level: "Moderate",
    description:
      "Explore iconic Himalayan trails, mountain sanctuaries, beautiful valleys and legendary viewpoints through rewarding multi-day journeys.",
    image: moderateTrekImage,
    color: "bg-amber-100 text-amber-800",
    link: "/packages/trek/moderate-trek",
  },
  {
    number: "03",
    title: "Advanced Treks",
    duration: "12+ Days",
    level: "Experienced Trekkers",
    description:
      "Take on demanding high-altitude adventures, remote mountain circuits and challenging Himalayan pass crossings.",
    image: advancedTrekImage,
    color: "bg-red-100 text-red-800",
    link: "/packages/trek/advanced-trek",
  },
];

const reasons = [
  {
    icon: "🏔️",
    title: "Local Professional Guides",
    description:
      "Explore with knowledgeable local trail leaders who understand the mountains, communities and trekking routes.",
  },
  {
    icon: "📋",
    title: "Hassle-Free Logistics",
    description:
      "Get assistance with trekking permits, accommodation, transportation and essential travel arrangements.",
  },
  {
    icon: "🛡️",
    title: "Safety First",
    description:
      "We prioritize altitude awareness, responsible planning and appropriate safety arrangements throughout your journey.",
  },
  {
    icon: "🌿",
    title: "Ethical Tourism",
    description:
      "We value responsible tourism, fair treatment of local teams and care for Nepal's natural environment.",
  },
];

export default function Trek() {
  return (
    <main className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-[#F5F8F4] py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              🏔️ Discover the Himalayas
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#173D32] mt-7 leading-tight">
              Himalayan Trekking Packages & Experiences in Nepal
            </h1>

            <p className="text-gray-600 text-lg leading-8 mt-7 max-w-xl">
              From accessible weekend mountain getaways to challenging
              high-pass expeditions — choose your difficulty level
              and start your journey.
            </p>

            <a
              href="#trek-categories"
              className="inline-block mt-9 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition"
            >
              Explore Trek Packages →
            </a>

            <div className="grid grid-cols-3 gap-5 mt-12 pt-8 border-t border-gray-200">
              <div>
                <p className="text-2xl font-bold text-green-800">Short</p>
                <p className="text-sm text-gray-500 mt-1">1–5 days</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-green-800">Moderate</p>
                <p className="text-sm text-gray-500 mt-1">5–12 days</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-green-800">Advanced</p>
                <p className="text-sm text-gray-500 mt-1">12+ days</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[28px] overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Himalayan mountains in Nepal"
                className="w-full h-[380px] md:h-[540px] object-cover"
              />
            </div>

            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
              <p className="text-green-700 text-xs uppercase tracking-widest font-bold">
                Your Himalayan Journey
              </p>
              <h3 className="text-gray-900 text-xl font-bold mt-2">
                Find the Trek That Matches Your Adventure
              </h3>
            </div>
          </div>

        </div>
      </section>

      {/* CATEGORY INTRODUCTION */}
      <section id="trek-categories" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-green-700 uppercase tracking-widest text-sm font-bold">
              Choose Your Adventure
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Find Your Perfect Himalayan Trek
            </h2>

            <p className="text-gray-600 leading-8 mt-5">
              Every traveler has a different idea of adventure.
              Choose a trekking experience that suits your time,
              fitness level and appetite for exploration.
            </p>
          </div>

          {/* THREE CATEGORY CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {categories.map((category) => (
              <article
                key={category.number}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition duration-300"
              >

                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute top-5 left-5 bg-white px-4 py-2 rounded-full text-sm font-bold text-green-800">
                    TREK {category.number}
                  </div>

                  <div className="absolute bottom-5 left-5">
                    <span className="bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                      {category.duration}
                    </span>
                  </div>
                </div>

                <div className="p-7">

                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${category.color}`}>
                    {category.level}
                  </span>

                  <h3 className="text-2xl font-bold text-gray-900 mt-5">
                    {category.title}
                  </h3>

                  <p className="text-gray-600 leading-7 mt-4">
                    {category.description}
                  </p>

                  <a
                    href={category.link}
                    className="inline-flex items-center gap-2 mt-7 text-green-800 font-bold hover:text-green-600 transition"
                  >
                    Explore Packages <span>→</span>
                  </a>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* WHY TREK WITH US */}
      <section className="bg-[#F5F8F4] py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-green-700 uppercase tracking-widest text-sm font-bold">
              The Himalayan Treks Difference
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#173D32] mt-4">
              Why Trek With Us?
            </h2>

            <p className="text-gray-600 leading-8 mt-5">
              A memorable mountain journey starts with thoughtful
              planning, local knowledge and responsible travel.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition"
              >
                <div className="text-4xl">{reason.icon}</div>

                <h3 className="text-lg font-bold text-gray-900 mt-6">
                  {reason.title}
                </h3>

                <p className="text-gray-600 text-sm leading-7 mt-3">
                  {reason.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CUSTOM CONSULTATION CTA */}
      <section className="bg-[#173D32] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-green-300 uppercase tracking-[4px] text-sm font-semibold">
            Let's Plan Your Journey
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-5 leading-tight">
            Unsure Which Difficulty Level Suits You?
          </h2>

          <p className="text-gray-200 text-lg leading-8 mt-6 max-w-2xl mx-auto">
            Tell us about your fitness level and available travel dates.
            Our team can help you explore an itinerary that matches
            your interests and expectations.
          </p>

          <a
            href="/#contact"
            className="inline-block mt-9 bg-green-500 hover:bg-green-600 text-white px-9 py-4 rounded-full font-bold transition"
          >
            Get a Free Custom Consultation →
          </a>

        </div>
      </section>

    </main>
  );
}
