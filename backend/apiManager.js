const apiManager = {
  stocks: {
    finnhub: process.env.FINNHUB_API_KEY,
    alphaVantage: process.env.ALPHA_VANTAGE_API_KEY
  },
  crypto: {
    coingecko: process.env.COINGECKO_API_KEY,
    binance: process.env.BINANCE_API_KEY
  }
};

module.exports = apiManager;
