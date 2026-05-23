function getFirebaseConfig() {
  return {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID
  };
}

function isFirebaseConfigured() {
  const config = getFirebaseConfig();

  return Boolean(
    config.apiKey &&
    config.authDomain &&
    config.projectId
  );
}

module.exports = {
  getFirebaseConfig,
  isFirebaseConfigured
};
