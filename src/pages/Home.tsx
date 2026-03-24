import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Shield, Zap, Target, Users, Trophy } from "lucide-react";

export default function Home({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Elite Gym" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-6 uppercase italic">
              Break Plateaus. <br />
              <span className="text-orange-600">Achieve Peak.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl font-light">
              We help driven individuals achieve elite physical and mental performance through structured coaching and proven systems. No fluff. Just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group"
              >
                Book Your Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('results')}
                className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 text-lg font-bold uppercase tracking-widest transition-all"
              >
                View Transformations
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-[#0F0F0F] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase italic mb-8 leading-tight">
                The Frustration of <br />
                <span className="text-neutral-500">Generic Fitness.</span>
              </h2>
              <p className="text-lg text-neutral-400 mb-8">
                Most gyms sell access to equipment. We sell outcomes. If you're tired of training without seeing the mirror change, or feeling like you've hit a wall you can't climb, you're in the right place.
              </p>
              <ul className="space-y-4">
                {[
                  "Training hard but seeing zero measurable progress",
                  "Lack of structure and a clear roadmap",
                  "Inconsistent motivation and low accountability",
                  "Generic programs that don't account for your lifestyle"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-300">
                    <Zap className="w-5 h-5 text-orange-600 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" 
                alt="Intense Workout" 
                className="w-full h-full object-cover grayscale brightness-50 border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-600 p-8 hidden md:block">
                <p className="text-4xl font-black italic uppercase leading-none">Stop <br /> Guessing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-bold uppercase italic mb-6">The Peak Evolution System</h2>
            <p className="text-xl text-neutral-400">
              A scientific approach to transformation. We don't just give you a workout; we provide the blueprint for elite performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10 text-orange-600" />,
                title: "Structured Programming",
                desc: "Every rep, set, and session is planned with one goal: your specific outcome."
              },
              {
                icon: <Shield className="w-10 h-10 text-orange-600" />,
                title: "Elite Accountability",
                desc: "You aren't just a number. We track your metrics daily to ensure you never slip."
              },
              {
                icon: <Zap className="w-10 h-10 text-orange-600" />,
                title: "Performance Tracking",
                desc: "Measurable data across strength, body composition, and recovery."
              }
            ].map((feature, i) => (
              <div key={i} className="p-10 bg-[#141414] border border-white/5 hover:border-orange-600/50 transition-colors">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold uppercase mb-4 italic">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-orange-600 text-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <h2 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.8]">
              Real <br /> Results.
            </h2>
            <p className="text-xl font-bold max-w-md">
              We don't do "participation trophies." We do transformations that command respect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[3/4] bg-black/20 relative group overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&seed=${i}`} 
                  alt="Transformation" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-bold uppercase italic">Client Transformation #{i}</p>
                  <p className="text-orange-400 text-sm">-12kg Fat | +5kg Muscle</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-1">
            {[
              {
                title: "1:1 Coaching",
                for: "The High Performer",
                desc: "Complete bespoke programming and nutrition for those who demand the absolute best.",
                cta: "Apply Now"
              },
              {
                title: "Group Training",
                for: "The Driven Collective",
                desc: "High-intensity, results-focused group sessions with elite coaching standards.",
                cta: "Join The Team"
              },
              {
                title: "12-Week Transformation",
                for: "The Committed",
                desc: "Our flagship system designed to completely overhaul your physique and mindset.",
                cta: "Start Journey"
              }
            ].map((program, i) => (
              <div key={i} className="bg-[#141414] p-12 border border-white/5 flex flex-col justify-between hover:bg-[#1A1A1A] transition-colors group">
                <div>
                  <p className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">{program.for}</p>
                  <h3 className="text-4xl font-bold uppercase italic mb-6">{program.title}</h3>
                  <p className="text-neutral-400 mb-10 text-lg">{program.desc}</p>
                </div>
                <button 
                  onClick={() => onNavigate('programs')}
                  className="w-full py-4 border border-white/20 group-hover:bg-white group-hover:text-black transition-all font-bold uppercase tracking-widest"
                >
                  {program.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-24 bg-[#0F0F0F]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1507398941214-57f196f5bb35?q=80&w=1973&auto=format&fit=crop" 
                  alt="Founder" 
                  className="w-full aspect-[4/5] object-cover grayscale border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-bold uppercase italic mb-6">Built on Discipline.</h2>
                <p className="text-xl text-neutral-300 mb-6 italic font-light">
                  "Peak Evolution wasn't built for the average. It was built for those who know they are capable of more but lack the system to get there."
                </p>
                <p className="text-neutral-400 mb-8">
                  Founded by Marcus Thorne, Peak Evolution exists to bridge the gap between effort and results. We combine elite athletic principles with modern performance science to help you evolve.
                </p>
                <div className="flex gap-8">
                  <div>
                    <p className="text-3xl font-bold text-orange-600">10+</p>
                    <p className="text-xs uppercase text-neutral-500 font-bold">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-orange-600">500+</p>
                    <p className="text-xs uppercase text-neutral-500 font-bold">Transformations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-600" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-6xl md:text-9xl font-black text-black uppercase italic mb-8 leading-none">
            Ready to <br /> Evolve?
          </h2>
          <p className="text-2xl text-black/80 font-bold mb-12 max-w-2xl mx-auto">
            Stop wasting time in generic gyms. Book your strategy call today and let's build your elite physique.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-black text-white px-12 py-6 text-2xl font-black uppercase tracking-tighter hover:scale-105 transition-transform"
          >
            Book Your Consultation Now
          </button>
        </div>
      </section>
    </div>
  );
}
