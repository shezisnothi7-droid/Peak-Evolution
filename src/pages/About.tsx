import { motion } from "motion/react";

export default function About() {
  return (
    <div className="bg-[#0A0A0A] text-white pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold uppercase italic mb-12 leading-none">
              The <span className="text-orange-600">Standard.</span>
            </h1>
            
            <div className="aspect-video mb-16 relative">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym Interior" 
                className="w-full h-full object-cover grayscale brightness-50 border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white/20">Peak Evolution</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 mb-24">
              <div>
                <h2 className="text-2xl font-bold uppercase italic mb-6 text-orange-600">Our Origin</h2>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Peak Evolution was founded in 2015 with a single mission: to provide a high-performance environment for those who are serious about their evolution. 
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  We saw a fitness industry filled with generic advice, low standards, and a lack of accountability. We decided to build the opposite. A place where science meets sweat, and where results are the only currency that matters.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold uppercase italic mb-6 text-orange-600">What Makes Us Different</h2>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  We don't just train bodies; we build systems. Our approach is rooted in athletic performance, metabolic health, and cognitive optimization. 
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  When you join Peak Evolution, you aren't just getting a coach. You're getting a performance partner dedicated to your success.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-24">
              <h2 className="text-4xl font-bold uppercase italic mb-16 text-center">Core Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Discipline", desc: "Doing what needs to be done, especially when you don't feel like it." },
                  { title: "Consistency", desc: "The compounding effect of elite habits over time." },
                  { title: "Accountability", desc: "Owning your results and your failures without excuse." },
                  { title: "Performance", desc: "Optimizing every aspect of your life for peak output." }
                ].map((value, i) => (
                  <div key={i} className="text-center">
                    <h3 className="text-2xl font-bold uppercase italic mb-4 text-orange-600">{value.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
