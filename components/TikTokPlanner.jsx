import React, { useState } from "react";
import { Loader2 } from "lucide-react";

export default function TikTokPlanner() {
  const [niche, setNiche] = useState("");
  const [trends, setTrends] = useState("");
  const [ideas, setIdeas] = useState("");
  const [loading, setLoading] = useState(false);

  const generateIdeas = async () => {
    setLoading(true);
    setIdeas("");
    const response = await fetch("/api/generate-tiktok-ideas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ niche, trends }),
    });
    const data = await response.json();
    setIdeas(data.ideas);
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto flex flex-col gap-4">
      <h1 className="text-xl font-bold text-center">TikTok Content Planner</h1>

      <input
        className="border border-gray-300 rounded px-3 py-2"
        placeholder="Your content niche (e.g., fashion, fitness)"
        value={niche}
        onChange={(e) => setNiche(e.target.value)}
      />

      <textarea
        className="border border-gray-300 rounded px-3 py-2"
        placeholder="Trending hashtags or sounds (comma-separated)"
        value={trends}
        onChange={(e) => setTrends(e.target.value)}
        rows={4}
      />

      <button
        onClick={generateIdeas}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition disabled:opacity-50"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="animate-spin h-4 w-4" />
            Generating...
          </span>
        ) : (
          "Generate Ideas"
        )}
      </button>

      {ideas && (
        <div className="border border-gray-200 rounded p-4 shadow">
          <h2 className="font-semibold mb-2">Today's Suggestions:</h2>
          <pre className="whitespace-pre-wrap text-sm">{ideas}</pre>
        </div>
      )}
    </div>
  );
}
