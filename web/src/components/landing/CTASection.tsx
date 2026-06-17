"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-violet-500/20 overflow-hidden p-16"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.15) 0%, rgba(10,10,15,0.8) 60%)",
          }}
        >
          {/* Background orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-20 animate-pulse-glow"
            style={{ background: "radial-gradient(circle, #8b5cf6, transparent)", filter: "blur(60px)" }}
          />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-15 animate-pulse-glow"
            style={{ background: "radial-gradient(circle, #3b82f6, transparent)", filter: "blur(60px)", animationDelay: "1.5s" }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.1 }}
              className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 mb-6 mx-auto shadow-lg shadow-violet-500/30"
            >
              <Sparkles className="h-8 w-8 text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Ready to ship
              <br />
              <span className="text-gradient">faster?</span>
            </h2>

            <p className="text-white/50 text-xl mb-10 max-w-xl mx-auto">
              Join 50,000+ developers who chose NexusAuth to secure their apps. 
              Free forever for small teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="gradient" size="xl" className="group font-semibold">
                <Link href="/register">
                  Get started free
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="font-semibold">
                <Link href="/login">
                  Sign in
                </Link>
              </Button>
            </div>

            <p className="text-white/25 text-sm mt-6">
              No credit card required · 5 minute setup · Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
