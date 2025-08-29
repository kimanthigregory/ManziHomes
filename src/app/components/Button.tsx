import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-block px-8 py-3 font-sans font-bold tracking-wide transition-all duration-300 ease-in-out transform hover:-translate-y-1";

  const variants = {
    primary: "bg-brand-gold text-white hover:bg-yellow-600",
    secondary: "bg-brand-green text-white hover:bg-green-800",
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
