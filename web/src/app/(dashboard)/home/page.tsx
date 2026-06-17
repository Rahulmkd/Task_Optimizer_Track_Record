"use client";

import { motion } from "framer-motion";
import { DashboardShell } from "@/components/layouts/DashboardShell";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { ChartsSection } from "@/components/dashboard/ChartsSection";
import { ActivityTable } from "@/components/dashboard/ActivityTable";
import { useAppSelector } from "@/redux/hooks";

export default function HomePage() {
  const { user } = useAppSelector((state) => state.auth);

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <DashboardShell>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-white">
          {greeting},{" "}
          <span className="text-gradient">
            {user?.name?.split(" ")[0] || "there"}
          </span>{" "}
          👋
        </h1>
        <p className="text-white/40 text-sm mt-1">
          Here&apos;s what&apos;s happening with your platform today.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="mb-6">
        <StatsCards />
      </div>

      {/* Charts */}
      <div className="mb-6">
        <ChartsSection />
      </div>

      {/* Activity */}
      <ActivityTable />
    </DashboardShell>
  );
}
