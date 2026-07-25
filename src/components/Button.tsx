import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Link>;

export default function Button({
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`group relative inline-flex items-center justify-center overflow-hidden border border-primary bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 ${className}`}
      {...props}
    >
      <span className="absolute inset-0 translate-x-full bg-accent transition-transform duration-300 ease-out [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] group-hover:translate-x-0" />
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
