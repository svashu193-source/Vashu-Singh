/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import InteractiveBackdrop from "./components/InteractiveBackdrop";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [portfolioCategory, setPortfolioCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle the global 'dark' class on the document element for Tailwind v4 compatibility
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleGetStarted = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  const handleViewPortfolio = () => {
    const el = document.getElementById("portfolio");
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  const handleExplorePortfolio = (category: string) => {
    setPortfolioCategory(category);
    // Scroll smoothly to portfolio section
    const el = document.getElementById("portfolio");
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${
      darkMode 
        ? "bg-neutral-950 text-white selection:bg-white/10" 
        : "bg-neutral-50 text-black selection:bg-black/10"
    }`}>
      {/* 🔮 Background Mesh Ambient Overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-0 right-0 h-[500px]" 
          style={{
            background: darkMode
              ? "radial-gradient(circle at 50% -20%, rgba(255, 255, 255, 0.03) 0%, transparent 70%)"
              : "radial-gradient(circle at 50% -20%, rgba(0, 0, 0, 0.02) 0%, transparent 70%)"
          }}
        />
      </div>

      {/* Header / Nav */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} id="navbar-root" />

      {/* Main Sections */}
      <main className="relative z-10">
        {/* HERO SECTION */}
        <Hero 
          darkMode={darkMode} 
          onGetStarted={handleGetStarted} 
          onViewPortfolio={handleViewPortfolio} 
          onSearchChange={setSearchQuery}
          id="hero"
        />

        {/* SERVICES SECTION */}
        <Services 
          darkMode={darkMode} 
          onExplorePortfolio={handleExplorePortfolio} 
          id="services"
        />

        {/* PORTFOLIO SECTION */}
        <Portfolio 
          darkMode={darkMode} 
          selectedCategory={portfolioCategory} 
          setSelectedCategory={setPortfolioCategory} 
          searchQuery={searchQuery}
          id="portfolio"
        />

        {/* WHY CHOOSE US */}
        <WhyChooseUs 
          darkMode={darkMode} 
          id="why-choose-us"
        />

        {/* TESTIMONIALS */}
        <Testimonials 
          darkMode={darkMode} 
          id="testimonials"
        />

        {/* CONTACT SECTION */}
        <ContactForm 
          darkMode={darkMode} 
          id="contact"
        />
      </main>

      {/* FOOTER */}
      <Footer darkMode={darkMode} id="footer" />

      {/* Interactive Micro-feedback follow glows, cursor ripples and click audios */}
      <InteractiveBackdrop />
    </div>
  );
}

