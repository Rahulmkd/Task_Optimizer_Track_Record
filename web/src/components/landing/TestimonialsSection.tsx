"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "NexusAuth reduced our authentication setup from two weeks to under a day. The developer experience is unlike anything else we've used.",
    author: "Sarah Chen",
    role: "CTO at Momentum",
    avatar: "SC",
    gradient: "from-violet-500 to-purple-600",
    stars: 5,
  },
  {
    text: "We handle 40 million users and NexusAuth has never once been the bottleneck. The reliability and speed are genuinely impressive.",
    author: "Marcus Okafor",
    role: "VP Engineering at Flowio",
    avatar: "MO",
    gradient: "from-blue-500 to-cyan-600",
    stars: 5,
  },
  {
    text: "After our security audit, the reviewers specifically called out NexusAuth as a best-practice implementation. That says everything.",
    author: "Emma Hartmann",
    role: "Security Lead at Prismatic",
    avatar: "EH",
    gradient: "from-emerald-500 to-teal-600",
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Loved by engineering
            <br />
            <span className="text-gradient">teams everywhere.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote className="h-6 w-6 text-violet-400/50 mb-3" />

              <p className="text-white/70 leading-relaxed mb-6 text-sm">
                {t.text}
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`h-10 w-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{t.author}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
