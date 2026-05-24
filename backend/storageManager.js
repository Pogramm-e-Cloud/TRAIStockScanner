function saveLocalSetting(key, value) {
  if (typeof localStorage === "undefined") {
    return { saved: false, reason: "LOCAL_STORAGE_NOT_AVAILABLE" };
  }

  localStorage.setItem(`trai_${key}`, JSON.stringify(value));
  return { saved: true };
}

function loadLocalSetting(key, fallback = null) {
  if (typeof localStorage === "undefined") return fallback;

  const raw = localStorage.getItem(`trai_${key}`);
  return raw ? JSON.parse(raw) : fallback;
}

module.exports = { saveLocalSetting, loadLocalSetting };
