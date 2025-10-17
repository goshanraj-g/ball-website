export default function Footer() {
  return (
    <footer className="mt-12 border-t border-black/10 dark:border-white/10">
      <div className="container mx-auto max-w-5xl px-4 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} Business Analytics Learning Lab. All rights reserved.
        </p>
        <p className="text-black/60 dark:text-white/60">
          McMaster University • Hamilton, Ontario, Canada
        </p>
      </div>
    </footer>
  );
}
