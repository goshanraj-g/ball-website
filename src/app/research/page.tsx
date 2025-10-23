"use client";
import { useState } from "react";

// export const metadata = { title: "Research" };

interface DaysOutRow {
  player: string;
  total_days_out: number;
}

export default function ResearchPage() {
  const [player, setPlayer] = useState<string>("");
  const [result, setResult] = useState<DaysOutRow | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

  try {
  const res = await fetch(`/api/days-out?player=${encodeURIComponent(player)}`);
      if (!res.ok) throw new Error("Player not found");
      const data = await res.json();
      setResult(data[0] || null);
    } catch (err) {
      setError("No data found for that player.");
    } finally {
      setLoading(false);
    }
  };

const cards = [
    { 
      title: "How many days has your favourite player been out for?", 
      desc: "Input a player's name to find out the number of days they've been out due to injury.",
      icon: "🔬",
      content: (
        <form onSubmit={handleSearch} className="space-y-3 pt-3">
          <input
            type="text"
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
            placeholder="Enter player name (e.g., LeBron James)"
            className="w-full p-2 border rounded-lg bg-white/80 text-black placeholder:text-black/50"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Searching..." : "Search"}
          </button>

          {error && <p className="text-red-500">{error}</p>}
          {result && (
            <p className="text-lg font-semibold mt-2">
              {result.player}: <span className="text-blue-600">{result.total_days_out}</span> days out
            </p>
          )}
        </form>
      )
    },
    { title: "Research Area 2", desc: "Short description of this research area.", icon: "📈" },
    { title: "Research Area 3", desc: "Short description of this research area.", icon: "💡" },
  ];

  return (
    <section className="max-w-4xl mx-auto space-y-8 py-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Research</h1>
        <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed">
          Explore our research areas and current projects
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 pt-6">
        {cards.map((item) => (
          <div 
            key={item.title} 
            className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5 hover:border-black/20 dark:hover:border-white/20 transition-colors"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-black/70 dark:text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
              {item.content && item.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}