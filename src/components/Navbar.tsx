"use client";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/people", label: "People" },
  { href: "/research", label: "Research" },
  { href: "/join-us", label: "Join us" },
];

export default function Navbar() {
  return (
    <header className="border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity">
          BALL
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="hover:text-black dark:hover:text-white text-black/70 dark:text-white/70 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
