export const metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <section className="max-w-4xl mx-auto space-y-8 py-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Research</h1>
        <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed">
          Explore our research areas and current projects
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 pt-6">
        {[
          { 
            title: "Research Area 1", 
            desc: "Short description of this research area and its key objectives.",
            icon: "🔬"
          },
          { 
            title: "Research Area 2", 
            desc: "Short description of this research area and its key objectives.",
            icon: "📈"
          },
          { 
            title: "Research Area 3", 
            desc: "Short description of this research area and its key objectives.",
            icon: "💡"
          },
        ].map((item) => (
          <div 
            key={item.title} 
            className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5 hover:border-black/20 dark:hover:border-white/20 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">{item.icon}</div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-black/70 dark:text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
