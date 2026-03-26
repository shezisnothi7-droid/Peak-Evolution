import { motion } from "motion/react";
import { CheckCircle, Phone, Clock, Shield, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="bg-black text-white pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-12 leading-none">
              One Team. <br /><span className="text-brand-orange">Every Solution.</span>
            </h1>
            
            <div className="aspect-video mb-16 relative">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
                alt="Alpha Power Team" 
                className="w-full h-full object-cover grayscale brightness-50 border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white/10">Alpha Power</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 mb-24">
              <div>
                <h2 className="text-2xl font-black uppercase mb-6 text-brand-orange">Who We Are</h2>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Led by Delano and Miguel, Alpha Power is a team of dedicated professionals providing top-tier electrical, security, and maintenance services across Johannesburg.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  We aren't just electricians. We are all-in-one home and business maintenance experts. From complex solar installations to emergency electrical repairs and complete bathroom renovations, we handle it all with precision and care.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase mb-6 text-brand-orange">Our Mission</h2>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Our mission is simple: to provide reliable, fast, and professional service that keeps your power on and your property secure.
                </p>
                <div className="space-y-4">
                  {[
                    "Reliable & Fast Response",
                    "Professional Workmanship",
                    "24/7 Emergency Support",
                    "Residential & Commercial Expertise"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-orange" />
                      <span className="font-bold uppercase text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 p-12 border border-white/5 text-center">
              <h2 className="text-3xl font-black uppercase mb-8">Need Help Now?</h2>
              <div className="flex flex-col md:flex-row justify-center gap-8">
                <div>
                  <p className="text-xs uppercase text-neutral-500 font-bold mb-2">Delano</p>
                  <a href="tel:0662283190" className="text-2xl font-black hover:text-brand-orange transition-colors">066 228 3190</a>
                </div>
                <div className="w-px h-12 bg-white/10 hidden md:block mx-auto" />
                <div>
                  <p className="text-xs uppercase text-neutral-500 font-bold mb-2">Miguel</p>
                  <a href="tel:0710731235" className="text-2xl font-black hover:text-brand-orange transition-colors">071 073 1235</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
