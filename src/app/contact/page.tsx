export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="text-sm text-black/70 dark:text-white/70">
        Lab address, email, social links
      </p>
      <div className="rounded-md border border-black/10 dark:border-white/10 p-4">
        <p>
          McMaster University
          <br /> Department, Building, Room
          <br /> City, Country
        </p>
      </div>
    </section>
  );
}
