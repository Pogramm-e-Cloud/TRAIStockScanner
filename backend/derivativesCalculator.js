const { calculateRisk } = require("./riskManager");

function calculateDerivativeTrade({
  stockPrice,
  derivativePrice,
  stopStockPrice,
  targetStockPrice,
  leverage = 1,
  currency = "EUR"
}) {
  const stockMoveToStop = Math.abs(stockPrice - stopStockPrice);
  const stockMoveToTarget = Math.abs(targetStockPrice - stockPrice);

  const stopDerivativePrice = derivativePrice - (stockMoveToStop / stockPrice) * derivativePrice * leverage;
  const targetDerivativePrice = derivativePrice + (stockMoveToTarget / stockPrice) * derivativePrice * leverage;

  const risk = calculateRisk({
    entryPrice: derivativePrice,
    stopPrice: Number(stopDerivativePrice.toFixed(4)),
    targetPrice: Number(targetDerivativePrice.toFixed(4)),
    leverage
  });

  return {
    stockPrice,
    derivativePrice,
    stopStockPrice,
    targetStockPrice,
    stopDerivativePrice: Number(stopDerivativePrice.toFixed(4)),
    targetDerivativePrice: Number(targetDerivativePrice.toFixed(4)),
    leverage,
    currency,
    risk
  };
}

module.exports = {
  calculateDerivativeTrade
};
