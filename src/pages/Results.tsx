import { motion } from "motion/react";
import { Phone, Clock, Zap, AlertTriangle, Shield, MessageCircle } from "lucide-react";

export default function Emergency() {
  return (
    <div className="bg-black text-white pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8 animate-pulse">
              <AlertTriangle className="w-5 h-5" /> Emergency Service 24/7
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black uppercase mb-8 leading-none">
              Need Help <br /><span className="text-brand-orange">Right Now?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto">
              Electrical fault? Power outage? Security breach? Alpha Power provides immediate response for all electrical and maintenance emergencies in Johannesburg.
            </p>

            <div className="grid md:grid-cols-1 gap-6 mb-16 max-w-md mx-auto">
              <a 
                href="tel:0710731235" 
                className="bg-brand-orange text-black p-10 flex flex-col items-center justify-center gap-4 hover:bg-white transition-all group"
              >
                <Phone className="w-12 h-12 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs uppercase font-black opacity-60 mb-1">Call Miguel</p>
                  <p className="text-3xl font-black">071 073 1235</p>
                </div>
              </a>
            </div>

            <a 
              href="https://wa.me/27710731235" 
              target="_blank"
              className="inline-flex items-center gap-3 text-2xl font-black uppercase tracking-widest text-green-500 hover:text-white transition-colors mb-24"
            >
              <MessageCircle className="w-8 h-8" /> WhatsApp Now for Immediate Response
            </a>

            <div className="grid sm:grid-cols-3 gap-8 text-left border-t border-white/10 pt-16">
              {[
                { icon: <Clock className="w-8 h-8 text-brand-orange" />, title: "24/7 Availability", desc: "Day or night, we are ready to assist." },
                { icon: <Zap className="w-8 h-8 text-brand-orange" />, title: "Fast Response", desc: "We prioritize emergency calls." },
                { icon: <Shield className="w-8 h-8 text-brand-orange" />, title: "Expert Fix", desc: "Professional repairs on the spot." }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  {item.icon}
                  <h3 className="text-lg font-black uppercase">{item.title}</h3>
                  <p className="text-neutral-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
