/* -------------------------------------------------------------------------- */
/* TASK SUMMARY MODAL                                                         */
/* -------------------------------------------------------------------------- */

import { useEffect, useRef, useState } from "react";
import { Backdrop } from "./Backdrop";
import { Sparkles, X } from "lucide-react";
import { ModelPanel } from "./ModelPanel";
import { FormField } from "@/components/shared/FormField";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function TaskSummaryModel({ onClose }: { onClose: () => void }) {
  const [summary, setSummary] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 90);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  const demoSummaries = [
    "Today you completed multiple high-priority tasks, collaborated with team members, and resolved outstanding issues. Overall progress remained on track and productivity was strong.",

    "Successfully finished development work, reviewed pending tasks, and organized upcoming priorities. Key milestones were achieved while maintaining quality and consistency.",

    "Focused on planning, execution, and follow-up activities. Progress was made across several objectives, and blockers were identified and addressed efficiently.",

    "Completed assigned responsibilities, participated in discussions, and improved workflow efficiency. The day concluded with meaningful progress toward project goals.",

    "Maintained steady momentum throughout the day by completing tasks, responding to updates, and preparing for upcoming deliverables. Overall performance was productive and well-organized.",
  ];

  const handleGenerate = async () => {
    setError(null);
    setIsGenerating(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const randomSummary =
        demoSummaries[Math.floor(Math.random() * demoSummaries.length)];

      setSummary(randomSummary);
    } catch {
      setError("Couldn't generate the summary. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Backdrop onClick={onClose}>
      <ModelPanel>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-violet-400" />
            </div>

            <div>
              <h3 className="text-white text-sm font-semibold leading-none">
                Generate Summary with AI
              </h3>
              <p className="text-white/40 text-xs mt-1">
                Generate a demo task summary
              </p>
            </div>
          </div>

          <button
            aria-label="Close modal"
            onClick={onClose}
            className="h-8 w-8 rounded-lg bg-white/[0.05] hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
          >
            <X className="h-3.5 w-3.5 text-white/60" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <FormField id="summary" label="Generated Summary">
            <Textarea
              ref={inputRef}
              id="summary"
              rows={6}
              placeholder="Click 'Generate Summary' to create a demo summary..."
              value={summary}
              onChange={(e) => {
                setSummary(e.target.value);

                if (error) {
                  setError(null);
                }
              }}
            />
          </FormField>

          {error && <p className="text-xs font-medium text-red-400">{error}</p>}

          {/* Footer */}
          <div className="flex gap-3 pt-1">
            <Button
              variant="outline"
              className="flex-1 h-11"
              onClick={onClose}
              disabled={isGenerating}
            >
              Cancel
            </Button>

            <Button
              variant="gradient"
              className="flex-1 h-11"
              onClick={handleGenerate}
              loading={isGenerating}
              disabled={isGenerating}
            >
              {isGenerating ? "Generating..." : "Generate Summary"}
            </Button>
          </div>
        </div>
      </ModelPanel>
    </Backdrop>
  );
}
