export const metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Research</h1>
      <p className="text-sm text-black/70 dark:text-white/70 mb-6">
        Skeleton overview of research areas and current projects
      </p>
      <ul className="space-y-3">
        {[
          "Area 1: Short description.",
          "Area 2: Short description.",
          "Area 3: Short description.",
        ].map((item) => (
          <li key={item} className="rounded-md border border-black/10 dark:border-white/10 p-4">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
