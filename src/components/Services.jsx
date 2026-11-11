
import serviceHeroImage from "../../photos/services.jpg";

import trekkingImage from "../../photos/group.jpeg";
import hikingImage from "../../photos/hiking.webp";
import customImage from "../../photos/custom.webp";
import birdwatchImage from "../../photos/birdwatch.jpeg";
import ecoImage from "../../photos/eco.webp";
import campingImage from "../../photos/camping.jpeg";
import heritageImage from "../../photos/heritage.jpeg";
import extensionsImage from "../../photos/extensions.jpeg";
import helicopterImage from "../../photos/heli.jpeg";
import heritageImages from "../../photos/discover.avif";


const services = [
  {
    number: "01",
    title: "Core Trekking & Hiking Services",
    description:
      "Discover Nepal's trails through adventures designed around your time, interests and abilities.",
    image: trekkingImage,
    imageAlt: "Trekking adventure in Nepal",
    items: [
      {
        title: "Multi-Day Trekking Adventures",
        description:
          "Experience Nepal's world-renowned trekking routes with route planning, lodge bookings, permits and local guide support.",
        image: trekkingImage,
      },
      {
        title: "Day Hikes & Short Walks",
        description:
          "Explore scenic hilltops, ancient villages, terraced fields and panoramic mountain viewpoints around Kathmandu and Pokhara.",
        image: hikingImage,
      },
      {
        title: "Tailor-Made Custom Routes",
        description:
          "Enjoy off-the-beaten-path trails, family-friendly journeys and itineraries designed around your interests.",
        image: customImage,
      },
    ],
  },
  {
    number: "02",
    title: "Flora, Fauna & Nature Observation",
    description:
      "Discover Nepal's extraordinary biodiversity and beautiful natural ecosystems.",
    image: birdwatchImage,
    imageAlt: "Birdwatching and wildlife in Nepal",
    items: [
      {
        title: "Guided Wildlife & Bird Watching",
        description:
          "Explore national parks and conservation areas with opportunities to observe Himalayan Monals, Red Pandas, Blue Sheep and other wildlife.",
        image: birdwatchImage,
      },
      {
        title: "Botanical & Eco-Tours",
        description:
          "Discover subtropical forests, oak woodlands, rhododendron landscapes and unique mountain vegetation.",
        image: ecoImage,
      },
    ],
  },
  {
    number: "03",
    title: "Wilderness Camping & Outdoor Experiences",
    description:
      "Step away from crowded trails and experience the peaceful beauty of the Himalayas.",
    image: campingImage,
    imageAlt: "Wilderness camping in Nepal",
    items: [
      {
        title: "Wild & Eco-Camping Trips",
        description:
          "Enjoy remote valleys and scenic ridge tops with organized camping arrangements, tents and freshly prepared meals.",
        image: campingImage,
      },
      {
        title: "Combined Trek & Camp Experiences",
        description:
          "Combine traditional teahouse hospitality with secluded wilderness camping and memorable outdoor evenings.",
        image: trekkingImage,
      },
    ],
  },
  {
    number: "04",
    title: "Sightseeing & Cultural Tours",
    description:
      "Experience Nepal beyond its mountains through history, culture and local traditions.",
    image: heritageImages,
    imageAlt: "Nepalese cultural heritage",
    items: [
      {
        title: "Heritage & City Sightseeing",
        description:
          "Discover Nepal's history, architecture and spiritual traditions through temples, stupas, palace squares and historic villages.",
        image: heritageImage,
      },
      {
        title: "Pre & Post-Trek Travel Extensions",
        description:
          "Enhance your adventure with scenic lake tours, sunrise viewpoints, jungle safaris and cultural homestays.",
        image: extensionsImage,
      },
    ],
  },
  {
    number: "05",
    title: "Logistics, Safety & Support",
    description:
      "We help organize the essential arrangements that make your journey smoother.",
    image: helicopterImage,
    imageAlt: "Mountain travel and helicopter support in Nepal",
    items: [
      {
        title: "Permit & Documentation Assistance",
        description:
          "Get assistance with applicable trekking documentation, national park entry fees and restricted-area permits.",
        image: trekkingImage,
      },
      {
        title: "Transport & Transfers",
        description:
          "Arrange private vehicles, domestic flights, tourist coaches and airport transfers throughout Nepal.",
        image: helicopterImage,
      },
      {
        title: "High-Altitude Safety Support",
        description:
          "Plan for altitude awareness, appropriate safety equipment and emergency evacuation coordination when required.",
        image: customImage,
      },
    ],
  },
];

const reasons = [
  {
    icon: "🏔️",
    title: "100% Local Expertise",
    description:
      "Benefit from regional knowledge of trekking trails, wildlife habitats and Nepalese heritage.",
  },
  {
    icon: "🌿",
    title: "Ethical Outdoor Operations",
    description:
      "We value responsible tourism, fair treatment of local teams and Leave No Trace practices.",
  },
  {
    icon: "🧭",
    title: "Custom & Flexible Booking",
    description:
      "Enjoy flexible scheduling, personalized trip planning and transparent pricing.",
  },
];

export default function Services() {
  return (
    <main className="bg-white">

      {/* PREMIUM SERVICES HERO */}
      <section className="bg-[#F5F8F4] py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              🏔️ Explore Nepal With Us
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#173D32] mt-7 leading-tight">
              Complete Trekking, Hiking & Outdoor Experiences in Nepal
            </h1>

            <p className="text-gray-600 text-lg leading-8 mt-7">
              From single-day hikes and wild camping under Himalayan
              skies to guided nature walks and cultural sightseeing,
              we craft seamless, unforgettable outdoor journeys.
            </p>

            <a
              href="#our-services"
              className="inline-block mt-9 bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition"
            >
              Explore Our Services →
            </a>

          </div>

          <div className="rounded-[28px] overflow-hidden shadow-xl">
            <img
              src={serviceHeroImage}
              alt="Himalayan landscape in Nepal"
              className="w-full h-[380px] md:h-[520px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <p className="text-green-700 uppercase tracking-widest text-sm font-semibold">
            What We Offer
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Experiences for Every Kind of Explorer
          </h2>

          <p className="text-gray-600 leading-8 mt-5">
            Whether you dream of reaching Himalayan viewpoints,
            exploring traditional villages, observing wildlife
            or camping beneath the stars, discover experiences
            that bring you closer to the beauty of Nepal.
          </p>

        </div>
      </section>

      {/* PHOTOGRAPHIC SERVICES */}
      <section id="our-services" className="bg-[#F6F8F5] py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">

          {services.map((service, index) => (
            <div
              key={service.number}
              className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
            >

              {/* LARGE SERVICE IMAGE */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="rounded-[26px] overflow-hidden shadow-xl">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-[340px] md:h-[480px] object-cover hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="absolute top-5 left-5 bg-white/95 rounded-xl px-5 py-3 shadow-lg">
                  <span className="text-green-800 font-bold tracking-widest text-sm">
                    SERVICE {service.number}
                  </span>
                </div>
              </div>

              {/* SERVICE CONTENT */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>

                <p className="text-green-700 uppercase tracking-widest text-sm font-bold">
                  Himalayan Treks Experiences
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-[#173D32] mt-4 leading-tight">
                  {service.title}
                </h2>

                <p className="text-gray-600 leading-8 mt-5">
                  {service.description}
                </p>

                <div className="mt-8 space-y-5">

                  {service.items.map((item) => (
                    <div
                      key={item.title}
                      className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition"
                    >
                      <div className="flex items-start gap-4">

                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">
                            {item.title}
                          </h3>

                          <p className="text-gray-600 text-sm leading-6 mt-2">
                            {item.description}
                          </p>
                        </div>

                      </div>
                    </div>
                  ))}

                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-green-700 uppercase tracking-widest text-sm font-semibold">
              The Himalayan Treks Difference
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Why Choose Us?
            </h2>

            <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
              Your journey deserves thoughtful planning,
              authentic experiences and reliable local support.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="p-9 rounded-2xl bg-[#F6F8F5] hover:shadow-lg transition"
              >

                <div className="text-4xl">{reason.icon}</div>

                <h3 className="text-xl font-bold mt-6">
                  {reason.title}
                </h3>

                <p className="text-gray-600 leading-7 mt-4">
                  {reason.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#173D32] text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <p className="uppercase tracking-[4px] text-green-300 text-sm">
            Your Next Adventure Awaits
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-5">
            Ready to Explore the Outdoors with Us?
          </h2>

          <p className="text-gray-200 mt-6 leading-8">
            Tell us about your dream journey. Let's create
            an unforgettable Himalayan experience together.
          </p>

          <a
            href="/#contact"
            className="inline-block mt-9 bg-green-500 hover:bg-green-600 px-9 py-4 rounded-full font-semibold transition"
          >
            Plan Your Adventure →
          </a>

        </div>
      </section>

    </main>
  );
}
