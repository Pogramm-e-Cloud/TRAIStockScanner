import React, { useState } from "react";
import { defaultAlertSoundSettings, playAlertSound, TRAIAlertType } from "./alertSoundManager";

const alertTypes: TRAIAlertType[] = [
  "BUY_SIGNAL",
  "SELL_SIGNAL",
  "STOP_LOSS",
  "BREAKING_NEWS",
  "SMART_MONEY",
  "DERIVATIVE_RISK"
];

export function AlertSettingsPanel() {
  const [settings, setSettings] = useState(defaultAlertSoundSettings);

  return (
    <section className="card">
      <h2>Warn-Töne</h2>

      <label>
        <input
          type="checkbox"
          checked={settings.soundEnabled}
          onChange={(event) =>
            setSettings({ ...settings, soundEnabled: event.target.checked })
          }
        />
        Ton aktivieren
      </label>

      <label>
        <input
          type="checkbox"
          checked={settings.importantAlertsOnly}
          onChange={(event) =>
            setSettings({ ...settings, importantAlertsOnly: event.target.checked })
          }
        />
        Nur wichtige Warnungen
      </label>

      <label>
        Lautstärke
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={settings.volume}
          onChange={(event) =>
            setSettings({ ...settings, volume: Number(event.target.value) })
          }
        />
      </label>

      <div className="alert-test-grid">
        {alertTypes.map((type) => (
          <button key={type} onClick={() => playAlertSound(type, settings)}>
            {type} testen
          </button>
        ))}
      </div>

      <p className="risk-note">
        Warnungen ersetzen keine eigene Prüfung. Trading und Derivate können zum Totalverlust führen.
      </p>
    </section>
  );
}
