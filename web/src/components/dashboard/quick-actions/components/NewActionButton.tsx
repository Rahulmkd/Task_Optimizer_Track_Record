/* -------------------------------------------------------------------------- */
/* ACTION BUTTON CARD                            */
/* -------------------------------------------------------------------------- */

import { motion } from "framer-motion";
import { QuickAction } from "../types/quickActions.types";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

export function NewActionButton({
  action,
  index,
  onClick,
}: {
  action: QuickAction;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -3,
        scale: 1.02,
        boxShadow: `0 8px 32px ${action.glow}, 0 0 0 1px rgba(255,255,255,0.12)`,
      }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={cn(
        "group relative flex flex-col gap-3 p-3.5 rounded-xl text-white text-sm overflow-hidden text-left",
        "bg-linear-to-br transition-all duration-300 w-full",
        action.gradient,
      )}
      style={{
        boxShadow: `0 2px 12px rgba(0,0,0,0.3)`,
      }}
    >
      {/* Noise / shimmer sweep */}
      <span
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-linear-to-br from-white/0 via-white/0.08 to-white/0",
          "translate-y-4 group-hover:translate-y-0 transition-transform duration-500",
        )}
      />

      {/* Icon */}
      <div className="relative z-10 h-8 w-8 rounded-lg bg-white/20 border border-white/20 flex items-center justify-center shadow-inner">
        <action.icon className="h-4 w-4 text-white" />
      </div>

      {/* Label + plus */}
      <div className="relative z-10 flex items-end justify-between mt-auto pt-1 w-full">
        <span className="font-semibold leading-tight text-[13px] tracking-tight truncate pr-1">
          {action.label}
        </span>
        <Plus className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-300 shrink-0" />
      </div>
    </motion.button>
  );
}
