function analyzeChart(candles = []) {
  if (!Array.isArray(candles) || candles.length < 5) {
    return {
      status: "INSUFFICIENT_DATA",
      message: "Nicht genug Kerzendaten für Chart-KI Analyse.",
      suggestions: []
    };
  }

  const closes = candles.map(c => c.close);
  const highs = candles.map(c => c.high);
  const lows = candles.map(c => c.low);

  const lastClose = closes[closes.length - 1];
  const support = Number(Math.min(...lows.slice(-10)).toFixed(2));
  const resistance = Number(Math.max(...highs.slice(-10)).toFixed(2));

  let trend = "SIDEWAYS";
  if (closes[closes.length - 1] > closes[0]) trend = "UPTREND";
  if (closes[closes.length - 1] < closes[0]) trend = "DOWNTREND";

  const breakout =
    lastClose > resistance ? "BULLISH_BREAKOUT" :
    lastClose < support ? "BEARISH_BREAKDOWN" :
    "NO_BREAKOUT";

  return {
    status: "OK",
    trend,
    support,
    resistance,
    breakout,
    suggestions: [
      { type: "SUPPORT", price: support, message: "Mögliche Unterstützungszone erkannt.", requiresUserApproval: true },
      { type: "RESISTANCE", price: resistance, message: "Möglicher Widerstandsbereich erkannt.", requiresUserApproval: true },
      { type: "TREND", value: trend, message: "Chart-KI Trendvorschlag. Nutzer muss selbst übernehmen.", requiresUserApproval: true }
    ]
  };
}

module.exports = { analyzeChart };
