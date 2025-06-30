export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { niche, trends } = req.body;

  const prompt = `I'm a TikTok creator in the niche of "${niche}". Suggest 3 video ideas based on these trending topics: ${trends}. For each idea, include:
1. A short concept
2. A hook sentence
3. Hashtag suggestions`;

  try {
    const completion = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await completion.json();
    const ideas = data.choices?.[0]?.message?.content || "No ideas generated.";

    res.status(200).json({ ideas });
  } catch (error) {
    console.error("OpenAI Error:", error);
    res.status(500).json({ error: "Failed to generate content ideas." });
  }
}
