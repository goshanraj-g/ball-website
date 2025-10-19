import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-12 py-8">
      {/* Hero Section */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-4xl font-bold tracking-tight">
          Business Analytics Learning Lab
        </h1>
        <p className="text-3xl text-black/60 dark:text-white/60 leading-relaxed">
          Mission Statement
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto pt-8">
        {[
          { 
            href: "/research", 
            title: "Research", 
            desc: "Explore our areas of focus and current projects",
            icon: "📊"
          },
          { 
            href: "/people", 
            title: "People", 
            desc: "Meet our talented team of researchers and students",
            icon: "👥"
          },
          { 
            href: "/about", 
            title: "About", 
            desc: "Learn about our mission, vision, and history",
            icon: "ℹ️"
          },
          { 
            href: "/join-us", 
            title: "Join Us", 
            desc: "Interested in joining our lab? Start here",
            icon: "🚀"
          },
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group relative rounded-xl border border-black/10 dark:border-white/20 p-6 hover:border-black/30 dark:hover:border-white/40 hover:shadow-lg transition-all duration-200 bg-white/50 dark:bg-white/5"
          >
            <div className="space-y-3">
              <div className="text-3xl">{card.icon}</div>
              <h2 className="text-xl font-semibold group-hover:text-black dark:group-hover:text-white transition-colors">
                {card.title}
              </h2>
              <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                {card.desc}
              </p>
            </div>
            <div className="absolute bottom-6 right-6 text-black/20 dark:text-white/20 group-hover:text-black/40 dark:group-hover:text-white/40 transition-all group-hover:translate-x-1">
              →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
