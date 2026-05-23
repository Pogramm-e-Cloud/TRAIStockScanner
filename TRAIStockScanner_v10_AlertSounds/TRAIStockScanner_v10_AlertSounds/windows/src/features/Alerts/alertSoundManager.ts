export type TRAIAlertType =
  | "BUY_SIGNAL"
  | "SELL_SIGNAL"
  | "STOP_LOSS"
  | "BREAKING_NEWS"
  | "SMART_MONEY"
  | "DERIVATIVE_RISK";

export const alertSoundMap: Record<TRAIAlertType, string> = {
  BUY_SIGNAL: "soft_positive_ping.wav",
  SELL_SIGNAL: "deep_warning_ping.wav",
  STOP_LOSS: "strong_risk_alert.wav",
  BREAKING_NEWS: "news_flash_ping.wav",
  SMART_MONEY: "ai_signal_chime.wav",
  DERIVATIVE_RISK: "risk_derivative_alert.wav"
};

export interface AlertSoundSettings {
  soundEnabled: boolean;
  importantAlertsOnly: boolean;
  volume: number;
}

export const defaultAlertSoundSettings: AlertSoundSettings = {
  soundEnabled: true,
  importantAlertsOnly: false,
  volume: 0.75
};

export function playAlertSound(
  type: TRAIAlertType,
  settings: AlertSoundSettings = defaultAlertSoundSettings
) {
  if (!settings.soundEnabled) return;

  const file = alertSoundMap[type];
  const audio = new Audio(`/assets/sounds/${file}`);
  audio.volume = settings.volume;
  audio.play().catch(() => {
    console.warn("Alert sound could not be played:", file);
  });
}

export function buildAlertMessage(type: TRAIAlertType, symbol: string, score?: number) {
  const labelMap: Record<TRAIAlertType, string> = {
    BUY_SIGNAL: "Kaufsignal",
    SELL_SIGNAL: "Verkaufssignal",
    STOP_LOSS: "Stop-Loss erreicht",
    BREAKING_NEWS: "Breaking News",
    SMART_MONEY: "Smart Money erkannt",
    DERIVATIVE_RISK: "Derivate Risiko"
  };

  return {
    title: labelMap[type],
    symbol,
    score,
    sound: alertSoundMap[type]
  };
}
