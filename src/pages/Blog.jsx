
import { useMemo, useState } from "react";
import Everest from "../../photos/everest.jpeg";
import Nepal from "../../photos/nepal.jpeg";
import Hikes from "../../photos/asu.jpeg";
import Anns from "../../photos/anns.avif";
import Sherpa from "../../photos/sherpa.avif";
import Heli from "../../photos/heli.avif";

const articles = [
  {
    id: 1,
    slug: "everest-base-camp-trek-guide",
    title: "The Ultimate Guide to Everest Base Camp Trek",
    category: "Trekking Guides",
    date: "November 10, 2026",
    readTime: "8 min read",
    author: "Trail Trantra Team",
    image:Everest,
    excerpt:
      "Everything you need to know before beginning your unforgettable journey to the foot of the world's highest mountain.",
    content: [
      "The Everest Base Camp Trek is one of the most iconic trekking adventures in the world. Located in Nepal's Khumbu region, this journey takes you through spectacular mountain scenery, traditional Sherpa villages and breathtaking Himalayan landscapes.",
      "The trek generally takes around 12 to 14 days, depending on your itinerary and acclimatisation schedule. Trekkers usually begin their journey in Lukla and follow the beautiful Dudh Koshi valley towards Namche Bazaar, Tengboche, Dingboche and Gorakshep.",
      "Acclimatisation is essential at high altitude. Give your body enough time to adjust, stay hydrated and avoid rushing your itinerary. Consult a qualified medical professional about altitude-related risks before your trip.",
      "Pack comfortable trekking boots, warm layers, a waterproof jacket, a good sleeping bag and essential personal medication. A well-planned trek makes the experience much more enjoyable.",
      "The journey is not only about reaching Everest Base Camp. It is also about experiencing Sherpa culture, visiting monasteries and witnessing some of the most extraordinary mountain views on Earth."
    ],
  },
  {
    id: 2,
    slug: "best-time-to-visit-nepal",
    title: "Best Time to Visit Nepal for Trekking",
    category: "Travel Tips",
    date: "November 5, 2026",
    readTime: "6 min read",
    author: "Trail Trantra Team",
    image:Nepal,
        excerpt:
      "Discover Nepal's trekking seasons and find the perfect time for your Himalayan adventure.",
    content: [
      "Nepal offers incredible trekking opportunities throughout much of the year. However, the weather, visibility and trail conditions vary significantly between seasons.",
      "Spring, from March to May, is one of the most popular trekking seasons. The weather is generally pleasant, mountain views can be spectacular and rhododendron forests burst into colour.",
      "Autumn, from September to November, is another excellent season. The monsoon rains have usually cleared, the skies are often crisp and visibility across the Himalayas is excellent.",
      "Winter can be beautiful for lower-altitude treks, although high mountain routes may experience heavy snowfall and extremely cold conditions.",
      "The monsoon season, generally June to August, brings rain, clouds and potentially slippery trails. Some regions, including Upper Mustang, are popular alternatives because they receive relatively little rainfall.",
      "Choose your trekking season according to your destination, experience and preferred conditions. Always check local weather and trail information before departure."
    ],
  },
  {
    id: 3,
    slug: "trekking-packing-checklist",
    title: "What to Pack for a Himalayan Trek",
    category: "Trekking Guides",
    date: "October 28, 2026",
    readTime: "5 min read",
    author: "Trail Trantra Team",
    image: Hikes,
    excerpt:
      "A practical packing checklist to help you prepare for a comfortable and safe trekking experience.",
    content: [
      "Packing correctly can make a significant difference to your trekking experience. The goal is to carry everything you need without making your backpack unnecessarily heavy.",
      "Start with comfortable, well-broken-in trekking boots, moisture-wicking socks, thermal base layers, trekking trousers and a warm insulating jacket.",
      "Weather protection is essential. Carry a waterproof jacket, rain cover for your backpack, gloves, a warm hat and sunglasses.",
      "Other useful items include a reusable water bottle, headlamp, sunscreen, personal first-aid kit, power bank, toiletries and essential documents.",
      "Your packing list should depend on the altitude, duration, season and difficulty of your trek. Ask your trekking guide for destination-specific advice before departure."
    ],
  },
  {
    id: 4,
    slug: "annapurna-base-camp-adventure",
    title: "Annapurna Base Camp: A Journey Into the Himalayas",
    category: "Destinations",
    date: "October 20, 2026",
    readTime: "7 min read",
    author: "Trail Trantra Team",
    image:Anns,
        excerpt:
      "Explore beautiful mountain villages, forests and the spectacular Annapurna Sanctuary.",
    content: [
      "The Annapurna Base Camp Trek is a remarkable journey into the heart of the Annapurna mountain range in Nepal.",
      "The route passes through charming villages, terraced farmland, lush forests and beautiful mountain landscapes before reaching the Annapurna Sanctuary.",
      "One of the most memorable experiences is arriving at the base camp, surrounded by towering Himalayan peaks. The views create an unforgettable atmosphere.",
      "The trek requires preparation and a reasonable level of fitness. Walking gradually, staying hydrated and following a suitable itinerary will help you enjoy the experience.",
      "For travellers looking for an extraordinary Himalayan adventure, Annapurna Base Camp offers a beautiful combination of nature, culture and mountain scenery."
    ],
  },
  {
    id: 5,
    slug: "sherpa-culture-in-nepal",
    title: "Discovering Sherpa Culture in the Himalayas",
    category: "Culture",
    date: "October 12, 2026",
    readTime: "6 min read",
    author: "Trail Trantra Team",
    image:Sherpa,
        excerpt:
      "Discover the traditions, hospitality and mountain heritage of Nepal's Himalayan communities.",
    content: [
      "The Himalayas are home to diverse communities with rich cultural traditions. Among them, the Sherpa people are especially well known for their connection to the mountain regions of Nepal.",
      "Sherpa culture includes distinctive traditions, Buddhist practices, festivals, monasteries and a deep connection with the natural environment.",
      "Visitors trekking through the Khumbu region can experience this heritage through local villages, traditional architecture, prayer flags and monasteries.",
      "Respecting local customs is an important part of responsible travel. Dress appropriately at religious sites, ask before taking photographs and follow local guidance.",
      "A Himalayan trek becomes even more meaningful when travellers take time to appreciate the people and cultures that make these mountains their home."
    ],
  },
  {
    id: 6,
    slug: "high-altitude-trekking-safety",
    title: "High-Altitude Trekking: Essential Safety Tips",
    category: "Travel Tips",
    date: "October 5, 2026",
    readTime: "7 min read",
    author: "Trail Trantra Team",
    image:Heli,    excerpt:
      "Understand altitude, acclimatisation and the importance of preparing properly for high mountain adventures.",
    content: [
      "High-altitude trekking offers incredible experiences, but it also requires careful preparation. As altitude increases, the amount of available oxygen decreases, making physical activity more demanding.",
      "Altitude sickness can affect anyone, regardless of fitness. Common early symptoms include headache, nausea, dizziness and unusual tiredness.",
      "Ascend gradually and allow enough time for acclimatisation. Avoid increasing sleeping altitude too quickly, and never ignore worsening symptoms.",
      "If altitude sickness is suspected, stop ascending and seek qualified medical assistance. Severe symptoms require immediate descent and emergency care.",
      "A responsible itinerary, trained guides, suitable insurance and knowledge of emergency procedures are important parts of a safe trekking experience."
    ],
  },
];

const categories = [
  "All Articles",
  "Trekking Guides",
  "Travel Tips",
  "Destinations",
  "Culture",
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [search, setSearch] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All Articles" ||
        article.category === activeCategory;

      const query = search.toLowerCase();

      const matchesSearch =
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const featuredArticle = articles[0];

  const openArticle = (article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-white min-h-screen">

      {/* ARTICLE READING PAGE */}
      {selectedArticle ? (
        <article>

          <div className="max-w-4xl mx-auto px-5 md:px-8 pt-8 pb-16">

            <button
              onClick={goBack}
              className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-900 mb-8"
            >
              ← Back to Blog
            </button>

            <div className="mb-6">
              <span className="inline-block bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                {selectedArticle.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {selectedArticle.title}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {selectedArticle.excerpt}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
              <span>By {selectedArticle.author}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-[280px] md:h-[480px] object-cover rounded-2xl mb-10"
            />

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6 text-gray-700 text-base md:text-lg leading-8">
                {selectedArticle.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 bg-[#F4F8F3] rounded-2xl p-7 md:p-10 text-center">
                <h2 className="text-2xl font-bold text-green-900 mb-3">
                  Ready for Your Himalayan Adventure?
                </h2>
                <p className="text-gray-600 mb-6">
                  Let our team help you plan your next unforgettable trek in Nepal.
                </p>
                <a
                  href="/plan-your-trek"
                  className="inline-block bg-green-700 text-white px-7 py-3 rounded-full font-semibold hover:bg-green-800 transition"
                >
                  Plan Your Trek
                </a>
              </div>
            </div>
          </div>
        </article>
      ) : (

        <>

          {/* HERO */}
          <section className="bg-[#F4F8F3]">
            <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">

              <div className="max-w-3xl mx-auto text-center">

                <span className="inline-block bg-white text-green-800 px-5 py-2 rounded-full text-sm font-semibold shadow-sm mb-5">
                  Stories From The Himalayas
                </span>

                <h1 className="text-4xl md:text-6xl font-bold text-green-950 leading-tight mb-5">
                  Explore. Discover. <span className="text-green-700">Get Inspired.</span>
                </h1>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Trekking guides, travel inspiration and stories from the beautiful Himalayas. Everything you need to prepare for your next adventure.
                </p>

              </div>
            </div>
          </section>

          {/* FEATURED ARTICLE */}
          <section className="max-w-7xl mx-auto px-5 md:px-8 pt-12 md:pt-16">

            <div className="flex items-center justify-between mb-7">
              <div>
                <span className="text-green-700 text-sm font-semibold uppercase tracking-wider">
                  Editor's Pick
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                  Featured Story
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 overflow-hidden rounded-2xl bg-[#F4F8F3] shadow-sm">

              <div className="h-64 md:h-[390px]">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-7 md:p-10 flex flex-col justify-center">

                <span className="text-green-700 text-sm font-semibold mb-4">
                  {featuredArticle.category}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
                  {featuredArticle.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-5">
                  {featuredArticle.excerpt}
                </p>

                <div className="text-sm text-gray-500 mb-6">
                  {featuredArticle.date} · {featuredArticle.readTime}
                </div>

                <button
                  onClick={() => openArticle(featuredArticle)}
                  className="self-start bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
                >
                  Read Article →
                </button>

              </div>
            </div>
          </section>

          {/* ALL ARTICLES */}
          <section className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-9">

              <div>
                <span className="text-green-700 text-sm font-semibold uppercase tracking-wider">
                  The Himalayan Journal
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  Latest Articles
                </h2>
                <p className="text-gray-500 mt-2">
                  Inspiration and useful information for your next journey.
                </p>
              </div>

              {/* SEARCH */}
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full border border-gray-200 rounded-full py-3 px-5 outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                />
              </div>

            </div>

            {/* CATEGORY FILTERS */}
            <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                    activeCategory === category
                      ? "bg-green-700 text-white"
                      : "bg-[#F4F8F3] text-gray-700 hover:bg-green-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* ARTICLE GRID */}
            {filteredArticles.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition duration-300"
                  >

                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />

                      <span className="absolute top-4 left-4 bg-white text-green-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                        {article.category}
                      </span>
                    </div>

                    <div className="p-6">

                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-green-800 transition">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-5">
                        {article.excerpt}
                      </p>

                      <button
                        onClick={() => openArticle(article)}
                        className="text-green-700 font-semibold text-sm hover:text-green-900 transition"
                      >
                        Read Article →
                      </button>

                    </div>
                  </article>
                ))}

              </div>
            ) : (
              <div className="text-center py-16 bg-[#F4F8F3] rounded-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-500">
                  Try another search term or category.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All Articles");
                  }}
                  className="mt-5 text-green-700 font-semibold"
                >
                  Clear filters
                </button>
              </div>
            )}

          </section>

          {/* NEWSLETTER / CTA */}
          <section className="bg-[#F4F8F3]">
            <div className="max-w-5xl mx-auto px-5 py-14 md:py-16 text-center">

              <span className="text-green-700 text-sm font-semibold uppercase tracking-wider">
                Your Next Adventure Starts Here
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-3 mb-4">
                Dreaming About the Himalayas?
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-7">
                From peaceful mountain trails to challenging high-altitude adventures, let us help you discover the right trek.
              </p>

              <a
                href="/plan-your-trek"
                className="inline-block bg-green-700 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-green-800 transition"
              >
                Plan Your Trek →
              </a>

            </div>
          </section>

        </>
      )}
    </main>
  );
}
