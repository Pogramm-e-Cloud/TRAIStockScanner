function analyzeNewsSentiment(newsItems = []) {
  let score = 50;

  const positiveWords = [
    "beats",
    "growth",
    "upgrade",
    "profit",
    "bullish",
    "partnership",
    "record",
    "strong"
  ];

  const negativeWords = [
    "misses",
    "lawsuit",
    "downgrade",
    "loss",
    "bearish",
    "investigation",
    "weak",
    "sell"
  ];

  newsItems.forEach((item) => {
    const text = `${item.title || ""} ${item.description || ""}`.toLowerCase();

    positiveWords.forEach((word) => {
      if (text.includes(word)) score += 5;
    });

    negativeWords.forEach((word) => {
      if (text.includes(word)) score -= 5;
    });
  });

  score = Math.max(0, Math.min(100, score));

  return {
    newsScore: score,
    sentiment:
      score >= 65 ? "POSITIVE" :
      score <= 40 ? "NEGATIVE" :
      "NEUTRAL"
  };
}

module.exports = {
  analyzeNewsSentiment
};
