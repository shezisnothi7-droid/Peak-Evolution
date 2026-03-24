import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Programs({ onNavigate }: { onNavigate: (page: string) => void }) {
  const programs = [
    {
      id: "coaching",
      title: "1:1 Elite Coaching",
      who: "Ambitious professionals and high performers who need a bespoke roadmap.",
      features: [
        "Customized Training Macro-cycles",
        "Personalized Nutrition & Supplementation",
        "Weekly 1:1 Strategy Calls",
        "Daily Metric Tracking & Adjustments",
        "Priority Access to Marcus Thorne"
      ],
      results: "Peak physique, optimized energy levels, and elite mental clarity.",
      duration: "Ongoing (Minimum 3-month commitment)",
      price: "Premium"
    },
    {
      id: "group",
      title: "Group Performance",
      who: "Driven individuals who thrive in a high-stakes, competitive environment.",
      features: [
        "Structured Strength & Conditioning",
        "Small Group Sizes (Max 8)",
        "Monthly Body Composition Scans",
        "Nutrition Guidelines & Support",
        "Community Accountability"
      ],
      results: "Significant strength gains, improved conditioning, and team discipline.",
      duration: "Monthly Membership",
      price: "Standard"
    },
    {
      id: "transformation",
      title: "12-Week Evolution",
      who: "Those ready for a radical shift in physique and identity.",
      features: [
        "Intensive 12-Week Blueprint",
        "Aggressive Body Recomposition",
        "Mindset & Discipline Workshops",
        "Before/After Professional Shoot",
        "Guaranteed Measurable Results"
      ],
      results: "Complete physical overhaul and a permanent shift in habits.",
      duration: "12 Weeks",
      price: "Fixed Program"
    }
  ];

  return (
    <div className="bg-[#0A0A0A] text-white pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-6xl font-bold uppercase italic mb-6 leading-none">
            Elite <span className="text-orange-600">Systems.</span>
          </h1>
          <p className="text-xl text-neutral-400">
            We don't sell gym memberships. We sell the systems that produce elite results. Choose your path.
          </p>
        </div>

        <div className="space-y-1">
          {programs.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#141414] border border-white/5 p-8 md:p-16 grid lg:grid-cols-12 gap-12 items-start"
            >
              <div className="lg:col-span-5">
                <p className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Program {i + 1}</p>
                <h2 className="text-4xl md:text-5xl font-bold uppercase italic mb-6 leading-tight">{p.title}</h2>
                <p className="text-xl text-neutral-300 mb-8 font-light italic">"For {p.who}"</p>
                <div className="space-y-4 mb-10">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-neutral-500 uppercase text-xs font-bold">Duration</span>
                    <span className="font-bold">{p.duration}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-neutral-500 uppercase text-xs font-bold">Expected Result</span>
                    <span className="font-bold">{p.results}</span>
                  </div>
                </div>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 font-bold uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  Apply for this program
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="lg:col-span-7 bg-black/30 p-8 md:p-12 border border-white/5">
                <h3 className="text-xs uppercase font-bold text-neutral-500 mb-8 tracking-[0.2em]">What's Included</h3>
                <ul className="grid md:grid-cols-2 gap-6">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                      <span className="text-neutral-300 font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
