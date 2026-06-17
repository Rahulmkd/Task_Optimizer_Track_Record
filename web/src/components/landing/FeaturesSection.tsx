"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Code2, Users, Lock, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, MFA, and advanced threat detection built in by default. Your users&apos; data is always protected.",
    gradient: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/20",
  },
  {
    icon: Zap,
    title: "Sub-100ms Auth",
    description: "Edge-optimized authentication powered by our global network. Zero latency, maximum reliability for every request.",
    gradient: "from-yellow-500 to-orange-600",
    glow: "shadow-yellow-500/20",
  },
  {
    icon: Code2,
    title: "Developer First",
    description: "Clean SDKs, intuitive APIs, and comprehensive docs. Go from zero to authenticated in under five minutes.",
    gradient: "from-blue-500 to-cyan-600",
    glow: "shadow-blue-500/20",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Roles, permissions, and SSO for your entire organization. Built for teams of any size, from startups to enterprise.",
    gradient: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/20",
  },
  {
    icon: Lock,
    title: "Zero Trust Model",
    description: "Every request verified, every session validated. Our zero-trust architecture ensures no implicit trust is ever granted.",
    gradient: "from-red-500 to-pink-600",
    glow: "shadow-red-500/20",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "300+ edge locations worldwide. Whether your users are in Tokyo or Toronto, they get the same blazing-fast experience.",
    gradient: "from-indigo-500 to-blue-600",
    glow: "shadow-indigo-500/20",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything you need,
            <br />
            <span className="text-gradient">nothing you don&apos;t.</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            A complete authentication platform that grows with your product, without the complexity.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden cursor-pointer"
            >
              {/* Hover glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-inner ${feature.glow}`}
                style={{ background: "radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)" }}
              />

              <div
                className={`h-12 w-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg ${feature.glow}`}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
