import { CheckCircle2, Circle, Clock } from "lucide-react";
import { Task } from "../types/quickActions.types";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TaskRow({
  task,
  index,
  onToggle,
}: {
  task: Task;
  index: number;
  onToggle: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.18 + index * 0.045, ease: [0.16, 1, 0.3, 1] }}
      onClick={onToggle}
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.05] active:bg-white/[0.08] transition-colors text-left group"
    >
      {/* Checkbox */}
      <motion.div
        animate={task.done ? { scale: [1, 1.22, 1] } : { scale: 1 }}
        transition={{ duration: 0.28 }}
      >
        {task.done ? (
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 drop-shadow-[0_0_7px_rgba(52,211,153,0.55)]" />
        ) : (
          <Circle className="h-5 w-5 text-white/20 shrink-0 group-hover:text-white/35 transition-colors" />
        )}
      </motion.div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p
          className={cn(
            "text-sm font-medium truncate transition-colors",
            task.done
              ? "line-through text-white/25"
              : "text-white/75 group-hover:text-white",
          )}
        >
          {task.label}
        </p>
        <p className="flex items-center gap-1 text-xs text-white/25 mt-0.5">
          <Clock className="h-3 w-3" />
          {task.time}
        </p>
      </div>

      {/* Done pill */}
      <AnimatePresence>
        {task.done && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            className="shrink-0 text-[10px] font-semibold tracking-wide text-emerald-400/80 border border-emerald-500/20 bg-emerald-500/8 px-2 py-0.5 rounded-full"
          >
            Done
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
