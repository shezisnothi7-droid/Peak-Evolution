import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const articles = [
    {
      title: "Why Most People Never See Results in the Gym",
      category: "Performance",
      date: "Mar 15, 2026",
      excerpt: "The hard truth about generic programming and why your effort isn't translating to outcomes.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "The Discipline Blueprint for High Performers",
      category: "Mindset",
      date: "Mar 10, 2026",
      excerpt: "How to structure your life for consistency when your schedule is demanding.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "How to Break Through Fitness Plateaus",
      category: "Training",
      date: "Mar 05, 2026",
      excerpt: "The science of progressive overload and metabolic adaptation.",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-[#0A0A0A] text-white pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-6xl font-bold uppercase italic mb-6 leading-none">
            Peak <span className="text-orange-600">Insights.</span>
          </h1>
          <p className="text-xl text-neutral-400">
            Authoritative guides on performance, nutrition, and the mindset of elite evolution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video mb-6 overflow-hidden border border-white/10">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-orange-600 text-xs font-bold uppercase tracking-widest">{article.category}</span>
                  <span className="text-neutral-500 text-xs font-bold uppercase">{article.date}</span>
                </div>
                <h2 className="text-2xl font-bold uppercase italic leading-tight group-hover:text-orange-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-white font-bold uppercase text-xs tracking-widest pt-4 group-hover:gap-4 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4 text-orange-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
