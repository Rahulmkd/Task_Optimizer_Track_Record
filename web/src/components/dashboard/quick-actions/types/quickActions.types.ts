/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export interface QuickAction {
  icon: React.ElementType;
  label: string;
  gradient: string;
  glow: string;
  accent: string; // single colour for the icon bg in the modal header
}

export interface Task {
  id: string | number;
  label: string;
  done: boolean;
  time: string;
}
