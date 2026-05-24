const mobileConfig = {
  pwaReady: true,
  androidReady: true,
  iosReady: true,
  touchChart: true,
  largeButtons: true,
  responsiveScanner: true,
  offlineFallback: true
};

function getMobileConfig() {
  return mobileConfig;
}

module.exports = { getMobileConfig };
