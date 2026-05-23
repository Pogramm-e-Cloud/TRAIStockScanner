const { scanAllMarkets } = require("./marketScanner");
const { createAlertsFromMarket } = require("./alerts");

function startTRAI() {
  const marketData = scanAllMarkets();

  const alerts = createAlertsFromMarket({
    stocks: marketData.stocks,
    crypto: marketData.crypto
  });

  return {
    app: "TRAI Stock Scanner",
    status: "RUNNING",
    generatedAt: new Date().toISOString(),
    marketData,
    alerts
  };
}

const result = startTRAI();

console.log("TRAI Controller gestartet");
console.log(JSON.stringify(result, null, 2));

module.exports = {
  startTRAI
};
