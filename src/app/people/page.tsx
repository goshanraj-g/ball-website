export const metadata = { title: "People" };

export default function PeoplePage() {
  return (
    <section className="max-w-5xl mx-auto space-y-8 py-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">People</h1>
        <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed">
          Meet our talented team of researchers and students
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {["Principal Investigator", "Postdoc", "PhD Student", "MS Student"].map(
          (role) => (
            <div
              key={role}
              className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-28 w-28 rounded-full bg-gradient-to-br from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 flex items-center justify-center text-3xl">
                  👤
                </div>
                <div className="space-y-1">
                  <h2 className="font-semibold text-lg">Name Surname</h2>
                  <p className="text-sm text-black/60 dark:text-white/60">{role}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
