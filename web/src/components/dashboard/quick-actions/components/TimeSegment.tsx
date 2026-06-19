export function TimeSegment({
  value,
  onUp,
  onDown,
  pad = false,
}: {
  value: number;
  onUp: () => void;
  onDown: () => void;
  pad?: boolean;
}) {
  return (
    <div className="flex flex-col items-center group select-none">
      <button
        type="button"
        onClick={onUp}
        className="h-4 w-7 flex items-center justify-center text-white/20 hover:text-white/70 transition-colors text-[10px] leading-none"
        aria-label="increment"
      >
        ▲
      </button>
      <span className="text-white font-semibold text-sm w-7 text-center tabular-nums">
        {pad ? String(value).padStart(2, "0") : value}
      </span>
      <button
        type="button"
        onClick={onDown}
        className="h-4 w-7 flex items-center justify-center text-white/20 hover:text-white/70 transition-colors text-[10px] leading-none"
        aria-label="decrement"
      >
        ▼
      </button>
    </div>
  );
}
