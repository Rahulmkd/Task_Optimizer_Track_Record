/* -------------------------------------------------------------------------- */
/*                           NEW ACTION MODAL                                 */
/* -------------------------------------------------------------------------- */

import { useEffect, useRef, useState } from "react";
import { Backdrop } from "./Backdrop";
import { Sparkles, X } from "lucide-react";
import { ModalPanel } from "./ModalPanel";
import { FormField } from "@/components/shared/FormField";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewActionModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 90);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSave = () => {
    if (!name.trim()) return;
    // TODO: persist new action
    onClose();
  };

  return (
    <Backdrop onClick={onClose}>
      <ModalPanel>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-violet-400" />
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold leading-none">
                Create New Action
              </h3>
              <p className="text-white/40 text-xs mt-1">
                Add a custom quick-log button
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="h-8 w-8 rounded-lg bg-white/[0.05] hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
          >
            <X className="h-3.5 w-3.5 text-white/60" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <FormField id="na-name" label="Action name" required>
            <Input
              ref={inputRef}
              id="na-name"
              placeholder="e.g. Log Meditation"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
            />
          </FormField>

          <div className="flex gap-3 pt-1">
            <Button variant="outline" className="flex-1 h-11" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="gradient"
              className="flex-1 h-11"
              onClick={handleSave}
              disabled={!name.trim()}
            >
              Create action
            </Button>
          </div>
        </div>
      </ModalPanel>
    </Backdrop>
  );
}
