<<<<<<< HEAD:components/TikTokPlanner.jsx
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";
import { Loader2 } from "lucide-react";



export default function TikTokPlanner() {
  const [niche, setNiche] = useState("");
  const [trends, setTrends] = useState("");
  const [ideas, setIdeas] = useState("");
  const [loading, setLoading] = useState(false);

  const generateIdeas = async () => {
    setLoading(true);
    setIdeas("");
    try {
      const response = await fetch("/api/generate-tiktok-ideas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ niche, trends }),
      });

      const data = await response.json();
      setIdeas(data.ideas || "No ideas received.");
    } catch (error) {
      setIdeas("❌ Something went wrong.");
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-blue-50 p-4">
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center text-blue-700">🎬 TikTok Content Planner</h1>
        <Input
          placeholder="Your content niche (e.g., fashion, fitness)"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
        />
        <Textarea
          placeholder="Trending hashtags or sounds (comma-separated)"
          value={trends}
          onChange={(e) => setTrends(e.target.value)}
          rows={4}
        />
        <Button onClick={generateIdeas} disabled={loading} className="w-full">
          {loading ? <Loader2 className="animate-spin h-4 w-4" /> : "✨ Generate Ideas"}
        </Button>

        {ideas && (
          <Card>
            <CardContent>
              <h2 className="font-semibold mb-2 text-blue-800">📌 Today's Suggestions:</h2>
              <pre className="whitespace-pre-wrap text-sm">{ideas}</pre>
              <Button
                className="mt-2"
                onClick={() => {
                  navigator.clipboard.writeText(ideas);
                  alert("✅ Ideas copied to clipboard!");
                }}
              >
                📋 Copy Ideas
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
=======
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";


export default function TikTokPlanner() {
  const [niche, setNiche] = useState("");
  const [trends, setTrends] = useState("");
  const [ideas, setIdeas] = useState("");
  const [loading, setLoading] = useState(false);

  const generateIdeas = async () => {
    setLoading(true);
    setIdeas("");
    try {
      const response = await fetch("/api/generate-tiktok-ideas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ niche, trends }),
      });

      const data = await response.json();
      setIdeas(data.ideas || "No ideas received.");
    } catch (error) {
      setIdeas("❌ Something went wrong.");
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-blue-50 p-4">
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center text-blue-700">🎬 TikTok Content Planner</h1>
        <Input
          placeholder="Your content niche (e.g., fashion, fitness)"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
        />
        <Textarea
          placeholder="Trending hashtags or sounds (comma-separated)"
          value={trends}
          onChange={(e) => setTrends(e.target.value)}
          rows={4}
        />
        <Button onClick={generateIdeas} disabled={loading} className="w-full">
          {loading ? <Loader2 className="animate-spin h-4 w-4" /> : "✨ Generate Ideas"}
        </Button>

        {ideas && (
          <Card>
            <CardContent>
              <h2 className="font-semibold mb-2 text-blue-800">📌 Today's Suggestions:</h2>
              <pre className="whitespace-pre-wrap text-sm">{ideas}</pre>
              <Button
                className="mt-2"
                onClick={() => {
                  navigator.clipboard.writeText(ideas);
                  alert("✅ Ideas copied to clipboard!");
                }}
              >
                📋 Copy Ideas
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
>>>>>>> 512d64654c21983c5a60570e221bf15a31fbcb59:TikTokPlanner.jsx
