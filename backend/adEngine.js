function isAdminMode(query = "") {
  return String(query).includes("admin=1");
}

function shouldShowScannerAd({ scanCount = 0, isAdmin = false, isPremium = false }) {
  if (isAdmin || isPremium) return false;
  return scanCount > 0 && scanCount % 3 === 0;
}

function shouldShowChatAd({ totalMessages = 0, isAdmin = false, isPremium = false }) {
  if (isAdmin || isPremium) return false;
  return totalMessages > 0 && totalMessages % 10 === 0;
}

function shouldShowDerivativeAd({ calculationCount = 0, isAdmin = false, isPremium = false }) {
  if (isAdmin || isPremium) return false;
  return calculationCount === 5 || calculationCount === 10 || calculationCount % 10 === 0;
}

function createSponsoredInsight({ market = "ALL", topic = "Trading" }) {
  return {
    type: "SPONSORED_AI_INSIGHT",
    label: "Anzeige",
    title: "AI Partner Insight",
    market,
    topic,
    message: "Hier kann später eine Google AdSense Anzeige oder Partner Insight erscheinen.",
    safeForAds: true
  };
}

module.exports = {
  isAdminMode,
  shouldShowScannerAd,
  shouldShowChatAd,
  shouldShowDerivativeAd,
  createSponsoredInsight
};
