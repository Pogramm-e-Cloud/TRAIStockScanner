function createAlert(signal) {
  const probability = signal?.signal?.probability || 0;
  const direction = signal?.signal?.direction || "WATCH";

  let level = "INFO";
  let sound = "soft_positive_ping";

  if (direction === "LONG" && probability >= 70) {
    level = "BUY_SIGNAL";
    sound = "soft_positive_ping";
  }

  if (direction === "SHORT" && probability <= 40) {
    level = "SELL_SIGNAL";
    sound = "deep_warning_ping";
  }

  if (probability >= 85 || probability <= 25) {
    level = "HIGH_PRIORITY";
    sound = "strong_risk_alert";
  }

  return {
    symbol: signal.symbol,
    name: signal.name,
    direction,
    probability,
    level,
    sound,
    message: `${signal.name} (${signal.symbol}) zeigt ein ${direction} Signal mit ${probability}% Wahrscheinlichkeit.`
  };
}

function createAlertsFromMarket(scanResult) {
  const alerts = [];

  const stockLong = scanResult?.stocks?.topLong || [];
  const stockShort = scanResult?.stocks?.topShort || [];
  const cryptoLong = scanResult?.crypto?.topLong || [];
  const cryptoShort = scanResult?.crypto?.topShort || [];

  [...stockLong, ...stockShort, ...cryptoLong, ...cryptoShort].forEach((signal) => {
    alerts.push(createAlert(signal));
  });

  return alerts;
}

module.exports = {
  createAlert,
  createAlertsFromMarket
};
