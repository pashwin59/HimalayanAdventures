
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#102D26] text-white px-6 py-14">

      <div className="max-w-7xl mx-auto">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">

          {/* COMPANY INFORMATION */}
          <div>
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold tracking-wide">
                HIMALAYAN TREKS
              </h3>
              <p className="text-[10px] tracking-[0.3em] text-[#D1B99A] mt-1">
                TREKS & EXPEDITIONS
              </p>
            </Link>

            <p className="text-gray-400 mt-6 leading-relaxed max-w-sm">
              Discover the beauty of Nepal. Explore majestic mountains,
              experience authentic culture and create unforgettable memories.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-bold text-lg mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <Link to="/" className="hover:text-[#D1B99A] transition-colors">
                Home
              </Link>

              <Link to="/about" className="hover:text-[#D1B99A] transition-colors">
                About Us
              </Link>

              <Link to="/services" className="hover:text-[#D1B99A] transition-colors">
                Services
              </Link>

              <Link to="/gallery" className="hover:text-[#D1B99A] transition-colors">
                Gallery
              </Link>

              <Link to="/contact" className="hover:text-[#D1B99A] transition-colors">
                Contact
              </Link>

              <Link to="/plan-your-trek" className="hover:text-[#D1B99A] transition-colors">
                Plan Your Trek
              </Link>

            </div>
          </div>

          {/* EXPLORE PACKAGES */}
          <div>
            <h3 className="font-bold text-lg mb-6">
              Explore Packages
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <Link to="/packages/trek" className="hover:text-[#D1B99A] transition-colors">
                All Trek Packages
              </Link>

              <Link to="/packages/trek/short-trek" className="hover:text-[#D1B99A] transition-colors">
                Short Trek
              </Link>

              <Link to="/packages/trek/moderate-trek" className="hover:text-[#D1B99A] transition-colors">
                Moderate Trek
              </Link>

              <Link to="/packages/trek/advanced-trek" className="hover:text-[#D1B99A] transition-colors">
                Advanced Trek
              </Link>

              <Link to="/packages/sightseeing" className="hover:text-[#D1B99A] transition-colors">
                Sightseeing
              </Link>

              <Link to="/packages/hiking" className="hover:text-[#D1B99A] transition-colors">
                Hiking
              </Link>

              <Link to="/packages/cycling" className="hover:text-[#D1B99A] transition-colors">
                Cycling
              </Link>

              <Link to="/packages/camping" className="hover:text-[#D1B99A] transition-colors">
                Camping
              </Link>

            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 mt-14 pt-7 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Himalayan Treks. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
