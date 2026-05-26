const TRAI_ENGINE = {
  calculateMomentum(change24h) {
    if (change24h >= 8) return "EXTREM STARK";
    if (change24h >= 4) return "STARK";
    if (change24h >= 1) return "POSITIV";
    if (change24h <= -8) return "EXTREM SCHWACH";
    if (change24h <= -4) return "SCHWACH";
    if (change24h <= -1) return "NEGATIV";

    return "NEUTRAL";
  },

  calculateRisk(change24h) {
    const volatility = Math.abs(change24h);

    if (volatility >= 10) return "HOCH";
    if (volatility >= 5) return "MITTEL";

    return "NIEDRIG";
  },

  calculateSignal(change24h) {
    if (change24h >= 5) return "LONG";
    if (change24h <= -5) return "SHORT";

    return "NEUTRAL";
  },

  calculateScore(change24h) {
    let score = 50;

    score += change24h * 4;

    if (score > 100) score = 100;
    if (score < 0) score = 0;

    return Math.round(score);
  },

  analyzeCoin(coinName, symbol, change24h) {
    return {
      coin: coinName,
      symbol: symbol,
      change24h: change24h,

      momentum: this.calculateMomentum(change24h),

      risk: this.calculateRisk(change24h),

      signal: this.calculateSignal(change24h),

      score: this.calculateScore(change24h)
    };
  }
};

console.log("TRAI Signal Engine geladen");
