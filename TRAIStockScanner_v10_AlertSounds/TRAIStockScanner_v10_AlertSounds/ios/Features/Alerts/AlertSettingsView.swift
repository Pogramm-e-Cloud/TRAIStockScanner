import SwiftUI

struct AlertSettingsView: View {
    @AppStorage("alertSoundEnabled") private var soundEnabled = true
    @AppStorage("alertVibrationEnabled") private var vibrationEnabled = true
    @AppStorage("importantAlertsOnly") private var importantOnly = false

    var body: some View {
        Form {
            Section("Warnungen") {
                Toggle("Ton aktivieren", isOn: $soundEnabled)
                Toggle("Vibration aktivieren", isOn: $vibrationEnabled)
                Toggle("Nur wichtige Warnungen", isOn: $importantOnly)
            }

            Section("Töne") {
                Text("Kaufsignal: Soft Positive Ping")
                Text("Verkaufssignal: Deep Warning Ping")
                Text("Stop-Loss: Strong Risk Alert")
                Text("Breaking News: News Flash Ping")
                Text("Smart Money: AI Signal Chime")
                Text("Derivate Risiko: Risk Derivative Alert")
            }

            Section("Hinweis") {
                Text("Warnungen ersetzen keine eigene Prüfung. Trading und Derivate können zum Totalverlust führen.")
                    .font(.footnote)
            }
        }
        .navigationTitle("Warn-Töne")
    }
}
