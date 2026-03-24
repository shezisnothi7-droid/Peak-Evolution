import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#0A0A0A] text-white pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-6xl font-bold uppercase italic mb-8 leading-none">
                  Book Your <br />
                  <span className="text-orange-600">Strategy Call.</span>
                </h1>
                <p className="text-xl text-neutral-400 mb-12">
                  This is not a sales call. It's a strategy session to identify your plateaus and map out your path to elite performance.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-[#141414] flex items-center justify-center border border-white/10">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-neutral-500 font-bold">Email Us</p>
                      <p className="text-lg font-bold">elite@peakevolution.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-[#141414] flex items-center justify-center border border-white/10">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-neutral-500 font-bold">Call Us</p>
                      <p className="text-lg font-bold">+1 (555) PEAK-EVO</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-[#141414] flex items-center justify-center border border-white/10">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-neutral-500 font-bold">Location</p>
                      <p className="text-lg font-bold">123 Performance Way, Elite District</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#141414] p-10 border border-white/10"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-neutral-500">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-black border border-white/10 p-4 focus:border-orange-600 outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-neutral-500">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-black border border-white/10 p-4 focus:border-orange-600 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-neutral-500">Primary Goal</label>
                  <select className="w-full bg-black border border-white/10 p-4 focus:border-orange-600 outline-none transition-colors appearance-none">
                    <option>Fat Loss & Body Recomposition</option>
                    <option>Muscle Growth & Strength</option>
                    <option>Elite Athletic Performance</option>
                    <option>12-Week Transformation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-neutral-500">Current Fitness Level</label>
                  <div className="grid grid-cols-3 gap-4">
                    {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                      <button 
                        key={level}
                        type="button"
                        className="py-3 px-4 border border-white/10 hover:border-orange-600 text-sm font-bold uppercase transition-all"
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-neutral-500">Commitment Level (1-10)</label>
                  <input type="range" min="1" max="10" className="w-full accent-orange-600" />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-bold uppercase">
                    <span>Just Curious</span>
                    <span>Ready to Evolve</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-neutral-500">Message (Optional)</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-black border border-white/10 p-4 focus:border-orange-600 outline-none transition-colors"
                    placeholder="Tell us about your challenges..."
                  />
                </div>

                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-5 font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all">
                  Submit Application
                  <Send className="w-5 h-5" />
                </button>
                <p className="text-[10px] text-center text-neutral-600 uppercase font-bold">
                  *We only accept 5 new clients per month to ensure elite standards.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
