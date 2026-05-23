const { getTopSignals } = require("./aiScanner");

function getDemoCryptoMarket() {
  return [
    {
      name: "Bitcoin",
      symbol: "BTC",
      trendScore: 82,
      newsScore: 70,
      volumeScore: 78
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      trendScore: 76,
      newsScore: 68,
      volumeScore: 72
    },
    {
      name: "Solana",
      symbol: "SOL",
      trendScore: 35,
      newsScore: 42,
      volumeScore: 38
    },
    {
      name: "XRP",
      symbol: "XRP",
      trendScore: 44,
      newsScore: 45,
      volumeScore: 40
    }
  ];
}

function scanCryptoMarket() {
  const market = getDemoCryptoMarket();
  return getTopSignals(market);
}

module.exports = {
  scanCryptoMarket
};
