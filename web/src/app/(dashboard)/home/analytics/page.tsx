"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Globe, Smartphone, Monitor, Tablet } from "lucide-react";
import { DashboardShell } from "@/components/layouts/DashboardShell";
import { ChartsSection } from "@/components/dashboard/ChartsSection";

const deviceBreakdown = [
  { label: "Desktop", percent: 58, icon: Monitor, color: "bg-violet-500" },
  { label: "Mobile", percent: 32, icon: Smartphone, color: "bg-blue-500" },
  { label: "Tablet", percent: 10, icon: Tablet, color: "bg-emerald-500" },
];

const topCountries = [
  { name: "United States", users: "42,891", percent: 34 },
  { name: "United Kingdom", users: "18,204", percent: 15 },
  { name: "Germany", users: "14,572", percent: 12 },
  { name: "India", users: "12,830", percent: 10 },
  { name: "Canada", users: "9,442", percent: 8 },
];

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

      <div className="mb-6">
        <ChartsSection />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Device breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
        >
          <h3 className="text-white font-semibold mb-1">Device Breakdown</h3>
          <p className="text-white/40 text-sm mb-6">Traffic by device type</p>

          <div className="space-y-5">
            {deviceBreakdown.map((device, i) => (
              <div key={device.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-white/60 flex items-center gap-2">
                    <device.icon className="h-4 w-4 text-white/40" />
                    {device.label}
                  </span>
                  <span className="text-sm font-medium text-white">{device.percent}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${device.percent}%` }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                    className={`h-full rounded-full ${device.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top countries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
        >
          <h3 className="text-white font-semibold mb-1 flex items-center gap-2">
            <Globe className="h-4 w-4 text-violet-400" />
            Top Countries
          </h3>
          <p className="text-white/40 text-sm mb-6">By active user count</p>

          <div className="space-y-3">
            {topCountries.map((country, i) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.06 }}
                className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
              >
                <span className="text-sm text-white/70">{country.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-white/40 font-mono">{country.users}</span>
                  <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">
                    {country.percent}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardShell>
  );
}
