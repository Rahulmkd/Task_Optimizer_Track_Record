"use client";

import { motion } from "framer-motion";

const weeklyData = [
  { day: "Mon", users: 42, revenue: 12400 },
  { day: "Tue", users: 68, revenue: 18200 },
  { day: "Wed", users: 55, revenue: 15600 },
  { day: "Thu", users: 90, revenue: 24100 },
  { day: "Fri", users: 78, revenue: 21300 },
  { day: "Sat", users: 35, revenue: 9800 },
  { day: "Sun", users: 29, revenue: 8100 },
];

const maxUsers = Math.max(...weeklyData.map((d) => d.users));
const maxRevenue = Math.max(...weeklyData.map((d) => d.revenue));

const activityTypes = [
  { label: "New registrations", percent: 78, color: "bg-violet-500" },
  { label: "Active sessions", percent: 64, color: "bg-blue-500" },
  { label: "API calls", percent: 91, color: "bg-emerald-500" },
  { label: "Failed logins", percent: 12, color: "bg-red-500" },
];

export function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Bar Chart */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-white font-semibold">Weekly Signups</h3>
            <p className="text-white/40 text-sm">New users per day</p>
          </div>
          <span className="text-xs text-violet-400 border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 rounded-full">
            This week
          </span>
        </div>

        <div className="flex items-end gap-2 h-40">
          {weeklyData.map((d, i) => (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-1.5">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(d.users / maxUsers) * 100}%` }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.6, ease: "easeOut" }}
                className="w-full rounded-t-md bg-gradient-to-t from-violet-600 to-violet-400 min-h-[4px] relative group cursor-pointer"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0f0f18] border border-white/10 rounded px-1.5 py-0.5 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {d.users} users
                </div>
              </motion.div>
              <span className="text-xs text-white/30">{d.day}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Activity Breakdown */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35 }}
        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-white font-semibold">Activity Breakdown</h3>
            <p className="text-white/40 text-sm">System metrics overview</p>
          </div>
          <span className="text-xs text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 rounded-full">
            Live
          </span>
        </div>

        <div className="space-y-5">
          {activityTypes.map((item, i) => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-white/60">{item.label}</span>
                <span className="text-sm font-medium text-white">{item.percent}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percent}%` }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                  className={`h-full rounded-full ${item.color}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Revenue line visualization */}
        <div className="mt-6 pt-6 border-t border-white/5">
          <p className="text-xs text-white/40 mb-3">Revenue trend (7 days)</p>
          <div className="flex items-end gap-1 h-12">
            {weeklyData.map((d, i) => (
              <motion.div
                key={d.day}
                initial={{ height: 0 }}
                animate={{ height: `${(d.revenue / maxRevenue) * 100}%` }}
                transition={{ delay: 0.7 + i * 0.04, duration: 0.5 }}
                className="flex-1 rounded-sm bg-gradient-to-t from-emerald-600 to-emerald-400 min-h-[4px]"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
