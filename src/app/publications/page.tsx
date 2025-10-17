export const metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Publications</h1>
      <p className="text-sm text-black/70 dark:text-white/70 mb-6">
        Skeleton list of publications (e.g., by year).
      </p>
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <article key={i} className="rounded-md border border-black/10 dark:border-white/10 p-4">
            <h2 className="font-medium">Paper Title {i + 1}</h2>
            <p className="text-sm text-black/60 dark:text-white/60">
              Authors • Venue • Year
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
