from enum import Enum

class AlertType(str, Enum):
    BUY_SIGNAL = "BUY_SIGNAL"
    SELL_SIGNAL = "SELL_SIGNAL"
    STOP_LOSS = "STOP_LOSS"
    BREAKING_NEWS = "BREAKING_NEWS"
    SMART_MONEY = "SMART_MONEY"
    DERIVATIVE_RISK = "DERIVATIVE_RISK"

ALERT_SOUND_MAP = {
    AlertType.BUY_SIGNAL: {
        "title": "Kaufsignal",
        "sound": "soft_positive_ping",
        "vibration": "light",
        "priority": "normal"
    },
    AlertType.SELL_SIGNAL: {
        "title": "Verkaufssignal",
        "sound": "deep_warning_ping",
        "vibration": "medium",
        "priority": "normal"
    },
    AlertType.STOP_LOSS: {
        "title": "Stop-Loss erreicht",
        "sound": "strong_risk_alert",
        "vibration": "strong",
        "priority": "high"
    },
    AlertType.BREAKING_NEWS: {
        "title": "Breaking News",
        "sound": "news_flash_ping",
        "vibration": "medium",
        "priority": "high"
    },
    AlertType.SMART_MONEY: {
        "title": "Smart Money erkannt",
        "sound": "ai_signal_chime",
        "vibration": "light",
        "priority": "normal"
    },
    AlertType.DERIVATIVE_RISK: {
        "title": "Derivate Risiko",
        "sound": "risk_derivative_alert",
        "vibration": "strong",
        "priority": "high"
    }
}

def build_alert_payload(alert_type: AlertType, symbol: str, message: str, score: float | None = None):
    rule = ALERT_SOUND_MAP[alert_type]
    return {
        "type": alert_type,
        "symbol": symbol.upper(),
        "title": rule["title"],
        "message": message,
        "score": score,
        "sound": rule["sound"],
        "vibration": rule["vibration"],
        "priority": rule["priority"],
        "user_controls": {
            "can_disable_sound": True,
            "can_disable_vibration": True,
            "can_change_sound": True
        }
    }
