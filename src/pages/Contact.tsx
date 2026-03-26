import { motion } from "motion/react";
import { Phone, MessageCircle, Mail, MapPin, Send, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-black text-white pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-brand-orange text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                  <Clock className="w-4 h-4" /> 24/7 Emergency Support
                </div>
                <h1 className="text-5xl md:text-6xl font-black uppercase mb-8 leading-none">
                  Get a <span className="text-brand-orange">Free Quote.</span>
                </h1>
                <p className="text-xl text-neutral-400 mb-12">
                  Need an expert? Whether it's an emergency repair or a new installation, we're here to help. Call us directly or fill out the form.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-neutral-900 flex items-center justify-center border border-white/10 group-hover:border-brand-orange transition-colors">
                      <Phone className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-neutral-500 font-bold">Call Delano</p>
                      <a href="tel:0662283190" className="text-xl font-black hover:text-brand-orange transition-colors">066 228 3190</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-neutral-900 flex items-center justify-center border border-white/10 group-hover:border-brand-orange transition-colors">
                      <Phone className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-neutral-500 font-bold">Call Miguel</p>
                      <a href="tel:0710731235" className="text-xl font-black hover:text-brand-orange transition-colors">071 073 1235</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-neutral-900 flex items-center justify-center border border-white/10 group-hover:border-brand-orange transition-colors">
                      <MessageCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-neutral-500 font-bold">WhatsApp Now</p>
                      <a href="https://wa.me/27662283190" target="_blank" className="text-xl font-black hover:text-green-500 transition-colors">Message Us</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-neutral-900 flex items-center justify-center border border-white/10 group-hover:border-brand-orange transition-colors">
                      <MapPin className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-neutral-500 font-bold">Service Areas</p>
                      <p className="text-lg font-bold">Johannesburg, Sandton & Surrounds</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-neutral-900 p-10 border border-white/10"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-neutral-500">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-black border border-white/10 p-4 focus:border-brand-orange outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-neutral-500">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-black border border-white/10 p-4 focus:border-brand-orange outline-none transition-colors"
                      placeholder="012 345 6789"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-neutral-500">Service Required</label>
                  <select className="w-full bg-black border border-white/10 p-4 focus:border-brand-orange outline-none transition-colors appearance-none">
                    <option>Electrical Repairs / DB Boards</option>
                    <option>Security / CCTV / Fencing</option>
                    <option>Solar / Backup Power</option>
                    <option>Plumbing / Renovations</option>
                    <option>Emergency Call-out</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-neutral-500">Location</label>
                  <input 
                    type="text" 
                    className="w-full bg-black border border-white/10 p-4 focus:border-brand-orange outline-none transition-colors"
                    placeholder="e.g. Sandton, Johannesburg"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-neutral-500">How can we help?</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-black border border-white/10 p-4 focus:border-brand-orange outline-none transition-colors"
                    placeholder="Describe your issue or project..."
                  />
                </div>

                <button className="w-full bg-brand-orange text-black py-5 font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all">
                  Send Request
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
