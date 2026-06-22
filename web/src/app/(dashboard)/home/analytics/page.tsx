"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";
import { DashboardShell } from "@/components/layouts/DashboardShell";

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-violet-400" />
            Analytics
          </h1>
          <p className="text-white/40 text-sm mt-1">
            Deep dive into your platform&apos;s performance metrics.
          </p>
        </div>
        <span className="text-xs text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <TrendingUp className="h-3.5 w-3.5" />
          Updated 2 min ago
        </span>
      </motion.div>
    </DashboardShell>
  );
}
