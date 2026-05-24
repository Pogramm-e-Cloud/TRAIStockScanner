const chartTools = [
  { id: "trendline", label: "Trendlinie", mobile: true },
  { id: "horizontalLine", label: "Horizontale Linie", mobile: true },
  { id: "verticalLine", label: "Vertikale Linie", mobile: true },
  { id: "support", label: "Support", mobile: true },
  { id: "resistance", label: "Resistance", mobile: true },
  { id: "zone", label: "Zone markieren", mobile: true },
  { id: "note", label: "Notiz", mobile: true },
  { id: "measure", label: "Messung", mobile: true },
  { id: "riskReward", label: "Risiko Tool", mobile: true },
  { id: "undo", label: "Rückgängig", mobile: true },
  { id: "redo", label: "Wiederholen", mobile: true },
  { id: "delete", label: "Löschen", mobile: true },
  { id: "save", label: "Chart speichern", mobile: true },
  { id: "print", label: "Chart drucken", mobile: false },
  { id: "fullscreen", label: "Vollbild", mobile: true }
];

function getChartTools() {
  return chartTools;
}

function getMobileChartTools() {
  return chartTools.filter(tool => tool.mobile);
}

module.exports = { getChartTools, getMobileChartTools };
