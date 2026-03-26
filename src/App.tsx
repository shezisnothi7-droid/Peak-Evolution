/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, MessageCircle, Zap, Shield, Sun, Droplets, Clock, ArrowRight } from "lucide-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Programs"; // Re-using the file but it's Services now
import Emergency from "./pages/Results"; // Re-using the file but it's Emergency now
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
    { id: "services", label: "Services" },
    { id: "emergency", label: "Emergency 24/7" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "home": return <Home onNavigate={setCurrentPage} />;
      case "about": return <About />;
      case "services": return <Services onNavigate={setCurrentPage} />;
      case "emergency": return <Emergency />;
      case "contact": return <Contact />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-brand-orange selection:text-black">
      {/* Top Bar (Contact Info) */}
      <div className="hidden md:block bg-brand-orange text-black py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> 24/7 Emergency Service</span>
            <span className="flex items-center gap-2">Serving Johannesburg & Sandton</span>
          </div>
          <div className="flex gap-6">
            <a href="tel:0662283190" className="hover:underline">Delano: 066 228 3190</a>
            <a href="tel:0710731235" className="hover:underline">Miguel: 071 073 1235</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 inset-x-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="text-2xl font-black uppercase tracking-tighter cursor-pointer group flex items-center gap-2"
            onClick={() => setCurrentPage('home')}
          >
            <Zap className="w-8 h-8 text-brand-orange fill-brand-orange" />
            <span>Alpha <span className="text-brand-orange">Power</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-xs uppercase font-black tracking-widest transition-colors ${
                  currentPage === item.id ? "text-brand-orange" : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-brand-orange hover:bg-white text-black px-6 py-2 text-xs font-black uppercase tracking-widest transition-all"
            >
              Get a Quote
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
            className="fixed inset-0 z-40 bg-black pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`text-4xl font-black uppercase text-left ${
                    currentPage === item.id ? "text-brand-orange" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-8 border-t border-white/10 space-y-6">
                <a href="tel:0662283190" className="block text-2xl font-black uppercase">Delano: 066 228 3190</a>
                <a href="tel:0710731235" className="block text-2xl font-black uppercase">Miguel: 071 073 1235</a>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="w-full bg-brand-orange text-black py-4 text-xl font-black uppercase"
                >
                  Get a Quote
                </button>
              </div>
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
      <footer className="bg-neutral-900 border-t border-white/5 pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="text-3xl font-black uppercase tracking-tighter mb-6 flex items-center gap-2">
                <Zap className="w-8 h-8 text-brand-orange fill-brand-orange" />
                <span>Alpha <span className="text-brand-orange">Power</span></span>
              </div>
              <p className="text-neutral-500 max-w-sm mb-8">
                Your all-in-one home & business power, security & maintenance experts. Serving Johannesburg, Sandton, and surrounding areas with 24/7 emergency support.
              </p>
              <div className="flex gap-4">
                <a href="https://wa.me/27662283190" target="_blank" className="w-12 h-12 bg-black flex items-center justify-center border border-white/10 hover:border-brand-orange transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </a>
                <a href="tel:0662283190" className="w-12 h-12 bg-black flex items-center justify-center border border-white/10 hover:border-brand-orange transition-colors">
                  <Phone className="w-6 h-6 text-brand-orange" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase font-black text-white mb-6 tracking-widest">Services</h4>
              <ul className="space-y-4">
                {["Electrical", "Security & CCTV", "Solar & Backup", "Plumbing & Reno"].map(item => (
                  <li key={item}>
                    <button 
                      onClick={() => setCurrentPage('services')}
                      className="text-neutral-500 hover:text-brand-orange text-sm transition-colors font-bold uppercase tracking-wider"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase font-black text-white mb-6 tracking-widest">Contact</h4>
              <ul className="space-y-4 text-sm text-neutral-500 font-bold uppercase tracking-wider">
                <li>Johannesburg, South Africa</li>
                <li>Delano: 066 228 3190</li>
                <li>Miguel: 071 073 1235</li>
                <li className="text-brand-orange">24/7 Emergency Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-neutral-600 text-[10px] uppercase font-black tracking-widest">
              © 2026 Alpha Power – Electrical & Maintenance. All Rights Reserved.
            </p>
            <div className="flex gap-8 text-[10px] uppercase font-black tracking-widest text-neutral-600">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/27662283190" 
        target="_blank"
        className="fixed bottom-24 right-6 z-40 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform md:bottom-6"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-6 inset-x-6 z-30 flex gap-2">
        <a 
          href="tel:0662283190"
          className="flex-1 bg-brand-orange text-black py-4 font-black uppercase shadow-2xl flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" /> Call Now
        </a>
      </div>
    </div>
  );
}
