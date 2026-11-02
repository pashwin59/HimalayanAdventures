
export default function Footer() {
  return (
    <footer className="bg-[#102D26] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company Information */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              🏔 HIMALAYAN TREKS
            </h3>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Discover the beauty of Nepal.
              Explore mountains, experience culture and create memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a href="/" className="hover:text-white">Home</a>
              <a href="/about" className="hover:text-white">About Us</a>
              <a href="/#services" className="hover:text-white">Services</a>
              <a href="/#packages" className="hover:text-white">Packages</a>
              <a href="/#gallery" className="hover:text-white">Gallery</a>
              <a href="/#contact" className="hover:text-white">Contact</a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Explore Nepal
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <span>Everest Region</span>
              <span>Annapurna Region</span>
              <span>Mardi Himal</span>
              <span>Pokhara</span>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-7 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Himalayan Treks. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
