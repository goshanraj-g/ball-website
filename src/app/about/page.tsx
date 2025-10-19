export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-8 py-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">About BALL</h1>
        <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed">
          Lab mission, overview, background
        </p>
      </div>
      
      <div className="space-y-6 pt-6">
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p className="text-black/70 dark:text-white/70 leading-relaxed">
            Description of the lab's mission and core values.
          </p>
        </div>
        
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
          <h2 className="text-xl font-semibold mb-3">What We Do</h2>
          <p className="text-black/70 dark:text-white/70 leading-relaxed">
            Overview of research areas and teaching activities.
          </p>
        </div>
        
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
          <h2 className="text-xl font-semibold mb-3">Our History</h2>
          <p className="text-black/70 dark:text-white/70 leading-relaxed">
            Background and founding story of the lab.
          </p>
        </div>
      </div>
    </section>
  );
}
