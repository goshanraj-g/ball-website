import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Business Analytics Learning Lab</h1>
        <p className="text-black/70 dark:text-white/70 max-w-2xl">
          Mission Statement
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { href: "/research", title: "Research", desc: "Areas and projects" },
          { href: "/people", title: "People", desc: "Meet the team" },
          { href: "/publications", title: "Publications", desc: "Papers & preprints" },
          { href: "/news", title: "News", desc: "Updates and highlights" },
          { href: "/about", title: "About", desc: "Lab overview" },
          { href: "/contact", title: "Contact", desc: "How to reach us" },
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-md border border-black/10 dark:border-white/10 p-4 hover:bg-black/[.03] dark:hover:bg-white/[.04] transition"
          >
            <h2 className="font-medium">{card.title}</h2>
            <p className="text-sm text-black/60 dark:text-white/60">{card.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
