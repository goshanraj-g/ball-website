export const metadata = { title: "People" };

export default function PeoplePage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">People</h1>
      <p className="text-sm text-black/70 dark:text-white/70 mb-6">
        Skeleton listing of lab members.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {["Principal Investigator", "Postdoc", "PhD Student", "MS Student"].map(
          (role) => (
            <div
              key={role}
              className="rounded-md border border-black/10 dark:border-white/10 p-4"
            >
              <div className="h-24 w-24 rounded-full bg-black/10 dark:bg-white/10 mb-3" />
              <h2 className="font-medium">Name Surname</h2>
              <p className="text-sm text-black/60 dark:text-white/60">{role}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
