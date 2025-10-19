export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10 bg-black/[.02] dark:bg-white/[.02]">
      <div className="container mx-auto max-w-6xl px-6 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-medium">
          © {new Date().getFullYear()} Business Analytics Learning Lab
        </p>
        <p className="text-black/60 dark:text-white/60">
          McMaster University • Hamilton, Ontario, Canada
        </p>
      </div>
    </footer>
  );
}
