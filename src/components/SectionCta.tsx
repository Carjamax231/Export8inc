import type { ReactNode } from "react";

type SectionCtaProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "outline";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20",
  light: "bg-white text-navy hover:bg-slate-100 shadow-md shadow-black/10",
  outline:
    "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
};

export default function SectionCta({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: SectionCtaProps) {
  const isExternal = external || href.startsWith("http");

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300 ${variants[variant]} ${className}`}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
