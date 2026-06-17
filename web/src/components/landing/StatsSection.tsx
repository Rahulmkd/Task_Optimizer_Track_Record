"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounter({ target, prefix = "", suffix = "", decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const isInView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => {
          setDisplayed(v.toFixed(decimals));
        },
      });
      return controls.stop;
    }
  }, [isInView, target, count, decimals]);

  return (
    <span ref={ref}>
      {prefix}{displayed}{suffix}
    </span>
  );
}

const stats = [
  { label: "Developers", value: 50, suffix: "k+", prefix: "" },
  { label: "Auth requests/day", value: 2.4, suffix: "B", prefix: "", decimals: 1 },
  { label: "Uptime SLA", value: 99.99, suffix: "%", prefix: "", decimals: 2 },
  { label: "Countries", value: 180, suffix: "+", prefix: "" },
];

export function StatsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.1) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-white mb-1">
                  <AnimatedCounter
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </p>
                <p className="text-white/40 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
