
import main4 from "../../photos/discovers.avif";
import mountain1 from "../../photos/mou1.avif";
import mountain2 from "../../photos/mountain2.jpeg";
import mountain3 from "../../photos/mountain3.jpeg";
import mountain4 from "../../photos/mountain4.jpeg";
import sunrise from "../../photos/sunriseimage.jpg";
import sunset from "../../photos/sunset.jpeg";
import trektrail from "../../photos/himalayantrekking.avif";
import group from "../../photos/group.jpeg";

const features = [
  {
    icon: "🏔️",
    title: "Local Experience",
    description:
      "Explore Nepal with people who understand its mountains, landscapes, traditions and communities.",
  },
  {
    icon: "🤝",
    title: "Personal Approach",
    description:
      "We value individual travel preferences and help create journeys that suit your interests.",
  },
  {
    icon: "🌿",
    title: "Responsible Travel",
    description:
      "We believe in respecting local culture, supporting communities and caring for the natural environment.",
  },
  {
    icon: "🧭",
    title: "Thoughtful Planning",
    description:
      "From your first enquiry to the journey itself, we focus on clear communication and careful arrangements.",
  },
];

const experiences = [
  {
    title: "Himalayan Trekking",
    description:
      "Discover spectacular trails, mountain villages and unforgettable Himalayan views.",
    image: trektrail,
    tag: "TREKKING",
  },
  {
    title: "Mountain Exploration",
    description:
      "Experience Nepal's extraordinary landscapes and the beauty of its mountain regions.",
    image: mountain2,
    tag: "EXPLORATION",
  },
  {
    title: "Sunrise Adventures",
    description:
      "Experience peaceful mornings and breathtaking views across the Himalayas.",
    image: sunrise,
    tag: "NATURE",
  },
];



export default function About() {
  return (
    <main className="overflow-hidden bg-[#f3f7f3] text-[#263e32]">

      {/* HERO */}
      <section className="px-6 py-16 md:px-10 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <div>
            <span className="inline-flex items-center rounded-full bg-[#dcf8e8] px-5 py-3 text-sm font-semibold text-[#17613b]">
              🏔️ Get to Know Us
            </span>

            <h1 className="mt-9 max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight text-[#194536] sm:text-5xl lg:text-6xl">
              Discover the Story Behind Himalayan Treks
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#586b61] md:text-lg">
              Connecting travellers with the breathtaking mountains,
              rich culture and unforgettable adventures of Nepal.
              We are here to make every journey meaningful.
            </p>

            <a
              href="#our-story"
              className="mt-9 inline-flex items-center rounded-full bg-[#00883e] px-9 py-4 font-semibold text-white transition hover:bg-[#006f34] hover:shadow-lg"
            >
              Discover Our Story <span className="ml-3">→</span>
            </a>
          </div>

          <div className="relative">
            <img
              src={main4}
              alt="Beautiful Himalayan landscape"
              className="h-[350px] w-full rounded-[28px] object-cover shadow-xl md:h-[480px] lg:h-[540px]"
            />

            <div className="absolute -bottom-5 left-5 rounded-2xl bg-white px-6 py-4 shadow-lg md:left-8">
              <p className="text-sm font-bold text-[#194536]">
                Explore Nepal With Us
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Nature · Culture · Adventure
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* OUR STORY */}
      <section
        id="our-story"
        className="bg-white px-6 py-20 md:px-10 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div className="relative grid grid-cols-2 gap-4">
            <img
              src={mountain1}
              alt="Himalayan mountain scenery"
              className="mt-12 h-[270px] w-full rounded-2xl object-cover md:h-[350px]"
            />

            <img
              src={mountain3}
              alt="Mountain landscape in Nepal"
              className="h-[270px] w-full rounded-2xl object-cover md:h-[350px]"
            />

            <div className="col-span-2">
              <img
                src={mountain4}
                alt="Beautiful Himalayan valley"
                className="h-[180px] w-full rounded-2xl object-cover md:h-[210px]"
              />
            </div>
          </div>

          <div>
            <span className="rounded-full bg-[#dcf8e8] px-5 py-2.5 text-sm font-semibold text-[#17613b]">
              Our Story
            </span>

            <h2 className="mt-7 text-3xl font-bold leading-tight text-[#194536] md:text-5xl">
              More Than a Journey, An Experience.
            </h2>

            <p className="mt-7 text-base leading-8 text-[#65746b]">
              Nepal is a land of extraordinary mountains, diverse
              landscapes, ancient traditions and warm hospitality.
              At Himalayan Treks, we aim to bring travellers closer
              to everything that makes this country special.
            </p>

            <p className="mt-5 text-base leading-8 text-[#65746b]">
              From Himalayan trekking adventures to cultural
              sightseeing, hiking, cycling and camping, we offer
              opportunities to explore Nepal's natural beauty
              and discover experiences worth remembering.
            </p>

            <p className="mt-5 text-base leading-8 text-[#65746b]">
              We believe the best journeys are about more than
              destinations. They are about the people you meet,
              the experiences you share and the memories you create.
            </p>

            <a
              href="/packages/trek"
              className="mt-8 inline-flex items-center font-semibold text-[#00883e] hover:text-[#194536]"
            >
              Explore Our Adventures <span className="ml-3">→</span>
            </a>
          </div>

        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-full bg-[#dcf8e8] px-5 py-2.5 text-sm font-semibold text-[#17613b]">
              Why Choose Us
            </span>

            <h2 className="mt-7 text-3xl font-bold text-[#194536] md:text-5xl">
              What Makes Us Different?
            </h2>

            <p className="mt-5 leading-8 text-[#65746b]">
              Every journey deserves attention, care and a genuine
              connection with the destination.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-[#e4ebe4] bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5f6eb] text-3xl">
                  {feature.icon}
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#194536]">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#748078]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-white px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <span className="rounded-full bg-[#dcf8e8] px-5 py-2.5 text-sm font-semibold text-[#17613b]">
              Our Purpose
            </span>

            <h2 className="mt-7 text-3xl font-bold text-[#194536] md:text-5xl">
              Mission & Vision
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-[26px] bg-[#f3f7f3] p-9 md:p-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#dff3e5] text-2xl">
                🎯
              </div>

              <h3 className="mt-7 text-2xl font-bold text-[#194536]">
                Our Mission
              </h3>

              <p className="mt-5 text-base leading-8 text-[#65746b]">
                To create memorable travel experiences by connecting
                people with Nepal's natural beauty, culture and
                adventure while emphasizing hospitality, safety
                and responsible tourism.
              </p>
            </div>

            <div className="rounded-[26px] bg-[#194536] p-9 text-white md:p-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                🏔️
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-5 text-base leading-8 text-white/75">
                To become a trusted name in Nepalese tourism,
                recognized for quality experiences, genuine
                hospitality and a passion for showcasing the
                Himalayas to travellers around the world.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE GALLERY */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="rounded-full bg-[#dcf8e8] px-5 py-2.5 text-sm font-semibold text-[#17613b]">
                Discover Nepal
              </span>

              <h2 className="mt-7 text-3xl font-bold text-[#194536] md:text-5xl">
                Experiences Worth Remembering
              </h2>
            </div>

            <p className="max-w-md leading-8 text-[#65746b]">
              From mountain trails to unforgettable sunrises,
              discover the many ways to experience Nepal.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {experiences.map((experience) => (
              <article
                key={experience.title}
                className="group overflow-hidden rounded-[24px] bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-bold tracking-widest text-[#00883e]">
                    {experience.tag}
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-[#194536]">
                    {experience.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#748078]">
                    {experience.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      
      {/* FINAL CTA */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#194536] px-7 py-20 text-center text-white md:px-16">
          <img
            src={sunset}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-[#194536]/75" />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-block rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white">
              Your Next Adventure Awaits
            </span>

            <h2 className="mt-7 text-3xl font-bold leading-tight md:text-5xl">
              Let's Explore Nepal Together.
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-white/75">
              Discover breathtaking destinations, experience local
              culture and create memories across the Himalayas.
            </p>

            <a
              href="/contact"
              className="mt-9 inline-flex items-center rounded-full bg-[#00883e] px-9 py-4 font-semibold text-white transition hover:bg-white hover:text-[#194536]"
            >
              Plan Your Adventure <span className="ml-3">→</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
