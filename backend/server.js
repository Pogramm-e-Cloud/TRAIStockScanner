const { scanStockMarket } = require("./stockScanner");
const { scanCryptoMarket } = require("./cryptoScanner");

function runTRAIScanner() {
  const stockSignals = scanStockMarket();
  const cryptoSignals = scanCryptoMarket();

  return {
    stocks: stockSignals,
    crypto: cryptoSignals,
    lastUpdated: new Date().toISOString()
  };
}

const result = runTRAIScanner();

console.log("TRAI Backend Scanner gestartet");
console.log(JSON.stringify(result, null, 2));

module.exports = {
  runTRAIScanner
};
