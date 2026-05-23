function calculateRisk({ entryPrice, stopPrice, targetPrice, leverage = 1 }) {
  const riskPerUnit = Math.abs(entryPrice - stopPrice);
  const rewardPerUnit = Math.abs(targetPrice - entryPrice);
  const riskRewardRatio = rewardPerUnit / riskPerUnit;

  let riskLevel = "LOW";

  if (leverage > 5) {
    riskLevel = "MEDIUM";
  }

  if (leverage > 10) {
    riskLevel = "HIGH_ONLY_OWN_RISK";
  }

  return {
    entryPrice,
    stopPrice,
    targetPrice,
    leverage,
    riskPerUnit,
    rewardPerUnit,
    riskRewardRatio: Number(riskRewardRatio.toFixed(2)),
    riskLevel
  };
}

module.exports = {
  calculateRisk
};
