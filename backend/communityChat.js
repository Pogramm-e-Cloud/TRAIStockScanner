const { moderateMessage } = require("./chatModeration");
const { shouldShowChatAd } = require("./adEngine");

const chatState = {
  messages: [],
  totalMessages: 0
};

function sendMessage({ userId, username, message, isAdmin = false, isPremium = false }) {
  const moderation = moderateMessage(message);

  if (!moderation.allowed) {
    return {
      sent: false,
      reason: moderation.reason,
      warning: "Nachricht wurde wegen Sprache/Spam blockiert."
    };
  }

  const chatMessage = {
    id: `msg_${Date.now()}`,
    userId,
    username,
    message: moderation.cleanedMessage,
    createdAt: new Date().toISOString()
  };

  chatState.messages.push(chatMessage);
  chatState.totalMessages += 1;

  return {
    sent: true,
    message: chatMessage,
    showAd: shouldShowChatAd({ totalMessages: chatState.totalMessages, isAdmin, isPremium })
  };
}

function getMessages() {
  return chatState.messages.slice(-50);
}

module.exports = { sendMessage, getMessages };
