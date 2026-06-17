"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, AlertCircle, Clock } from "lucide-react";

const activities = [
  {
    user: "sarah.chen@acme.co",
    action: "User login",
    status: "success",
    location: "San Francisco, US",
    time: "2 min ago",
    ip: "192.168.1.42",
  },
  {
    user: "m.okafor@startup.io",
    action: "Password changed",
    status: "success",
    location: "Lagos, NG",
    time: "8 min ago",
    ip: "10.0.1.15",
  },
  {
    user: "unknown@attempt.com",
    action: "Failed login (3x)",
    status: "error",
    location: "Unknown",
    time: "15 min ago",
    ip: "45.33.32.156",
  },
  {
    user: "emma.h@prismatic.dev",
    action: "API key created",
    status: "success",
    location: "Berlin, DE",
    time: "1 hr ago",
    ip: "172.16.0.8",
  },
  {
    user: "j.smith@corp.com",
    action: "MFA enabled",
    status: "success",
    location: "New York, US",
    time: "2 hr ago",
    ip: "192.168.0.100",
  },
  {
    user: "alex.dev@tech.co",
    action: "OAuth token refresh",
    status: "pending",
    location: "Toronto, CA",
    time: "3 hr ago",
    ip: "198.51.100.23",
  },
  {
    user: "priya.k@saas.app",
    action: "Account deactivated",
    status: "warning",
    location: "Mumbai, IN",
    time: "5 hr ago",
    ip: "203.0.113.7",
  },
];

const statusConfig = {
  success: { icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-400/10", label: "Success" },
  error: { icon: XCircle, color: "text-red-400", bg: "bg-red-400/10", label: "Failed" },
  warning: { icon: AlertCircle, color: "text-yellow-400", bg: "bg-yellow-400/10", label: "Warning" },
  pending: { icon: Clock, color: "text-blue-400", bg: "bg-blue-400/10", label: "Pending" },
};

export function ActivityTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
    >
      <div className="flex items-center justify-between p-6 border-b border-white/5">
        <div>
          <h3 className="text-white font-semibold">Recent Activity</h3>
          <p className="text-white/40 text-sm">Authentication events log</p>
        </div>
        <button className="text-xs text-violet-400 hover:text-violet-300 transition-colors border border-violet-500/30 rounded-lg px-3 py-1.5">
          View all logs →
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left px-6 py-3 text-xs text-white/30 font-medium uppercase tracking-wider">User</th>
              <th className="text-left px-6 py-3 text-xs text-white/30 font-medium uppercase tracking-wider">Event</th>
              <th className="text-left px-6 py-3 text-xs text-white/30 font-medium uppercase tracking-wider hidden md:table-cell">Location</th>
              <th className="text-left px-6 py-3 text-xs text-white/30 font-medium uppercase tracking-wider hidden lg:table-cell">IP Address</th>
              <th className="text-left px-6 py-3 text-xs text-white/30 font-medium uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-3 text-xs text-white/30 font-medium uppercase tracking-wider">Time</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, i) => {
              const status = statusConfig[activity.status as keyof typeof statusConfig];
              return (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.04 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <p className="text-white/70 text-sm font-mono truncate max-w-[160px]">
                      {activity.user}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-white/60 text-sm">{activity.action}</p>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <p className="text-white/40 text-sm">{activity.location}</p>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <p className="text-white/30 text-sm font-mono">{activity.ip}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full ${status.bg} ${status.color}`}>
                      <status.icon className="h-3 w-3" />
                      {status.label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-white/30 text-xs">{activity.time}</p>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
