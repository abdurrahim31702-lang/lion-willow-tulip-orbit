import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function BeforeAfter({ src, alt, className }: Props) {
  const [value, setValue] = useState(62);
  const wrap = useRef<HTMLDivElement>(null);

  return (
    <div ref={wrap} className={cn("relative overflow-hidden bg-charcoal", className)}>
      <img
        src={src}
        alt=""
        draggable={false}
        className="aspect-3/4 w-full object-cover opacity-90 saturate-50 contrast-75 brightness-75 sepia"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <img src={src} alt={alt} draggable={false} className="h-full w-full object-cover" />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-ivory"
        style={{ left: `${value}%` }}
        aria-hidden="true"
      />
      <label className="absolute inset-0 cursor-ew-resize">
        <span className="sr-only">Reveal demo composite</span>
        <input
          type="range"
          min={4}
          max={96}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </label>
      <div className="pointer-events-none absolute inset-x-4 top-4 flex justify-between">
        <span className="micro bg-ink/50 px-2 py-1 text-mist">Study</span>
        <span className="micro bg-ink/50 px-2 py-1 text-champagne">Refined</span>
      </div>
    </div>
  );
}
