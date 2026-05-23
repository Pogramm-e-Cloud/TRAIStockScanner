const { getTopSignals } = require("./aiScanner");

function getDemoStockMarket() {
  return [
    {
      name: "NVIDIA",
      symbol: "NVDA",
      trendScore: 80,
      newsScore: 74,
      volumeScore: 77
    },
    {
      name: "Amazon",
      symbol: "AMZN",
      trendScore: 66,
      newsScore: 58,
      volumeScore: 62
    },
    {
      name: "Tesla",
      symbol: "TSLA",
      trendScore: 34,
      newsScore: 38,
      volumeScore: 36
    },
    {
      name: "Apple",
      symbol: "AAPL",
      trendScore: 55,
      newsScore: 52,
      volumeScore: 50
    }
  ];
}

function scanStockMarket() {
  const market = getDemoStockMarket();
  return getTopSignals(market);
}

module.exports = {
  scanStockMarket
};
