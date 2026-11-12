import Blog from "./pages/Blog";
import TrekDetail from "./components/TrekDetail";
import PlanYourTrek from "./pages/PlanYourTrek";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

import Camping from "./pages/packages/camping/Camping";
import Cycling from "./pages/packages/cycling/Cycling";
import Hiking from "./pages/packages/hiking/Hiking";
import Sightseeing from "./pages/packages/sightseeing/Sightseeing";

import AdvancedTrek from "./pages/packages/AdvancedTrek";
import ModerateTrek from "./pages/packages/ModerateTrek";
import ShortTrek from "./pages/packages/ShortTrek";
import Trek from "./pages/packages/Trek";

import Services from "./components/Services";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Main Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        {/* Trekking Packages */}
        <Route path="/packages/trek" element={<Trek />} />
        <Route
          path="/packages/trek/short-trek"
          element={<ShortTrek />}
        />
        <Route
          path="/packages/trek/moderate-trek"
          element={<ModerateTrek />}
        />
        <Route
          path="/packages/trek/advanced-trek"
          element={<AdvancedTrek />}
        />

        {/* Other Adventure Packages */}
        <Route
          path="/packages/sightseeing"
          element={<Sightseeing />}
        />
        <Route path="/packages/hiking" element={<Hiking />} />
        <Route path="/packages/cycling" element={<Cycling />} />
        <Route path="/packages/camping" element={<Camping />} />

        {/* Plan Your Trek */}
        <Route
          path="/plan-your-trek"
          element={<PlanYourTrek />}
        />
        <Route
  path="/packages/trek/short-trek/:slug"
  element={<TrekDetail />}
/>
{/* MODERATE TREK DETAIL PAGES */}
<Route
  path="/packages/trek/moderate-trek/:slug"
  element={<TrekDetail />}
/>
<Route
  path="/packages/trek/advanced-trek/:slug"
  element={<TrekDetail />}
/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
