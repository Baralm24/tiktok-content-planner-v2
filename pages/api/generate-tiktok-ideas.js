export default async function handler(req, res) {
  const { niche, trends } = req.body;

  console.log("🧪 Mock API HIT:", { niche, trends });

  if (!niche || !trends) {
    return res.status(400).json({ error: "Missing niche or trends" });
  }

  // Simulated AI output
  const ideas = `
🎯 Niche: ${niche}
🔥 Trends: ${trends}

💡 Idea 1: Create a skit about "${niche}" using a trending sound from ${trends}
💡 Idea 2: Show a transformation or before-after video related to "${niche}" with hashtags like ${trends}
💡 Idea 3: Give quick tips or hacks in "${niche}" using the most popular audio under ${trends}
`;

  res.status(200).json({ ideas });
}
