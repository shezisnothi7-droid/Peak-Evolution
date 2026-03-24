/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Results from "./pages/Results";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [currentPage]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "programs", label: "Programs" },
    { id: "results", label: "Results" },
    { id: "blog", label: "Insights" },
    { id: "contact", label: "Book Call" },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "home": return <Home onNavigate={setCurrentPage} />;
      case "about": return <About />;
      case "programs": return <Programs onNavigate={setCurrentPage} />;
      case "results": return <Results />;
      case "blog": return <Blog />;
      case "contact": return <Contact />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans selection:bg-orange-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="text-2xl font-black uppercase italic tracking-tighter cursor-pointer group"
            onClick={() => setCurrentPage('home')}
          >
            Peak <span className="text-orange-600 group-hover:text-white transition-colors">Evolution</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-xs uppercase font-bold tracking-widest transition-colors ${
                  currentPage === item.id ? "text-orange-600" : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`text-4xl font-bold uppercase italic text-left ${
                    currentPage === item.id ? "text-orange-600" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-orange-600 text-white py-4 text-xl font-bold uppercase italic"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-[#0F0F0F] border-t border-white/5 pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="text-3xl font-black uppercase italic tracking-tighter mb-6">
                Peak <span className="text-orange-600">Evolution</span>
              </div>
              <p className="text-neutral-500 max-w-sm mb-8">
                Elite physical and mental performance coaching for high-achieving individuals. We don't sell memberships. We sell the systems that produce elite results.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#141414] flex items-center justify-center border border-white/10 hover:border-orange-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#141414] flex items-center justify-center border border-white/10 hover:border-orange-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#141414] flex items-center justify-center border border-white/10 hover:border-orange-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold text-white mb-6 tracking-widest">Navigation</h4>
              <ul className="space-y-4">
                {navItems.map(item => (
                  <li key={item.id}>
                    <button 
                      onClick={() => setCurrentPage(item.id)}
                      className="text-neutral-500 hover:text-orange-600 text-sm transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold text-white mb-6 tracking-widest">Contact</h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li>123 Performance Way, Elite District</li>
                <li>+1 (555) PEAK-EVO</li>
                <li>elite@peakevolution.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-neutral-600 text-xs uppercase font-bold">
              © 2026 Peak Evolution. All Rights Reserved.
            </p>
            <div className="flex gap-8 text-[10px] uppercase font-bold text-neutral-600">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-6 inset-x-6 z-30">
        <button 
          onClick={() => setCurrentPage('contact')}
          className="w-full bg-orange-600 text-white py-4 font-black uppercase italic shadow-2xl flex items-center justify-center gap-2"
        >
          Book Consultation
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
