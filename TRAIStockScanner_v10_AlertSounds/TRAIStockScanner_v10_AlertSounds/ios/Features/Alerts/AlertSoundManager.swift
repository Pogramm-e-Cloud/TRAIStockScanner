import Foundation
import AVFoundation
import AudioToolbox

enum TRAIAlertType: String, Codable {
    case buySignal = "BUY_SIGNAL"
    case sellSignal = "SELL_SIGNAL"
    case stopLoss = "STOP_LOSS"
    case breakingNews = "BREAKING_NEWS"
    case smartMoney = "SMART_MONEY"
    case derivativeRisk = "DERIVATIVE_RISK"
}

final class AlertSoundManager {
    static let shared = AlertSoundManager()
    private var player: AVAudioPlayer?

    var soundEnabled: Bool = true
    var vibrationEnabled: Bool = true

    func soundName(for type: TRAIAlertType) -> String {
        switch type {
        case .buySignal:
            return "soft_positive_ping"
        case .sellSignal:
            return "deep_warning_ping"
        case .stopLoss:
            return "strong_risk_alert"
        case .breakingNews:
            return "news_flash_ping"
        case .smartMoney:
            return "ai_signal_chime"
        case .derivativeRisk:
            return "risk_derivative_alert"
        }
    }

    func play(type: TRAIAlertType) {
        if vibrationEnabled {
            AudioServicesPlaySystemSound(kSystemSoundID_Vibrate)
        }

        guard soundEnabled else { return }

        let name = soundName(for: type)

        guard let url = Bundle.main.url(forResource: name, withExtension: "wav") else {
            AudioServicesPlaySystemSound(1007)
            return
        }

        do {
            player = try AVAudioPlayer(contentsOf: url)
            player?.volume = 0.75
            player?.play()
        } catch {
            AudioServicesPlaySystemSound(1007)
        }
    }
}
