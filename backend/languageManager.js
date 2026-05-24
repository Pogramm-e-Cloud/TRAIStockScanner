const supportedLanguages = {
  de: "Deutsch",
  en: "English",
  tr: "Türkçe",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  sq: "Shqip",
  ar: "العربية"
};

function getSupportedLanguages() {
  return supportedLanguages;
}

function resolveLanguage(language = "de") {
  return supportedLanguages[language] ? language : "de";
}

module.exports = { getSupportedLanguages, resolveLanguage };
