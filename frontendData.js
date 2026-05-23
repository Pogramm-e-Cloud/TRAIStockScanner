const traiDemoData = {
  app: "TRAI Stock Scanner",
  status: "DEMO",
  stocks: {
    topLong: [
      { name: "NVIDIA", symbol: "NVDA", probability: 77 },
      { name: "Amazon", symbol: "AMZN", probability: 63 }
    ],
    topShort: [
      { name: "Tesla", symbol: "TSLA", probability: 36 }
    ]
  },
  crypto: {
    topLong: [
      { name: "Bitcoin", symbol: "BTC", probability: 77 },
      { name: "Ethereum", symbol: "ETH", probability: 72 }
    ],
    topShort: [
      { name: "Solana", symbol: "SOL", probability: 38 }
    ]
  }
};

console.log("TRAI Demo Daten geladen", traiDemoData);
