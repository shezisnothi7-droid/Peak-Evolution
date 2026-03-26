import { motion } from "motion/react";
import { Zap, Shield, Sun, Droplets, Phone, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function Services({ onNavigate }: { onNavigate: (page: string) => void }) {
  const services = [
    {
      id: "electrical",
      title: "Electrical Services",
      icon: <Zap className="w-12 h-12 text-brand-orange" />,
      desc: "Expert electrical solutions for residential and commercial properties in Johannesburg.",
      items: [
        "Fault Finding & Repairs",
        "DB Board Upgrades & Repairs",
        "Geyser Installations & Repairs",
        "Wiring & Re-wiring",
        "Power Outage Solutions",
        "Compliance Certificates (COC)"
      ]
    },
    {
      id: "security",
      title: "Security & CCTV",
      icon: <Shield className="w-12 h-12 text-brand-orange" />,
      desc: "Protect your property with our advanced security and automation systems.",
      items: [
        "CCTV System Installation",
        "Electric Fencing Repairs & Install",
        "Gate Motor Automation",
        "Intercom Systems",
        "Access Control",
        "Security Lighting"
      ]
    },
    {
      id: "solar",
      title: "Solar & Backup Power",
      icon: <Sun className="w-12 h-12 text-brand-orange" />,
      desc: "Beat load shedding with reliable solar and backup power systems.",
      items: [
        "Solar Panel Installation",
        "Inverter & Battery Systems",
        "Backup Power Solutions",
        "Load Shedding Kits",
        "Solar Maintenance",
        "Energy Efficiency Audits"
      ]
    },
    {
      id: "plumbing",
      title: "Plumbing & Renovations",
      icon: <Droplets className="w-12 h-12 text-brand-orange" />,
      desc: "Complete home maintenance and renovation services under one roof.",
      items: [
        "Bathroom Renovations",
        "Plumbing Repairs",
        "Tiling & Flooring",
        "General Maintenance",
        "Leak Detection",
        "Kitchen Renovations"
      ]
    }
  ];

  return (
    <div className="bg-black text-white pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 leading-none">
            Expert <span className="text-brand-orange">Services.</span>
          </h1>
          <p className="text-xl text-neutral-400">
            From emergency repairs to large-scale installations, we provide professional solutions for all your property needs.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-900 border border-white/5 p-8 md:p-16 grid lg:grid-cols-12 gap-12 items-start group hover:border-brand-orange transition-all"
            >
              <div className="lg:col-span-5">
                <div className="mb-8">{service.icon}</div>
                <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">{service.title}</h2>
                <p className="text-lg text-neutral-400 mb-8">{service.desc}</p>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="bg-brand-orange text-black px-8 py-4 font-black uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2"
                >
                  Get a Quote <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="lg:col-span-7 bg-black/30 p-8 md:p-12 border border-white/5">
                <h3 className="text-xs uppercase font-bold text-neutral-500 mb-8 tracking-widest">What We Offer</h3>
                <ul className="grid md:grid-cols-2 gap-6">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                      <span className="text-neutral-300 font-bold uppercase text-xs tracking-wider">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emergency Callout */}
        <div className="mt-24 bg-brand-orange p-12 text-black text-center">
          <Clock className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-4xl font-black uppercase mb-4">24/7 Emergency Callouts</h2>
          <p className="text-xl font-bold mb-8">Electrical fault? Power outage? Security breach? We're on the way.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="tel:0662283190" className="bg-black text-white px-10 py-4 font-black uppercase tracking-widest hover:scale-105 transition-transform">
              Call Delano: 066 228 3190
            </a>
            <a href="tel:0710731235" className="bg-black text-white px-10 py-4 font-black uppercase tracking-widest hover:scale-105 transition-transform">
              Call Miguel: 071 073 1235
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
