/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

import { Apple, BookOpen, Dumbbell, Workflow } from "lucide-react";
import { QuickAction, Task } from "../types/quickActions.types";

export const quickActions: QuickAction[] = [
  {
    icon: BookOpen,
    label: "Add Study",
    gradient: "from-blue-500 to-indigo-600",
    glow: "rgba(99,102,241,0.4)",
    accent: "bg-indigo-500",
  },
  {
    icon: Dumbbell,
    label: "Add Workout",
    gradient: "from-orange-500 to-red-500",
    glow: "rgba(249,115,22,0.4)",
    accent: "bg-orange-500",
  },
  {
    icon: Apple,
    label: "Log Meal",
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.4)",
    accent: "bg-emerald-500",
  },
  {
    icon: Workflow,
    label: "Add New Task",
    gradient: "from-cyan-500 to-blue-500",
    glow: "rgba(6,182,212,0.4)",
    accent: "bg-cyan-500",
  },
];

export const initialTasks: Task[] = [
  { id: 1, label: "Morning workout", done: true, time: "07:00 AM" },
  { id: 2, label: "Study session – React", done: true, time: "09:00 AM" },
  { id: 3, label: "Log breakfast", done: true, time: "08:30 AM" },
  { id: 4, label: "Study session – Algorithms", done: false, time: "02:00 PM" },
  { id: 5, label: "Evening walk", done: false, time: "06:00 PM" },
  { id: 6, label: "Log dinner", done: false, time: "07:30 PM" },
];
