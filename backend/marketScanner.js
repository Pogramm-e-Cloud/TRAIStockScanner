const { scanStockMarket } = require("./stockScanner");
const { scanCryptoMarket } = require("./cryptoScanner");

function scanAllMarkets() {
  const stocks = scanStockMarket();
  const crypto = scanCryptoMarket();

  return {
    mode: "ALL_MARKETS",
    stocks,
    crypto,
    generatedAt: new Date().toISOString()
  };
}

module.exports = {
  scanAllMarkets
};
