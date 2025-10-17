export const metadata = { title: "News" };

export default function NewsPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">News</h1>
      <ul className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <li key={i} className="rounded-md border border-black/10 dark:border-white/10 p-4">
            <p className="text-sm text-black/60 dark:text-white/60">YYYY-MM-DD</p>
            <p>Short news headline goes here.</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
