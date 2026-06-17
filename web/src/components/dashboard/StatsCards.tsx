"use client";

import { motion } from "framer-motion";
import { Users, Activity, DollarSign, CheckSquare, TrendingUp, TrendingDown } from "lucide-react";

const stats = [
  {
    label: "Total Users",
    value: "124,891",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(139,92,246,0.3)",
    detail: "vs last month",
  },
  {
    label: "Active Users",
    value: "8,492",
    change: "+5.2%",
    trend: "up",
    icon: Activity,
    gradient: "from-blue-500 to-cyan-700",
    glow: "rgba(59,130,246,0.3)",
    detail: "online now",
  },
  {
    label: "Monthly Revenue",
    value: "$94,210",
    change: "+28.1%",
    trend: "up",
    icon: DollarSign,
    gradient: "from-emerald-500 to-teal-700",
    glow: "rgba(16,185,129,0.3)",
    detail: "vs last month",
  },
  {
    label: "Open Tasks",
    value: "342",
    change: "-8.4%",
    trend: "down",
    icon: CheckSquare,
    gradient: "from-orange-500 to-red-600",
    glow: "rgba(249,115,22,0.3)",
    detail: "need attention",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -2 }}
          className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 overflow-hidden cursor-pointer"
        >
          {/* Glow on hover */}
          <div
            className="absolute -top-4 -right-4 h-24 w-24 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle, ${stat.glow}, transparent)`,
              filter: "blur(20px)",
            }}
          />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div
                className={`h-10 w-10 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}
                style={{ boxShadow: `0 8px 24px ${stat.glow}` }}
              >
                <stat.icon className="h-5 w-5 text-white" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${stat.trend === "up" ? "text-emerald-400" : "text-red-400"}`}>
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3.5 w-3.5" />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5" />
                )}
                {stat.change}
              </div>
            </div>

            <p className="text-2xl font-bold text-white mb-0.5">{stat.value}</p>
            <p className="text-white/40 text-xs">{stat.label}</p>
            <p className="text-white/25 text-xs mt-0.5">{stat.detail}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
