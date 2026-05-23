import yfinance as yf

class YFinanceFallback:
    def quote(self, symbol):
        ticker = yf.Ticker(symbol)
        hist = ticker.history(period="2d")

        if hist.empty:
            return {"error": "Keine yfinance Daten gefunden."}

        last = hist.iloc[-1]
        previous = hist.iloc[-2] if len(hist) > 1 else last

        return {
            "symbol": symbol,
            "current_price": round(float(last["Close"]), 4),
            "open": round(float(last["Open"]), 4),
            "high": round(float(last["High"]), 4),
            "low": round(float(last["Low"]), 4),
            "previous_close": round(float(previous["Close"]), 4),
            "source": "yfinance_fallback"
        }

yfinance_fallback = YFinanceFallback()
