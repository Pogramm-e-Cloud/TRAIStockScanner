const blockedWords = [
  "idiot",
  "arsch",
  "hurensohn",
  "spast",
  "scamlink",
  "betruglink"
];

function moderateMessage(message = "") {
  const text = String(message).trim();
  const lower = text.toLowerCase();

  if (!text) return { allowed: false, reason: "EMPTY_MESSAGE" };
  if (text.length > 500) return { allowed: false, reason: "MESSAGE_TOO_LONG" };

  const hasBlockedWord = blockedWords.some(word => lower.includes(word));
  if (hasBlockedWord) return { allowed: false, reason: "BLOCKED_LANGUAGE" };

  const cleanedMessage = text.replace(/https?:\/\/\S+/gi, "[Link entfernt]");
  return { allowed: true, cleanedMessage };
}

module.exports = { moderateMessage, blockedWords };
