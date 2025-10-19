export const metadata = { title: "Join Us" };

export default function JoinUsPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-8 py-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Join Us</h1>
        <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed">
          Interested in joining our lab? We're always looking for passionate researchers and students
        </p>
      </div>
      
      <div className="space-y-6 pt-6">
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
          <h2 className="text-xl font-semibold mb-3">Open Positions</h2>
          <p className="text-black/70 dark:text-white/70 leading-relaxed mb-4">
            We currently have openings for PhD students, postdocs, and research assistants.
          </p>
          <ul className="space-y-2 text-black/70 dark:text-white/70">
            <li>• PhD Student positions</li>
            <li>• Postdoctoral Fellow positions</li>
            <li>• Research Assistant opportunities</li>
          </ul>
        </div>
        
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
          <h2 className="text-xl font-semibold mb-3">How to Apply</h2>
          <p className="text-black/70 dark:text-white/70 leading-relaxed">
            Send your CV, research statement, and relevant publications to: <br />
            <span className="font-mono text-sm">contact@example.com</span>
          </p>
        </div>
        
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
          <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
          <p className="text-black/70 dark:text-white/70 leading-relaxed">
            McMaster University<br />
            Department, Building, Room<br />
            Hamilton, Ontario, Canada
          </p>
        </div>
      </div>
    </section>
  );
}
