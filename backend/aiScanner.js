function calculateSignal({ trendScore, newsScore, volumeScore }) {
  const finalScore = Math.round(
    trendScore * 0.45 +
    newsScore * 0.30 +
    volumeScore * 0.25
  );

  let direction = "WATCH";

  if (finalScore >= 65) {
    direction = "LONG";
  }

  if (finalScore <= 40) {
    direction = "SHORT";
  }

  return {
    direction,
    probability: finalScore,
    reason: "Berechnung aus Trend, News und Volumen"
  };
}

function getTopSignals(items) {
  const analyzed = items.map((item) => ({
    ...item,
    signal: calculateSignal(item)
  }));

  const longs = analyzed
    .filter((item) => item.signal.direction === "LONG")
    .sort((a, b) => b.signal.probability - a.signal.probability)
    .slice(0, 3);

  const shorts = analyzed
    .filter((item) => item.signal.direction === "SHORT")
    .sort((a, b) => a.signal.probability - b.signal.probability)
    .slice(0, 3);

  return {
    topLong: longs,
    topShort: shorts
  };
}

module.exports = {
  calculateSignal,
  getTopSignals
};
 
