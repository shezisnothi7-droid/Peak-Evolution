import { motion } from "motion/react";
import { Phone, MessageCircle, Zap, Shield, Sun, Droplets, Clock, CheckCircle, MapPin, ArrowRight } from "lucide-react";

export default function Home({ onNavigate }: { onNavigate: (page: string) => void }) {
  const services = [
    {
      id: "electrical",
      icon: <Zap className="w-10 h-10 text-brand-orange" />,
      title: "Electrical",
      items: ["DB Boards & Faults", "Geyser Installation", "Wiring & Repairs"]
    },
    {
      id: "security",
      icon: <Shield className="w-10 h-10 text-brand-orange" />,
      title: "Security",
      items: ["CCTV Installation", "Electric Fence", "Gate Automation"]
    },
    {
      id: "solar",
      icon: <Sun className="w-10 h-10 text-brand-orange" />,
      title: "Solar",
      items: ["Solar Panels", "Backup Power Systems", "Inverters"]
    },
    {
      id: "plumbing",
      icon: <Droplets className="w-10 h-10 text-brand-orange" />,
      title: "Plumbing & Reno",
      items: ["Plumbing & Tiling", "Bathroom Renovations", "General Maintenance"]
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
            alt="Electrician at work" 
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-brand-orange text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <Clock className="w-4 h-4" /> 24/7 Emergency Service
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 uppercase">
              24/7 Electrical, Solar & <br />
              <span className="text-brand-orange">Security Experts.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-2xl font-medium">
              Fast response. Reliable service. Power, security & maintenance – all in one. Serving Johannesburg & Sandton.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:0662283190"
                className="bg-brand-orange hover:bg-white hover:text-black text-black px-8 py-4 text-lg font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" /> Call Delano
              </a>
              <a 
                href="tel:0710731235"
                className="bg-white hover:bg-brand-orange text-black px-8 py-4 text-lg font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" /> Call Miguel
              </a>
              <a 
                href="https://wa.me/27662283190"
                target="_blank"
                className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 text-lg font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 text-green-500" /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-neutral-900 border-y border-white/5 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              "24/7 Emergency Service",
              "Domestic & Commercial",
              "Fast Response Times",
              "Skilled Technicians"
            ].map((text, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-orange" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-neutral-400">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">One Team. <span className="text-brand-orange">Every Solution.</span></h2>
            <p className="text-lg text-neutral-400">
              We provide comprehensive electrical and maintenance services for homes and businesses across Johannesburg.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => onNavigate(service.id)}
                className="group p-10 bg-neutral-900 border border-white/5 hover:border-brand-orange transition-all cursor-pointer"
              >
                <div className="mb-8 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-black uppercase mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-neutral-500 text-sm flex items-center gap-2">
                      <div className="w-1 h-1 bg-brand-orange rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange group-hover:gap-4 transition-all">
                  View Details <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">Why Choose <br /><span className="text-brand-orange">Alpha Power?</span></h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "24/7 Support", desc: "We are always available for electrical emergencies." },
                  { title: "All-in-One", desc: "Electrical, security, solar, and plumbing expertise." },
                  { title: "Fast Response", desc: "We prioritize urgent calls to get you back on track." },
                  { title: "Experienced", desc: "Skilled technicians for residential & commercial work." }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-orange" />
                      <h4 className="font-black uppercase text-sm">{item.title}</h4>
                    </div>
                    <p className="text-neutral-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => onNavigate('contact')}
                className="mt-12 bg-brand-orange text-black px-10 py-4 font-black uppercase tracking-widest hover:bg-white transition-colors"
              >
                Get a Free Quote
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop" 
                alt="Maintenance team" 
                className="w-full aspect-video object-cover grayscale border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-orange p-8 hidden md:block">
                <p className="text-3xl font-black uppercase leading-none text-black">Trusted <br /> Experts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-black text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-12">Trusted by homeowners and businesses across <span className="text-brand-orange">Johannesburg.</span></h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            {/* Placeholders for logos or trust indicators */}
            <div className="text-xl font-black uppercase tracking-tighter">Residential</div>
            <div className="text-xl font-black uppercase tracking-tighter">Commercial</div>
            <div className="text-xl font-black uppercase tracking-tighter">Industrial</div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-neutral-900 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <MapPin className="w-12 h-12 text-brand-orange mx-auto mb-6" />
          <h2 className="text-3xl font-black uppercase mb-8">Serving Johannesburg & Surrounding Areas</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Sandton", "Randburg", "Fourways", "Midrand", "Roodepoort", "Edenvale"].map((area) => (
              <span key={area} className="px-6 py-2 bg-black border border-white/10 text-xs font-bold uppercase tracking-widest">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-brand-orange text-black text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-none">Need Help Now?</h2>
          <p className="text-2xl font-bold mb-12">Call us 24/7 for immediate assistance.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="tel:0662283190" className="bg-black text-white px-12 py-6 text-2xl font-black uppercase tracking-tighter hover:scale-105 transition-transform">
              Delano: 066 228 3190
            </a>
            <a href="tel:0710731235" className="bg-black text-white px-12 py-6 text-2xl font-black uppercase tracking-tighter hover:scale-105 transition-transform">
              Miguel: 071 073 1235
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
