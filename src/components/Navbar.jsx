
import { useState } from "react";

const otherPackages = [
  { name: "Sightseeing", link: "/packages/sightseeing" },
  { name: "Hiking", link: "/packages/hiking" },
  { name: "Cycling", link: "/packages/cycling" },
  { name: "Camping", link: "/packages/camping" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const [trekOpen, setTrekOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setPackagesOpen(false);
    setTrekOpen(false);
  };

  return (
<nav className="relative z-50 w-full bg-white shadow-sm md:sticky md:top-0">
      <div className="max-w-7xl mx-auto px-6">

        {/* NAVBAR HEADER */}
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="/"
            className="text-2xl font-bold text-green-800 whitespace-nowrap"
          >
            🏔 TRIAL TRANTRA
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="md:hidden text-3xl text-green-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-7 text-gray-700 font-medium">

            <a href="/" className="hover:text-green-700 transition">
              Home
            </a>

            <a href="/about" className="hover:text-green-700 transition">
              About Us
            </a>

            <a href="/services" className="hover:text-green-700 transition">
              Services
            </a>

            {/* PACKAGES DROPDOWN */}
            <div className="relative group">

              <button
                type="button"
                className="flex items-center gap-1 hover:text-green-700 py-7"
              >
                Packages <span>⌄</span>
              </button>

              <div className="absolute left-0 top-full hidden group-hover:block w-60 bg-white shadow-xl rounded-lg border border-gray-100">

                {/* TREK DROPDOWN */}
                <div className="relative group/trek">

                  <a
                    href="/packages/trek"
                    className="flex justify-between items-center px-5 py-3 hover:bg-green-50 hover:text-green-700"
                  >
                    Trek <span>›</span>
                  </a>

                  {/* TREK SUBMENU */}
                  <div className="absolute left-full top-0 hidden group-hover/trek:block w-48 bg-white shadow-xl rounded-lg border border-gray-100">

                    <a
                      href="/packages/trek/short-trek"
                      className="block px-5 py-3 hover:bg-green-50"
                    >
                      Short Trek
                    </a>

                    <a
                      href="/packages/trek/moderate-trek"
                      className="block px-5 py-3 hover:bg-green-50"
                    >
                      Moderate Trek
                    </a>

                    <a
                      href="/packages/trek/advanced-trek"
                      className="block px-5 py-3 hover:bg-green-50"
                    >
                      Advanced Trek
                    </a>

                  </div>
                </div>

                {/* OTHER PACKAGES */}
                {otherPackages.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="block px-5 py-3 hover:bg-green-50 hover:text-green-700"
                  >
                    {item.name}
                  </a>
                ))}

              </div>
            </div>

             {/* BLOG */}
            <a href="/blog" className="hover:text-green-700 transition">
              Blog
            </a>

            {/* GALLERY */}
            <a href="/gallery" className="hover:text-green-700 transition">
              Gallery
            </a>

            {/* CONTACT - SEPARATE PAGE */}
            <a href="/contact" className="hover:text-green-700 transition">
              Contact
            </a>


           {/* PLAN YOUR TREK */}
<a
  href="/plan-your-trek"
  className="bg-green-700 text-white px-5 py-3 rounded-full hover:bg-green-800 transition whitespace-nowrap"
>
  Plan Your Trek
</a>

          </div>

        </div>

        {/* MOBILE NAVIGATION */}
        {mobileOpen && (

          <div className="md:hidden pb-5 space-y-2 text-gray-700 border-t border-gray-100 pt-4">

            <a
              href="/"
              onClick={closeMobile}
              className="block py-2"
            >
              Home
            </a>

            <a
              href="/about"
              onClick={closeMobile}
              className="block py-2"
            >
              About Us
            </a>

            <a
              href="/services"
              onClick={closeMobile}
              className="block py-2"
            >
              Services
            </a>

            {/* MOBILE PACKAGES */}
            <div>

              <button
                type="button"
                onClick={() => setPackagesOpen(!packagesOpen)}
                className="w-full flex justify-between py-2"
              >
                Packages
                <span>{packagesOpen ? "−" : "+"}</span>
              </button>

              {packagesOpen && (

                <div className="pl-5 border-l-2 border-green-600">

                  {/* MOBILE TREK */}
                  <button
                    type="button"
                    onClick={() => setTrekOpen(!trekOpen)}
                    className="w-full flex justify-between py-2"
                  >
                    Trek
                    <span>{trekOpen ? "−" : "+"}</span>
                  </button>

                  {trekOpen && (

                    <div className="pl-5">

                      <a
                        href="/packages/trek/short-trek"
                        onClick={closeMobile}
                        className="block py-2 text-sm"
                      >
                        Short Trek
                      </a>

                      <a
                        href="/packages/trek/moderate-trek"
                        onClick={closeMobile}
                        className="block py-2 text-sm"
                      >
                        Moderate Trek
                      </a>

                      <a
                        href="/packages/trek/advanced-trek"
                        onClick={closeMobile}
                        className="block py-2 text-sm"
                      >
                        Advanced Trek
                      </a>

                    </div>
                  )}

                  {/* OTHER PACKAGES */}
                  {otherPackages.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      onClick={closeMobile}
                      className="block py-2"
                    >
                      {item.name}
                    </a>
                  ))}

                </div>
              )}

            </div>
              {/* MOBILE BLOG */}
            <a
              href="/blog"
              onClick={closeMobile}
              className="block py-2"
            >
              Blog
            </a>

            {/* MOBILE GALLERY */}
            <a
              href="/gallery"
              onClick={closeMobile}
              className="block py-2"
            >
              Gallery
            </a>

            {/* MOBILE CONTACT */}
            <a
              href="/contact"
              onClick={closeMobile}
              className="block py-2"
            >
              Contact
            </a>

            {/* MOBILE PLAN YOUR TREK */}
            <a
              href="/contact"
              onClick={closeMobile}
              className="block bg-green-700 text-white text-center rounded-full py-3 mt-3"
            >
              Plan Your Trek
            </a>

          </div>

        )}

      </div>

    </nav>
  );
}
