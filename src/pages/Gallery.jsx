import { useState } from "react";
import { Link } from "react-router-dom";
import mountain1 from "../../photos/mountain1.jpeg";
import mountain2 from "../../photos/mountain2.jpeg";
import mountain3 from "../../photos/mountain3.jpeg";
import mountain4 from "../../photos/mountain4.jpeg";
import mountain5 from "../../photos/mountain5.jpeg";
import mountainSunset from "../../photos/mountainduringsunset.jpeg";
import multiDayTrekking from "../../photos/multidaytrekking.jpeg";
import sunrise from "../../photos/sunrise.jpeg";
import sunset from "../../photos/sunset.jpeg";
import trekTrail from "../../photos/trektrail.jpeg";
import fountain from "../../photos/fountain.jpeg";
import blueLake from "../../photos/bluelake.jpeg";
import clearMountain from "../../photos/clearmountain.jpeg";
import fishtail from "../../photos/fishtail.jpeg";
import lotus from "../../photos/lotus.jpeg";
import lotus2 from "../../photos/lotus2.jpeg";
import mardiHimal from "../../photos/mardi.jpeg";
import mardiHimal2 from "../../photos/mardi2.jpeg";
import tilicho from "../../photos/tilicho.jpeg";
import dhaulagiri from "../../photos/dhaulagiri.jpeg";
import grouptrek from "../../photos/grouptrek.jpeg";
import hike from "../../photos/hike.jpeg";
import nepal from "../../photos/nepal.jpeg";


const galleryImages = [
  { src: mountain1, title: "Mountain Landscapes", category: "Mountains", size: "large" },
  { src: multiDayTrekking, title: "Multi-Day Trekking", category: "Trekking", size: "normal" },
  { src: sunrise, title: "Mountain Sunrise", category: "Sunrise & Sunset", size: "normal" },
  { src: mountain2, title: "Himalayan Views", category: "Mountains", size: "normal" },
  { src: blueLake, title: "Blue Lake", category: "Nature", size: "large" },
  { src: trekTrail, title: "Along the Trekking Trail", category: "Trekking", size: "normal" },
  { src: mountainSunset, title: "Mountains at Sunset", category: "Sunrise & Sunset", size: "normal" },
  { src: mountain3, title: "Mountain Views", category: "Mountains", size: "normal" },
  { src: fountain, title: "Nature and Water", category: "Nature", size: "normal" },
  { src: sunset, title: "Evening in the Himalayas", category: "Sunrise & Sunset", size: "large" },
  { src: mountain4, title: "Himalayan Landscapes", category: "Mountains", size: "normal" },
  { src: clearMountain, title: "Clear Mountain Views", category: "Mountains", size: "normal" },
  { src: mountain5, title: "The Himalayan Journey", category: "Mountains", size: "normal" },
  {src: fishtail, title: "Fishtail Mountain", category: "Mountains", size: "normal" },
  { src: lotus, title: "Lotus Flower", category: "Nature", size: "normal" },
    { src: lotus2, title: "Lotus Pond", category: "Nature", size: "normal" },
    { src: mardiHimal, title: "Mardi Himal Trek", category: "Trekking", size: "normal" },
    { src: mardiHimal2, title: "Mardi Himal View", category: "Trekking", size: "normal" },
    { src: tilicho, title: "Tilicho Lake", category: "Nature", size: "normal" },
    { src: dhaulagiri, title: "Dhaulagiri Mountain", category: "Mountains", size: "normal" },
    { src: grouptrek, title: "Group Trekking Adventure", category: "Trekking", size: "normal" },
    { src: hike, title: "Hiking in the Himalayas", category: "Trekking", size: "normal" },
{ src: nepal, title: "Nepalese Landscape", category: "Nature", size: "normal" },



];

const filters = [
  "All",
  "Mountains",
  "Trekking",
  "Sunrise & Sunset",
  "Nature",
];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeFilter);

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 pb-16">

        <div className="flex items-center gap-3 text-xs uppercase tracking-[3px] text-[#95876c] mb-10">
          <span>Explore Nepal</span>
          <span className="w-10 h-px bg-[#b5a88d]"></span>
          <span>Our Gallery</span>
        </div>

        <div className="grid lg:grid-cols-2 bg-[#eae6da]">

          <div className="flex flex-col justify-center p-8 md:p-14">

            <p className="text-[#a58b58] text-xs uppercase tracking-[4px] mb-6">
              Moments From The Mountains
            </p>

            <h1 className="font-serif text-5xl md:text-6xl leading-tight text-[#263e32]">
              Stories From
              <span className="block italic text-[#9b8966]">
                The Trails
              </span>
            </h1>

            <p className="text-[#77786d] text-lg leading-8 mt-7 max-w-lg">
              Every trail has a story, every mountain holds a memory.
              Explore moments captured throughout our journeys across
              the beautiful landscapes of Nepal.
            </p>

            <div className="flex items-center gap-8 border-t border-[#d3cbbb] mt-8 pt-6">

              <div>
                <p className="font-serif text-3xl text-[#263e32]">13</p>
                <p className="text-xs uppercase tracking-wider text-[#898678] mt-1">
                  Photographs
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl text-[#263e32]">05</p>
                <p className="text-xs uppercase tracking-wider text-[#898678] mt-1">
                  Collections
                </p>
              </div>

            </div>

            <a
              href="#photo-collection"
              className="bg-[#263e32] text-white px-8 py-4 mt-8 w-fit hover:bg-[#a58b58] transition"
            >
              Explore Gallery ↗
            </a>

          </div>

          <div className="relative min-h-[350px] lg:min-h-[520px]">

            <img
              src={mountain1}
              alt="Mountain landscape in Nepal"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-white/90 px-5 py-4">
              <p className="text-xs uppercase tracking-[2px] text-[#95876c]">
                Nepal, Through Our Lens
              </p>
              <p className="font-serif text-2xl text-[#263e32] mt-1">
                Memories That Stay.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* INTRODUCTION */}
      <section className="max-w-4xl mx-auto px-6 py-10 text-center">

        <p className="text-[#a58b58] uppercase tracking-[3px] text-xs mb-4">
          A Collection of Experiences
        </p>

        <h2 className="font-serif text-3xl md:text-4xl text-[#263e32] mb-5">
          More Than Just a Journey
        </h2>

        <p className="text-gray-600 leading-8">
          From peaceful lakes and beautiful mountain horizons to
          challenging trekking trails and unforgettable sunsets,
          these photographs capture the beauty of exploring Nepal.
        </p>

      </section>

      {/* GALLERY */}
      <section id="photo-collection" className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

          <div>
            <p className="text-[#a58b58] uppercase tracking-[3px] text-xs mb-3">
              Our Photo Collection
            </p>

            <h2 className="font-serif text-3xl md:text-4xl text-[#263e32]">
              Moments Worth Remembering
            </h2>
          </div>

          <p className="text-gray-500 text-sm">
            {filteredImages.length} photographs
          </p>

        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-3 mb-10">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm transition ${
                activeFilter === filter
                  ? "bg-[#263e32] text-white"
                  : "bg-[#f2f0e9] text-[#55594f] hover:bg-[#e5dfd1]"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* MASONRY IMAGE GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">

          {filteredImages.map((image, index) => (

            <button
              key={image.title}
              onClick={() => setSelectedImage(image)}
              className="relative block w-full mb-5 break-inside-avoid overflow-hidden rounded-sm text-left group"
              aria-label={`View ${image.title}`}
            >

              <img
                src={image.src}
                alt={image.title}
                loading={index > 2 ? "lazy" : "eager"}
                className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                  image.size === "large"
                    ? "h-[420px]"
                    : "h-[280px]"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition">

                <div className="absolute bottom-0 left-0 p-5">

                  <p className="text-white/80 text-xs uppercase tracking-[2px]">
                    {image.category}
                  </p>

                  <h3 className="font-serif text-xl text-white mt-2">
                    {image.title}
                  </h3>

                </div>

                <span className="absolute top-4 right-4 bg-white/90 text-[#263e32] w-9 h-9 rounded-full flex items-center justify-center text-lg">
                  ↗
                </span>

              </div>

            </button>

          ))}

        </div>

      </section>

{/* CLOSING SECTION */}
<section className="bg-[#eae6da] py-20">

  <div className="max-w-4xl mx-auto px-6 text-center">

    <Link
      to="/plan-your-journey"
      className="text-[#a58b58] uppercase tracking-[3px] text-xs mb-4 inline-block hover:text-[#263e32] transition cursor-pointer"
    >
      Plan Your Journey
    </Link>

    <h2 className="font-serif text-4xl md:text-5xl text-[#263e32] mb-6">
      Every Journey Has a Story.
    </h2>

    <p className="text-gray-600 leading-8 max-w-2xl mx-auto mb-9">
      Come explore the mountains, discover hidden trails, and
      create memories of your own. Your next Nepal adventure
      could be just around the corner.
    </p>

  </div>

</section>

      {/* IMAGE LIGHTBOX */}
      {selectedImage && (

        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-6 text-white text-4xl font-light hover:text-amber-400"
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[78vh] w-full object-contain"
            />

            <div className="text-center mt-5">

              <p className="text-amber-400 text-xs uppercase tracking-[3px]">
                {selectedImage.category}
              </p>

              <h3 className="font-serif text-2xl text-white mt-2">
                {selectedImage.title}
              </h3>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default Gallery;
