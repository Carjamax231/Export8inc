"use client";

import { useState } from "react";

type IndustryCardProps = {
  id: string;
  title: string;
  description: string;
};

export default function IndustryCard({ id, title, description }: IndustryCardProps) {
  const [open, setOpen] = useState(false);

  const tooltipVisible =
    "opacity-100 translate-y-0";

  const tooltipHidden =
    "opacity-0 translate-y-1";

  return (
    <li
      className={`group relative list-none ${open ? "z-50" : "z-0"} hover:z-50 focus-within:z-50`}
    >
      <div
        tabIndex={0}
        role="button"
        aria-expanded={open}
        aria-describedby={`industry-tooltip-${id}`}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen((value) => !value);
          }
          if (event.key === "Escape") {
            setOpen(false);
          }
        }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setOpen(false);
          }
        }}
        className="relative cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg hover:ring-2 hover:ring-blue-600/15 focus:outline-none focus-visible:-translate-y-1 focus-visible:border-blue-300 focus-visible:bg-white focus-visible:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-600/15"
      >
        {title}

        <div
          id={`industry-tooltip-${id}`}
          role="tooltip"
          className={`pointer-events-none absolute bottom-[calc(100%+0.75rem)] left-1/2 z-50 w-72 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-lg bg-navy px-4 py-3.5 text-left text-xs font-normal leading-relaxed text-white/90 shadow-2xl shadow-navy/30 transition-all duration-300 ${
            open ? tooltipVisible : tooltipHidden
          } md:group-hover:translate-y-0 md:group-hover:opacity-100`}
        >
          <span
            className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-navy"
            aria-hidden
          />
          {description}
        </div>
      </div>
    </li>
  );
}
