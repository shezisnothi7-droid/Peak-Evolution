import { motion } from "motion/react";

export default function Results() {
  const caseStudies = [
    {
      name: "David R.",
      role: "Entrepreneur",
      problem: "Stagnant for 2 years, high stress, poor sleep.",
      process: "Implemented 1:1 Elite Coaching with focus on metabolic health and heavy compound lifting.",
      result: "-15kg Fat, +8kg Muscle, 220kg Deadlift.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Sarah L.",
      role: "CEO",
      problem: "Inconsistent training, generic gym burnout.",
      process: "12-Week Transformation focused on high-density training and precision nutrition.",
      result: "Visible abs for the first time, 2x bodyweight squat.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-[#0A0A0A] text-white pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-6xl font-bold uppercase italic mb-6 leading-none">
            The <span className="text-orange-600">Evidence.</span>
          </h1>
          <p className="text-xl text-neutral-400">
            We don't do "before and after" photos. We do identity shifts. These are the results of discipline and systems.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-24 mb-32">
          {caseStudies.map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="w-full md:w-1/2 aspect-[4/5] relative">
                <img 
                  src={study.image} 
                  alt={study.name} 
                  className="w-full h-full object-cover grayscale border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-600 p-8 hidden md:block">
                  <p className="text-2xl font-black italic uppercase leading-none">Proven.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Case Study: {study.name}</p>
                <h2 className="text-4xl font-bold uppercase italic mb-8">{study.role}</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs uppercase font-bold text-neutral-500 mb-2 tracking-widest">The Problem</h3>
                    <p className="text-xl text-neutral-300 font-light italic">"{study.problem}"</p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-neutral-500 mb-2 tracking-widest">The Process</h3>
                    <p className="text-neutral-400 leading-relaxed">{study.process}</p>
                  </div>
                  <div className="p-6 bg-[#141414] border-l-4 border-orange-600">
                    <h3 className="text-xs uppercase font-bold text-orange-600 mb-2 tracking-widest">The Result</h3>
                    <p className="text-2xl font-bold uppercase italic">{study.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="aspect-square bg-[#141414] overflow-hidden group border border-white/5">
              <img 
                src={`https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&seed=res-${i}`} 
                alt="Transformation" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
