"use client";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/people", label: "People" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Business Analytics Learning Lab
        </Link>
        <nav className="flex gap-4 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline underline-offset-4">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
