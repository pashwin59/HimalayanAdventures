
import { moderateTrekDetails } from "../data/moderateTrekDetails";
import { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { trekDetails } from "../data/trekDetails";
import { advancedTrekDetails } from "../data/advancedTrekDetails";

export default function TrekDetail() {
  const { slug } = useParams();
  const location = useLocation();

  const [openDay, setOpenDay] = useState(0);

  const trek =
    trekDetails[slug] ||
    moderateTrekDetails[slug] ||
    advancedTrekDetails[slug];

  if (!trek) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-6">
        <title>Trek Not Found | Trail Tantra</title>
        <meta
          name="robots"
          content="noindex, follow"
        />

        <h1 className="text-3xl font-bold text-[#173D32]">
          Trek Not Found
        </h1>

        <Link
          to="/packages/trek/short-trek"
          className="mt-6 bg-green-800 text-white px-6 py-3 rounded-full"
        >
          Back to Short Treks
        </Link>
      </main>
    );
  }

  // -----------------------------------
  // DYNAMIC SEO METADATA
  // -----------------------------------

  const pageTitle = `${trek.name} Trek in Nepal | Trail Tantra`;

  const pageDescription = (
    trek.seoDescription ||
    `${trek.description} Explore the ${trek.name} trek in ${trek.region}, Nepal with Trail Tantra.`
  ).slice(0, 160);

  const canonicalUrl = `https://trailtantra.com${location.pathname}`;

  const imageUrl = trek.image?.startsWith("http")
    ? trek.image
    : `https://trailtantra.com${
        trek.image?.startsWith("/") ? "" : "/"
      }${trek.image || "ogimage.jpeg"}`;

  return (
    <>
      {/* DYNAMIC SEO METADATA */}

      <title>{pageTitle}</title>

      <meta
        name="description"
        content={pageDescription}
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* OPEN GRAPH */}

      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Trail Tantra" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta
        property="og:image:alt"
        content={`${trek.name} trekking adventure in Nepal`}
      />

      {/* TWITTER / X */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={pageTitle}
      />

      <meta
        name="twitter:description"
        content={pageDescription}
      />

      <meta
        name="twitter:image"
        content={imageUrl}
      />

      {/* TREK DETAIL PAGE */}

      <main className="bg-white text-gray-900">

        {/* COMPACT TREK HEADER */}

        <section className="bg-[#F7F5EF]">

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">

            {/* BREADCRUMB */}

            <div className="text-xs tracking-wider text-gray-500 mb-8">

              <Link to="/" className="hover:text-green-800">
                Home
              </Link>

              <span className="mx-2">/</span>

              <Link to="/packages/trek" className="hover:text-green-800">
                Trekking
              </Link>

              <span className="mx-2">/</span>

              <Link
                to="/packages/trek/short-trek"
                className="hover:text-green-800"
              >
                Short Treks
              </Link>

              <span className="mx-2">/</span>

              <span className="text-[#A58B58]">
                {trek.name}
              </span>

            </div>

            {/* TITLE AND IMAGE */}

            <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-center">

              {/* LEFT CONTENT */}

              <div>

                <p className="text-[#A58B58] uppercase tracking-[4px] text-xs font-bold">
                  {trek.region}
                </p>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#263E32] mt-5 leading-tight">
                  {trek.name}
                </h1>

                <p className="text-gray-600 text-base md:text-lg leading-8 mt-5 max-w-2xl">
                  {trek.description}
                </p>

                {/* TREK TAGS */}

                <div className="flex flex-wrap gap-3 mt-7">

                  <span className="bg-white text-[#263E32] px-4 py-2 text-sm rounded-full">
                    {trek.duration}
                  </span>

                  <span className="bg-white text-[#263E32] px-4 py-2 text-sm rounded-full">
                    {trek.difficulty}
                  </span>

                  <span className="bg-white text-[#263E32] px-4 py-2 text-sm rounded-full">
                    {trek.altitude}
                  </span>

                </div>

                <Link
                  to={`/plan-your-trek?trek=${encodeURIComponent(trek.name)}`}
                  className="inline-block mt-8 bg-[#263E32] text-white px-7 py-3 hover:bg-[#A58B58] transition"
                >
                  Enquire About This Trek →
                </Link>

              </div>

              {/* RIGHT IMAGE */}

              <div>

                <img
                  src={trek.image}
                  alt={`${trek.name} trekking in Nepal`}
                  className="w-full h-[230px] md:h-[300px] object-cover rounded-xl shadow-lg"
                />

                <p className="text-xs text-gray-500 mt-3 tracking-wider">
                  EXPLORE THE HIMALAYAS · NEPAL
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* TREK OVERVIEW STATISTICS */}

        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-12">

          <div className="grid grid-cols-2 md:grid-cols-5 bg-white border border-gray-100 shadow-sm rounded-xl overflow-hidden">

            {[
              ["Duration", trek.duration],
              ["Maximum Altitude", trek.altitude],
              ["Sleeping Altitude", trek.sleepingAltitude],
              ["Difficulty", trek.difficulty],
              ["Starting Point", trek.startingPoint],
            ].map(([label, value]) => (

              <div
                key={label}
                className="p-5 md:p-7 border-b md:border-b-0 md:border-r last:border-r-0 border-gray-100"
              >

                <p className="text-gray-400 text-xs uppercase tracking-wider">
                  {label}
                </p>

                <p className="text-[#173D32] font-bold mt-3 text-sm md:text-base">
                  {value}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* TREK OVERVIEW AND HIGHLIGHTS */}

        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">

          <div className="grid lg:grid-cols-3 gap-12">

            {/* DESCRIPTION */}

            <div className="lg:col-span-2">

              <p className="text-[#A58B58] uppercase tracking-[3px] text-xs font-bold">
                The Experience
              </p>

              <h2 className="font-serif text-3xl md:text-4xl text-[#173D32] mt-4">
                Discover the Journey
              </h2>

              <p className="text-gray-600 leading-8 mt-6">
                {trek.description}
              </p>

              <p className="text-gray-600 leading-8 mt-4">
                This journey introduces you to Nepal's natural beauty,
                mountain landscapes and local culture. The route and
                daily walking schedule can be adjusted according to
                weather, trail conditions and your preferences.
              </p>

            </div>

            {/* HIGHLIGHTS */}

            <div className="bg-[#173D32] text-white rounded-xl p-8">

              <p className="text-[#D1B99A] uppercase tracking-[3px] text-xs font-bold">
                Trek Highlights
              </p>

              <h3 className="font-serif text-2xl mt-4">
                What Makes It Special
              </h3>

              <div className="mt-7 space-y-5">

                {trek.highlights.map((item) => (

                  <div key={item} className="flex gap-3 items-start">

                    <span className="text-[#D1B99A]">✓</span>

                    <p className="text-white/85 text-sm leading-6">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

              <div className="border-t border-white/20 mt-8 pt-6">

                <p className="text-xs text-white/60 uppercase tracking-wider">
                  Best Time to Visit
                </p>

                <p className="mt-2 font-semibold">
                  {trek.bestSeason}
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* DETAILED ITINERARY */}

        <section className="bg-[#F4F5F1] py-16 md:py-20 px-6">

          <div className="max-w-7xl mx-auto">

            {/* ITINERARY HEADING */}

            <div className="max-w-3xl mb-12">

              <p className="text-[#A58B58] uppercase tracking-[3px] text-xs font-bold">
                Your Journey, Day by Day
              </p>

              <h2 className="font-serif text-3xl md:text-5xl text-[#173D32] mt-4">
                Detailed Trek Itinerary
              </h2>

              <p className="text-gray-600 mt-5 leading-7">
                Explore every stage of your Himalayan adventure,
                including the route, altitude, walking duration,
                accommodation and meals.
              </p>

            </div>

            <div className="grid lg:grid-cols-[1fr_320px] gap-10">

              {/* ITINERARY DAYS */}

              <div className="space-y-4">

                {trek.itinerary.map((day, index) => {

                  const isOpen = openDay === index;

                  return (

                    <article
                      key={day.day}
                      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                    >

                      {/* DAY HEADER */}

                      <button
                        type="button"
                        onClick={() => setOpenDay(isOpen ? -1 : index)}
                        aria-expanded={isOpen}
                        className="w-full text-left p-5 md:p-7 flex gap-5 items-start"
                      >

                        {/* DAY NUMBER */}

                        <div className="shrink-0 w-12 h-12 rounded-full bg-[#C58A36] text-white flex flex-col items-center justify-center">

                          <span className="text-[9px] leading-none">
                            DAY
                          </span>

                          <span className="text-lg font-bold leading-tight">
                            {day.day}
                          </span>

                        </div>

                        {/* DAY INFORMATION */}

                        <div className="flex-1">

                          <h3 className="text-lg md:text-2xl font-bold text-[#173D32]">
                            {day.title}
                          </h3>

                          <p className="text-gray-500 text-sm mt-2">
                            {day.route}
                          </p>

                          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-5 text-sm text-gray-600">

                            <span>
                              <strong>Altitude:</strong> {day.altitude}
                            </span>

                            <span>
                              <strong>Duration:</strong> {day.duration}
                            </span>

                            <span>
                              <strong>Distance:</strong> {day.distance}
                            </span>

                          </div>

                        </div>

                        {/* EXPAND ARROW */}

                        <span
                          className={`text-2xl text-[#173D32] transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          ⌄
                        </span>

                      </button>

                      {/* EXPANDED CONTENT */}

                      {isOpen && (

                        <div className="px-5 md:px-7 pb-7 md:ml-[68px]">

                          <div className="border-t border-gray-100 pt-5">

                            <p className="text-gray-600 leading-8">
                              {day.description}
                            </p>

                            {/* DAILY DETAILS */}

                            <div className="grid sm:grid-cols-3 gap-4 mt-6">

                              <div className="bg-[#F5F6F2] p-4 rounded-lg">

                                <p className="text-xs text-gray-400 uppercase">
                                  Accommodation
                                </p>

                                <p className="font-semibold text-sm mt-2">
                                  {day.accommodation}
                                </p>

                              </div>

                              <div className="bg-[#F5F6F2] p-4 rounded-lg">

                                <p className="text-xs text-gray-400 uppercase">
                                  Meals
                                </p>

                                <p className="font-semibold text-sm mt-2">
                                  {day.meals}
                                </p>

                              </div>

                              <div className="bg-[#F5F6F2] p-4 rounded-lg">

                                <p className="text-xs text-gray-400 uppercase">
                                  Walking Time
                                </p>

                                <p className="font-semibold text-sm mt-2">
                                  {day.duration}
                                </p>

                              </div>

                            </div>

                          </div>

                        </div>

                      )}

                    </article>

                  );

                })}

              </div>

              {/* RIGHT SIDEBAR */}

              <aside className="space-y-6">

                {/* ENQUIRY CARD */}

                <div className="bg-white rounded-xl p-7 shadow-sm">

                  <h3 className="text-xl font-bold text-[#173D32]">
                    Plan Your Adventure
                  </h3>

                  <p className="text-gray-500 text-sm mt-3 leading-6">
                    Interested in this trek? Contact our team to
                    discuss your travel dates and a customized itinerary.
                  </p>

                  <Link
                    to={`/plan-your-trek?trek=${encodeURIComponent(trek.name)}`}
                    className="block text-center bg-[#173D32] hover:bg-[#A58B58] text-white py-4 mt-6 font-semibold transition"
                  >
                    Enquire Now →
                  </Link>

                </div>

                {/* TREK INFORMATION */}

                <div className="bg-white rounded-xl p-7 shadow-sm">

                  <h3 className="text-lg font-bold text-[#173D32] mb-5">
                    Trek Information
                  </h3>

                  <div className="space-y-4 text-sm">

                    <div>
                      <p className="text-gray-400">Region</p>
                      <p className="font-semibold mt-1">
                        {trek.region}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400">Maximum Altitude</p>
                      <p className="font-semibold mt-1">
                        {trek.altitude}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400">Difficulty</p>
                      <p className="font-semibold mt-1">
                        {trek.difficulty}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400">Best Season</p>
                      <p className="font-semibold mt-1">
                        {trek.bestSeason}
                      </p>
                    </div>

                  </div>

                </div>

              </aside>

            </div>

          </div>

        </section>

        {/* INCLUSIONS AND EXCLUSIONS */}

        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">

          <div className="grid md:grid-cols-2 gap-10">

            {/* INCLUDED */}

            <div className="bg-[#F4F6F1] rounded-xl p-8 md:p-10">

              <h2 className="text-2xl font-bold text-[#173D32]">
                What's Included
              </h2>

              <div className="mt-7 space-y-4">

                {trek.inclusions.map((item) => (

                  <p
                    key={item}
                    className="flex gap-3 text-gray-700 text-sm leading-6"
                  >
                    <span className="text-green-700 font-bold">✓</span>
                    {item}
                  </p>

                ))}

              </div>

            </div>

            {/* EXCLUDED */}

            <div className="bg-[#F8F4EF] rounded-xl p-8 md:p-10">

              <h2 className="text-2xl font-bold text-[#173D32]">
                What's Not Included
              </h2>

              <div className="mt-7 space-y-4">

                {trek.exclusions.map((item) => (

                  <p
                    key={item}
                    className="flex gap-3 text-gray-700 text-sm leading-6"
                  >
                    <span className="text-red-500 font-bold">×</span>
                    {item}
                  </p>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* FINAL CALL TO ACTION */}

        <section className="bg-[#173D32] text-white py-20 px-6">

          <div className="max-w-4xl mx-auto text-center">

            <p className="text-[#D1B99A] uppercase tracking-[3px] text-xs font-bold">
              Your Himalayan Adventure Awaits
            </p>

            <h2 className="font-serif text-3xl md:text-5xl mt-5">
              Ready to Explore {trek.name}?
            </h2>

            <p className="text-white/70 mt-6 leading-8 max-w-2xl mx-auto">
              Let us help you organize your journey with a
              personalized itinerary and local trekking support.
            </p>

            <Link
              to={`/plan-your-trek?trek=${encodeURIComponent(trek.name)}`}
              className="inline-block mt-9 bg-[#D1B99A] text-[#173D32] hover:bg-white px-9 py-4 font-bold transition"
            >
              Plan This Trek →
            </Link>

          </div>

        </section>

      </main>
    </>
  );
}
